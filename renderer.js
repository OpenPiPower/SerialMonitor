const serialport = require("serialport")
var parser = new serialport.parsers.Readline("\r\n");