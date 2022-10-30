DROP PROCEDURE IF EXISTS backupDataSmaptorss;

DELIMITER $$
CREATE PROCEDURE backupDataSmaptorss()
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