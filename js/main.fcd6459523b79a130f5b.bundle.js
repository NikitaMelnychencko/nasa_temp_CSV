"use strict";(self.webpackChunknasa_temp_CSV=self.webpackChunknasa_temp_CSV||[]).push([[179],{515:function(e,t,r){var n=r(403);function a(e,t,r,n,a,o,u){try{var s=e[o](u),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var u=e.apply(t,r);function s(e){a(u,n,o,s,c,"next",e)}function c(e){a(u,n,o,s,c,"throw",e)}s(void 0)}))}}var u=r(460),s=document.getElementById("myChart").getContext("2d");function c(){return(c=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/zon_ann.csv").then((function(e){return e.text()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return c.apply(this,arguments)})().then((function(e){return u.parse(e,{header:!0}).data})).then((function(e){return e.reduce((function(e,t){return e.years.push(t.Year),e.tempsGlob.push(Number(t.Glob)+14),e.tempsNHem.push(Number(t.NHem)+14),e.tempsSHem.push(Number(t.SHem)+14),e}),{years:[],tempsGlob:[],tempsNHem:[],tempsSHem:[]})})).then((function(e){return t=e.years,r=e.tempsGlob,a=e.tempsNHem,o=e.tempsSHem,void new n.Z(s,{type:"line",data:{labels:t,datasets:[{label:"Glob",data:r,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1,fill:!1},{label:"NHem",data:a,backgroundColor:"rgba(99, 255, 132, 0.2)",borderColor:"rgba(99, 255, 132, 1)",borderWidth:1,fill:!1},{label:"tempsSHem",data:o,backgroundColor:"rgba(99, 132, 255, 0.2)",borderColor:"rgba(99, 132, 255, 1)",borderWidth:1,fill:!1}]},options:{scales:{y:{ticks:{callback:function(e,t,r){return e+"°"}}}}}});var t,r,a,o}))}},function(e){e.O(0,[216],(function(){return 515,e(e.s=515)})),e.O()}]);