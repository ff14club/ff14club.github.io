(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(t,e,n){var content=n(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("03f227fa",content,!0,{sourceMap:!1})},160:function(t,e,n){var content=n(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2afa3d5e",content,!0,{sourceMap:!1})},163:function(t,e,n){"use strict";var o=n(159);n.n(o).a},164:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,'.guide[data-v-5a4b4556]{background-color:#efefef;box-shadow:0 4px 6px 0 rgba(0,0,0,.2);border-radius:2px;border-top:6px solid #2c3e50;display:block;text-decoration:none;color:rgba(0,0,0,.8)}.guide__preview[data-v-5a4b4556]{width:100%;margin:auto;overflow:hidden;background-size:cover;background-position:50%;background-color:#2c3e50}.guide__preview[data-v-5a4b4556]:before{content:"";padding-top:50%;float:left}.guide__title[data-v-5a4b4556]{padding:0 20px;font-size:20px;height:100px;display:flex;align-items:center;line-height:1.3}',""])},165:function(t,e,n){"use strict";var o=n(160);n.n(o).a},166:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".pagination[data-v-2b1c9bec]{display:flex;margin-bottom:20px}.pagination.first-disabled[data-v-2b1c9bec] :first-child{opacity:.5;pointer-events:none}.pagination__item[data-v-2b1c9bec]{background-color:#2c3e50;color:#fff;text-decoration:none;width:60px;height:60px;display:flex;align-items:center;justify-content:center;margin-right:15px;font-weight:700;font-size:20px;border-radius:2px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pagination__item.nuxt-link-active[data-v-2b1c9bec]{opacity:.5;pointer-events:none}",""])},168:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("732f33c7",content,!0,{sourceMap:!1})},177:function(t,e,n){"use strict";var o={name:"Guide",props:["title","preview","link"]},r=(n(163),n(5)),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"guide",attrs:{to:"/guides/"+this.link}},[e("div",{staticClass:"guide__preview",style:"background-image: url("+this.preview+");"}),this._v(" "),e("div",{staticClass:"guide__title"},[this._v(this._s(this.title))])])},[],!1,null,"5a4b4556",null);e.a=component.exports},178:function(t,e,n){"use strict";var o=n(6),r=n(11),c={name:"Pagination",props:["firstDisabled"],computed:Object(o.a)({},Object(r.b)(["getGuidesCount"]),{getPagesCount:function(){var t=Math.floor(this.getGuidesCount/6),e=[];if(this.getGuidesCount%6==0)for(var i=1;i<=t;i++)e.push(i);else for(var n=1;n<=t+1;n++)e.push(n);return e}})},l=(n(165),n(5)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container pagination",class:{"first-disabled":t.firstDisabled}},t._l(t.getPagesCount,function(e){return n("nuxt-link",{key:e,staticClass:"pagination__item",attrs:{to:"guides/page/"+e}},[t._v(t._s(e))])}),1)},[],!1,null,"2b1c9bec",null);e.a=component.exports},183:function(t,e,n){"use strict";var o=n(168);n.n(o).a},184:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".guides-page[data-v-0961e773]{padding-top:30px;padding-bottom:30px}.guides-col[data-v-0961e773]{width:50%;padding:0 15px;margin-bottom:20px}@media (max-width:992px){.guides-col[data-v-0961e773]{width:100%}}",""])},197:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(177),c=n(11),l=n(178),d={components:{Guide:r.a,PaginationGuides:l.a},head:{title:"Новости, гайды по игре Final Fantasy XIV"},data:function(){return{page:""}},computed:Object(o.a)({},Object(c.c)(["guides"]),Object(c.b)(["getNumOfArticles"]),{getArticles:function(){var t=6*(this.page-1),e=t+6;return this.getNumOfArticles(t,e,"guides")}}),created:function(){this.page=+this.$router.currentRoute.params.page}},f=(n(183),n(5)),component=Object(f.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"guides-page container"},[e("div",{staticClass:"row"},this._l(this.getArticles,function(t){return e("div",{key:t.link,staticClass:"guides-col"},[e("Guide",{attrs:{title:t.title,preview:t.preview,link:t.link}})],1)}),0),this._v(" "),this.getGuidesCount>4?e("PaginationGuides"):this._e()],1)},[],!1,null,"0961e773",null);e.default=component.exports}}]);