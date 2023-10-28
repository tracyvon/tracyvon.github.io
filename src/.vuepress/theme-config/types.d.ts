/** 主题基本选项 */
type Base = {
  /** 当前网站部署到的域名 */
  hostname: string;
  /** 文章显示的默认作者 */
  author?: Author;
  /** 站点图标 */
  favicon?: string;
  /** 导航栏配置 */
  navbar: NavbarConfig;
  /** 侧边栏配置 */
  sidebar: SidebarConfig;
  /** 主题的多语言配置 */
  locales: Record<string, ThemeLocaleData>;
  /** 站点的额外语言环境，其中键名是语言名称，值是站点路径 */
  extraLocales: Record<string, string>;
  /** 是否在开发服务器中启用热重载 */
  hotReload: boolean;
};

type AuthorName = string;

interface AuthorInfo {
  /**
   * 作者姓名
   */
  name: string;

  /**
   * 作者网站
   */
  url?: string;

  /**
   * 作者 Email
   */
  email?: string;
}

type Author = AuthorName | AuthorName[] | AuthorInfo | AuthorInfo[];

interface TextItemOptions {
  /**
   * 项目文字
   */
  text: string;

  /**
   * 项目图标
   */
  icon?: string;

  /**
   * 项目无障碍标签
   */
  ariaLabel?: string;
}

interface AutoLinkOptions extends TextItemOptions {
  /**
   * 当前页面链接
   */
  link: string;

  /**
   * `<a>` 标签的 `rel` 属性
   */
  rel?: string;

  /**
   * `<a>` 标签的 `target` 属性
   */
  target?: string;

  /**
   * 匹配激活的正则表达式
   */
  activeMatch?: string;
}

interface NavGroup<T> extends TextItemOptions {
  /**
   * 当前分组的页面前缀
   */
  prefix?: string;

  /**
   * 当前分组的链接
   */
  link?: string;

  /**
   * 当前分组的子项
   */
  children: T[];
}

type NavbarItem = AutoLinkOptions;
type NavbarGroup = NavGroup<NavbarGroup | NavbarItem | string>;
type NavbarConfig = (NavbarItem | NavbarGroup | string)[];

interface TextItemOptions {
  /**
   * 项目文字
   */
  text: string;

  /**
   * 项目图标
   */
  icon?: string;

  /**
   * 项目无障碍标签
   */
  ariaLabel?: string;
}

interface AutoLinkOptions extends TextItemOptions {
  /**
   * 当前页面链接
   */
  link: string;

  /**
   * `<a>` 标签的 `rel` 属性
   */
  rel?: string;

  /**
   * `<a>` 标签的 `target` 属性
   */
  target?: string;

  /**
   * 匹配激活的正则表达式
   */
  activeMatch?: string;
}

type SidebarPageItem = AutoLinkOptions;

interface SidebarGroupItem extends TextItemOptions {
  /**
   * 当前分组的页面前缀
   */
  prefix?: string;

  /**
   * 当前分组的链接
   */
  link?: string;

  /**
   * 当前分组的链接是否可折叠
   *
   * @default false
   */
  collapsible?: boolean;

  /**
   * 当前分组的子项
   */
  children: (SidebarPageItem | SidebarGroupItem | SidebarStructureItem | string)[];
}

interface SidebarStructureItem extends TextItemOptions {
  /**
   * 当前分组的页面前缀
   */
  prefix?: string;

  /**
   * 当前分组的链接
   */
  link?: string;

  /**
   * 当前分组的链接是否可折叠
   *
   * @default false
   */
  collapsible?: boolean;

  children: "structure";
}

type SidebarItem = SidebarPageItem | SidebarGroupItem | SidebarStructureItem | string;

type SidebarArrayConfig = SidebarItem[];

type SidebarObjectConfig = Record<string, SidebarArrayConfig | "structure" | false>;

type SidebarConfig = SidebarArrayConfig | SidebarObjectConfig;

interface ThemeLocaleData {
  /**
   * 当前语言代码
   */
  lang: string;

  /**
   * 外观
   */
  outlookLocales: {
    /**
     * 主题色
     */
    themeColor: string;

    /**
     * 夜间模式
     */
    darkmode: string;

    /**
     * 全屏文字
     */
    fullscreen: string;
  };

  /**
   * 博客
   */
  blogLocales: {
    /** 文章文字 */
    article: string;
    /** 文章列表文字 */
    articleList: string;
    /** 分类文字 */
    category: string;
    /** 标签文字 */
    tag: string;
    /** 时间轴文字 */
    timeline: string;
    /** 时间轴标题文字 */
    timelineTitle: string;
    /** 全部文字 */
    all: string;
    /** 个人介绍 */
    intro: string;
    /** 收藏文字 */
    star: string;
    /** 幻灯片 */
    slides: string;
    /** 加密 */
    encrypt: string;
  };

  /**
   * 分页
   */
  paginationLocales: {
    /**
     * 上一页文字
     */
    prev: string;

    /**
     * 下一页文字
     */
    next: string;

    /**
     * 跳转提示文字
     */
    navigate: string;

    /**
     * 跳转按钮文字
     */
    action: string;

    /**
     * 页码错误文字
     *
     * @description `$page` 会自动替换为当前的总页数
     */
    errorText: string;
  };

  /**
   * 加密
   */
  encryptLocales: {
    /**
     * 加密图标的无障碍标签
     */
    iconLabel: string;

    /**
     * 密码输入框的默认占位符
     */
    placeholder: string;

    /**
     * 是否记忆密码
     */
    remember: string;

    /**
     * 密码错误提示
     */
    errorHint: string;
  };

  navbarLocales: {
    /**
     * 语言下拉列表的无障碍标签
     */
    selectLangAriaLabel: string;

    /**
     * 当前语言的名称
     */
    langName: string;
  };

  /**
   * 页面元信息
   */
  metaLocales: {
    /**
     * 作者文字
     */
    author: string;

    /**
     * 写作日期文字
     */
    date: string;

    /**
     * 标记原创的文字
     */
    origin: string;

    /**
     * 访问量文字
     */
    views: string;

    /**
     * 标签文字
     */
    tag: string;

    /**
     * 分类文字
     */
    category: string;

    /**
     * 期望阅读时间文字
     */
    readingTime: string;

    /**
     * 文章字数
     */
    words: string;

    /**
     * 此页内容
     */
    toc: string;

    /**
     * 上一页
     */
    prev: string;

    /**
     * 下一页
     */
    next: string;

    /**
     * 更新时间文字
     */
    lastUpdated: string;

    /**
     * 贡献者文字
     */
    contributors: string;

    /**
     * 编辑此页文字
     */
    editLink: string;
  };

  routeLocales: {
    /**
     * 跳转到主要内容
     */
    skipToContent: string;

    /**
     * 404 页面的标题
     */
    notFoundTitle: string;

    /**
     * 404 页面提示
     */
    notFoundMsg: string[];

    /**
     * 返回主页
     */
    home: string;

    /**
     * 返回上一页
     */
    back: string;

    /**
     * `<ExternalLinkIcon>` 的仅供屏幕阅读器文字
     */
    openInNewWindow: string;
  };
}

export { Base };
