DROP PROCEDURE IF EXISTS createTables;

DELIMITER $$
CREATE PROCEDURE createTables(IN defaultUserImage VARCHAR(200))
BEGIN
    DROP TABLE IF EXISTS userlogin;
    DROP TABLE IF EXISTS smaptorss;
    DROP TABLE IF EXISTS smaptorss_logs;

    CREATE TABLE `userlogin` (
      `id` char(30) NOT NULL,
      `name` varchar(100) NOT NULL,
      `email` varchar(100) NOT NULL,
      `password` text NOT NULL,
      `imgurl` varchar(200) NOT NULL DEFAULT defaultUserImage,
      `role` varchar(20) NOT NULL DEFAULT 'viewer',
      `provider` char(20) NOT NULL,
      `secure` tinyint(1) NOT NULL DEFAULT 1
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
    
    CREATE TABLE `smaptorss` (
      `rssid` varchar(50) NOT NULL,
      `userid` char(30) DEFAULT NULL,
      `emails` text DEFAULT NULL,
      `urls` text DEFAULT NULL,
      `included` text DEFAULT NULL,
      `excluded` text DEFAULT NULL,
      `remarks` text NOT NULL,
      `directorypath` varchar(200) NOT NULL DEFAULT '/feeds/',
      `language` varchar(10) DEFAULT NULL,
      `frequency` int(11) DEFAULT NULL,
      `rsslength` int(11) NOT NULL DEFAULT 0,
      `ndtype` char(10) DEFAULT NULL,
      `updated` datetime DEFAULT current_timestamp()
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
    
    CREATE TABLE `smaptorss_logs` (
      `rssid` varchar(50) NOT NULL,
      `userid` char(30) DEFAULT NULL,
      `emails` text DEFAULT NULL,
      `urls` text DEFAULT NULL,
      `included` text DEFAULT NULL,
      `excluded` text DEFAULT NULL,
      `remarks` text NOT NULL,
      `directorypath` varchar(200) NOT NULL DEFAULT '/feeds/',
      `language` varchar(10) DEFAULT NULL,
      `frequency` int(11) DEFAULT NULL,
      `rsslength` int(11) NOT NULL DEFAULT 0,
      `ndtype` char(10) DEFAULT NULL,
      `updated` datetime DEFAULT current_timestamp()
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

END$$
DELIMITER;

