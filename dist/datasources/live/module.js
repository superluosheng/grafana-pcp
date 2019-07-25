define(["lodash","app/core/utils/kbn","app/plugins/sdk"],function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=133)}({0:function(e,n){e.exports=t},1:function(t,e,n){"use strict";var r;n.d(e,"a",function(){return r}),function(t){t.TimeSeries="time_series",t.Table="table",t.Heatmap="heatmap"}(r||(r={}))},12:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(1),o=n(2),s=function(){function t(t){this.templateSrv=t}return t.prototype.getLabel=function(t,e){if(Object(o.b)(e))return t;var n=t.split("."),r={instance:{value:t},metric0:{value:n[n.length-1]}};return this.templateSrv.replace(e,r)},t.prototype.updateLabel=function(t,e){return{target:this.getLabel(e.target,t.legendFormat),datapoints:e.datapoints}},t.prototype.transformToTimeSeries=function(t,e){return i.a.flatten(t.map(function(t){return t.instances})).map(this.updateLabel.bind(this,e))},t.prototype.transformToHeatmap=function(t){for(var e=t[0].instances,n=0,r=e;n<r.length;n++){var i=r[n],a=i.target.match(/^(.+?)\-(.+?)$/);a&&(i.target=a[2]),i.datapoints=i.datapoints.map(function(t){return[t[0],1e3*Math.floor(t[1]/1e3)]})}return e},t.prototype.transformStringToTable=function(t){for(var e={columns:[],rows:[],type:"table"},n=t.split("\n"),r=[],i=function(t){if(0===(t=t.trim()).length||t.includes("Ctrl-C"))return"continue";if(0===e.columns.length)for(var n=t.split(/\s\s+/),i=0;i<n.length;i++){var a=t.indexOf(n[i]),o=i+1<n.length?t.indexOf(n[i+1])-1:void 0;e.columns.push({text:n[i]}),r.push([a,o])}else{var s=r.map(function(e){return t.substring(e[0],e[1]).trim()});e.rows.push(s)}},a=0,o=n;a<o.length;a++){i(o[a])}return e},t.prototype.transformMultipleMetricsToTable=function(t){var e={columns:[],rows:[],type:"table"};e.columns=t.map(function(t){return{text:t.name}});for(var n=function(n){for(var r=[],i=0,a=t;i<a.length;i++){var o=a[i].instances.find(function(t){return t.target===n});o&&o.datapoints.length>0?r.push(o.datapoints[o.datapoints.length-1][0]):r.push("?")}e.rows.push(r)},r=0,i=Object.keys(t[0].instances).sort(function(t,e){return parseInt(t)-parseInt(e)});r<i.length;r++){n(i[r])}return e},t.prototype.transformToTable=function(t){if(t.length>1)return this.transformMultipleMetricsToTable(t);if(1===t.length){var e=t[0].instances;if(e.length>0&&e[0].datapoints.length>0)return this.transformStringToTable(e[0].datapoints[0][0])}return{columns:[],rows:[],type:"table"}},t.prototype.transform=function(t,e){if(e.format===a.a.TimeSeries)return this.transformToTimeSeries(t,e);if(e.format===a.a.Heatmap)return this.transformToHeatmap(t);if(e.format==a.a.Table)return[this.transformToTable(t)];throw{message:"Invalid target format '"+e.format+"', possible options: "+a.a.TimeSeries+", "+a.a.Heatmap+", "+a.a.Table}},t}();e.a=s},13:function(t,e,n){"use strict";var r=n(3),i=n(0),a=n.n(i),o=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},s=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},u=function(){function t(t,e){this.context=t,this.localHistoryAgeMs=e,this.store={}}return t.prototype.ingestCounterMetric=function(t,e,n){if(t.length>0){var r=t[t.length-1],i=r[1],a=r[2],o=(n-i)/1e3;t.push([(e.value-a)/o,n,e.value])}else t.push([void 0,n,e.value])},t.prototype.ingestMetric=function(t,e,n){return o(this,void 0,void 0,function(){var r,i,a,o;return s(this,function(s){switch(s.label){case 0:return[4,this.context.metricMetadata(e.name)];case 1:if(!(r=s.sent()))return console.info("skipping ingestion of "+e.name+": metadata not available"),[2];for(i=0,a=e.instances;i<a.length;i++)(!((o=a[i]).instanceName in t)||r.labels&&["control","output"].includes(r.labels.metrictype))&&(t[o.instanceName]=[]),"counter"===r.sem?this.ingestCounterMetric(t[o.instanceName],o,n):t[o.instanceName].push([o.value,n]);return[2]}})})},t.prototype.ingest=function(t){return o(this,void 0,void 0,function(){var e,n,r,i;return s(this,function(o){switch(o.label){case 0:if(a.a.isEmpty(t))return[2];e=t.timestamp.s?1e3*t.timestamp.s+t.timestamp.us/1e3:1e3*t.timestamp,n=0,r=t.values,o.label=1;case 1:return n<r.length?(i=r[n],this.store[i.name]||(this.store[i.name]={}),[4,this.ingestMetric(this.store[i.name],i,e)]):[3,4];case 2:o.sent(),o.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},t.prototype.queryMetric=function(t,e,n){var r=[];for(var i in this.store[t]){var a={target:"null"===i?t:i,datapoints:this.store[t][i].filter(function(t){return e<=t[1]&&t[1]<=n&&null!=t[0]})};r.push(a)}return r},t.prototype.queryMetrics=function(t,e,n){var r=this;return t.map(function(t){return{name:t,instances:r.queryMetric(t,e,n)}})},t.prototype.cleanExpiredMetrics=function(){var t=(new Date).getTime()-this.localHistoryAgeMs;for(var e in this.store)for(var n in this.store[e])this.store[e][n]=this.store[e][n].filter(function(e){return e[1]>t})},t}(),c=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},l=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},f=function(){function t(t,e,n){this.context=t,this.datastore=e,this.keepPollingMs=n,this.requestedMetrics={}}return t.prototype.poll=function(){return c(this,void 0,void 0,function(){var t,e,n,r,i,o,s;return l(this,function(u){switch(u.label){case 0:return 0==(t=Object.keys(this.requestedMetrics)).length?[2]:[4,this.context.fetch(t,!0)];case 1:return e=u.sent(),[4,this.datastore.ingest(e)];case 2:if(u.sent(),n=e.values.map(function(t){return t.name}),(r=a.a.difference(t,n)).length>0)for(console.debug("fetch didn't include result for "+r.join(",")+", clearing it from requested metrics"),i=0,o=r;i<o.length;i++)s=o[i],delete this.requestedMetrics[s];return[2]}})})},t.prototype.ensurePolling=function(t){return c(this,void 0,void 0,function(){var e,n,r,i,o,s;return l(this,function(u){switch(u.label){case 0:return e=(new Date).getTime(),[4,this.context.metricMetadatas(t)];case 1:for(n=u.sent(),r=a.a.intersection(t,Object.keys(n)),i=0,o=r;i<o.length;i++)s=o[i],this.requestedMetrics[s]=e;return[2,r]}})})},t.prototype.removeMetricsFromPolling=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];delete this.requestedMetrics[r]}},t.prototype.cleanupExpiredMetrics=function(){var t=(new Date).getTime()-this.keepPollingMs;this.requestedMetrics=a.a.pickBy(this.requestedMetrics,function(e){return e>t})},t}(),h=function(){function t(){this.endpoints={}}return t.prototype.generateId=function(t,e){return e||(e=""),t+"::"+e},t.prototype.find=function(t,e){var n=this.generateId(t,e);return this.endpoints[n]},t.prototype.create=function(t,e,n,i){var a=this.generateId(t,e),o=new r.a(t,e),s=new u(o,i),c=new f(o,s,n);return this.endpoints[a]={context:o,datastore:s,poller:c},this.endpoints[a]},t.prototype.list=function(){return Object.values(this.endpoints)},t}();e.a=h},132:function(t,e){ace.define("ace/snippets/pcp",["require","exports","module"],function(t,e,n){"use strict";e.snippets=[],e.scope="pcp"}),ace.define("ace/mode/pcp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,e,n){"use strict";var r=t("../lib/oop"),i=t("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"punctuation",regex:"\\."},{token:"entity.name.tag",regex:"[a-zA-Z]\\w*"}]},this.normalizeRules()};r.inherits(a,i),e.PcpHighlightRules=a}),ace.define("ace/mode/pcp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pcp_highlight_rules"],function(t,e,n){"use strict";var r=t("../lib/oop"),i=t("./text").Mode,a=t("./pcp_highlight_rules").PcpHighlightRules,o=function(){this.HighlightRules=a,this.$behaviour=this.$defaultBehaviour};r.inherits(o,i),function(){this.$id="ace/mode/pcp"}.call(o.prototype),e.Mode=o})},133:function(t,e,n){"use strict";n.r(e);var r,i=n(0),a=n.n(i),o=n(6),s=n.n(o),u=n(1),c=n(13),l=n(12),f=n(3),h=n(2),p=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},d=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},m=function(){function t(t,e,n,r){this.instanceSettings=t,this.backendSrv=e,this.templateSrv=n,this.variableSrv=r,this.name=t.name,this.withCredentials=t.withCredentials,this.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&t.basicAuth.length>0&&(this.headers.Authorization=t.basicAuth),this.pollIntervalMs=s.a.interval_to_ms(t.jsonData.pollInterval||"1s"),this.keepPollingMs=s.a.interval_to_ms(t.jsonData.keepPolling||"20s"),this.localHistoryAgeMs=s.a.interval_to_ms(t.jsonData.localHistoryAge||"5m"),f.a.datasourceRequest=this.doRequest.bind(this),this.endpointRegistry=new c.a,this.transformations=new l.a(this.templateSrv),this.pollIntervalMs>0&&setInterval(this.doPollAll.bind(this),this.pollIntervalMs);this.container_name_filter=function(t){return!0}}return t.$inject=["instanceSettings","backendSrv","templateSrv","variableSrv"],t.prototype.doPollAll=function(){for(var t=[],e=0,n=this.endpointRegistry.list();e<n.length;e++){var r=n[e];r.datastore.cleanExpiredMetrics(),r.poller.cleanupExpiredMetrics(),t.push(r.poller.poll())}return Promise.all(t)},t.prototype.getOrCreateEndpoint=function(t){void 0===t&&(t={});var e=Object(h.a)(this.variableSrv,t,this.instanceSettings),n=e[0],r=e[1],i=this.endpointRegistry.find(n,r);return i||(i=this.endpointRegistry.create(n,r,this.keepPollingMs,this.localHistoryAgeMs)),i},t.prototype.doRequest=function(t){return p(this,void 0,void 0,function(){return d(this,function(e){switch(e.label){case 0:return t.withCredentials=this.withCredentials,t.headers=this.headers,[4,this.backendSrv.datasourceRequest(t)];case 1:return[2,e.sent()]}})})},t.prototype.testDatasource=function(){return p(this,void 0,void 0,function(){var t,e,n,r;return d(this,function(i){switch(i.label){case 0:t=Object(h.a)(this.variableSrv,{},this.instanceSettings),e=t[0],n=t[1],r=new f.a(e,n),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,r.createContext()];case 2:return i.sent(),[2,{status:"success",message:"Data source is working",title:"Success"}];case 3:return i.sent(),[2,{status:"error",title:"Additional configuration required",message:"Could not connect to "+e+". To use this data source, please configure the url, and optionally the container dashboard variable(s)."}];case 4:return[2]}})})},t.prototype.metricFindQuery=function(t){return p(this,void 0,void 0,function(){return d(this,function(e){switch(e.label){case 0:return[4,this.getOrCreateEndpoint().context.fetch([t])];case 1:return[2,e.sent().values[0].instances.map(function(t){return{text:t.value,value:t.value}})]}})})},t.prototype.query=function(t){return p(this,void 0,void 0,function(){var e,n,r,i,o,s,c,l,f,h;return d(this,function(p){switch(p.label){case 0:e=[],n=0,r=t.targets,p.label=1;case 1:if(!(n<r.length))return[3,6];if((i=r[n]).hide||!i.expr&&!i.target)return[3,5];if(i.expr||(i.expr=i.target),i.format||"timeseries"!==i.type&&"timeserie"!==i.type||(i.format="time_series"),0===(o=i.expr.trim()).length)return[3,5];s=this.getOrCreateEndpoint(i),p.label=2;case 2:if(p.trys.push([2,4,,5]),c=[],i.format===u.a.Table){if(!a.a.every(t.targets,["format",u.a.Table]))throw{message:"To use the table format, every query of this panel has to be in table format"};c=t.targets.map(function(t){return t.expr})}else c=[o];return[4,s.poller.ensurePolling(c)];case 3:if((l=p.sent()).length!==c.length)throw{message:"Cannot find metric "+a.a.difference(c,l).join(",")+" on PMDA."};return f=s.datastore.queryMetrics(c,t.range.from.valueOf(),t.range.to.valueOf()),e.push.apply(e,this.transformations.transform(f,i)),i.format===u.a.Table?[3,6]:[3,5];case 4:throw(h=p.sent()).refId=i.refId,h;case 5:return n++,[3,1];case 6:return[2,{data:e}]}})})},t}(),v=n(7),b=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},y=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},g=function(){function t(t,e){this.datasource=t,this.target=e,this.identifierRegexps=[/\./,/[a-zA-Z0-9_]/]}return t.prototype.getCompletions=function(t,e,n,r,i){t.completers.length>1&&(t.completers=t.completers.slice(-1)),this.findCompletions(t,e,n,r).then(function(t){i(null,t)},function(t){i(t,[])})},t.prototype.getHelpText=function(t,e){return"<b>"+t+"</b><hr />Type: "+e.type+"<br />Semantics: "+e.sem+"<br />Units: "+e.units+"<br /><br />"+(e["text-help"]||e["text-oneline"])},t.prototype.findCompletions=function(t,e,n,r){return b(this,void 0,void 0,function(){var e,n,i,a,o,s,u=this;return y(this,function(c){switch(c.label){case 0:return e=this.datasource.getOrCreateEndpoint(this.target),n=t.getValue(),i="",n.includes(".")&&(i=n.substring(0,n.lastIndexOf("."))),[4,e.context.children(i)];case 1:return a=c.sent(),"."!==r&&(r=""),(o=[]).push.apply(o,a.nonleaf.map(function(t){return{caption:t,value:r+t,meta:"namespace",score:Number.MAX_VALUE}})),[4,e.context.metricMetadatas(a.leaf.map(function(t){return i+"."+t}))];case 2:return s=c.sent(),o.push.apply(o,a.leaf.map(function(t){return{caption:t,value:r+t,meta:"metric",score:Number.MAX_VALUE,docHTML:u.getHelpText(i+"."+t,s[i+"."+t])}})),[2,o]}})})},t}(),w=(n(132),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),x=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},C=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},M=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.formats=[],r.target.expr=r.target.expr||r.target.target||"",r.target.format=r.target.format||r.getDefaultFormat(),r.target.url=r.target.url||null,r.target.container=r.target.container||null,r.formats=[{text:"Time series",value:u.a.TimeSeries},{text:"Table",value:u.a.Table},{text:"Heatmap",value:u.a.Heatmap}],r}return w(e,t),e.$inject=["$scope","$injector"],e.prototype.getDefaultFormat=function(){return"table"===this.panelCtrl.panel.type?u.a.Table:"heatmap"===this.panelCtrl.panel.type?u.a.Heatmap:u.a.TimeSeries},e.prototype.getContainers=function(){return x(this,void 0,void 0,function(){var t;return C(this,function(e){switch(e.label){case 0:return[4,this.datasource.metricFindQuery("containers.name")];case 1:return(t=e.sent()).unshift({text:"-",value:null}),[2,t]}})})},e.prototype.getCompleter=function(){return new g(this.datasource,this.target)},e.prototype.refreshMetricData=function(){this.panelCtrl.refresh()},e.templateUrl="datasources/live/partials/query.editor.html",e}(v.QueryCtrl),S=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},T=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},k=function(){function t(t,e,n){this.backendSrv=t,this.templateSrv=e,this.variableSrv=n,this.current.jsonData.container=this.current.jsonData.container||null}return t.$inject=["backendSrv","templateSrv","variableSrv"],t.prototype.getContainers=function(){return S(this,void 0,void 0,function(){var t,e,n;return T(this,function(r){switch(r.label){case 0:(t=a.a.cloneDeep(this.current)).jsonData.pollInterval="0s",e=new m(t,this.backendSrv,this.templateSrv,this.variableSrv),n=[],r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e.metricFindQuery("containers.name")];case 2:return n=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return n.unshift({text:"-",value:null}),[2,n]}})})},t.templateUrl="datasources/live/partials/config.html",t}();n.d(e,"AnnotationsQueryCtrl",function(){return _}),n.d(e,"Datasource",function(){return m}),n.d(e,"QueryCtrl",function(){return M}),n.d(e,"ConfigCtrl",function(){return k});var _=function(){function t(){}return t.templateUrl="datasources/live/partials/annotations.editor.html",t}()},2:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return s});var r=n(0),i=n.n(r);function a(t,e,n){var r=n.value;n.value=function(){var t=this;return this.inflightCalls||(this.inflightCalls={}),this.inflightCalls[e]?this.inflightCalls[e]:(this.inflightCalls[e]=r.apply(this,arguments),this.inflightCalls[e].then(function(n){return t.inflightCalls[e]=null,n},function(n){throw t.inflightCalls[e]=null,n}))}}function o(t){return!(i.a.isString(t)&&t.trim().length>0)}function s(t,e,n){var r,a=function(t){var e={};return t.variables?(t.variables.forEach(function(t){var n=t.current.value;("$__all"===n||i.a.isEqual(n,["$__all"]))&&(n=null===t.allValue?t.options.slice(1).map(function(t){return t.value}):t.allValue),e[t.name]={text:t.current.text,value:n}}),e):{}}(t),s="";if(o(e.url))if(a.url&&!o(a.url.value))s=a.url.value;else{if(o(n.url))throw{message:"Cannot find any connection url."};s=n.url}else s=e.url;return o(e.container)?a.container&&!o(a.container.value)?r=a.container.value:o(n.container)||(r=n.container):r=e.container,[s,r]}},3:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(2),o=function(t,e,n,r){var i,a=arguments.length,o=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(a<3?i(o):a>3?i(e,n,o):i(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},s=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function o(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(o,s)}u((r=r.apply(t,e||[])).next())})},u=function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(){function t(t,e){this.url=t,this.container=e,this.metricMetadataCache={},this.indomCache={},this.d="",t.includes(":44322")||(this.d="_")}return t.prototype.createContext=function(){return s(this,void 0,void 0,function(){var e,n;return u(this,function(r){switch(r.label){case 0:return e=this.url+"/pmapi/context?hostspec=127.0.0.1&polltimeout=30",[4,t.datasourceRequest({url:e})];case 1:return n=r.sent(),this.context=n.data.context,this.container?[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"store",params:{name:"pmcd.client.container",value:this.container}})]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})},t.prototype.ensureContext=function(t){return s(this,void 0,void 0,function(){var e;return u(this,function(n){switch(n.label){case 0:return this.context?[3,2]:[4,this.createContext()];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,9]),[4,t()];case 3:return[2,n.sent()];case 4:return e=n.sent(),i.a.isString(e.data)&&e.data.includes("12376")||i.a.isObject(e.data)&&e.data.message.includes("unknown context identifier")?(console.debug("context expired, creating new context..."),[4,this.createContext()]):[3,7];case 5:return n.sent(),[4,t()];case 6:return[2,n.sent()];case 7:throw e;case 8:return[3,9];case 9:return[2]}})})},t.prototype.metricMetadatas=function(e){return s(this,void 0,void 0,function(){var n,r,a,o,c,l=this;return u(this,function(f){switch(f.label){case 0:return(n=i.a.difference(e,Object.keys(this.metricMetadataCache))).length>0?(n.push("pmcd.control.timeout"),[4,this.ensureContext(function(){return s(l,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,t.datasourceRequest({url:"http://localhost:44322/pmapi/metric",params:{names:n.join(",")}})];case 1:return[2,e.sent().data.metrics]}})})})]):[3,2];case 1:for(r=f.sent(),a=0,o=r;a<o.length;a++)c=o[a],this.metricMetadataCache[c.name]=c;f.label=2;case 2:return[2,i.a.pick(this.metricMetadataCache,e)]}})})},t.prototype.metricMetadata=function(t){return s(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,this.metricMetadatas([t])];case 1:return[2,e.sent()[t]]}})})},t.prototype.refreshIndoms=function(e){return s(this,void 0,void 0,function(){var n,r,i,a,o=this;return u(this,function(c){switch(c.label){case 0:return[4,this.ensureContext(function(){return s(o,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:return[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"indom",params:{name:e}})];case 1:return[2,n.sent().data.instances]}})})})];case 1:for(n=c.sent(),this.indomCache[e]={},r=0,i=n;r<i.length;r++)a=i[r],this.indomCache[e][a.instance]=a.name;return[2,this.indomCache[e]]}})})},t.prototype.updateInstanceNames=function(t){return s(this,void 0,void 0,function(){var e,n,r,i,a,o,s,c;return u(this,function(u){switch(u.label){case 0:return 0==t.instances.length?[2]:null===t.instances[0].instance||-1===t.instances[0].instance?(t.instances[0].instanceName=null,[2]):t.name in this.indomCache?[3,2]:(e=this.indomCache,n=t.name,[4,this.refreshIndoms(t.name)]);case 1:e[n]=u.sent(),u.label=2;case 2:r=!1,i=0,a=t.instances,u.label=3;case 3:return i<a.length?((o=a[i]).instanceName=this.indomCache[t.name][o.instance],o.instanceName||r?[3,5]:(s=this.indomCache,c=t.name,[4,this.refreshIndoms(t.name)])):[3,6];case 4:s[c]=u.sent(),o.instanceName=this.indomCache[t.name][o.instance],r=!0,u.label=5;case 5:return i++,[3,3];case 6:return[2]}})})},t.prototype.fetch=function(e,n){return void 0===n&&(n=!1),s(this,void 0,void 0,function(){var r,a,o,c,l,f,h,p,d,m=this;return u(this,function(v){switch(v.label){case 0:return e.push("pmcd.control.timeout"),[4,this.ensureContext(function(){return s(m,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:return[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"fetch",params:{names:e.join(",")}})];case 1:return[2,n.sent().data]}})})})];case 1:if(r=v.sent(),a=r.values.map(function(t){return t.name}),(o=i.a.difference(e,a)).length>0)for(console.debug("fetch didn't include result for "+o.join(",")+", clearing it from metric metadata cache"),c=0,l=o;c<l.length;c++)f=l[c],delete this.metricMetadataCache[f];if(!n)return[3,5];h=0,p=r.values,v.label=2;case 2:return h<p.length?(d=p[h],[4,this.updateInstanceNames(d)]):[3,5];case 3:v.sent(),v.label=4;case 4:return h++,[3,2];case 5:return[2,r]}})})},t.prototype.store=function(e,n){return s(this,void 0,void 0,function(){var r=this;return u(this,function(i){switch(i.label){case 0:return[4,this.ensureContext(function(){return s(r,void 0,void 0,function(){return u(this,function(r){switch(r.label){case 0:return[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"store",params:{name:e,value:n}})];case 1:return[2,r.sent().data]}})})})];case 1:return[2,i.sent()]}})})},t.prototype.children=function(e){return s(this,void 0,void 0,function(){var n=this;return u(this,function(r){switch(r.label){case 0:return[4,this.ensureContext(function(){return s(n,void 0,void 0,function(){return u(this,function(n){switch(n.label){case 0:return[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"children",params:{prefix:e}})];case 1:return[2,n.sent().data]}})})})];case 1:return[2,r.sent()]}})})},o([a.c],t.prototype,"createContext",null),t}();e.a=c},6:function(t,n){t.exports=e},7:function(t,e){t.exports=n}})});
//# sourceMappingURL=module.js.map