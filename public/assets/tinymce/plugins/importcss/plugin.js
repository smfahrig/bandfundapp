tinymce.PluginManager.add("importcss",function(t){function e(t){return"string"==typeof t?function(e){return-1!==e.indexOf(t)}:t instanceof RegExp?function(e){return t.test(e)}:t}function n(e,n){function i(t,e){var c,o=t.href;if(o&&n(o,e)){s(t.imports,function(t){i(t,!0)});try{c=t.cssRules||t.rules}catch(a){}s(c,function(t){t.styleSheet?i(t.styleSheet,!0):t.selectorText&&s(t.selectorText.split(","),function(t){r.push(tinymce.trim(t))})})}}var r=[],c={};s(t.contentCSS,function(t){c[t]=!0}),n||(n=function(t,e){return e||c[t]});try{s(e.styleSheets,function(t){i(t)})}catch(o){}return r}function i(e){var n,i=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);if(i){var r=i[1],s=i[2].substr(1).split(".").join(" "),c=tinymce.makeMap("a,img");return i[1]?(n={title:e},t.schema.getTextBlockElements()[r]?n.block=r:t.schema.getBlockElements()[r]||c[r.toLowerCase()]?n.selector=r:n.inline=r):i[2]&&(n={inline:"span",title:e.substr(1),classes:s}),t.settings.importcss_merge_classes!==!1?n.classes=s:n.attributes={"class":s},n}}var r=this,s=tinymce.each;t.on("renderFormatsMenu",function(c){var o=t.settings,a={},l=o.importcss_selector_converter||i,f=e(o.importcss_selector_filter),m=c.control;t.settings.importcss_append||m.items().remove();var u=[];tinymce.each(o.importcss_groups,function(t){t=tinymce.extend({},t),t.filter=e(t.filter),u.push(t)}),s(n(c.doc||t.getDoc(),e(o.importcss_file_filter)),function(e){if(-1===e.indexOf(".mce-")&&!a[e]&&(!f||f(e))){var n,i=l.call(r,e);if(i){var s=i.name||tinymce.DOM.uniqueId();if(u)for(var c=0;c<u.length;c++)if(!u[c].filter||u[c].filter(e)){u[c].item||(u[c].item={text:u[c].title,menu:[]}),n=u[c].item.menu;break}t.formatter.register(s,i);var o=tinymce.extend({},m.settings.itemDefaults,{text:i.title,format:s});n?n.push(o):m.add(o)}a[e]=!0}}),s(u,function(t){m.add(t.item)}),c.control.renderNew()}),r.convertSelectorToFormat=i});