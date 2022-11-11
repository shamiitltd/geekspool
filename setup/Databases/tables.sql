CREATE TABLE IF NOT EXISTS `userlogin` (
  `id` char(30) NOT NULL PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `imgurl` varchar(200) NOT NULL DEFAULT '/images/logo.jpeg',
  `role` varchar(20) NOT NULL DEFAULT 'viewer',
  `provider` char(20) NOT NULL,
  `secure` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--#
CREATE TABLE IF NOT EXISTS `dropDownsPool` (
  `id`  BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(50) NOT NULL UNIQUE, 
  `key` text DEFAULT NULL,
  `value` text DEFAULT NULL,
  `updated` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
--#
CREATE TABLE IF NOT EXISTS `smaptorss` (
  `rssid` varchar(50) NOT NULL PRIMARY KEY,
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
--#
CREATE TABLE IF NOT EXISTS `smaptorss_logs` (
  `rssid` varchar(50) NOT NULL PRIMARY KEY,
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1