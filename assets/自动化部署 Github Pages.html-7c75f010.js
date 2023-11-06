import{_ as t,r as c,o,c as i,a as n,b as s,e as a,d as l}from"./app-c645679b.js";const p="/assets/1-95d5a3d3.png",u="/assets/2-76c61894.png",d="/assets/3-e3c553b3.png",r="/assets/4-3facaea2.png",k="/assets/5-c1c190fb.png",m="/assets/6-c9a09798.png",v="/assets/7-8e1cc7bf.png",b="/assets/8-1f2f7091.png",h={},g=l('<h1 id="自动化部署-github-pages" tabindex="-1"><a class="header-anchor" href="#自动化部署-github-pages" aria-hidden="true">#</a> 自动化部署 Github Pages</h1><ul><li>使用的是默认的构建输出目录 (.vuepress/dist)</li><li><code>config.ts</code> 里的 <code>base</code> 设置为 <code>/</code></li><li>使用 <code>pnpm</code> 作为包管理器</li><li>部署后通过 <code>https://&lt;username&gt;.github.io/</code> 访问</li></ul><h2 id="在-github-创建新-repository" tabindex="-1"><a class="header-anchor" href="#在-github-创建新-repository" aria-hidden="true">#</a> 在 <code>Github</code> 创建新 repository</h2><p>此仓库对应 <code>vuepress</code> 的源码，项目名为 <code>&lt;username&gt;.github.io</code></p><blockquote><p>仓库必须设置为 <code>Pubilc</code></p></blockquote><figure><img src="'+p+'" alt="新建仓库截图" tabindex="0" loading="lazy"><figcaption>新建仓库截图</figcaption></figure><h2 id="创建-access-token" tabindex="-1"><a class="header-anchor" href="#创建-access-token" aria-hidden="true">#</a> 创建 <code>ACCESS_TOKEN</code></h2><ul><li>在 <code>github profile</code> 页面上依次点击 <code>Settings</code> → <code>Developer Settings</code> → <code>Personal access tokens</code> → <code>Tokens (classic)</code><img src="'+u+'" alt="新建token截图1" loading="lazy"></li><li>继续点击 <code>Generate new token</code> → <code>Generate new token (classic)</code><img src="'+d+'" alt="新建token截图2" loading="lazy"></li><li>点击 <code>Generate token</code> 后复制下 <code>token</code> 备用，页面刷新后得重新生成</li></ul><h2 id="配置仓库-security" tabindex="-1"><a class="header-anchor" href="#配置仓库-security" aria-hidden="true">#</a> 配置仓库 <code>Security</code></h2><ul><li>进入 <code>&lt;username&gt;.github.io</code> 仓库的 <code>Settings</code> 页面</li><li>点击 <code>Security</code> 下的 <code>Secrets and variables / Actions</code><img src="'+r+'" alt="配置Security截图1" loading="lazy"></li><li>点击 <code>New repository secret</code>，<code>Name</code> 输入 <code>ACCESS_TOKEN</code>，<code>Secret</code> 黏贴前面复制好的 <code>token</code><img src="'+k+`" alt="配置Security截图2" loading="lazy"></li><li>点击 <code>Add secret</code> 保存</li></ul><h2 id="配置-deploy-docs-yml-文件" tabindex="-1"><a class="header-anchor" href="#配置-deploy-docs-yml-文件" aria-hidden="true">#</a> 配置 <code>deploy-docs.yml</code> 文件</h2><p>在源码目录下创建 <code>.github/workflows/deploy-docs.yml</code> 文件来配置工作流</p><blockquote><p><code>yml</code> 文件里的 <code>uses</code> 字段表示 workflow 的 action 范例文件，一般不需要改动</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 master 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>master<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">permissions</span><span class="token punctuation">:</span>
  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token comment"># 服务器环境：最新版 Ubuntu</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># 拉取代码</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># 如果你文档需要 Git 子模块，取消注释下一行</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装 pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 使用 pnpm 安装依赖</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token comment"># 选择要使用的 pnpm 版本</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># 缓存 pnpm 依赖</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm run docs<span class="token punctuation">:</span>build

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档到 GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支，根据 master 构建后自动生成</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token comment"># secrets.ACCESS_TOKEN 要与配置仓库 \`Security\`步骤里的设置的 secret name 一致，比如前面 name 设置为 ci_token ，那这里就要改为 \${{ secrets.ci_token }}</span>
          <span class="token comment"># 此选项默认为存储库范围的GitHub令牌</span>
          <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看-action-执行情况" tabindex="-1"><a class="header-anchor" href="#查看-action-执行情况" aria-hidden="true">#</a> 查看 <code>Action</code> 执行情况</h2><ul><li>提交代码后进入 <code>&lt;username&gt;.github.io</code> 仓库的 <code>Action</code> 页面 <img src="`+m+'" alt="Action截图1" loading="lazy"></li><li>点击 <code>Jobs</code> 下的 <code>deploy-gh-pages</code><img src="'+v+'" alt="Action截图2" loading="lazy"><img src="'+b+'" alt="Action截图3" loading="lazy"></li><li>浏览器就能正常访问到 <code>https://&lt;username&gt;.github.io/</code></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>',17),y={href:"https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.github.com/zh/actions/security-guides/automatic-token-authentication#about-the-github_token-secret",target:"_blank",rel:"noopener noreferrer"};function f(S,w){const e=c("ExternalLinkIcon");return o(),i("div",null,[g,n("ul",null,[n("li",null,[s("[1] "),n("a",y,[s("vuepress-github-pages"),a(e)])]),n("li",null,[s("[2] "),n("a",_,[s("自动令牌身份验证"),a(e)])])])])}const N=t(h,[["render",f],["__file","自动化部署 Github Pages.html.vue"]]);export{N as default};
