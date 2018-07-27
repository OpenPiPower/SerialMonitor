require("jquery");
require("bootstrap");
const remote = require("electron").remote;
const app = remote.app;
const serialport = require("serialport")
var parser = new serialport.parsers.Readline("\r\n");