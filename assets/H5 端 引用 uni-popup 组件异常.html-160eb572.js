import{_ as n,o as s,c as a,d as t}from"./app-c645679b.js";const p="/assets/ERR_BLOCKED_BY_CLIENT_1-c54d325d.png",e="/assets/ERR_BLOCKED_BY_CLIENT_2-3c2745b5.png",o={},c=t('<h1 id="h5-端-引用-uni-popup-组件异常" tabindex="-1"><a class="header-anchor" href="#h5-端-引用-uni-popup-组件异常" aria-hidden="true">#</a> H5 端 引用 <code>uni-popup</code> 组件异常</h1><h2 id="问题复现" tabindex="-1"><a class="header-anchor" href="#问题复现" aria-hidden="true">#</a> 问题复现</h2><p>页面代码引用了一个第三方的 <code>sku</code> 组件及 <code>uni-popup</code> 组件，在微信小程序端正常使用，无异常报错，而切换为 H5 端（Chrome 浏览器）运行时报错误了。</p><figure><img src="'+p+`" alt="异常信息截图" tabindex="0" loading="lazy"><figcaption>异常信息截图</figcaption></figure><div class="language-Vue line-numbers-mode" data-ext="Vue"><pre class="language-Vue"><code>&lt;!-- 商品详情页面主要代码 --&gt;
&lt;template&gt;
	&lt;vk-data-goods-sku-popup
		ref=&quot;skuPopup&quot;
		v-model=&quot;isShowSku&quot;
		border-radius=&quot;20&quot;
		:localdata=&quot;goodsInfo&quot;
		:mode=&quot;mode&quot;
		:actived-style=&quot;{
			color: &#39;#27BA9B&#39;,
			borderColor: &#39;#27BA9B&#39;,
			backgroundColor: &#39;#E9F8F5&#39;,
		}&quot;
		add-cart-background-color=&quot;#ffa868&quot;
		buy-now-background-color=&quot;#27ba9b&quot;
		@add-cart=&quot;addCart&quot;
		@buy-now=&quot;buyNow&quot;
	/&gt;

  ...

	&lt;scroll-view enable-back-to-top scroll-y class=&quot;viewport&quot;&gt;
		...
	&lt;/scroll-view&gt;

	...

	&lt;!-- uni-ui 弹出层 --&gt;
	&lt;uni-popup ref=&quot;popup&quot; type=&quot;bottom&quot; background-color=&quot;#fff&quot;&gt;
		...
	&lt;/uni-popup&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进到报错的文件目录下，查看 <code>keypress.js</code> 这个文件源码后发现并没有什么特别的，只是实现了绑定键盘事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// keypress.js 源码</span>
<span class="token comment">// #ifdef H5</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Keypress&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">disable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keyNames <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">esc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Esc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Escape&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tab</span><span class="token operator">:</span> <span class="token string">&quot;Tab&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enter</span><span class="token operator">:</span> <span class="token string">&quot;Enter&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">space</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Spacebar&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">up</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Up&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ArrowUp&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Left&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ArrowLeft&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Right&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ArrowRight&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">down</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Down&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ArrowDown&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token keyword">delete</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Backspace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Del&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">$event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>disable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> keyName <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>keyNames<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> keyName <span class="token operator">=</span> $event<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> keyNames<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value <span class="token operator">===</span> keyName <span class="token operator">||</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>keyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>keyName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 避免和其他按键事件冲突</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span>keyName<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;keyup&quot;</span><span class="token punctuation">,</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// this.$once(&#39;hook:beforeDestroy&#39;, () =&gt; {</span>
    <span class="token comment">//   document.removeEventListener(&#39;keyup&#39;, listener)</span>
    <span class="token comment">// })</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析与解决" tabindex="-1"><a class="header-anchor" href="#分析与解决" aria-hidden="true">#</a> 分析与解决</h2><p>结合截图的异常信息及 <code>net::ERR_BLOCKED_BY_CLIENT</code> 发现在引用 <code>uni-popup</code> 组件时因为 <code>uni-popup.vue</code> 文件里 <code>import keypress from &#39;./keypress.js&#39;</code> 这行代码导入的 <code>keypress.js</code> 文件被浏览器拦截禁止加载了，导致商品详情页面不能正常使用 <code>uni-popup</code> 组件，尝试把 <code>keypress.js</code> 文件名改为 <code>keypress1.js</code>， 重新运行发现正常了😥。</p><figure><img src="`+e+'" alt="正常截图" tabindex="0" loading="lazy"><figcaption>正常截图</figcaption></figure><p>虽然解决了，但通过改依赖库的源码这种方式肯定是不可取的。既然是浏览器拦截了 <code>keypress.js</code> 文件，咦。。。，拦截，广告拦截，难不成是广告拦截插件造成的😂。撤销源码的修改，然后对当月开发环境的地址禁用使用广告拦截器，刷新后运行正常。😅😅😅</p><blockquote><p>使用的广告拦截插件名：uBlock Origin</p></blockquote>',12),i=[c];function l(u,r){return s(),a("div",null,i)}const k=n(o,[["render",l],["__file","H5 端 引用 uni-popup 组件异常.html.vue"]]);export{k as default};
