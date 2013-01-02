/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
RiaknJSONneditor_kango.Console=function(){this._consoleService=Components.classes["@mozilla.org/consoleservice;1"].getService(Components.interfaces.nsIConsoleService)};RiaknJSONneditor_kango.Console.prototype=RiaknJSONneditor_kango.oop.extend(RiaknJSONneditor_kango.IConsole,{_consoleService:null,log:function(a){1<arguments.length&&(a=RiaknJSONneditor_kango.string.format.apply(RiaknJSONneditor_kango.string,arguments));this._consoleService.logStringMessage(a)}});RiaknJSONneditor_kango.console=new RiaknJSONneditor_kango.Console;
