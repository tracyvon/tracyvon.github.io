---
icon: pen-to-square
date: 2019-03-13
category:
  - C#
tag:
  - MVC
  - Visual Studio
  - Debugger
---

# 未能加载文件或程序集 Microsoft.IdentityModel

## 错误信息

本地调试时提示：未能加载文件或程序集“Microsoft.IdentityModel, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35”或它的某一个依赖项。系统找不到指定的文件。":"Microsoft.IdentityModel, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35

## 原因

缺少“Microsoft.IdentityModel.dll”

## 2 种解决方法

- 右键单击项目并选择 `<管理NuGet程序包>[Manage NuGet Package]` 搜索 `Microsoft.IdentityModel` 并安装

- 点击工具-NuGet 包管理器-程序包管理器控制台，输入 `Install-Package Microsoft.IdentityModel -Version 6.1.7600.16394`并执行命令
  > 安装说明：[https://www.nuget.org/packages/Microsoft.IdentityModel/](https://www.nuget.org/packages/Microsoft.IdentityModel/)
