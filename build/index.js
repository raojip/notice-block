!function(){"use strict";var e,o={227:function(){var e=window.wp.blocks,o=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor,t=JSON.parse('{"u2":"rp-notice-block/rp-notice-block"}');(0,e.registerBlockType)(t.u2,{edit:function(){return(0,o.createElement)("p",(0,n.useBlockProps)(),(0,r.__)("Closable Notice Block – hello from the editor!","rp-notice-block"))},save:function(){return(0,o.createElement)("p",n.useBlockProps.save(),"Closable Notice Block – hello from the saved content!")}})}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var c=r[e]={exports:{}};return o[e](c,c.exports,n),c.exports}n.m=o,e=[],n.O=function(o,r,t,c){if(!r){var i=1/0;for(p=0;p<e.length;p++){r=e[p][0],t=e[p][1],c=e[p][2];for(var l=!0,u=0;u<r.length;u++)(!1&c||i>=c)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,c<i&&(i=c));if(l){e.splice(p--,1);var f=t();void 0!==f&&(o=f)}}return o}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[r,t,c]},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},function(){var e={826:0,431:0};n.O.j=function(o){return 0===e[o]};var o=function(o,r){var t,c,i=r[0],l=r[1],u=r[2],f=0;if(i.some((function(o){return 0!==e[o]}))){for(t in l)n.o(l,t)&&(n.m[t]=l[t]);if(u)var p=u(n)}for(o&&o(r);f<i.length;f++)c=i[f],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(p)},r=self.webpackChunkrp_notice_block=self.webpackChunkrp_notice_block||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var t=n.O(void 0,[431],(function(){return n(227)}));t=n.O(t)}();