(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),s=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?a.a.createElement(d,b(b({ref:t},o),{},{components:n})):a.a.createElement(d,b({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(133)),i={id:"units",title:"Unit\xe9s",sidebar_label:"Unit\xe9s"},b={unversionedId:"programming/css/units",id:"programming/css/units",isDocsHomePage:!1,title:"Unit\xe9s",description:"Il existe plusieurs syst\xe8mes d'unit\xe9s utilis\xe9s pour d\xe9finir la taille de vos \xe9l\xe9ments (largeur, marges, taille de police). L'indication d'une taille se compose toujours:",source:"@site/docs/programming/css/units.md",slug:"/programming/css/units",permalink:"/ecal-web/docs/programming/css/units",editUrl:"https://github.com/harkle/ecal-web/docs/programming/css/units.md",version:"current",sidebar_label:"Unit\xe9s",sidebar:"programming",previous:{title:"Introduction aux CSS",permalink:"/ecal-web/docs/programming/css/introduction"},next:{title:"Couleurs de fond et de texte",permalink:"/ecal-web/docs/programming/css/colors"}},c=[{value:"Valeur absolue",id:"valeur-absolue",children:[]},{value:"Valeurs relatives",id:"valeurs-relatives",children:[]}],o={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Il existe plusieurs syst\xe8mes d'unit\xe9s utilis\xe9s pour d\xe9finir la taille de vos \xe9l\xe9ments (largeur, marges, taille de police). L'indication d'une taille se compose toujours:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"d'un chiffre;"),Object(l.b)("li",{parentName:"ul"},"suivi de l'abr\xe9viation de l'unit\xe9.")),Object(l.b)("p",null,"Par exemple:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"10px")," d\xe9finit une dimension de 10 pixels;"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"50%")," d\xe9finissent une taille de 50 pour cent;")),Object(l.b)("p",null,"Les valeurs n\xe9gatives sont pr\xe9c\xe9d\xe9es d'un ",Object(l.b)("inlineCode",{parentName:"p"},"-")," qui se colle au chiffre."),Object(l.b)("p",null,"Voici quelques exemples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-css"},"body {\n  font-size: 16px;\n}\n\nheader {\n  height: 50px;\n}\n\n#logo {\n  top: -25px;\n}\n\n.image-gallery {\n  width: 50%;\n  min-height: 50vh;\n}\n\n\n")),Object(l.b)("h2",{id:"valeur-absolue"},"Valeur absolue"),Object(l.b)("p",null,"Les valeurs absolues servent \xe0 d\xe9finir une taille fixe pour \xe9l\xe9ment, ind\xe9pendamment de son parent. Cela permet par exemple de donner une largeur fixe \xe0 une image ou de param\xe9trer la taille de vos polices."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Unit\xe9"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"),Object(l.b)("th",{parentName:"tr",align:"left"},"Remarque"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"px"),Object(l.b)("td",{parentName:"tr",align:"left"},"pixels"),Object(l.b)("td",{parentName:"tr",align:"left"})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"cm"),Object(l.b)("td",{parentName:"tr",align:"left"},"centim\xe8tres"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Ne jamais utiliser cette unit\xe9"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mm"),Object(l.b)("td",{parentName:"tr",align:"left"},"millim\xe8tres"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Ne jamais utiliser cette unit\xe9"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"in"),Object(l.b)("td",{parentName:"tr",align:"left"},"inches"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Ne jamais utiliser cette unit\xe9"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pt"),Object(l.b)("td",{parentName:"tr",align:"left"},"points"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Ne jamais utiliser cette unit\xe9"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pc"),Object(l.b)("td",{parentName:"tr",align:"left"},"picas"),Object(l.b)("td",{parentName:"tr",align:"left"},Object(l.b)("strong",{parentName:"td"},"Ne jamais utiliser cette unit\xe9"))))),Object(l.b)("p",null,"Seuls les pixels sont une unit\xe9 valable. Les autres viennent du domaine de l'imprim\xe9 et ne sont utilis\xe9es que si vous cr\xe9ez des feuilles de style pour l'impression."),Object(l.b)("h2",{id:"valeurs-relatives"},"Valeurs relatives"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Unit\xe9"),Object(l.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"%"),Object(l.b)("td",{parentName:"tr",align:"left"},"Relatif \xe0 l'\xe9l\xe9ment parent")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vw"),Object(l.b)("td",{parentName:"tr",align:"left"},"Relatif \xe0 la largeur de la fen\xeatre")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vh"),Object(l.b)("td",{parentName:"tr",align:"left"},"Relatif \xe0 la hauteur de la fen\xeatre")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"em"),Object(l.b)("td",{parentName:"tr",align:"left"},"Relatif \xe0 la taille de la police de l'\xe9l\xe9ment")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rem"),Object(l.b)("td",{parentName:"tr",align:"left"},"Relatif \xe0 la taille de la police de base")))))}s.isMDXComponent=!0}}]);