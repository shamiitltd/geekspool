const fs = require('fs');
const axios = require('axios').default;
const cheerio = require('cheerio');
const GetSitemapLinks = require("get-sitemap-links").default;
const { siteTitle, siteUrl } = require('../static/constants');
require('dotenv').config();
const { mysql } = require('../config/database');
//const {
//    responseMsgRss
//} = require('./nodemailer');

function headerRss(generatorurl, sitetitle, siteurl, sitemapFileName, language) {
    return `<rss xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:content="http://purl.org/rss/1.0/modules/content/"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
    <channel>
        <title>
            <![CDATA[ ${sitetitle} ]]>
        </title>
        <description>
            <![CDATA[ ${sitetitle} ]]>
        </description>
        <link>${generatorurl}</link>
        <image>
            <url>${siteurl}/favicon.ico</url>
            <title>${sitetitle}</title>
            <link>${generatorurl}</link>
        </image>
        <generator>${siteurl}</generator>
        <lastBuildDate>${new Date().toGMTString()}</lastBuildDate>
        <atom:link href="${siteurl}/feeds/${sitemapFileName}.xml" rel="self" type="application/rss+xml"/>
        <language>
            <![CDATA[ ${language} ]]>
        </language>
`;
}

function footerRss() {
    return `</channel>
</rss>`;
}

function addItem(title, url, alnum, website) {
    return `
        <item>
            <title>
                <![CDATA[ ${title} ]]>
            </title>
            <link>${url}</link>
            <guid isPermaLink="false">${alnum}</guid>
            <dc:creator>
                <![CDATA[ ${website} ]]>
            </dc:creator>
        </item>`;
}
async function getLinksFromURL(url) {
    try {
        let links = [];
        let httpResponse = await axios.get(url);
        let $ = cheerio.load(httpResponse.data);
        let linkObjects = $('a'); // get all hyperlinks
        linkObjects.each((index, element) => {
            let surl = $(element).attr('href'); // get the href attribute
            if (surl && !surl.match("http")) {
                let domain = (new URL(url));
                domain = domain.protocol + "//" + domain.hostname;
                surl = domain + surl;
            }
            links.push({
                text: $(element).text().trim().replace(/^.*\/\/[^\/]+/, ''), // get the text
                href: surl
            });
        });
        return links;
    } catch (e) {
        // console.log( e )
    }
}

async function makeArrRecordUniqueTxtHref(siteArrOld) {
    let tempObj = {};
    await siteArrOld.forEach((site) => tempObj[site.href] = site.text);
    let siteArrNew = [];
    Object.keys(tempObj).forEach(href =>
        siteArrNew.push({
            "text": tempObj[href],
            "href": href
        })
    );
    return siteArrNew;
}


async function sitemapUrlsExtractor(smapUrl, includedWords, excludedWords) {
    try {
        let urlRegex = /(https?:\/\/[^ \]\[\{\}\>\<]*)/; //Filtering the urls must for xml
        const htmlLinks = await getLinksFromURL(smapUrl);
        const xmlLinks = await GetSitemapLinks(smapUrl);
        let links = [];
        for (let i = 0; i < xmlLinks.length; i++) {
            let url = xmlLinks[i].match(urlRegex)[0];
            links.push({
                text: url.trim().replace(/^.*\/\/[^\/]+/, ''), // get the text
                href: url.toLocaleLowerCase(), // get the href attribute
            });
        }
        links = links.concat(htmlLinks);
        links = await makeArrRecordUniqueTxtHref(links);
        htmlLinks.length = 0;
        xmlLinks.length = 0;
        let filteredLinks = [];
        if (includedWords.length == 0) {
            filteredLinks = filteredLinks.concat(links);
        } else {
            for (let i = 0; i < links.length; i++) {
                if (links[i].href && includedWords.some(v => links[i].href.includes(v))) {
                    // There's at least one
                    links[i].href = links[i].href.toLocaleLowerCase();
                    filteredLinks.push(links[i]);
                }
            }
        }
        links.length = 0;
        let aftrExcludLinks = [];
        if (excludedWords.length == 0) {
            aftrExcludLinks = aftrExcludLinks.concat(filteredLinks);
        } else {
            for (let i = 0; i < filteredLinks.length; i++) {
                if (filteredLinks[i].href && !excludedWords.some(v => filteredLinks[i].href.includes(v))) {
                    filteredLinks[i].href = filteredLinks[i].href.toLocaleLowerCase();
                    aftrExcludLinks.push(filteredLinks[i]);
                }
            }
        }
        filteredLinks.length = 0;
        return aftrExcludLinks;
    } catch (e) {
        // console.log( e );
    }
}

async function finalRssGeneration(sitemapFileName, languageCode, smapUrls, included, excluded, mailObj) { //array of sitmap urls, included and excluded words
    mailObj["countUrls"] = "";
    if (excluded.length)
        mailObj["countUrls"] = "Urls, Excluded: " + excluded.join(", ");
    let excludeFix = ['script:', '&', ' ', '.ico']
    let allUrls = [];
    let str = "";
    let arr = {
        sitetitle: siteTitle, //Fixed for one site
        siteurl: siteUrl, //home page url
        generatorurl: `${siteUrl}/rss/new`, //domain url
    }
    excluded = excluded.concat(excludeFix);
    for (let i = 0; i < smapUrls.length; i++) {
        let urls = await sitemapUrlsExtractor(smapUrls[i], included, excluded);
        allUrls = allUrls.concat(urls);
    }
    // console.log( allUrls.length );
    let validLength = 0;
    str += headerRss(arr.generatorurl, arr.sitetitle, arr.siteurl, sitemapFileName, languageCode); //some input from UI
    for (let i = 0; i < allUrls.length; i++) {
        if (allUrls[i] && allUrls[i].text && allUrls[i].href) {
            validLength++;
            str += addItem(allUrls[i].text, allUrls[i].href, new Date().getTime() + i, arr.generatorurl);
        }
    }
    str += footerRss();
    let dir = `public` + mailObj.path;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }
    fs.writeFile(`${dir + sitemapFileName}.xml`, str, async function (err) {
        if (err) {
            // console.log( err );
            return 0;
        };
        // console.log( validLength );
        mailObj.tableName = 'smaptorss';
        mailObj.rsslength = validLength;
        if (included.length)
            mailObj["countUrls"] = "Urls, Includes: " + included.join(", ") + " " + mailObj["countUrls"];
        mailObj["countUrls"] = "Total: " + validLength + " " + mailObj["countUrls"];
        //responseMsgRss(mailObj);
        let queryStr = `CALL Upload_Rss_recordsto_update('${mailObj.rssid}', ${mailObj.frequency}, ${validLength});`;
        mysql.query(queryStr, async (cerr, cresults, cfields) => {
            if (cerr) {
                //console.log("Not connected !!! " + cerr + mailObj);
                return;
            }
            //console.log( 'The Inserted in table is: \n', cresults, cfields );
        });
        return validLength;
    });
}

module.exports = {
    finalRssGeneration
};