/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
RiaknJSONneditor_kango.UserscriptEngineClient=function(){};RiaknJSONneditor_kango.UserscriptEngineClient.prototype={run:function(c,b,a){var d=this;RiaknJSONneditor_kango.invokeAsync("kango.userscript.getScripts",c.document.URL,b,a,function(a){for(var b in a)a.hasOwnProperty(b)&&d.executeScript(c,a[b].join("\n\n"))})},executeScript:function(c,b){try{var a=new RiaknJSONneditor_kango.UserscriptApi(c);a.kango=RiaknJSONneditor_kango;RiaknJSONneditor_kango.lang.evalInSandbox(c,a,b)}catch(d){RiaknJSONneditor_kango.console.log("US: "+d.message+"\n"+d.stack||"")}}};RiaknJSONneditor_kango.UserscriptApi=function(){};
RiaknJSONneditor_kango.UserscriptApi.prototype={};
