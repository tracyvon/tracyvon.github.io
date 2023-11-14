import{_ as s,o as a,c as e,a as t,d as c}from"./app-cce8de6a.js";const i={},p=c(`<h1 id="地图面积计算" tabindex="-1"><a class="header-anchor" href="#地图面积计算" aria-hidden="true">#</a> 地图面积计算</h1><p>基于高德地图，根据用户选点（鼠标移动）创建标注点，满足至少三个标注点时可以形成多边形并计算其面积，采用命令模式实现撤销功能。</p><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><ul><li>创建标注点</li><li>创建标注点之间的连线</li><li>计算面积</li><li>撤销及清除重绘</li></ul><h2 id="绘制多边形实体类代码" tabindex="-1"><a class="header-anchor" href="#绘制多边形实体类代码" aria-hidden="true">#</a> 绘制多边形实体类代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 画多边形区域类</span>
<span class="token keyword">class</span> <span class="token class-name">DrawPolygon</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">map<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 获取实例数据</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 判断当前的标注点能否组成图形</span>
  <span class="token function">isCanSetPolygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 获取第一个标注点</span>
  <span class="token function">getFirstMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 鼠标点击时生成标注点</span>
  <span class="token function">addMarker</span><span class="token punctuation">(</span><span class="token parameter">lngLat</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 满足两个点时生成折线</span>
  <span class="token function">addLine</span><span class="token punctuation">(</span>last<span class="token punctuation">,</span> current<span class="token punctuation">,</span> lineStyle <span class="token operator">=</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 删除连线</span>
  <span class="token function">removeLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 判断能否形成多边形</span>
  <span class="token function">canCalcArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 生成多边形并计算面积</span>
  <span class="token function">addPolygon</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示" aria-hidden="true">#</a> 效果展示</h2>`,7),l=["src"];function o(n,u){return a(),e("div",null,[p,t("iframe",{src:n.$withBase("/calc_map/measure-area.html"),width:"100%",height:"500",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"},null,8,l)])}const r=s(i,[["render",o],["__file","地图面积计算.html.vue"]]);export{r as default};
