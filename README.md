# 4ps4
Esp8266 webserver + ftp

This project comes from my curiosity to develop on the ESP8266 board, it's free and has no commercial purpose and does not intend to violate any registered trademark, it does not support any kind of piracy!!!
All right belong to their respective owners.

Requirements:

ESP8266
An ESP8266 with 4mbflash memory, that because I use the Spiff memory.

Drivers ESP8266 CP210x_Windows_Drivers
https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

A flasher tool
https://github.com/marcelstoer/nodemcu-pyflasher/releases

FTP client
https://filezilla-project.org/

Function:

To connect to esp8266, you must search this Accesspoint 4psp4 than
apName = 4psp4
ap_password = 4psp4pwd

Web Server Adrress
http://10.13.37.1

Web Server Settings Adrress
http://10.13.37.1/settings
you can also change the values for apName and ap_password save it and reboot the ESP8266

FTP server
address = 10.13.37.1
user= 4psp4           -----> if you change it from setting the new pass and user changed with the new values
password = 4psp4pwd   ----->
FTP support only PASSIVE MODE

USAGE BASIC:

From the ps4 internet settings you must select the AP 4psp4, you don't need to specify any dns or other stuff just click continue, at the end verify your connection, if everything is ok, open the ps4 browser at the address 10.13.37.1 and select your script.

USAGE ADVANCE:

If you know what you are doing then connect with ftp and update the files in the spiff memory, I remind you that you can not exceed the limit of 4mb.
PS:Overwrite the files and remember to leave my links and rules inside About links. Respect my work.








