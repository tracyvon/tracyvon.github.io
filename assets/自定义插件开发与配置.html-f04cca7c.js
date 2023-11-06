import{_ as u,r as p,o as r,c as d,a as n,b as s,e as o,w as a,d as c}from"./app-c645679b.js";const k={},v=n("h1",{id:"自定义插件开发与配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义插件开发与配置","aria-hidden":"true"},"#"),s(" 自定义插件开发与配置")],-1),m=n("h2",{id:"通过-hooks-方式实现浏览器标签页的动态标题切换组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过-hooks-方式实现浏览器标签页的动态标题切换组件","aria-hidden":"true"},"#"),s(" 通过 Hooks 方式实现浏览器标签页的动态标题切换组件")],-1),b=n("li",null,[s("在 "),n("code",null,"src"),s(" 目录下创建 "),n("code",null,"plugins/dynamic-title"),s(" 目录")],-1),g=n("code",null,"dynamic-title",-1),f=n("code",null,"dynamicTitlePlugin.js",-1),h={href:"https://github.com/moefyit/vuepress-plugin-dynamic-title",target:"_blank",rel:"noopener noreferrer"},y=c(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useDynamicTitle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> recoverTimeout<span class="token punctuation">;</span>
  <span class="token keyword">let</span> originTitle<span class="token punctuation">;</span>

  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">showIcon</span><span class="token operator">:</span> <span class="token constant">S<wbr>HOW_ICON</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showText</span><span class="token operator">:</span> <span class="token constant">S<wbr>HOW_TEXT</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hideIcon</span><span class="token operator">:</span> <span class="token constant">H<wbr>IDE_ICON</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hideText</span><span class="token operator">:</span> <span class="token constant">H<wbr>IDE_TEXT</span><span class="token punctuation">,</span>
    <span class="token literal-property property">recoverTime</span><span class="token operator">:</span> <span class="token constant">R<wbr>ECOVER_TIME</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">getIconElm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> elm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;link[rel=icon]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>elm <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      elm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;link&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      elm<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;rel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;icon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>elm<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> elm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">hidden</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>hideIcon <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getIconElm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>hideIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> config<span class="token punctuation">.</span>hideText<span class="token punctuation">;</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>recoverTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">visible</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>showIcon <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getIconElm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>showIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> config<span class="token punctuation">.</span>showText <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> originTitle<span class="token punctuation">;</span>
    recoverTimeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>title <span class="token operator">=</span> originTitle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>recoverTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    originTitle <span class="token operator">=</span> document<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>originTitle<span class="token punctuation">,</span> document<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>showIcon <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">getIconElm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>showIcon<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;visibilitychange&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>hidden <span class="token operator">?</span> <span class="token function">hidden</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">visible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>to <span class="token operator">!==</span> from<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// INFO: 延迟执行是因为路由变化时获取到的title不是最新的</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          originTitle <span class="token operator">=</span> document<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
          <span class="token function">clearTimeout</span><span class="token punctuation">(</span>recoverTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">useDynamicTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>dynamic-title</code> 目录下新建 <code>index.js</code>，键入如下代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">plugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;@vuepress/plugin-dynamic-title&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">clientConfigFile</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./dynamicTitlePlugin.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      showIcon <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      showText <span class="token operator">=</span> <span class="token string">&quot;(/≧▽≦/)咦！又好了！&quot;</span><span class="token punctuation">,</span>
      hideIcon <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      hideText <span class="token operator">=</span> <span class="token string">&quot;(●—●)喔哟，崩溃啦！&quot;</span><span class="token punctuation">,</span>
      recoverTime <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token constant">S<wbr>HOW_ICON</span><span class="token operator">:</span> showIcon<span class="token punctuation">,</span>
      <span class="token constant">S<wbr>HOW_TEXT</span><span class="token operator">:</span> showText<span class="token punctuation">,</span>
      <span class="token constant">H<wbr>IDE_ICON</span><span class="token operator">:</span> hideIcon<span class="token punctuation">,</span>
      <span class="token constant">H<wbr>IDE_TEXT</span><span class="token operator">:</span> hideText<span class="token punctuation">,</span>
      <span class="token constant">R<wbr>ECOVER_TIME</span><span class="token operator">:</span> recoverTime<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> plugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改 <code>.vuepress</code> 目录下的 <code>config.ts</code> 文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dynamicTitle <span class="token keyword">from</span> <span class="token string">&quot;../plugins/dynamic-title/index.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>

    <span class="token function">dynamicTitle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showText<span class="token operator">:</span> <span class="token string">&quot;✧*｡ (ˊᗜˋ*) ✧*&quot;</span><span class="token punctuation">,</span>
      hideText<span class="token operator">:</span> <span class="token string">&quot;◝(⑅•ᴗ•⑅)◜&quot;</span><span class="token punctuation">,</span>
      recoverTime<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>刷新浏览器后，进行切换标签页时就可以看到效果了</li></ul><h2 id="通过-vue-组件方式实现网页背景效果" tabindex="-1"><a class="header-anchor" href="#通过-vue-组件方式实现网页背景效果" aria-hidden="true">#</a> 通过 Vue 组件方式实现网页背景效果</h2><ul><li>安装 <code>canvas-next.js</code> 依赖</li></ul>`,8),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"--save"),s(` canvas-nest.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` canvas-nest.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` canvas-nest.js
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),T=c(`<ul><li>在 <code>plugins</code> 目录下创建 <code>plugins/canvas-nest</code> 目录</li><li>在 <code>canvas-nest</code> 目录新建 <code>CanvasNest.vue</code>，键入如下代码</li></ul><div class="language-Vue line-numbers-mode" data-ext="Vue"><pre class="language-Vue"><code>&lt;template&gt;
  &lt;!-- see https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html --&gt;
  &lt;ClientOnly&gt;&lt;/ClientOnly&gt;
&lt;/template&gt;

&lt;script setup&gt;
// 在这里导入 CanvasNest，那构建时会报 \`window is not defined\` 异常
// import CanvasNest from &quot;canvas-nest.js&quot;;
import { onMounted, onUnmounted } from &quot;vue&quot;;

const config = {
  opacity: 0.8,
  count: 120,
  zIndex: 10,
};

let cn;

onMounted(() =&gt; {
  // see https://v2.vuepress.vuejs.org/zh/guide/#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84
  // INFO: 打包构建时会创建 SSR 版本，导致在 Node 环境下报 \`window is not defined\`，通过 \`import then\` 方式确保 \`canvas-next.js\` 加载完成后再渲染
  import(&quot;canvas-nest.js&quot;).then((module) =&gt; {
    const CanvasNest = module.default;
    cn = new CanvasNest(document.body, config);
  });
});

onUnmounted(() =&gt; {
  cn &amp;&amp; cn.destroy();
});
&lt;/script&gt;

...

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>canvas-nest</code> 目录下新建 <code>canvasNestPlugin.js</code>，键入如下代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> CanvasNest <span class="token keyword">from</span> <span class="token string">&quot;./CanvasNest.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineClientConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rootComponents</span><span class="token operator">:</span> <span class="token punctuation">[</span>CanvasNest<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>canvas-nest</code> 目录下新建 <code>index.js</code>，键入如下代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> getDirname<span class="token punctuation">,</span> path <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __dirname <span class="token operator">=</span> <span class="token function">getDirname</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">plugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;@vuepress/plugin-canvas-nest&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">clientConfigFile</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;./canvasNestPlugin.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> plugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(C,E){const i=p("ExternalLinkIcon"),l=p("Tabs");return r(),d("div",null,[v,m,n("ul",null,[b,n("li",null,[s("在 "),g,s(" 目录下新建 "),f,s("，键入如下代码，基于 "),n("a",h,[s("vuepress-plugin-dynamic-title"),o(i)]),s(" 调整")])]),y,o(l,{id:"52",data:[{id:"npm"},{id:"yarn"},{id:"pnpm"}],"tab-id":"install"},{title0:a(({value:t,isActive:e})=>[s("npm")]),title1:a(({value:t,isActive:e})=>[s("yarn")]),title2:a(({value:t,isActive:e})=>[s("pnpm")]),tab0:a(({value:t,isActive:e})=>[w]),tab1:a(({value:t,isActive:e})=>[q]),tab2:a(({value:t,isActive:e})=>[_]),_:1}),T])}const j=u(k,[["render",x],["__file","自定义插件开发与配置.html.vue"]]);export{j as default};
