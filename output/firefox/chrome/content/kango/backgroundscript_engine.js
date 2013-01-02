/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
RiaknJSONneditor_kango.BackgroundScriptEngine=function(){};
RiaknJSONneditor_kango.BackgroundScriptEngine.prototype={_sandbox:null,_window:null,init:function(a){var b=this;this._sandbox=RiaknJSONneditor_kango.lang.createHTMLSandbox("background.html",function(c){b._initScripts(c,a)})},getContext:function(){return this._window},_initScripts:function(a,b){this._window=a;a.kango=b;var c=a.document,d=RiaknJSONneditor_kango.getExtensionInfo().background_scripts;if("undefined"!=typeof d){var e=0,f=function(){var a=c.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",RiaknJSONneditor_kango.io.getExtensionFileUrl(d[e]));
var b=function(){e++;e<d.length&&f()};"undefined"!=typeof a.onreadystatechange?a.onreadystatechange=function(){"complete"==a.readyState&&b()}:a.onload=b;c.body.appendChild(a)};f()}}};RiaknJSONneditor_kango.BackgroundScriptModule=function(){};RiaknJSONneditor_kango.BackgroundScriptModule.prototype.init=function(a){RiaknJSONneditor_kango.backgroundScript=new RiaknJSONneditor_kango.BackgroundScriptEngine;RiaknJSONneditor_kango.addEventListener(RiaknJSONneditor_kango.event.READY,function(){RiaknJSONneditor_kango.backgroundScript.init(a)})};RiaknJSONneditor_kango.registerModule(RiaknJSONneditor_kango.BackgroundScriptModule);
