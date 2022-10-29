SHOW PROCEDURE STATUS;
show create procedure backupDataSmaptorss;
SHOW PROCEDURE CODE backupDataSmaptorss;
SHOW CREATE TABLE smaptorss_logs;//then select options full text and then click go

DELIMITER &&
    CREATE PROCEDURE get_student(IN var1 INT)
BEGIN
    SELECT * FROM smaptorss_logs LIMIT var1;  
    SELECT COUNT(*) AS totalPosts FROM smaptorss_logs;
END &&
DELIMITER;  

CALL get_student(5);  

SHOW CREATE PROCEDURE get_student;
DROP PROCEDURE get_student;
drop procedure IF EXISTS get_orders;

DELIMITER $$
CREATE PROCEDURE GetEmployees()
BEGIN
    SELECT *
    FROM smaptorss
    INNER JOIN usersBasicInfo on smaptorss.userid = usersBasicInfo.id;

    SELECT smaptorss.rssid
    FROM smaptorss
    INNER JOIN smaptorss_logs on smaptorss.rssid = smaptorss_logs.rssid;
END$$
DELIMITER;

SHOW CREATE PROCEDURE GetEmployees;
CALL GetEmployees;
DROP PROCEDURE IF EXISTS GetEmployees;


SELECT smaptorss.* FROM smaptorss LEFT JOIN smaptorss_logs 
on smaptorss.rssid = smaptorss_logs.rssid
WHERE smaptorss_logs.rssid IS NULL
