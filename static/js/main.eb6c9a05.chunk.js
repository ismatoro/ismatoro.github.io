(this.webpackJsonppubliarco=this.webpackJsonppubliarco||[]).push([[0],{154:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(50),r=t.n(n),o=(t(57),t(1)),i=(t(63),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__col-left"},c.a.createElement("img",{src:"/logo-arco-web.png",alt:"logo arco"})),c.a.createElement("div",{className:"footer__col-right"},c.a.createElement("p",{className:"footer__title"},"Direcci\xf3n:"),c.a.createElement("p",null,"Fuente Perinda, 4 Bajo"),c.a.createElement("p",null,"49800 Toro (Zamora)"),c.a.createElement("p",{className:"footer__title"},"Tel\xe9fonos:"),c.a.createElement("p",null,"980 691 983 - 610 732 191 - 635 526 496"),c.a.createElement("p",{className:"footer__title"},"Email:"),c.a.createElement("p",null,"publiarco.toro@gmail.com")))}),s=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("img",{src:"/favicon.png",alt:"logo arco"}),"Cat\xe1logo de producto 2020/21 - Publiarco")},m=t(15),u=t.n(m),d=t(17),p=function(e){return e&&-1!==e.indexOf("-")?"(".concat(e.split("-")[0],"-").concat(e.split("-")[1],") ").concat(d[e.split("-")[0]]," / ").concat(d[e.split("-")[1]]):e&&"(".concat(e,") ").concat(d[e])},E=function(e){console.log("here",e),e.target.src="/imagen-no-disponible.png"},g=function(e,a){return"velilla"===a.marca?v(e,a):f(e,a)},v=function(e,a){return"list"===e?"https://www.velillaconfeccion.com/media/catalog/product/cache/1/small_image/150x185/9df78eab33525d08d6e5fb8d27136e95/".concat(null===a||void 0===a?void 0:a.var).concat(null===a||void 0===a?void 0:a.ref.replaceAll("-",""),"/default.jpg"):"https://www.velillaconfeccion.com/media/catalog/product/cache/1/image/280x440/9df78eab33525d08d6e5fb8d27136e95/".concat(null===a||void 0===a?void 0:a.var).concat(null===a||void 0===a?void 0:a.ref.replaceAll("-",""))},f=function(e,a){return"list"===e?"https://grupomendi.com/".concat(null===a||void 0===a?void 0:a.var,"-home_default/").concat(null===a||void 0===a?void 0:a.ref.replaceAll(" ","-"),".jpg"):"https://grupomendi.com/".concat(null===a||void 0===a?void 0:a.var,"-large_default/").concat(null===a||void 0===a?void 0:a.ref.replaceAll(" ","-"),".jpg")},_=function(e){return e.proteccion.split("_")[0].split("+").join(" + ")},N=function(e){var a=e.colors,t=e.handleClick,l=e.small,n=u()("color-choose",{"color-choose--small":l});return c.a.createElement("div",{className:n},a.split("/").map((function(e,a){return c.a.createElement("div",{key:"color-".concat(e,"-").concat(a)},c.a.createElement("input",{"data-image":"color-".concat(e),type:"radio",id:"color-".concat(e),name:"color-".concat(e),value:e,onClick:t}),c.a.createElement("label",{htmlFor:"color-".concat(e)},c.a.createElement("span",{className:"color-".concat(e),title:p(e)})))})))},h=function(e){var a=e.product,t=g("list",a);return c.a.createElement("div",null,c.a.createElement(o.a,{to:"/producto/".concat(null===a||void 0===a?void 0:a.ref),className:"product-item"},c.a.createElement("img",{className:"product-item__image",src:t,alt:null===a||void 0===a?void 0:a.name,onError:E}),c.a.createElement("span",{className:"product-item__ref"},"Ref. ",null===a||void 0===a?void 0:a.ref),c.a.createElement("span",{className:"product-item__name"},(null===a||void 0===a?void 0:a.name.charAt(0).toUpperCase())+(null===a||void 0===a?void 0:a.name.slice(1))),a.colors&&c.a.createElement(N,{colors:null===a||void 0===a?void 0:a.colors,small:!0}),a.proteccion&&c.a.createElement("span",null,a.proteccion),c.a.createElement("span",{className:"product-item__sizes"},null===a||void 0===a?void 0:a.tallas.trim().split("/").map((function(e){return e.trim()})).join(" / "))))},z=t(16),b=t.n(z),A=t(28),j=function(e){var a=e.product,t=g("list",a);return c.a.createElement("div",null,c.a.createElement(o.a,{to:"/producto/".concat(null===a||void 0===a?void 0:a.ref),className:"product-item"},c.a.createElement("img",{className:"product-item__image",src:t,alt:null===a||void 0===a?void 0:a.name,onError:E}),c.a.createElement("span",{className:"product-item__ref"},"Ref. ",null===a||void 0===a?void 0:a.ref),a.linea&&c.a.createElement("span",{className:"product-item__linea"},"L\xednea. ",null===a||void 0===a?void 0:a.linea),c.a.createElement("span",{className:"product-item__name"},c.a.createElement("b",null,(null===a||void 0===a?void 0:a.name.charAt(0).toUpperCase())+(null===a||void 0===a?void 0:a.name.slice(1)))),a.proteccion&&c.a.createElement("span",null,c.a.createElement("b",null,"Protecci\xf3n:"),c.a.createElement("br",null),_(a)),c.a.createElement("span",{className:"product-item__sizes"},null===a||void 0===a?void 0:a.tallas.trim().split("/").map((function(e){return e.trim()})).join(" / "))))},y=Object(z.withGoogleSheets)("Hoja 1")((function(e){var a=e.db,t=e.categoryId,l=A[t]?A[t]:t.replaceAll("-"," "),n=a["Hoja 1"].filter((function(e){return e.category===t&&"1"===e.activo})).map((function(e){switch(e.marca){case"mendi":return c.a.createElement(j,{key:e.ref,product:e});default:return c.a.createElement(h,{key:e.ref,product:e})}}));return c.a.createElement("div",{className:"product-list-container"},c.a.createElement(o.a,{to:"/",className:"product-list__link"},c.a.createElement("span",null,"< Volver a Categorias")),c.a.createElement("h1",null,"Listado de productos de ",l),c.a.createElement("h3",null,"".concat(n.length," productos")),c.a.createElement("ul",{className:"product-list"},n),c.a.createElement(o.a,{to:"/",className:"product-list__link"},c.a.createElement("span",null,"< Volver a Categorias")))})),k=t(27),C=t.n(k),w=t(29),x=function(e){var a=e.protection;return c.a.createElement("ul",{class:"protection-list"},function(){var e=a.split("_");return e[0].split("+").map((function(a,t){switch(a){case"S1P":return c.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/plantilla-".concat(e[1]?-1===e[1].indexOf("PLM")?"azul":"gris":"azul",".png")}));case"SBP":return c.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/plantilla-".concat(e[1]?-1===e[1].indexOf("PLM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/sbp.png"}));case"S3":return c.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/plantilla-".concat(e[1]?-1===e[1].indexOf("PLM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/s3.png"}));case"S2":return c.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/s2.png"}));case"S1":return c.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/s1.png"}));case"ESD":return c.a.createElement(c.a.Fragment,null);default:return c.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},c.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/".concat(a.toLowerCase(),".png")}))}}))}())},O=function(e){var a=e.product,t=Object(l.useState)(null),n=Object(w.a)(t,2),r=n[0],i=n[1],s=Object(l.useState)(""),m=Object(w.a)(s,2),d=m[0],v=m[1],f=a&&g("detail",a);Object(l.useEffect)((function(){if(a){var e=a.category.replaceAll("-"," ");v(e);var t=a.colors?null===a||void 0===a?void 0:a.colors.split("/")[0]:null;i(t)}}),[a]);var h=u()("active",{"mendi-product":"mendi"===(null===a||void 0===a?void 0:a.marca)});return a?c.a.createElement("main",{className:"container"},c.a.createElement("div",{className:"left-column"},a&&("mendi"===a.marca?c.a.createElement("img",{className:h,src:"".concat(f),alt:"imagen de producto",onError:E}):null===a||void 0===a?void 0:a.colors.split("/").filter((function(e){return e===r})).map((function(e){var t=1===(null===a||void 0===a?void 0:a.colors.split("/").length)?"default.jpg":"frontal_".concat(e.replaceAll("-","_"),".jpg");return c.a.createElement("img",{"data-image":"color-".concat(e),key:"color-".concat(e),className:h,src:"".concat(f,"/").concat(t),alt:"imagen de producto",onError:E})})))),c.a.createElement("div",{className:"right-column"},c.a.createElement("div",{className:"product-description"},c.a.createElement(o.a,{to:"/listado/".concat(a.category),className:"product-description__category-link"},c.a.createElement("span",null,"< Volver a ".concat(d))),c.a.createElement("p",{className:"product-ref"},"Ref. ",null===a||void 0===a?void 0:a.ref," ",a.linea&&c.a.createElement("span",{className:"product-line"}," ","- L\xednea. ",null===a||void 0===a?void 0:a.linea.toUpperCase())," "),c.a.createElement("h1",null,(null===a||void 0===a?void 0:a.name.charAt(0).toUpperCase())+("velilla"===a.marca?null===a||void 0===a?void 0:a.name.slice(1):null===a||void 0===a?void 0:a.name.slice(1).toUpperCase()))),c.a.createElement("div",{className:"product-configuration"},a.colors&&c.a.createElement("div",{className:"product-feature"},c.a.createElement("span",{className:"product-feature__title"},"Colores disponibles"),c.a.createElement(N,{colors:null===a||void 0===a?void 0:a.colors,handleClick:function(e){var a=e.currentTarget.value?e.currentTarget.value:0;i(a)}}),c.a.createElement("span",{className:"product-feature__color-name"},p(r))),c.a.createElement("div",{className:"product-feature product-size"},c.a.createElement("span",{className:"product-feature__title"},"Tallas elegibles"," ",c.a.createElement("span",{className:"product-sizes__link"},"(",c.a.createElement(o.a,{to:"/guia-de-tallas"},"Gu\xeda de tallas"),")")),c.a.createElement("div",{className:"size-choose"},null===a||void 0===a?void 0:a.tallas.trim().split("/").map((function(e){return e.trim()})).join(" / "))),a.proteccion&&c.a.createElement("span",null,c.a.createElement("b",null,"Protecci\xf3n:"),c.a.createElement("br",null),_(a),c.a.createElement(x,{protection:a.proteccion}))))):c.a.createElement("h1",null,"Producto no encontrado")},P=C()("Hoja 1")((function(e){var a=e.productId,t=e.db["Hoja 1"].find((function(e){return e.ref===a}));return c.a.createElement("section",{className:"product-page"},c.a.createElement(O,{product:t}))})),G=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"categories__title"},"Listado de categorias de productos"),c.a.createElement("ul",{className:"categories"},c.a.createElement(o.a,{as:"li",to:"/listado/alta-visibilidad-y-prendas-tecnicas",className:"categories__item"},c.a.createElement("span",null,"Alta Visibilidad y Prendas T\xe9cnicas")),c.a.createElement(o.a,{as:"li",to:"/listado/industria-base",className:"categories__item"},c.a.createElement("span",null,"Industria Base")),c.a.createElement(o.a,{as:"li",to:"/listado/industria-alimentaria",className:"categories__item"},c.a.createElement("span",null,"Industria Alimentaria")),c.a.createElement(o.a,{as:"li",to:"/listado/sanidad-y-limpieza",className:"categories__item"},c.a.createElement("span",null,"Sanidad y Limpieza")),c.a.createElement(o.a,{as:"li",to:"/listado/hosteleria",className:"categories__item"},c.a.createElement("span",null,"Hosteler\xeda")),c.a.createElement(o.a,{as:"li",to:"/listado/calzado-y-guantes",className:"categories__item"},c.a.createElement("span",null,"Calzado y Guantes"))),c.a.createElement("h2",{className:"categories__title"},"Gu\xeda de tallas"),c.a.createElement("ul",{className:"categories"},c.a.createElement(o.a,{as:"li",to:"/guia-de-tallas",className:"categories__item"},c.a.createElement("span",null,"Consulta nuestra gu\xeda de tallas para productos"))))},V=function(){return c.a.createElement("div",{className:"sizes"},c.a.createElement("h1",{className:"sizes__header"},"Tallaje"),c.a.createElement("p",{className:"sizes__text"},"El cliente puede utilizar estas tablas para confirmar que talla necesita. Las medidas que aportamos en las tablas son anat\xf3micas, tomadas del cuerpo desnudo. Cuando se fabrica una prenda, debemos agregar una holgura para conseguir comodidad. Dicha holgura var\xeda seg\xfan el dise\xf1o, tejido, sexo, etc. convirti\xe9ndola en una prenda m\xe1s o menos entallada."),c.a.createElement("p",null,c.a.createElement("span",null,"*")," Recuerde que para tomar estas medidas correctamente, tendr\xe1 que medir el contorno completo"),c.a.createElement("img",{className:"sizes__image",src:"/tallaje1.jpg",alt:"guia de tallas"}),c.a.createElement("p",{className:"sizes__title"},"Guia de tallas Hombre"),c.a.createElement("img",{className:"sizes__image",src:"/tallaje2.jpg",alt:"guia de tallas hombre"}),c.a.createElement("p",{className:"sizes__title"},"Guia de tallas Mujer"),c.a.createElement("img",{className:"sizes__image",src:"/tallaje3.jpg",alt:"guia de tallas mujer"}),c.a.createElement("p",{className:"sizes__title"},"Guia de tallas Unisex"),c.a.createElement("img",{className:"sizes__image",src:"/tallaje4.jpg",alt:"guia de tallas unisex"}))};var M=function(){return c.a.createElement(b.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement("section",{className:"main-section"},c.a.createElement(o.b,{basepath:"/",className:"checkout__content"},c.a.createElement(G,{path:"/"}),c.a.createElement(y,{path:"listado/:categoryId"}),c.a.createElement(P,{path:"producto/:productId"}),c.a.createElement(V,{path:"guia-de-tallas"}))),c.a.createElement(i,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e){e.exports=JSON.parse('{"0":"Negro","1":"Azul marino","2":"Verde","3":"Verde caza","4":"Verde bosque","5":"Celeste","6":"Beige","7":"Blanco","8":"Gris","9":"Azulina","10":"Azul petr\xf3leo","12":"Rojo","16":"Naranja","17":"Amarillo","18":"Granate","19":"Naranja fluor","20":"Amarillo fluor","21":"Mostaza","22":"Naranja claro","23":"Fucsia","24":"Rojo coral","25":"Verde lima","26":"Morado","27":"Turquesa","28":"Turquesa claro","29":"Verde hierba","30":"Menta","39":"Azul oc\xe9ano","42":"Gris oscuro","43":"Amarillo claro","46":"Beige arena","47":"Beige claro","49":"Marr\xf3n","53":"Rosa fresa","54":"Mandarina","55":"Celeste claro","56":"Rojo vivo","57":"Caldero","58":"Gris hielo","59":"Gris perla","60":"Azul marino / Amarillo fluor","61":"Azul navy","62":"Azul ultramar","63":"Azul","64":"Azul-Azul","65":"Azul royal","67":"Burdeos","68":"Berenjena","70":"Amarillo fluor / Azul marino","80":"Gris / Amarillo fluor","90":"Amarillo fluor / Gris","110":"Amarillo fluor / Verde","120":"Verde / Amarillo fluor","140":"Amarillo fluor / Azulina","150":"Amarillo fluor / Verde caza","160":"Verde caza / Amarillo fluor","170":"Verde hierba / Amarillo fluor","180":"Amarillo fluor / Verde hierba","190":"Azul navy / Amarillo fluor","210":"Naranja fluor / Azul marino","230":"Azul marino / Naranja fluor","240":"Gris / Naranja fluor"}')},28:function(e){e.exports=JSON.parse('{"industria-base":"Industria base","industria-alimentaria":"Industria alimentaria","hosteleria":"Hosteler\xeda","calzado-y-guantes":"Calzado y guantes","alta-visibilidad-y-prendas-tecnicas":"Alta visibilidad y prendas t\xe9cnicas","sanidad-y-limpieza":"Sanidad y limpieza","desechables":"Desechables"}')},52:function(e,a,t){e.exports=t(154)},57:function(e,a,t){},63:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.eb6c9a05.chunk.js.map