CREATE PROCEDURE IF NOT EXISTS BackupDataSmaptorss()
BEGIN
	/* All updated Data in smaptorss is transfer smaptorss_logs */
	UPDATE smaptorss_logs
	INNER JOIN smaptorss 
	ON smaptorss.rssid = smaptorss_logs.rssid
    SET
        smaptorss_logs.userid = smaptorss.userid,
        smaptorss_logs.emails = smaptorss.emails,
        smaptorss_logs.urls = smaptorss.urls,
        smaptorss_logs.included = smaptorss.included,
        smaptorss_logs.excluded = smaptorss.excluded,
        smaptorss_logs.remarks = smaptorss.remarks,
        smaptorss_logs.directorypath = smaptorss.directorypath,
        smaptorss_logs.language = smaptorss.language,
        smaptorss_logs.frequency = smaptorss.frequency,
        smaptorss_logs.rsslength = smaptorss.rsslength,
        smaptorss_logs.ndtype = smaptorss.ndtype,
        smaptorss_logs.updated = smaptorss.updated;

	/* All new Data in smaptorss is transfer smaptorss_logs*/
	INSERT INTO smaptorss_logs 
	SELECT smaptorss.*
    FROM smaptorss LEFT JOIN smaptorss_logs 
	ON smaptorss.rssid = smaptorss_logs.rssid
	WHERE smaptorss_logs.rssid IS NULL;

END;

--#
/*https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html*/

/*for profile*/

CREATE PROCEDURE IF NOT EXISTS Get_RssRecord_Profile(IN searchAll TEXT, IN iuserid char(30), IN lim INT, IN pageNumber INT)
BEGIN
    DECLARE offsetVal INT;
    SET offsetVal = (lim * (pageNumber - 1));
    if (!STRCMP(searchAll,"") = 0) then
        SELECT COUNT(*) as totalposts
        FROM smaptorss WHERE (
        MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
        AGAINST( searchAll IN NATURAL LANGUAGE MODE ) or urls LIKE CONCAT('%', searchAll, '%') or emails LIKE CONCAT('%', searchAll, '%')
        ) and (userid=iuserid or (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1);
        
        SELECT * 
        FROM smaptorss WHERE (
        MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
        AGAINST( searchAll IN NATURAL LANGUAGE MODE ) or urls LIKE CONCAT('%', searchAll, '%') or emails LIKE CONCAT('%', searchAll, '%')
        ) and (userid=iuserid or (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1) 
        ORDER BY updated ASC LIMIT lim  OFFSET offsetVal;

    else 
        SELECT COUNT(*) as totalposts 
        FROM smaptorss WHERE  userid=iuserid or (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1;

        SELECT * 
        FROM  smaptorss WHERE userid=iuserid or (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1 
        ORDER BY updated ASC LIMIT lim  OFFSET offsetVal;
    end if;
END;

--#
/* Tool form load*/
CREATE PROCEDURE IF NOT EXISTS Get_RssForm_load(IN irssid Varchar(50), IN iuserid char(30))
BEGIN
    SELECT * FROM  
    smaptorss WHERE rssid=irssid AND (userid=iuserid or (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1);
END;

--#
/*Update Rss table */
CREATE PROCEDURE IF NOT EXISTS Upload_rss_InfoData(IN irssid Varchar(50), IN iuserid char(30), IN iemails TEXT, IN iurls TEXT,
                                     IN iincluded TEXT, IN iexcluded TEXT, IN iremarks TEXT, IN idirectorypath Varchar(200),
                                     IN ilanguage Varchar(10), IN ifrequency INT, IN indtype char(10), IN updateData Boolean)
BEGIN
    if (updateData) then
    	/* Update Data in smaptorss */
        UPDATE smaptorss 
        SET emails=iemails,
            urls=iurls,
            included=iincluded,
            excluded=iexcluded,
            remarks=iremarks,
            language=ilanguage,
            frequency=ifrequency,
            ndtype=indtype,
            updated = DATE_ADD( CURRENT_TIMESTAMP(), INTERVAL IF(ifrequency != 0 , 1400/ifrequency, 5256000) MINUTE )
        WHERE rssid=irssid AND (userid=iuserid OR (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1);
    else 
	    /* Insert the data into smaptorss*/
	    INSERT INTO 
        smaptorss( rssid, userid, emails, urls, included, excluded, remarks, directorypath, language, frequency, ndtype)
        VALUES( irssid, iuserid, iemails, iurls, iincluded, iexcluded, iremarks, idirectorypath, ilanguage, ifrequency, indtype);
    end if;

END;

--#
/* Delete from Rss table*/

CREATE PROCEDURE IF NOT EXISTS Delete_ByRssId(IN irssid Varchar(50), IN iuserid char(30))
BEGIN
    DELETE FROM smaptorss 
    WHERE rssid=irssid AND (userid=iuserid OR (SELECT COUNT(*) FROM `userlogin` WHERE id=iuserid AND `role`='admin')=1);
END;

--#

/* load Drop Down Data for Rss table*/
CREATE PROCEDURE IF NOT EXISTS Get_dropDown_Details(IN iname Varchar(50))
BEGIN
    SELECT * FROM  dropDownsPool
    WHERE name=iname;
END;

--#


CREATE PROCEDURE IF NOT EXISTS Upload_dropDown_Details(IN iname Varchar(50), IN ikey LONGTEXT, IN ivalue LONGTEXT, IN updateData Boolean)
BEGIN
    if (updateData) then
    	/* Update Data in dropDownsPool */
        UPDATE dropDownsPool 
        SET `key`=ikey,
            `value`=ivalue,
            updated=CURRENT_TIMESTAMP()
        WHERE name=iname;	
    else 
	    /* Insert the data into dropDownsPool*/
	    INSERT INTO 
        dropDownsPool( name, `key`, `value`)
        VALUES( iname, ikey, ivalue);
    end if;
END;

