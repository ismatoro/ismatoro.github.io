(this.webpackJsonppubliarco=this.webpackJsonppubliarco||[]).push([[0],{154:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(50),r=t.n(c),i=(t(57),t(1)),o=(t(63),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer__col-left"},l.a.createElement("img",{src:"/logo-arco-web.png",alt:"logo arco"})),l.a.createElement("div",{className:"footer__col-right"},l.a.createElement("p",{className:"footer__title"},"Direcci\xf3n:"),l.a.createElement("p",null,"Fuente Perinda, 4 Bajo"),l.a.createElement("p",null,"49800 Toro (Zamora)"),l.a.createElement("p",{className:"footer__title"},"Tel\xe9fonos:"),l.a.createElement("p",{className:"footer__phones"},l.a.createElement("span",null,"980 691 983")," ",l.a.createElement("span",null,"610 732 191")," ",l.a.createElement("span",null,"635 526 496")),l.a.createElement("p",{className:"footer__title"},"Email:"),l.a.createElement("p",null,"publiarco.toro@gmail.com")))}),m=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("img",{src:"/favicon.png",alt:"logo arco"}),"Cat\xe1logo de producto 2020/21 - Publiarco")},s=t(15),d=t.n(s),p=t(17),u=function(e){return e&&-1!==e.indexOf("-")?"(".concat(e.split("-")[0],"-").concat(e.split("-")[1],") ").concat(p[e.split("-")[0]]," / ").concat(p[e.split("-")[1]]):e&&"(".concat(e,") ").concat(p[e])},E=function(e){e.target.src="/imagen-no-disponible.png"},g=function(e,a){return"velilla"===a.marca?v(e,a):f(e,a)},v=function(e,a){return"list"===e?"https://www.velillaconfeccion.com/media/catalog/product/cache/1/small_image/150x185/9df78eab33525d08d6e5fb8d27136e95/".concat(null===a||void 0===a?void 0:a.var).concat(null===a||void 0===a?void 0:a.ref.replaceAll("-",""),"/default.jpg"):"https://www.velillaconfeccion.com/media/catalog/product/cache/1/image/280x440/9df78eab33525d08d6e5fb8d27136e95/".concat(null===a||void 0===a?void 0:a.var).concat(null===a||void 0===a?void 0:a.ref.replaceAll("-",""))},f=function(e,a){return"list"===e?"https://grupomendi.com/".concat(null===a||void 0===a?void 0:a.var,"-home_default/").concat(null===a||void 0===a?void 0:a.ref.replaceAll(" ","-"),".jpg"):"https://grupomendi.com/".concat(null===a||void 0===a?void 0:a.var,"-large_default/").concat(null===a||void 0===a?void 0:a.ref.replaceAll(" ","-"),".jpg")},N=function(e){return e.proteccion.split("_")[0].split("+").join(" + ")},_=function(e){var a=e.colors,t=e.handleClick,n=e.small,c=d()("color-choose",{"color-choose--small":n});return l.a.createElement("div",{className:c},a.split("/").map((function(e,a){return l.a.createElement("div",{key:"color-".concat(e,"-").concat(a)},l.a.createElement("input",{"data-image":"color-".concat(e),type:"radio",id:"color-".concat(e),name:"color-".concat(e),value:e,onClick:t}),l.a.createElement("label",{htmlFor:"color-".concat(e)},l.a.createElement("span",{className:"color-".concat(e),title:u(e)})))})))},z=function(e){var a=e.product,t=g("list",a);return l.a.createElement("div",null,l.a.createElement(i.a,{to:"/producto/".concat(null===a||void 0===a?void 0:a.ref),className:"product-item"},l.a.createElement("img",{className:"product-item__image",src:t,alt:null===a||void 0===a?void 0:a.name,onError:E}),l.a.createElement("span",{className:"product-item__ref"},"Ref. ",null===a||void 0===a?void 0:a.ref),l.a.createElement("span",{className:"product-item__name"},(null===a||void 0===a?void 0:a.name.charAt(0).toUpperCase())+(null===a||void 0===a?void 0:a.name.slice(1))),a.proteccion&&l.a.createElement("span",null,l.a.createElement("b",null,"Protecci\xf3n:"),l.a.createElement("br",null),N(a)),a.colors&&l.a.createElement(_,{colors:null===a||void 0===a?void 0:a.colors,small:!0}),l.a.createElement("span",{className:"product-item__sizes"},null===a||void 0===a?void 0:a.tallas.trim().split("/").map((function(e){return e.trim()})).join(" / "))))},h=t(16),A=t.n(h),b=t(28),y=function(e){var a=e.product,t=g("list",a);return l.a.createElement("div",null,l.a.createElement(i.a,{to:"/producto/".concat(null===a||void 0===a?void 0:a.ref),className:"product-item"},l.a.createElement("img",{className:"product-item__image",src:t,alt:null===a||void 0===a?void 0:a.name,onError:E}),l.a.createElement("span",{className:"product-item__ref"},"Ref. ",null===a||void 0===a?void 0:a.ref),a.linea&&l.a.createElement("span",{className:"product-item__linea"},"L\xednea. ",null===a||void 0===a?void 0:a.linea),l.a.createElement("span",{className:"product-item__name"},l.a.createElement("b",null,(null===a||void 0===a?void 0:a.name.charAt(0).toUpperCase())+(null===a||void 0===a?void 0:a.name.slice(1)))),a.proteccion&&l.a.createElement("span",null,l.a.createElement("b",null,"Protecci\xf3n:"),l.a.createElement("br",null),N(a)),l.a.createElement("span",{className:"product-item__sizes"},null===a||void 0===a?void 0:a.tallas.trim().split("/").map((function(e){return e.trim()})).join(" / "))))},j=Object(h.withGoogleSheets)("Hoja 1")((function(e){var a=e.db,t=e.categoryId,n=b[t]?b[t]:t.replaceAll("-"," "),c=a["Hoja 1"].filter((function(e){return e.category===t&&"1"===e.activo})).map((function(e){switch(e.marca){case"mendi":return l.a.createElement(y,{key:e.ref,product:e});default:return l.a.createElement(z,{key:e.ref,product:e})}}));return l.a.createElement("div",{className:"product-list-container"},l.a.createElement(i.a,{to:"/",className:"product-list__link"},l.a.createElement("span",null,"< Volver a Categorias")),l.a.createElement("h1",null,"Listado de productos de ",n),l.a.createElement("h3",null,"".concat(c.length," productos")),l.a.createElement("ul",{className:"product-list"},c),l.a.createElement(i.a,{to:"/",className:"product-list__link"},l.a.createElement("span",null,"< Volver a Categorias")))})),x=t(27),P=t.n(x),S=t(29),C=function(e){var a=e.protection;return l.a.createElement("ul",{class:"protection-list"},function(){var e=a.split("_");return e[0].split("+").map((function(a,t){switch(a){case"S1P":return l.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/plantilla-".concat(e[1]?-1===e[1].indexOf("PLM")?"azul":"gris":"azul",".png")}));case"SBP":return l.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/plantilla-".concat(e[1]?-1===e[1].indexOf("PLM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/sbp.png"}));case"S3":return l.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/plantilla-".concat(e[1]?-1===e[1].indexOf("PLM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/s3.png"}));case"S2":return l.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/s2.png"}));case"S1":return l.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/puntera-".concat(e[1]?-1===e[1].indexOf("PUM")?"azul":"gris":"azul",".png")}),l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/s1.png"}));case"ESD":return l.a.createElement(l.a.Fragment,null);default:return l.a.createElement("li",{key:"proteccion-".concat(a,"-").concat(t)},l.a.createElement("img",{id:"proteccion-".concat(a),alt:"proteccion ".concat(a),src:"/normativa/".concat(a.toLowerCase(),".png")}))}}))}())},G=function(e){var a=e.product,t=Object(n.useState)(null),c=Object(S.a)(t,2),r=c[0],o=c[1],m=Object(n.useState)(""),s=Object(S.a)(m,2),p=s[0],v=s[1],f=a&&g("detail",a);Object(n.useEffect)((function(){if(a){var e=a.category.replaceAll("-"," ");v(e);var t=a.colors?null===a||void 0===a?void 0:a.colors.split("/")[0]:null;o(t)}}),[a]);var z=d()("active",{"mendi-product":"mendi"===(null===a||void 0===a?void 0:a.marca)});return a?l.a.createElement("main",{className:"container"},l.a.createElement("div",{className:"left-column"},a&&("mendi"===a.marca?l.a.createElement("img",{className:z,src:"".concat(f),alt:"imagen de producto",onError:E}):null===a||void 0===a?void 0:a.colors.split("/").filter((function(e){return e===r})).map((function(e){var t=1===(null===a||void 0===a?void 0:a.colors.split("/").length)?"default.jpg":"frontal_".concat(e.replaceAll("-","_"),".jpg");return l.a.createElement("img",{"data-image":"color-".concat(e),key:"color-".concat(e),className:z,src:"".concat(f,"/").concat(t),alt:"imagen de producto",onError:E})})))),l.a.createElement("div",{className:"right-column"},l.a.createElement("div",{className:"product-description"},l.a.createElement(i.a,{to:"/listado/".concat(a.category),className:"product-description__category-link"},l.a.createElement("span",null,"< Volver a ".concat(p))),l.a.createElement("p",{className:"product-ref"},"Ref. ",null===a||void 0===a?void 0:a.ref," ",a.linea&&l.a.createElement("span",{className:"product-line"}," ","- L\xednea. ",null===a||void 0===a?void 0:a.linea.toUpperCase())," "),l.a.createElement("h1",null,(null===a||void 0===a?void 0:a.name.charAt(0).toUpperCase())+("velilla"===a.marca?null===a||void 0===a?void 0:a.name.slice(1):null===a||void 0===a?void 0:a.name.slice(1).toUpperCase())),a.description&&l.a.createElement("p",null,a.description)),l.a.createElement("div",{className:"product-configuration"},a.colors&&l.a.createElement("div",{className:"product-feature"},l.a.createElement("span",{className:"product-feature__title"},"Colores disponibles"),l.a.createElement(_,{colors:null===a||void 0===a?void 0:a.colors,handleClick:function(e){var a=e.currentTarget.value?e.currentTarget.value:0;o(a)}}),l.a.createElement("span",{className:"product-feature__color-name"},u(r))),l.a.createElement("div",{className:"product-feature product-size"},l.a.createElement("span",{className:"product-feature__title"},"Tallas elegibles"," ",l.a.createElement("span",{className:"product-sizes__link"},"(",l.a.createElement(i.a,{to:"/guia-de-tallas"},"Gu\xeda de tallas"),")")),l.a.createElement("div",{className:"size-choose"},null===a||void 0===a?void 0:a.tallas.trim().split("/").map((function(e){return e.trim()})).join(" / "))),a.proteccion&&l.a.createElement("span",null,l.a.createElement("b",null,"Protecci\xf3n:"),l.a.createElement("span",{className:"product-sizes__link"},"(",l.a.createElement(i.a,{to:"/normativa-calzado"},"Normativa"),")"),l.a.createElement("br",null),N(a),l.a.createElement(C,{protection:a.proteccion}))))):l.a.createElement("h1",null,"Producto no encontrado")},w=P()("Hoja 1")((function(e){var a=e.productId,t=e.db["Hoja 1"].find((function(e){return e.ref===a}));return l.a.createElement("section",{className:"product-page"},l.a.createElement(G,{product:t}))})),k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"categories__title"},"Listado de categorias de productos"),l.a.createElement("ul",{className:"categories"},l.a.createElement(i.a,{as:"li",to:"/listado/alta-visibilidad-y-prendas-tecnicas",className:"categories__item"},l.a.createElement("span",null,"Alta Visibilidad y Prendas T\xe9cnicas")),l.a.createElement(i.a,{as:"li",to:"/listado/industria-base",className:"categories__item"},l.a.createElement("span",null,"Industria Base")),l.a.createElement(i.a,{as:"li",to:"/listado/industria-alimentaria",className:"categories__item"},l.a.createElement("span",null,"Industria Alimentaria")),l.a.createElement(i.a,{as:"li",to:"/listado/sanidad-y-limpieza",className:"categories__item"},l.a.createElement("span",null,"Sanidad y Limpieza")),l.a.createElement(i.a,{as:"li",to:"/listado/hosteleria",className:"categories__item"},l.a.createElement("span",null,"Hosteler\xeda")),l.a.createElement(i.a,{as:"li",to:"/listado/calzado-y-guantes",className:"categories__item"},l.a.createElement("span",null,"Calzado y Guantes"))),l.a.createElement("h2",{className:"categories__title"},"Gu\xeda de tallas"),l.a.createElement("ul",{className:"categories"},l.a.createElement(i.a,{as:"li",to:"/guia-de-tallas",className:"categories__item"},l.a.createElement("span",null,"Consulta nuestra gu\xeda de tallas para productos")),l.a.createElement(i.a,{as:"li",to:"/normativa-calzado",className:"categories__item"},l.a.createElement("span",null,"Consulta la normativa sobre calzado"))))},T=function(){return l.a.createElement("div",{className:"sizes"},l.a.createElement("h1",{className:"sizes__header"},"Tallaje"),l.a.createElement("p",{className:"sizes__text"},"El cliente puede utilizar estas tablas para confirmar que talla necesita. Las medidas que aportamos en las tablas son anat\xf3micas, tomadas del cuerpo desnudo. Cuando se fabrica una prenda, debemos agregar una holgura para conseguir comodidad. Dicha holgura var\xeda seg\xfan el dise\xf1o, tejido, sexo, etc. convirti\xe9ndola en una prenda m\xe1s o menos entallada."),l.a.createElement("p",null,l.a.createElement("span",null,"*")," Recuerde que para tomar estas medidas correctamente, tendr\xe1 que medir el contorno completo"),l.a.createElement("img",{className:"sizes__image",src:"/tallaje1.jpg",alt:"guia de tallas"}),l.a.createElement("p",{className:"sizes__title"},"Guia de tallas Hombre"),l.a.createElement("img",{className:"sizes__image",src:"/tallaje2.jpg",alt:"guia de tallas hombre"}),l.a.createElement("p",{className:"sizes__title"},"Guia de tallas Mujer"),l.a.createElement("img",{className:"sizes__image",src:"/tallaje3.jpg",alt:"guia de tallas mujer"}),l.a.createElement("p",{className:"sizes__title"},"Guia de tallas Unisex"),l.a.createElement("img",{className:"sizes__image",src:"/tallaje4.jpg",alt:"guia de tallas unisex"}))},O=function(){return l.a.createElement("div",{className:"sizes"},l.a.createElement("h1",{className:"sizes__header"},"Normativa"),l.a.createElement("div",{className:"leyenda-container row"},l.a.createElement("div",{className:"leyenda-col-1 col-xs-12 col-sm-12 col-md-12 col-lg-4"},l.a.createElement("div",{className:"iso-leyenda"},l.a.createElement("p",{className:"iso-title"},"Calzado de seguridad en ISO 20345:2011"),l.a.createElement("div",{className:"leyenda-sbp leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/sbp.png",alt:"SBP"})),l.a.createElement("div",{className:"puntera-plantilla-inner"},l.a.createElement("img",{src:"/normativa/puntera-azulgris.png",alt:"Puntera Azul/Gris"}),l.a.createElement("img",{src:"/normativa/plantilla-azulgris.png",alt:"Plantilla Azul/Gris"}))),l.a.createElement("div",{className:"leyenda-s1 leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/s1.png",alt:"S1"})),l.a.createElement("div",{className:"puntera-plantilla-inner"},l.a.createElement("img",{src:"/normativa/puntera-azulgris.png",alt:"Puntera Azul/Gris"})),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"}),l.a.createElement("img",{src:"/normativa/fo.png",alt:"Fo"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"))),l.a.createElement("div",{className:"leyenda-s1p leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/s1p.png",alt:"S1P"})),l.a.createElement("div",{className:"puntera-plantilla-inner"},l.a.createElement("img",{src:"/normativa/puntera-azulgris.png",alt:"Puntera Azul/Gris"}),l.a.createElement("img",{src:"/normativa/plantilla-azulgris.png",alt:"Plantilla Azul/Gris"})),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"}),l.a.createElement("img",{src:"/normativa/fo.png",alt:"Fo"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"))),l.a.createElement("div",{className:"leyenda-s2 leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/s2.png",alt:"S2"})),l.a.createElement("div",{className:"puntera-plantilla-inner"},l.a.createElement("img",{src:"/normativa/puntera-azulgris.png",alt:"Puntera Azul/Gris"})),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"}),l.a.createElement("img",{src:"/normativa/fo.png",alt:"Fo"}),l.a.createElement("img",{src:"/normativa/wru.png",alt:"Wru"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"))),l.a.createElement("div",{className:"leyenda-s3 leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/s3.png",alt:"S3"})),l.a.createElement("div",{className:"puntera-plantilla-inner"},l.a.createElement("img",{src:"/normativa/puntera-azulgris.png",alt:"Puntera Azul/Gris"}),l.a.createElement("img",{src:"/normativa/plantilla-azulgris.png",alt:"Plantilla Azul/Gris"})),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"}),l.a.createElement("img",{src:"/normativa/fo.png",alt:"Fo"}),l.a.createElement("img",{src:"/normativa/wru.png",alt:"Wru"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"),l.a.createElement("p",null,"Suela con tacos")))),l.a.createElement("div",{className:"iso-leyenda"},l.a.createElement("p",{className:"iso-title"},"Calzado de trabajo en ISO 20347:2012"),l.a.createElement("div",{className:"leyenda-01 leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/01.png",alt:"01"})),l.a.createElement("div",{className:"puntera-plantilla-inner"}),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"))),l.a.createElement("div",{className:"leyenda-02 leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/02.png",alt:"02"})),l.a.createElement("div",{className:"puntera-plantilla-inner"}),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"}),l.a.createElement("img",{src:"/normativa/wru.png",alt:"Wru"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"))),l.a.createElement("div",{className:"leyenda-03 leyenda-norma"},l.a.createElement("div",{className:"normativa-inner"},l.a.createElement("img",{src:"/normativa/03.png",alt:"03"})),l.a.createElement("div",{className:"puntera-plantilla-inner"},l.a.createElement("img",{src:"/normativa/plantilla-azulgris.png",alt:"Plantilla Azul/Gris"})),l.a.createElement("div",{className:"pictograma-inner"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"}),l.a.createElement("img",{src:"/normativa/e.png",alt:"E"}),l.a.createElement("img",{src:"/normativa/wru.png",alt:"Wru"})),l.a.createElement("div",{className:"iso-norma-txt"},l.a.createElement("p",null,"Trasera cerrada"),l.a.createElement("p",null,"Suela con tacos"))))),l.a.createElement("div",{className:"leyenda-col-2 col-xs-12 col-sm-12 col-md-12 col-lg-8"},l.a.createElement("p",{className:"definiciones-title"},"Definiciones"),l.a.createElement("div",{className:"definiciones-punteras-plantillas"},l.a.createElement("div",{className:"definiciones-punteras"},l.a.createElement("p",{className:"definicion-planpun-title"},"Puntera de protecci\xf3n 200 julios"),l.a.createElement("div",{className:"definicion-planpun-inner"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/puntera-azul.png",alt:"Puntera Azul"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"No met\xe1lica"))),l.a.createElement("div",{className:"definicion-planpun-inner"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/puntera-gris.png",alt:"Puntera Gris"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Met\xe1lica")))),l.a.createElement("div",{className:"definiciones-plantillas"},l.a.createElement("p",{className:"definicion-planpun-title"},"Plantilla antiperformaci\xf3n"),l.a.createElement("div",{className:"definicion-planpun-inner"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/plantilla-azul.png",alt:"Plantilla Azul"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Textil composite alta"),l.a.createElement("p",null,"Tenacidad 0 penetraci\xedon"))),l.a.createElement("div",{className:"definicion-planpun-inner"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/plantilla-gris.png",alt:"Plantilla Gris"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Acero inoxidable"))))),l.a.createElement("div",{className:"definiciones-pictogramas"},l.a.createElement("div",{className:"definiciones-pictograma-inner"},l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/a.png",alt:"A"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Calzado antiest\xe1tico"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/e.png",alt:"E"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Capacidad de absorci\xf3n de energ\xeda en el tal\xf3n"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/ci.png",alt:"Ci"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Suela aislante contra el fr\xedo"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/hi.png",alt:"Hi"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Suela aislante contra el calor"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/hro.png",alt:"Hro"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Resistencia de la suela al calor por contacto")))),l.a.createElement("div",{className:"definiciones-pictograma-inner"},l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/an.png",alt:"An"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Protecci\xf3n de los tobillos"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/fo.png",alt:"Fo"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Suela resistente a hidrocarburos"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/wr.png",alt:"Wr"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Calzado resistente al agua"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/wru.png",alt:"Wru"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Corte resistente a la penetraci\xf3n y absorci\xf3n de agua")))),l.a.createElement("div",{className:"definiciones-pictograma-inner"},l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/sra.png",alt:"SRA"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Cer\xe1mica +"),l.a.createElement("p",null,"Soluci\xf3n detergente"),l.a.createElement("p",null,"Plano: \u2265 0,32"),l.a.createElement("p",null,"Tac\xf3n: \u2265 0,28"))),l.a.createElement("div",{className:"definicion-pictograma"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/srb.png",alt:"SRB"})),l.a.createElement("div",{className:"definicion-pictograma-txt"},l.a.createElement("p",null,"Acero +"),l.a.createElement("p",null,"Glicerina"),l.a.createElement("p",null,"Plano: \u2265 0,18"),l.a.createElement("p",null,"Tac\xf3n: \u2265 0,13"))),l.a.createElement("div",{className:"definicion-pictograma definicion-src"},l.a.createElement("div",{className:"definicion-pictograma-img"},l.a.createElement("img",{src:"/normativa/src.png",alt:"SRC"}),l.a.createElement("img",{src:"/normativa/equal.png",alt:"Igual a"}),l.a.createElement("img",{src:"/normativa/sra.png",alt:"SRA"}),l.a.createElement("img",{src:"/normativa/plus.png",alt:"M\xe1s"}),l.a.createElement("img",{src:"/normativa/src.png",alt:"SRB"}))))))))};var M=function(){return l.a.createElement(A.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement("section",{className:"main-section"},l.a.createElement(i.b,{basepath:"/",className:"checkout__content"},l.a.createElement(k,{path:"/"}),l.a.createElement(j,{path:"listado/:categoryId"}),l.a.createElement(w,{path:"producto/:productId"}),l.a.createElement(T,{path:"guia-de-tallas"}),l.a.createElement(O,{path:"normativa-calzado"}))),l.a.createElement(o,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e){e.exports=JSON.parse('{"0":"Negro","1":"Azul marino","2":"Verde","3":"Verde caza","4":"Verde bosque","5":"Celeste","6":"Beige","7":"Blanco","8":"Gris","9":"Azulina","10":"Azul petr\xf3leo","12":"Rojo","16":"Naranja","17":"Amarillo","18":"Granate","19":"Naranja fluor","20":"Amarillo fluor","21":"Mostaza","22":"Naranja claro","23":"Fucsia","24":"Rojo coral","25":"Verde lima","26":"Morado","27":"Turquesa","28":"Turquesa claro","29":"Verde hierba","30":"Menta","39":"Azul oc\xe9ano","41":"Gris claro","42":"Gris oscuro","43":"Amarillo claro","46":"Beige arena","47":"Beige claro","49":"Marr\xf3n","53":"Rosa fresa","54":"Mandarina","55":"Celeste claro","56":"Rojo vivo","57":"Caldero","58":"Gris hielo","59":"Gris perla","60":"Azul marino / Amarillo fluor","61":"Azul navy","62":"Azul ultramar","63":"Azul","64":"Azul-Azul","65":"Azul royal","67":"Burdeos","68":"Berenjena","70":"Amarillo fluor / Azul marino","80":"Gris / Amarillo fluor","90":"Amarillo fluor / Gris","110":"Amarillo fluor / Verde","120":"Verde / Amarillo fluor","140":"Amarillo fluor / Azulina","150":"Amarillo fluor / Verde caza","160":"Verde caza / Amarillo fluor","170":"Verde hierba / Amarillo fluor","180":"Amarillo fluor / Verde hierba","190":"Azul navy / Amarillo fluor","210":"Naranja fluor / Azul marino","230":"Azul marino / Naranja fluor","240":"Gris / Naranja fluor"}')},28:function(e){e.exports=JSON.parse('{"industria-base":"Industria base","industria-alimentaria":"Industria alimentaria","hosteleria":"Hosteler\xeda","calzado-y-guantes":"Calzado y guantes","alta-visibilidad-y-prendas-tecnicas":"Alta visibilidad y prendas t\xe9cnicas","sanidad-y-limpieza":"Sanidad y limpieza","desechables":"Desechables"}')},52:function(e,a,t){e.exports=t(154)},57:function(e,a,t){},63:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.1674913e.chunk.js.map