---
icon: pen-to-square
date: 2019-03-21
category:
  - FE
tag:
  - Webpack
  - IIS
  - 部署
---

# webpack 打包部署到 IIS

如何部署:

1. 安装 [IIS UrlRewrite](https://www.iis.net/downloads/microsoft/url-rewrite)
2. 在你的网站根目录中创建一个 `web.config` 文件，内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
          <match url="(.*)" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

> IIS 建立网站后访问还是有问题，把网站对应的应用池改为用 `.Net v2.0`
