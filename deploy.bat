@echo off
:: 设置颜色
color b0
echo '上传中...'
:: 打印空行
echo.

:: pscp配置参数
:: -p 拷贝文件的时候保留源文件建立的时间。
:: -v 拷贝文件时，显示提示信息。
:: -pw 指定密码
:: -r 拷贝目录
:: 多文件 直接空格即可

:: 上传view目录以及子文件到 home/test目录下面
pscp -v -r -p -pw 123456 ./view   root@192.168.0.166:/home/test

:: 上传./static/css ./static/js目录到/home/test/static目录下面
pscp -v -r -p -pw 123456 ./static/css ./static/js  root@192.168.0.166:/home/test/static

pause