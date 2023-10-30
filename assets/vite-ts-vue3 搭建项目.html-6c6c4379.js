import{_ as o,a as i}from"./示例2-f9efb87f.js";import{_ as p,r as l,o as c,c as u,a as n,b as s,e,d as t}from"./app-32aba9ea.js";const r={},d=n("h1",{id:"vue-3-typescript-vite-搭建项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-3-typescript-vite-搭建项目","aria-hidden":"true"},"#"),s(" Vue 3 + TypeScript + Vite 搭建项目")],-1),v=n("code",null,"<script setup>",-1),k={href:"https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup",target:"_blank",rel:"noopener noreferrer"},m=n("h2",{id:"recommended-ide-setup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#recommended-ide-setup","aria-hidden":"true"},"#"),s(" Recommended IDE Setup")],-1),b={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://marketplace.visualstudio.com/items?itemName=Vue.volar",target:"_blank",rel:"noopener noreferrer"},q={href:"https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"type-support-for-vue-imports-in-ts",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-support-for-vue-imports-in-ts","aria-hidden":"true"},"#"),s(" Type Support For "),n("code",null,".vue"),s(" Imports in TS")],-1),y=n("code",null,".vue",-1),f=n("code",null,"tsc",-1),x=n("code",null,"vue-tsc",-1),w={href:"https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,".vue",-1),j={href:"https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669",target:"_blank",rel:"noopener noreferrer"},A=t('<ol><li>Disable the built-in TypeScript Extension <ol><li>Run <code>Extensions: Show Built-in Extensions</code> from VSCode&#39;s command palette</li><li>Find <code>TypeScript and JavaScript Language Features</code>, right click and select <code>Disable (Workspace)</code></li></ol></li><li>Reload the VSCode window by running <code>Developer: Reload Window</code> from the command palette.</li></ol><h2 id="软件架构" tabindex="-1"><a class="header-anchor" href="#软件架构" aria-hidden="true">#</a> 软件架构</h2>',2),R=t("<li>vue: ^3.3.4</li><li>vue-router: ^4.2.4</li><li>pinia: ^2.1.6</li><li>axios: ^1.5.0</li><li>vueuse: ^10.4.1</li><li>sass: ^1.66.1</li><li>nodejs: v18.13.0</li><li>typescript: ^5.0.2</li><li>vite: ^4.4.5</li><li>eslint: ^8.48.0</li><li>prettier: ^3.0.3</li>",11),S={href:"https://github.com/leoforfree/cz-customizable/issues/215",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/leoforfree/cz-customizable/pull/214",target:"_blank",rel:"noopener noreferrer"},V=n("li",null,"husky: ^8.0.3",-1),T=t(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p><code>yarn install</code> 或 <code>pnpm instal</code> 或 <code>npm install</code></p><blockquote><p>使用 <code>npm</code> 如出现下载不了依赖或是比较慢的时候，可以切换为淘宝镜像 <code>npm config set registry http://registry.npm.taobao.org/</code></p></blockquote><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><ol><li>安装完成后会自动执行 <code>package.json</code> 里的 <code>prepare</code> 脚本，此脚本是生成 <code>.husky</code> 的文件夹</li><li>执行 <code>package.json</code> 里的 <code>hooks</code> 脚本，此脚本会在 <code>.husky</code> 目录下生成一个 <code>pre-commit</code> 脚本文件</li><li>执行 <code>package.json</code> 里的 <code>commit-msg</code> 脚本，此脚本会在 <code>.husky</code> 目录下生成一个 <code>commit-msg</code> 脚本文件，当提交代码时会触发校验提交信息是否符合设定的规范</li><li>执行 <code>package.json</code> 里的 <code>dev</code> 脚本，启动本地的开发环境</li></ol><h2 id="技术特点" tabindex="-1"><a class="header-anchor" href="#技术特点" aria-hidden="true">#</a> 技术特点</h2><h3 id="使用-vite-搭建项目" tabindex="-1"><a class="header-anchor" href="#使用-vite-搭建项目" aria-hidden="true">#</a> 使用 <code>Vite</code> 搭建项目</h3><ul><li>使用 <code>vite-cli</code> 命令</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code># pnpm
pnpm create vite

# npm
npm init vite@latest

# yarn
yarn create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>输入项目名</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>? Project name: » vite-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>选择框架（vue）</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>? Select a framework: » - Use arrow-keys. Return to submit.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>选择变体（Typescript）</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>? Select a variant: » - Use arrow-keys. Return to submit.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>启动项目</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>cd 项目名 &amp;&amp; pnpm install &amp;&amp; pnpm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在项目中集成-typescript" tabindex="-1"><a class="header-anchor" href="#在项目中集成-typescript" aria-hidden="true">#</a> 在项目中集成 <code>typescript</code></h3><ul><li>安装 <code>Typescript</code> 环境下能正常使用的 <code>Node.js API</code> 依赖</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i @types/node -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改 <code>tsconfig.json</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;ES2020&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">useDefineForClassFields</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token string">&#39;ESNext&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">lib</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ES2020&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DOM&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DOM.Iterable&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">skipLibCheck</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

		<span class="token comment">/* Bundler mode */</span>
		<span class="token literal-property property">moduleResolution</span><span class="token operator">:</span> <span class="token string">&#39;node&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">allowImportingTsExtensions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">resolveJsonModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">isolatedModules</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">noEmit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">jsx</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>

		<span class="token comment">/* Linting */</span>
		<span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">noUnusedLocals</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">noUnusedParameters</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">noFallthroughCasesInSwitch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

		<span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token string-property property">&#39;@/*&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/**/*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.d.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">references</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;./tsconfig.node.json&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改 <code>vite.config.ts</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> loadEnv <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-compression&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>option<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> mode <span class="token punctuation">}</span> <span class="token operator">=</span> option<span class="token punctuation">;</span>
  <span class="token keyword">const</span> env<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        verbose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        disable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        threshold<span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>
        algorithm<span class="token operator">:</span> <span class="token string">&quot;gzip&quot;</span><span class="token punctuation">,</span>
        ext<span class="token operator">:</span> <span class="token string">&quot;.gz&quot;</span><span class="token punctuation">,</span>
        deleteOriginFile<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置别名</span>
      alias<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 启动端口</span>
      port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
      open<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// 设置代理</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_APP_API_URL</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在项目中集成-vue-router-和-pinia" tabindex="-1"><a class="header-anchor" href="#在项目中集成-vue-router-和-pinia" aria-hidden="true">#</a> 在项目中集成 <code>vue-router</code> 和 <code>pinia</code></h3><ul><li>安装</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i vue-router pinia --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>新建 <code>src/router</code> 目录并在其下面创建 <code>index.ts</code>，导出 <code>router</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory<span class="token punctuation">,</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteRecordRaw<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Login&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;登录&quot;</span><span class="token punctuation">,</span>
      keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      requireAuth<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/login/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&quot;首页&quot;</span><span class="token punctuation">,</span>
      keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      requireAuth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;@/views/home/index.vue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新建 <code>src/store</code> 目录并在其下面创建 <code>index.ts</code>，导出 <code>store</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义模块，新建 <code>src/store/modules</code> 目录并在其下面创建 <code>user.ts</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// id 必填，且需要唯一</span>
  id<span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;Administrator&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 <code>main.ts</code> 中引入 <code>router</code> 和 <code>store</code> 并使用</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;@/style.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;@/App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&quot;@/router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&quot;@/store&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 创建 vue 实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 挂载路由</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 挂载 pinia</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改 <code>App.vue</code></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在项目中集成-axios" tabindex="-1"><a class="header-anchor" href="#在项目中集成-axios" aria-hidden="true">#</a> 在项目中集成 <code>axios</code></h3><ul><li>安装</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i axios --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>新建 <code>src/api</code> 目录并在其下面创建 <code>service.ts</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosInstance<span class="token punctuation">,</span> AxiosRequestConfig<span class="token punctuation">,</span> AxiosRequestHeaders<span class="token punctuation">,</span> AxiosResponse<span class="token punctuation">,</span> AxiosError <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> log <span class="token keyword">from</span> <span class="token string">&quot;@/utils/log&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * INFO: 类型“(config: AxiosRequestConfig) =&gt; AxiosRequestConfig&lt;any&gt;”的参数不能赋给类型“(value: InternalAxiosRequestConfig&lt;any&gt;) =&gt; InternalAxiosRequestConfig&lt;any&gt; | Promise&lt;InternalAxiosRequestConfig&lt;any&gt;&gt;”的参数.
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">AdaptAxiosRequestConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AxiosRequestConfig</span> <span class="token punctuation">{</span>
  headers<span class="token operator">:</span> AxiosRequestHeaders<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> baseRequestConfig<span class="token operator">:</span> AxiosRequestConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  baseURL<span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_API_URL</span><span class="token punctuation">,</span>
  timeout<span class="token operator">:</span> <span class="token number">15000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Request interceptors</span>
<span class="token keyword">const</span> service<span class="token operator">:</span> AxiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>baseRequestConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token punctuation">(</span>err<span class="token operator">:</span> AxiosError<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AxiosError<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token operator">?.</span>status <span class="token operator">===</span> <span class="token number">401</span> <span class="token operator">||</span> err<span class="token punctuation">.</span>response<span class="token operator">?.</span>status <span class="token operator">===</span> <span class="token number">504</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// INFO: do something, 可清除登录信息及重定向到登录页</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>config<span class="token operator">:</span> AdaptAxiosRequestConfig<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// do something</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&quot;Access-Token&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Access-Token&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleError</span> <span class="token operator">=</span> <span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Print to console</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MODE</span> <span class="token operator">===</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span><span class="token function">capsule</span><span class="token punctuation">(</span><span class="token string">&quot;Error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UI&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token operator">:</span> AxiosResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// No code will be processed</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token function">handleError</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> service<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义模块，新建 <code>src/api/modules</code> 目录并在其下面创建 <code>auth</code> 目录，按功能创建对应的目录，并在此目录下创建 <code>index.ts</code> 和 <code>types.ts</code> 两个文件</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> service <span class="token keyword">from</span> <span class="token string">&quot;@/api/service&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LoginReq <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./types&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 登录
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span>data<span class="token operator">:</span> LoginReq<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// types.ts</span>
<span class="token keyword">interface</span> <span class="token class-name">LoginReq</span> <span class="token punctuation">{</span>
  userName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  userPassword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">LoginRes</span> <span class="token punctuation">{</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> LoginReq<span class="token punctuation">,</span> LoginRes <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在项目中集成-scss" tabindex="-1"><a class="header-anchor" href="#在项目中集成-scss" aria-hidden="true">#</a> 在项目中集成 <code>scss</code></h3><ul><li>安装</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i sass sass-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在 <code>.vue</code> 文件中使用</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
$<span class="token property">bgColor</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>

<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> $bgColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在项目中集成-vueuse" tabindex="-1"><a class="header-anchor" href="#在项目中集成-vueuse" aria-hidden="true">#</a> 在项目中集成 <code>vueuse</code></h3><ul><li>安装</li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i @vueuse/core --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,52),E={href:"https://vueuse.org/guide/",target:"_blank",rel:"noopener noreferrer"},I=t(`<h3 id="在项目中集成-prettier-和-eslint-以规范代码编写习惯" tabindex="-1"><a class="header-anchor" href="#在项目中集成-prettier-和-eslint-以规范代码编写习惯" aria-hidden="true">#</a> 在项目中集成 <code>prettier</code> 和 <code>eslint</code> 以规范代码编写习惯</h3><ul><li>安装 <code>prettier</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建配置文件：<code>.prettierrc.cjs</code><blockquote><p>在 <code>package.json</code> 中指定 <code>&quot;type&quot;: &quot;module&quot;</code> 时得使用 <code>.prettierrc.cjs</code></p></blockquote></li></ul><div class="language-cjs line-numbers-mode" data-ext="cjs"><pre class="language-cjs"><code>module.exports = {
  // 达到 120 字符换行
  printWidth: 120,
  // 指定每个缩进级别的空格数: 2
  tabWidth: 2,
  // 用制表符而不是空格缩进行
  useTabs: true,
  // 行尾需要有分号
  semi: true,
  // 使用单引号而不是双引号
  singleQuote: true,
  // 仅在需要时在对象属性周围添加引号
  quoteProps: &quot;as-needed&quot;,
  // 在 JSX 中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 尽可能在尾随逗号（包括 函数参数和调用）
  trailingComma: &quot;all&quot;,
  // 对象字面量中括号之间的空格，如 { foo: bar }
  bracketSpacing: true,
  // 将多行 HTML（HTML、JSX、Vue、Angular）元素的 &gt; 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）
  bracketSameLine: false,
  // 在唯一的箭头函数参数周围包含括号，如 (x) =&gt; x
  arrowParens: &quot;always&quot;,
  // 使用默认的折行标准
  proseWrap: &quot;preserve&quot;,
  // 指定 HTML、Vue、Angular 和 Handlebars 的全局空白敏感度，遵守 CSS display 属性的默认值
  htmlWhitespaceSensitivity: &quot;css&quot;,
  // 换行符使用 lf
  endOfLine: &quot;lf&quot;,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建忽略文件：<code>.prettierignore</code></li></ul><div class="language-ignore line-numbers-mode" data-ext="ignore"><pre class="language-ignore"><code><span class="token entry string"><span class="token punctuation">/</span>src<span class="token punctuation">/</span>assets</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装 <code>eslint</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建配置文件：<code>.eslintrc.cjs</code><blockquote><p>在 <code>package.json</code> 中指定 <code>&quot;type&quot;: &quot;module&quot;</code> 时得使用 <code>.eslintrc.cjs</code></p></blockquote></li></ul><div class="language-cjs line-numbers-mode" data-ext="cjs"><pre class="language-cjs"><code>module.exports = {
  parser: &quot;vue-eslint-parser&quot;,
  parserOptions: {
    parser: &quot;@typescript-eslint/parser&quot;,
    ecmaVersion: 2020,
    sourceType: &quot;module&quot;,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    &quot;plugin:vue/vue3-recommended&quot;,
    &quot;plugin:@typescript-eslint/recommended&quot;,
    &quot;prettier&quot;,
    &quot;plugin:prettier/recommended&quot;,
  ],
  rules: {
    // override/add rules settings here
    &quot;vue/multi-word-component-names&quot;: &quot;off&quot;,
    &quot;@typescript-eslint/no-explicit-any&quot;: [&quot;off&quot;],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建忽略文件：<code>.eslintignore</code></li></ul><div class="language-ignore line-numbers-mode" data-ext="ignore"><pre class="language-ignore"><code><span class="token entry string">node_modules<span class="token punctuation">/</span></span>
<span class="token entry string">dist<span class="token punctuation">/</span></span>
<span class="token entry string">index.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改 <code>package.json</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>{
	...
	&quot;scripts&quot;: {
		...
		&quot;lint&quot;: &quot;eslint src --fix --ext .ts,.tsx,.vue&quot;,
		&quot;prettier&quot;: &quot;prettier --write \\&quot;src/**/*.{vue,ts,tsx}\\&quot;&quot;,
	}
	...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="规范化-git-提交信息" tabindex="-1"><a class="header-anchor" href="#规范化-git-提交信息" aria-hidden="true">#</a> 规范化 <code>git</code> 提交信息</h3><ul><li>安装 <code>commitizen</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改 <code>package.json</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>{
	...
	&quot;scripts&quot;: {
		...
		&quot;commit&quot;: &quot;git-cz&quot;
	},
	...
	&quot;config&quot;: {
		&quot;commitizen&quot;: {
			&quot;path&quot;: &quot;node_modules/cz-customizable&quot;
		},
		&quot;cz-customizable&quot;: {
			&quot;config&quot;: &quot;./cz-config.cjs&quot;
		}
	}
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建配置文件：<code>cz-config.cjs</code><blockquote><p>在 <code>package.json</code> 中指定 <code>&quot;type&quot;: &quot;module&quot;</code> 时得使用 <code>cz-config.cjs</code></p></blockquote></li></ul><div class="language-cjs line-numbers-mode" data-ext="cjs"><pre class="language-cjs"><code>module.exports = {
  types: [
    { value: &quot;feat&quot;, name: &quot;Features -- feat: 新增客户管理模块&quot; },
    { value: &quot;fix&quot;, name: &quot;Bug Fixes -- fix: 修复登录退出未请求服务端接口&quot; },
    { value: &quot;perf&quot;, name: &quot;Performance Improvements -- perf: 提升性能、体验&quot; },
    { value: &quot;revert&quot;, name: &quot;Reverts -- revert: 回滚到上一个版本&quot; },
    { value: &quot;docs&quot;, name: &quot;Documentation -- docs: 操作说明文档完善补充协议&quot; },
    { value: &quot;style&quot;, name: &quot;Styles -- style: 登录页面背景颜色调整至灰白色&quot; },
    { value: &quot;refactor&quot;, name: &quot;Code Refactoring -- refactor: 重构数据列表，优化性能&quot; },
    { value: &quot;test&quot;, name: &quot;Tests -- test: 登录页面测试环境调试&quot; },
    { value: &quot;build&quot;, name: &quot;Build System -- build: 环境变量调整，增加依赖&quot; },
    { value: &quot;ci&quot;, name: &quot;Continuous Integration -- ci: 修改k8s, docker的配置信息&quot; },
  ],
  messages: {
    type: &quot;选择提交类型:&quot;,
    customScope: &quot;请输入此更改的范围(可选):&quot;,
    subject: &quot;请简要描述提交信息(必填):&quot;,
    body: &#39;请输入详细描述(可选，使用&quot;|&quot;换行):&#39;,
    breaking: &#39;请列举相关重大变更信息(可选，使用&quot;|&quot;换行)&#39;,
    footer: &quot;请列举关联issue(可选，例如：#1，#5)&quot;,
    confirmCommit: &quot;确认使用以上信息提交&quot;,
  },
  allowCustomScopes: true,
  allowBreakingChanges: [&quot;feat&quot;, &quot;fix&quot;],
  skipQuestions: [],
  subjectLimit: 100,
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>执行 <code>pnpm commit</code> 查看界面效果</p><figure><img src="`+o+`" alt="示例1" tabindex="0" loading="lazy"><figcaption>示例1</figcaption></figure></li><li><p>创建配置文件：<code>commitlint.config.cjs</code></p><blockquote><p>在 <code>package.json</code> 中指定 <code>&quot;type&quot;: &quot;module&quot;</code> 时得使用 <code>commitlint.config.cjs</code></p></blockquote></li></ul><div class="language-cjs line-numbers-mode" data-ext="cjs"><pre class="language-cjs"><code>module.exports = {
  extends: [&quot;@commitlint/config-conventional&quot;, &quot;cz&quot;],
  rules: {
    &quot;type-enum&quot;: [
      2,
      &quot;always&quot;,
      [
        &quot;feat&quot;, // Features -- feat: 新增客户管理模块
        &quot;fix&quot;, // Bug Fixes -- fix: 修复登录退出未请求服务端接口
        &quot;perf&quot;, // Performance Improvements -- perf: 提升性能、体验
        &quot;revert&quot;, // Reverts -- revert: 回滚到上一个版本
        &quot;docs&quot;, // Documentation -- docs: 操作说明文档完善补充协议
        &quot;style&quot;, // Styles -- style: 登录页面背景颜色调整至灰白色
        &quot;refactor&quot;, // Code Refactoring -- refactor: 重构数据列表，优化性能
        &quot;test&quot;, // Tests -- test: 登录页面测试环境调试
        &quot;build&quot;, // Build System -- build: 环境变量调整，增加依赖
        &quot;ci&quot;, // Continuous Integration -- ci: 修改k8s, docker的配置信息
      ],
    ],
    // type 格式固定小写
    &quot;type-case&quot;: [2, &quot;always&quot;, &quot;lower-case&quot;],
    // type 不能为空
    &quot;type-empty&quot;: [2, &quot;never&quot;],
    // scope 格式不启用
    &quot;scope-case&quot;: [0],
    // scope 修改范围不能为空
    &quot;scope-empty&quot;: [0],
    // subject 不能为空
    &quot;subject-empty&quot;: [2, &quot;never&quot;],
    // subject 以什么为结束标志，不启用
    &quot;subject-full-stop&quot;: [0],
    // subject 格式，不启用
    &quot;subject-case&quot;: [0],
    // 最大长度 100 字符
    &quot;header-max-length&quot;: [0, &quot;always&quot;, 100],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装 <code>husky</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i husky lint-staged -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改 <code>package.json</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>{
	...
	&quot;scripts&quot;: {
		...
		&quot;prepare&quot;: &quot;husky install&quot;,
		&quot;hooks&quot;: &quot;husky add .husky/pre-commit \\&quot;npx --no-install lint-staged\\&quot;&quot;,
		&quot;commit-msg&quot;: &quot;husky add .husky/commit-msg \\&quot;npx --no-install commitlint --edit \\&quot;$1\\&quot;\\&quot;&quot;,
	},
  ...
	&quot;lint-staged&quot;: {
		&quot;*.{js,ts,vue}&quot;: [
			&quot;pnpm run lint&quot;,
			&quot;pnpm run prettier&quot;
		]
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>执行脚本 <code>pnpm hooks</code> 或 <code>npx husky add .husky/pre-commit &quot;npx --no-install lint-staged&quot;</code></p></li><li><p>执行脚本 <code>pnpm commit-msg</code> 或 <code>npx husky add .husky/commit-msg &#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</code></p></li><li><p>执行脚本 <code>pnpm commit</code> 或 <code>git commit -m &quot;message&quot;</code> 的效果</p><figure><img src="`+i+`" alt="示例2" tabindex="0" loading="lazy"><figcaption>示例2</figcaption></figure></li></ul><h3 id="集成-conventional-changelog-自动生成版本说明" tabindex="-1"><a class="header-anchor" href="#集成-conventional-changelog-自动生成版本说明" aria-hidden="true">#</a> 集成 <code>conventional-changelog</code> 自动生成版本说明</h3><ul><li>安装 <code>conventional-changelog-cli</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>pnpm i conventional-changelog-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改 <code>package.json</code></li></ul><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>{
	...
	&quot;scripts&quot;: {
		...
		&quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s &amp;&amp; git add CHANGELOG.md&quot;
	},
	...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行 <code>pnpm changelog</code> 后在根目录下生成 <code>CHANGELOG.md</code> 文件</li></ul>`,35);function L(z,P){const a=l("ExternalLinkIcon");return c(),u("div",null,[d,n("p",null,[s("This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 "),v,s(" SFCs, check out the "),n("a",k,[s("script setup docs"),e(a)]),s(" to learn more.")]),m,n("ul",null,[n("li",null,[n("a",b,[s("VS Code"),e(a)]),s(" + "),n("a",g,[s("Volar"),e(a)]),s(" (and disable Vetur) + "),n("a",q,[s("TypeScript Vue Plugin (Volar)"),e(a)]),s(".")])]),h,n("p",null,[s("TypeScript cannot handle type information for "),y,s(" imports by default, so we replace the "),f,s(" CLI with "),x,s(" for type checking. In editors, we need "),n("a",w,[s("TypeScript Vue Plugin (Volar)"),e(a)]),s(" to make the TypeScript language service aware of "),_,s(" types.")]),n("p",null,[s("If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a "),n("a",j,[s("Take Over Mode"),e(a)]),s(" that is more performant. You can enable it by the following steps:")]),A,n("ol",null,[R,n("li",null,[s("commitizen: 4.2.4 "),n("blockquote",null,[n("p",null,[s("超过此版本的其他版本会造成自定义 scope 没法正常输入，可以在 "),n("a",S,[s("No scope question error"),e(a)]),s("、"),n("a",C,[s("Fix custom scopes - Add askAnswered to true"),e(a)]),s(" 这个两个 issue 上了解此问题")])])]),V]),T,n("ul",null,[n("li",null,[s("使用方式具体看官网文档 "),n("a",E,[s("VueUse"),e(a)])])]),I])}const F=p(r,[["render",L],["__file","vite-ts-vue3 搭建项目.html.vue"]]);export{F as default};
