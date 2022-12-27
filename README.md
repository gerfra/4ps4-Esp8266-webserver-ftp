# 4ps4 Esp8266 webserver + ftp

This project comes from my curiosity to develop on the ESP8266 board, it's free and has no commercial purpose and does not intend to violate any registered trademark, it does not support any kind of piracy!!!
All right belong to their respective owners.

---
## Legal info

The files needed for the exploits are not included, I have included only empty files, use google to find them and replace them in the data folder. 


![DxO-Batch-Image Preview](https://i.imgur.com/hHYFSSA.png)


![DxO-Batch-Image Preview](https://i.imgur.com/0i6UnbE.png)


---
## Requirements:

ESP8266
An ESP8266 with 4mbflash memory, that because I use the Spiff memory.

- <a href="https://www.arduino.cc/">Arduino Ide</a>

- <a href="https://github.com/nailbuster/esp8266FTPServer">ESP8266FtpServer.h lib</a>

- <a href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers">Drivers ESP8266 CP210x_Windows_Drivers</a>


- <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases">A flasher tool</a>


- <a href="https://filezilla-project.org/">FTP client</a>

---
## Function:

To connect to esp8266, you must search this Accesspoint 4ps4 than
- apName = 4ps4
- ap_password = 4ps4pwd

Web Server Adrress
- http://10.13.37.1

Web Server Settings Adrress
- http://10.13.37.1/settings

you can also change the values for apName and ap_password save it and reboot the ESP8266

- FTP server
- address = 10.13.37.1
- user= 4ps4           -----> if you change it from setting the new pass and user changed with the new values
- password = 4ps4pwd   ----->
FTP support only PASSIVE MODE

---
## USAGE BASIC:

From the ps4 internet settings you must select the AP 4ps4, you don't need to specify any dns or other stuff just click continue, at the end verify your connection, if everything is ok, open the ps4 browser at the address 10.13.37.1 and select your script.

---
## USAGE ADVANCE:

If you know what you are doing then connect with ftp and update the files in the spiff memory, I remind you that you can not exceed the limit of 4mb.
PS:Overwrite the files and remember to leave my links and rules inside About links. Respect my work.

---
## LICENSE
- <a href="https://support.arduino.cc/hc/en-us/articles/4415094490770-Licensing-for-products-based-on-Arduino">Arduino Lib</a>
- <a href="https://github.com/nailbuster/esp8266FTPServer">ESP8266FtpServer.h license</a>
- <a href="https://github.com/gerfra/4ps4-Esp8266-webserver-ftp/blob/master/LICENSE">Repository license</a>








