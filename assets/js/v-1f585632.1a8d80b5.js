"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2006],{8214:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-1f585632",path:"/web/vue.html",title:"Vue",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"vue常见安装命令",slug:"vue常见安装命令",children:[]},{level:2,title:"vue常见写法",slug:"vue常见写法",children:[]},{level:2,title:"vuex",slug:"vuex",children:[]},{level:2,title:"vue优化速度",slug:"vue优化速度",children:[]},{level:2,title:"flow",slug:"flow",children:[]},{level:2,title:"组合式 API",slug:"组合式-api",children:[{level:3,title:"ref",slug:"ref",children:[]},{level:3,title:"setup",slug:"setup",children:[]},{level:3,title:"setup 内注册生命周期钩子",slug:"setup-内注册生命周期钩子",children:[]},{level:3,title:"watch",slug:"watch",children:[]},{level:3,title:"computed",slug:"computed",children:[]}]}],filePathRelative:"web/vue.md",git:{updatedTime:1657708809e3,contributors:[]}}},7870:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>用于积累vue知识</p></div><h2 id="vue常见安装命令" tabindex="-1"><a class="header-anchor" href="#vue常见安装命令" aria-hidden="true">#</a> vue常见安装命令</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>yarn add vue<span class="token operator">-</span>router\nyarn add vuex\nyarn global add @vue<span class="token operator">/</span>cli\nyarn add element<span class="token operator">-</span>ui\nyarn add sass<span class="token operator">-</span>loader\nyarn add sass\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="vue常见写法" tabindex="-1"><a class="header-anchor" href="#vue常见写法" aria-hidden="true">#</a> vue常见写法</h2><ul><li>子组件向父组件传值</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>子：<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;func&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//func:父组件接收变化的接口。   value：传递的值</span>\n父：@func<span class="token operator">=</span><span class="token string">&quot;function&quot;</span> <span class="token comment">//命名一个函数接受子组件传值 </span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>所有属性绑定都是<code>:disbaled=&quot;tip&quot; tip:false</code></li></ul><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h2><ul><li>State：存放数据</li><li>Getter：可以认为是 store 的计算属性。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。</li><li>Mutation:更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。 mutation 必须是同步函数。</li><li>Action:Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。</li><li>Module:每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//简单实现\nvar store = {\n                debug: true,\n                state: {\n                    message: &#39;Hello!&#39;\n                },\n                setMessageAction(newValue) {\n                    if (this.debug) console.log(&#39;setMessageAction triggered with&#39;, newValue)\n                    this.state.message = newValue\n                },\n                clearMessageAction() {\n                    if (this.debug) console.log(&#39;clearMessageAction triggered&#39;)\n                    this.state.message = &#39;&#39;\n                }\n            }\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="vue优化速度" tabindex="-1"><a class="header-anchor" href="#vue优化速度" aria-hidden="true">#</a> vue优化速度</h2><ul><li>开启gzip。 <ol><li>代码中加入配置命令</li><li>服务器允许访问.gz文件。</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//request headers(http) \nAccept-Encoding: gzip, deflate\n//https支持br压缩\nAccept-Encoding: gzip, deflate, br\n\n//response headers\nContent-Encoding: gzip\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li>按需加载</li></ul><h2 id="flow" tabindex="-1"><a class="header-anchor" href="#flow" aria-hidden="true">#</a> flow</h2><p><a href="https://flow.org/en/docs/types/" target="_blank">Flow 官方文档</a><br> Flow 是 facebook 出品的 JavaScript 静态类型检查工具。Vue.js 的源码利用了 Flow 做了静态类型检查，所以了解 Flow 有助于我们阅读源码。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/*@flow*/</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span>\n x<span class="token operator">:</span> string<span class="token punctuation">;</span>           <span class="token comment">// x 是字符串</span>\n y<span class="token operator">:</span> string <span class="token operator">|</span> number<span class="token punctuation">;</span>  <span class="token comment">// y 可以是字符串或者数字</span>\n z<span class="token operator">:</span> boolean<span class="token punctuation">;</span>\n\n <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token operator">:</span> string<span class="token punctuation">,</span> y<span class="token operator">:</span> string <span class="token operator">|</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x\n   <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y\n   <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token boolean">false</span>\n <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> bar<span class="token operator">:</span> Bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>\n\n<span class="token keyword">var</span> obj<span class="token operator">:</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> string<span class="token punctuation">,</span> b<span class="token operator">:</span> number<span class="token punctuation">,</span> c<span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> d<span class="token operator">:</span> Bar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n a<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>\n b<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n c<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n d<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Bar</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//若想任意类型 T 可以为 null 或者 undefined，只需类似如下写成 ?T 的格式即可。</span>\n<span class="token keyword">var</span> foo<span class="token operator">:</span> <span class="token operator">?</span>string <span class="token operator">=</span> <span class="token keyword">null</span>\n\n<span class="token comment">//若想任意类型 T 可以为undefined,不可为null，只需类似如下写成 ?: T 的格式即可。</span>\n<span class="token keyword">var</span> foo<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token keyword">undefined</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="组合式-api" tabindex="-1"><a class="header-anchor" href="#组合式-api" aria-hidden="true">#</a> 组合式 API</h2><p><a href="https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E5%8F%82%E6%95%B0" target="_blank">官网文档</a></p><h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3><p>ref 为我们的值创建了一个响应式引用。ref 接收参数并将其包裹在一个带有 value property 的对象中返回，然后可以使用该 property 访问或更改响应式变量的值。</p><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h3><p>setup 选项是一个接收 props 和 context 的函数</p><h3 id="setup-内注册生命周期钩子" tabindex="-1"><a class="header-anchor" href="#setup-内注册生命周期钩子" aria-hidden="true">#</a> setup 内注册生命周期钩子</h3><p>组合式 API 上的生命周期钩子与选项式 API 的名称相同，但前缀为 on：即 mounted 看起来会像 onMounted。</p><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token function">watch</span><span class="token punctuation">(</span>counter<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The new counter value is: &#39;</span> <span class="token operator">+</span> counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> twiceTheCounter <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> counter<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\ncounter<span class="token punctuation">.</span>value<span class="token operator">++</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 1</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>twiceTheCounter<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 2</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>',28),p={render:function(n,s){return e}}}}]);