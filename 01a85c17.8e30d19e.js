(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,a,t){"use strict";t.r(a);t(12);var n=t(0),c=t.n(n),l=t(154),r=t(151);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)});const n=Object.entries(t).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,t])=>c.a.createElement("div",{key:e},c.a.createElement("h3",null,e),t.map(e=>c.a.createElement(r.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),c.a.createElement("hr",null))).filter(e=>null!=e);return c.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},c.a.createElement("div",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--8 col--offset-2"},c.a.createElement("h1",null,"Tags"),c.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);