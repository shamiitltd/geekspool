DROP PROCEDURE IF EXISTS BackupDataSmaptorss;
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
DELIMITER;

/*https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html*/

/*for profile*/

DROP PROCEDURE IF EXISTS Get_RssRecord_Profile;
DELIMITER $$
CREATE PROCEDURE Get_RssRecord_Profile(IN searchAll TEXT, IN userid Varchar(20), IN admin Boolean, IN lim INT, IN pageNumber INT, OUT totalposts INT)
BEGIN
    DECLARE totalposts INT;
    if (!STRCMP(searchAll,"") = 0) then
        SELECT COUNT(*) INTO  totalposts
        FROM smaptorss WHERE (
        MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
        AGAINST( searchAll IN NATURAL LANGUAGE MODE ) or urls LIKE CONCAT('%', searchAll, '%') or emails LIKE CONCAT('%', searchAll, '%')
        ) and (userid=userid or admin IS TRUE);
        
        SELECT * 
        FROM smaptorss WHERE (
        MATCH( rssid, userid, emails, urls, included, excluded, remarks ) 
        AGAINST( searchAll IN NATURAL LANGUAGE MODE ) or urls LIKE CONCAT('%', searchAll, '%') or emails LIKE CONCAT('%', searchAll, '%')
        ) and (userid=${req.user.id} or ${req.admin} IS TRUE) 
        ORDER BY updated ASC LIMIT lim  OFFSET (lim * (pageNumber - 1));

    else 
        SELECT COUNT(*) INTO totalposts 
        FROM smaptorss WHERE  userid=userid or admin IS TRUE;

        SELECT * FROM  
        smaptorss WHERE userid=userid or admin IS TRUE 
        ORDER BY updated ASC 
        LIMIT lim  OFFSET (lim * (pageNumber - 1));
    end if;
END$$
DELIMITER;

/* Tool form load*/
DROP PROCEDURE IF EXISTS Get_RssForm_load;
DELIMITER $$
CREATE PROCEDURE Get_RssForm_load(IN rssid Varchar(20), IN userid Varchar(20), IN admin Boolean)
BEGIN
    SELECT * FROM  
    smaptorss WHERE rssid=rssid AND (userid=userid or admin IS TRUE);
END$$
DELIMITER;

/*Update Rss table */
DROP PROCEDURE IF EXISTS Upload_rss_InfoData;
DELIMITER $$
CREATE PROCEDURE Upload_rss_InfoData(IN rssid Varchar(20), IN userid Varchar(20), IN emails Varchar(100), IN urls Varchar(200),
                                     IN included TEXT, IN excluded TEXT, IN remarks TEXT, IN directorypath Varchar(200),
                                     IN language char(10), IN frequency INT, IN ndtype char(5), IN updateData Boolean)
BEGIN
    if (updateData) then
    	/* Update Data in smaptorss */
        UPDATE smaptorss 
        SET userid=userid,
            emails=emails,
            urls=urls,
            included=included,
            excluded=excluded,
            remarks=remarks,
            language=language,
            frequency=frequency,
            ndtype=ndtype,
            updated = DATE_ADD( CURRENT_TIMESTAMP(), INTERVAL IF(frequency != 0 , 1400/frequency, 5256000) MINUTE )
        WHERE rssid=rssid;	
    else 
	    /* Insert the data into smaptorss*/
	    INSERT INTO 
        smaptorss( rssid, userid, emails, urls, included, excluded, remarks, directorypath, language, frequency, ndtype)
        VALUES( rssid, userid, emails, urls, included, excluded, remarks, directorypath, language, frequency, ndtype);
    end if;

END$$
DELIMITER;

/* Delete from Rss table*/
DROP PROCEDURE IF EXISTS Delete_ByRssId;
DELIMITER $$
CREATE PROCEDURE Delete_ByRssId(IN rssid Varchar(20))
BEGIN
    DELETE FROM smaptorss 
    WHERE rssid=rssid;
END$$
DELIMITER;


/* load Drop Down Data for Rss table*/
DROP PROCEDURE IF EXISTS Get_dropDown_Details;
DELIMITER $$
CREATE PROCEDURE Get_dropDown_Details(IN name Varchar(50))
BEGIN
    SELECT * FROM  dropDownsPool
    WHERE name=name;
END$$
DELIMITER;

DROP PROCEDURE IF EXISTS Upload_dropDown_Details;
DELIMITER $$
CREATE PROCEDURE Upload_dropDown_Details(IN name Varchar(20), IN key Varchar(20), IN value Varchar(100), IN updateData Boolean)
BEGIN
    if (updateData) then
    	/* Update Data in dropDownsPool */
        UPDATE dropDownsPool 
        SET key=key,
            value=value,
            updated=CURRENT_TIMESTAMP()
        WHERE name=name;	
    else 
	    /* Insert the data into dropDownsPool*/
	    INSERT INTO 
        dropDownsPool( name, key, value)
        VALUES( name, key, value);
    end if;
END$$
DELIMITER;
