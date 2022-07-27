@Echo Off
Echo open 114.132.123.68 >ftp.up
Echo root>>ftp.up
Echo 961011+ZZHH>>ftp.up
Echo Cd .\ >>ftp.up
Echo binary>>ftp.up
Echo put "C:\CODE\test.png">>ftp.up
Echo bye>>ftp.up
FTP -s:ftp.up
del ftp.up /q