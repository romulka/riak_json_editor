/*
Built using Kango - Cross-browser extension framework
http://kangoextensions.com/
*/
RiaknJSONneditor_kango.ui.OptionsPage=function(){var a=RiaknJSONneditor_kango.getExtensionInfo();if("undefined"!=typeof a.options_page){var b=this._optionsUrl=RiaknJSONneditor_kango.io.getExtensionFileUrl(a.options_page).toLowerCase();RiaknJSONneditor_kango.browser.addEventListener("DOMContentLoaded",function(a){0==a.url.toLowerCase().indexOf(b)&&(a.window.kango=RiaknJSONneditor_kango)})}};
RiaknJSONneditor_kango.ui.OptionsPage.prototype=RiaknJSONneditor_kango.oop.extend(RiaknJSONneditor_kango.ui.IOptionsPage,{_optionsUrl:"",open:function(a){if(""!=this._optionsUrl){var b=this._optionsUrl;"undefined"!=typeof a&&(b+="#"+a);RiaknJSONneditor_kango.browser.tabs.create({url:b,focused:!0,reuse:!0});return!0}return!1}});RiaknJSONneditor_kango.ui.optionsPage=new RiaknJSONneditor_kango.ui.OptionsPage;
