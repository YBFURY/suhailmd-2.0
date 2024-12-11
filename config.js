7const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349121214408";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121214408";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_34_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk3LFxuICAgICAgICA1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAzNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzZXVVbHFLNzExeUxtUkQ4RmJacStoek9JQTFnQ0twOGYydHF4V3Z4M0dNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnb0hDbkFFbVFtU2dqRHp1UElvMjlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQzMDg4NzkzLWQzNzYtNGQ4ZS05NWEzLTRmZTc0ZTI3MmNiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAyMDQsXG4gICAgICA2OCxcbiAgICAgIDkzLFxuICAgICAgNDcsXG4gICAgICA3MyxcbiAgICAgIDIyMixcbiAgICAgIDY1LFxuICAgICAgMTE0LFxuICAgICAgMTUzLFxuICAgICAgNTYsXG4gICAgICAxMzksXG4gICAgICAxNjIsXG4gICAgICAyMTMsXG4gICAgICAxMjUsXG4gICAgICAxMzUsXG4gICAgICAxNjAsXG4gICAgICAzNCxcbiAgICAgIDgxLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDYwLFxuICAgICAgMjAzLFxuICAgICAgMjQzLFxuICAgICAgNjAsXG4gICAgICAxODksXG4gICAgICA1LFxuICAgICAgMTEyLFxuICAgICAgMTA1LFxuICAgICAgMCxcbiAgICAgIDE1MCxcbiAgICAgIDExMCxcbiAgICAgIDI1MCxcbiAgICAgIDE0NyxcbiAgICAgIDMsXG4gICAgICAyMTYsXG4gICAgICAxMTIsXG4gICAgICAyNDUsXG4gICAgICA3NSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDOTdFUFhEWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMTIxNDQwODo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkzNzkzNjIyMDI4NDYzOjk0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zUzV2NEdFSktCNWJvR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTW1sM1o0QUdOYitFdmhLME5rVXVNU1cwM2k3UEhyY1ZhNjFNRWV6dmNtUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2N1QvOXRPTDBZVGJLcGRGeHRwYlFISTNxV0VKcGR0VnVKbGNvNTNIV3gwRjFmY1lOMm1HMjNqaXNnamlhSG92ZWZDanphM0FIYzl2RW5DVjU1dFJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTWE82N0ZibUR3LzR6Smh0ajQyNmFaeDBJY1R3MkFkN1phbXNlVW52cDljdlAzVmZMRlpEbU1iYzdPM2o4eXB2TnVQT1pZQ3JjZlFDQTdvMlMwTCtnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIxMjE0NDA4Ojk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTAyNDg2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "!", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
