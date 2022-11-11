DROP PROCEDURE IF EXISTS BackupDataSmaptorss;
--#
DELIMITER $$
CREATE PROCEDURE BackupDataSmaptorss()
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

END$$
DELIMITER ;

--#
/*https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html*/

/*for profile*/

DROP PROCEDURE IF EXISTS Get_RssRecord_Profile;
DELIMITER $$
CREATE PROCEDURE Get_RssRecord_Profile(IN searchAll TEXT, IN iuserid Varchar(20), IN admin Boolean, IN lim INT, IN pageNumber INT, OUT totalposts INT)
BEGIN
    DECLARE offsetVal INT;
    SET offsetVal = (lim * (pageNumber - 1));
    if (!STRCMP(searchAll,"") = 0) then
        SELECT COUNT(*) INTO  totalposts
        FROM smaptorss WHERE (
        MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
        AGAINST( searchAll IN NATURAL LANGUAGE MODE ) or urls LIKE CONCAT('%', searchAll, '%') or emails LIKE CONCAT('%', searchAll, '%')
        ) and (userid=iuserid or admin IS TRUE);
        
        SELECT * 
        FROM smaptorss WHERE (
        MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
        AGAINST( searchAll IN NATURAL LANGUAGE MODE ) or urls LIKE CONCAT('%', searchAll, '%') or emails LIKE CONCAT('%', searchAll, '%')
        ) and (userid=iuserid or admin IS TRUE) 
        ORDER BY updated ASC LIMIT lim  OFFSET offsetVal;

    else 
        SELECT COUNT(*) INTO totalposts 
        FROM smaptorss WHERE  userid=iuserid or admin IS TRUE;

        SELECT * 
        FROM  smaptorss WHERE userid=iuserid or admin IS TRUE 
        ORDER BY updated ASC LIMIT lim  OFFSET offsetVal;
    end if;
END$$
DELIMITER ;

--#
/* Tool form load*/
DROP PROCEDURE IF EXISTS Get_RssForm_load;
DELIMITER $$
CREATE PROCEDURE Get_RssForm_load(IN irssid Varchar(20), IN iuserid Varchar(20), IN admin Boolean)
BEGIN
    SELECT * FROM  
    smaptorss WHERE rssid=irssid AND (userid=iuserid or admin IS TRUE);
END$$
DELIMITER ;

--#
/*Update Rss table */
DROP PROCEDURE IF EXISTS Upload_rss_InfoData;
DELIMITER $$
CREATE PROCEDURE Upload_rss_InfoData(IN irssid Varchar(20), IN iuserid Varchar(20), IN iemails Varchar(100), IN iurls Varchar(200),
                                     IN iincluded TEXT, IN iexcluded TEXT, IN iremarks TEXT, IN idirectorypath Varchar(200),
                                     IN ilanguage char(10), IN ifrequency INT, IN indtype char(5), IN updateData Boolean)
BEGIN
    if (updateData) then
    	/* Update Data in smaptorss */
        UPDATE smaptorss 
        SET userid=iuserid,
            emails=iemails,
            urls=iurls,
            included=iincluded,
            excluded=iexcluded,
            remarks=iremarks,
            language=ilanguage,
            frequency=ifrequency,
            ndtype=indtype,
            updated = DATE_ADD( CURRENT_TIMESTAMP(), INTERVAL IF(ifrequency != 0 , 1400/ifrequency, 5256000) MINUTE )
        WHERE rssid=irssid;	
    else 
	    /* Insert the data into smaptorss*/
	    INSERT INTO 
        smaptorss( rssid, userid, emails, urls, included, excluded, remarks, directorypath, language, frequency, ndtype)
        VALUES( irssid, iuserid, iemails, iurls, iincluded, iexcluded, iremarks, idirectorypath, ilanguage, ifrequency, indtype);
    end if;

END$$
DELIMITER ;

--#
/* Delete from Rss table*/
DROP PROCEDURE IF EXISTS Delete_ByRssId;
DELIMITER $$
CREATE PROCEDURE Delete_ByRssId(IN irssid Varchar(20))
BEGIN
    DELETE FROM smaptorss 
    WHERE rssid=irssid;
END$$
DELIMITER ;

--#

/* load Drop Down Data for Rss table*/
DROP PROCEDURE IF EXISTS Get_dropDown_Details;
DELIMITER $$
CREATE PROCEDURE Get_dropDown_Details(IN iname Varchar(50))
BEGIN
    SELECT * FROM  dropDownsPool
    WHERE name=iname;
END$$
DELIMITER ;

--#

DROP PROCEDURE IF EXISTS Upload_dropDown_Details;
DELIMITER $$
CREATE PROCEDURE Upload_dropDown_Details(IN iname Varchar(20), IN ikey Varchar(20), IN ivalue Varchar(100), IN updateData Boolean)
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
END$$
DELIMITER ;

