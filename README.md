# Esp8266 web server + ftp

<b>Use esp8266 as web server, use esp8266 as ftp server</b>

This project comes from my curiosity to develop on the ESP8266 board, it's free and has no commercial purpose and does not intend to violate any registered trademark, it does not support any kind of piracy!!!
All right belong to their respective owners.

---
## Legal info

The files needed for the exploits are not included, I have included only empty files, use google to find them and replace them in the data folder. 


![DxO-Batch-Image Preview](https://i.imgur.com/hHYFSSA.png)


![DxO-Batch-Image Preview](https://i.imgur.com/0i6UnbE.png)


---
## Requirements:

An ESP8266 with 4mbflash memory, that because I use the Spiff memory.

- <a href="https://www.arduino.cc/">Arduino Ide</a>

- <a href="https://github.com/nailbuster/esp8266FTPServer">ESP8266FtpServer.h lib</a>

- <a href="https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers">Drivers ESP8266 CP210x_Windows_Drivers</a>

- <a href="https://github.com/marcelstoer/nodemcu-pyflasher/releases">A flasher tool</a>

- <a href="https://filezilla-project.org/">FTP client</a>

  You need to convert the bin payloads to js format.
  
- <a href="https://github.com/stooged/bin2html-900">bin2html</a> 

---
## Resources:

- VTXHEN
Allows for fake signed content to run, adds debug settings.
https://github.com/xvortex

- Blocker EXTREME
Blocks every possible way of updating.
https://github.com/LightningMods/Update-Blocker-Extreme-5.05

- UnBlocker EXTREME
Undoes Blocker EXTREME.
https://github.com/LightningMods/Update-Blocker-Extreme-5.05

- ReactPSPlus
Turns the RTC (real time clock) back in system to allow time locked content to open (expired PSN games)
https://github.com/Zer0xFF/reactPSPLUS

- UnReactPSPlus
Restore system before ReactPSPlus
https://github.com/Zer0xFF/reactPSPLUS

- Bin Loader
Allows you to send a payload.bin to your PS4 just like the old days.
https://github.com/EdiTzZ/ps45.05bin

- apptousb
Moves games to external hdd, circumventing the internal drive running out of space.
https://github.com/stooged/AppToUsb-50X

- Kdump
Allows you to dump the kernel to usb
https://github.com/VV1LD/PS4-KernelDumper

- VTXDUMPER
Allows you to dump your legit games (disc/psn) to usb hdd, with or without patches, and merged/unmerged.
https://github.com/xvortex

- DB SG Backup
Backs up all critical databases, save games, and trophy data to USB.
https://github.com/stooged/DB_SG_Backup-50X

- VTXFTP
Starts an ftp server on you ps4 so you can connect and copy/paste files to/from your pc/ps4.
https://github.com/xvortex

- FTP RW
This Payload gives you Unsandboxed FTP Access and re-mount ALL System Partitions as RW (USE CAUTION) Release
https://github.com/LightningMods/PS4-System-5.0x-RW-FTP

- VR ENABLER
Enables VR if you forgot to enable it before running HEN
https://github.com/stooged/Enable-VR-50X

- Cheater
PS4 Cheater is homebrew APP to find game cheat codes
https://github.com/ChendoChap/PS4_Cheater

- Linux Loader
Lets you boot linus kernel from your USB stick to use your PS4 for Linux.
https://github.com/valentinbreiz/PS4-Linux-Loader/tree/5.05

- Kexec
This repo implements a kexec()-style system call for the PS4 Orbis kernel (FreeBSD derivative). This is designed to boot a Linux kernel directly from FreeBSD.
https://github.com/fail0verflow/ps4-kexec

- History Blocker
Enable or disable the auto loading of the last page used in the ps4 webbrowser when you open it.To toggle the enable or disable state just run the payload again and it will turn it on or off.
https://github.com/stooged/History-Blocker


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








