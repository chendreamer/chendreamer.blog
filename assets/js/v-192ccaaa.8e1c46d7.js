"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6931],{9569:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-192ccaaa",path:"/web/CSS.html",title:"CSS",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"盒子模型",slug:"盒子模型",children:[]},{level:2,title:"box-sizing",slug:"box-sizing",children:[{level:3,title:"文字流光效果",slug:"文字流光效果",children:[]},{level:3,title:"网页灰度设置",slug:"网页灰度设置",children:[]}]}],filePathRelative:"web/CSS.md",git:{updatedTime:1670232669e3,contributors:[]}}},436:(n,s,a)=>{a.r(s),a.d(s,{default:()=>U});var t=a(6252),e=a(4884);const c=(0,t._)("h1",{id:"css",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#css","aria-hidden":"true"},"#"),(0,t.Uk)(" CSS")],-1),l=(0,t._)("ul",null,[(0,t._)("li",null,"background image url需要进行URLEncodeComponent，不然有特殊字符不显示图片")],-1),o=(0,t._)("h2",{id:"盒子模型",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#盒子模型","aria-hidden":"true"},"#"),(0,t.Uk)(" 盒子模型")],-1),p=(0,t._)("p",null,[(0,t._)("img",{src:e,alt:"blockchain",title:"盒子模型"})],-1),i=(0,t._)("h2",{id:"box-sizing",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#box-sizing","aria-hidden":"true"},"#"),(0,t.Uk)(" box-sizing")],-1),k=(0,t._)("table",null,[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{style:{"text-align":"right"}}),(0,t._)("th",{style:{"text-align":"center"}},"content-box"),(0,t._)("th",{style:{"text-align":"center"}},"border-box")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"right"}},"名称"),(0,t._)("td",{style:{"text-align":"center"}},"标准(chrome)"),(0,t._)("td",{style:{"text-align":"center"}},"怪异(IE)")]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"right"}},"特点"),(0,t._)("td",{style:{"text-align":"center"}},[(0,t.Uk)("默认值，标准盒子模型。 width 与 height 只包括内容的宽和高， 不包括边框（border），内边距（padding），外边距（margin）。"),(0,t._)("br"),(0,t.Uk)("注意: 内边距、边框和外边距都在这个盒子的外部。 比如说，.box {width: 350px; border: 10px solid black;} 在浏览器中的渲染的实际宽度将是 370px。")]),(0,t._)("td",{style:{"text-align":"center"}},[(0,t.Uk)("width 和 height 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 Quirks模式 时Internet Explorer使用的盒模型。"),(0,t._)("br"),(0,t.Uk)("注意，填充和边框将在盒子内 , 例如, .box {width: 350px; border: 10px solid black;} 导致在浏览器中呈现的宽度为350px的盒子。内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。")])]),(0,t._)("tr",null,[(0,t._)("td",{style:{"text-align":"right"}},"尺寸计算公式"),(0,t._)("td",{style:{"text-align":"center"}},[(0,t.Uk)("width = 内容的宽度"),(0,t._)("br"),(0,t.Uk)("height = 内容的高度"),(0,t._)("br"),(0,t.Uk)("宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）。")]),(0,t._)("td",{style:{"text-align":"center"}},[(0,t.Uk)("width = border + padding + 内容的宽度"),(0,t._)("br"),(0,t.Uk)("height = border + padding + 内容的高度")])])])],-1),r=(0,t._)("h3",{id:"文字流光效果",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#文字流光效果","aria-hidden":"true"},"#"),(0,t.Uk)(" 文字流光效果")],-1),u=(0,t._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,t._)("pre",{class:"language-css"},[(0,t._)("code",null,[(0,t._)("span",{class:"token selector"},".it"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token property"},"display"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" block"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"/*渐变背景，此处为能无缝拼接的渐变 即0~100%*/"),(0,t.Uk)("   "),(0,t._)("span",{class:"token comment"},"/*linear-gradient(线性渐变)*/"),(0,t._)("span",{class:"token property"},"background-image"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"-webkit-linear-gradient"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("left"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #3498db"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #f47920 10%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #d71345 20%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #f7acbc 30%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #ffd400 40%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #3498db 50%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #f47920 60%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #d71345 70%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #f7acbc 80%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #ffd400 90%"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" #3498db"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t._)("span",{class:"token property"},"color"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" transparent"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"/*文字填充色为透明*/"),(0,t._)("span",{class:"token property"},"-webkit-text-fill-color"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" transparent"),(0,t._)("span",{class:"token punctuation"},";"),(0,t._)("span",{class:"token property"},"-webkit-background-clip"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" text"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"/* background-clip 规定背景的绘制区域：*/"),(0,t.Uk)("   "),(0,t._)("span",{class:"token comment"},"/*背景剪裁为文字，相当于用背景填充文字 CSS3新属性*/"),(0,t._)("span",{class:"token property"},"-webkit-background-size"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 200% 100%"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"/*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/"),(0,t._)("span",{class:"token property"},"background-size"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 200% 100%"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"/* 动画 */"),(0,t._)("span",{class:"token property"},"-webkit-animation"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" it-animation 4s infinite linear"),(0,t._)("span",{class:"token punctuation"},";"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token atrule"},[(0,t._)("span",{class:"token rule"},"@keyframes"),(0,t.Uk)(" it-animation")]),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token selector"},"0%"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token property"},"background-position"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 0 0"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("   "),(0,t._)("span",{class:"token comment"},"/*background-position 属性设置背景图像的起始位置。*/"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token selector"},"100%"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token property"},"background-position"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" -100% 0"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br")])],-1),_=(0,t._)("h3",{id:"网页灰度设置",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#网页灰度设置","aria-hidden":"true"},"#"),(0,t.Uk)(" 网页灰度设置")],-1),b=(0,t._)("p",null,[(0,t._)("a",{href:"https://blog.csdn.net/qq_41356250/article/details/118310462",target:"_blank"},"优秀示例 filter用法")],-1),d=(0,t._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,t._)("pre",{class:"language-css"},[(0,t._)("code",null,[(0,t._)("span",{class:"token selector"},"html"),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n     "),(0,t._)("span",{class:"token property"},"-webkit-filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"grayscale"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("            "),(0,t._)("span",{class:"token comment"},"/* CSS3 filter方式，webkit内核方式，firefox外的绝大部分的现代浏览器*/"),(0,t.Uk)("  \n       "),(0,t._)("span",{class:"token property"},"-moz-filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"grayscale"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("            "),(0,t._)("span",{class:"token comment"},"/* 目前没有实现 */"),(0,t.Uk)("  \n        "),(0,t._)("span",{class:"token property"},"-ms-filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"grayscale"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("  \n         "),(0,t._)("span",{class:"token property"},"-o-filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"grayscale"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("  \n            "),(0,t._)("span",{class:"token property"},"filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"grayscale"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("100%"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("            "),(0,t._)("span",{class:"token comment"},"/* CSS3 filter方式，标准写法*/"),(0,t.Uk)("  \n            "),(0,t._)("span",{class:"token property"},"filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token url"},[(0,t._)("span",{class:"token function"},"url"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("filters.svg#grayscale"),(0,t._)("span",{class:"token punctuation"},")")]),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"/* Firefox 4+ */"),(0,t.Uk)("  \n            "),(0,t._)("span",{class:"token property"},"filter"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" gray"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("                       "),(0,t._)("span",{class:"token comment"},"/* IE 6-9 */"),(0,t.Uk)("  \n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br")])],-1),U={render:function(n,s){return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,l,o,p,i,k,r,u,_,b,d],64)}}},4884:(n,s,a)=>{n.exports=a.p+"assets/img/盒子模型.8b46bf7e.png"}}]);