---
icon: pen-to-square
date: 2018-11-16
category:
  - C#
tag:
  - Log4net
  - WebService
  - WCF
---

# log4net 配置

## CS 程序

1. 进入需要配置 `log4net` 的项目目录下，安装或引用 `log4net`；

   - 右键-管理 `NuGet` 程序包，搜索 `log4net` 并安装；
   - 引用已下载的 `log4net.dll` 文件。

2. 程序启动时读取 `log4net` 的配置文件,在 `AssemblyInfo.cs` 中加入
   `[assembly: log4net.Config.XmlConfigurator(ConfigFile = "app.config", Watch = true)]`；

3. 在原有的 `app.config` 上加入 `log4net` 的输出配置信息；

   ```xml
     <configuration>
     <!--log4net-->
     <configSections>
       <section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net" requirePermission="false"/>
     </configSections>
     <log4net>
       <root>
         <!--在控制台打印log-->
         <level value="ALL" />
         <appender-ref ref="ConsoleAppender" />
       </root>
       <logger name="debugLog">
         <level value="DEBUG"/>
         <appender-ref ref="DebugLogFileAppender" />
       </logger>
       <logger name="infoLog">
         <level value="INFO"/>
         <appender-ref ref="InfoLogFileAppender" />
       </logger>
       <logger name="warnLog">
         <level value="WARN"/>
         <appender-ref ref="WarnLogFileAppender" />
       </logger>
       <logger name="errorLog">
         <level value="ERROR"/>
         <appender-ref ref="ErrorFileAppender" />
       </logger>
       <appender name="DebugLogFileAppender" type="log4net.Appender.RollingFileAppender" >
         <Encoding value="UTF-8" />
         <param name="AppendToFile" value="true" />
         <param name="File" value="D:\\MSD_Logs\\Debug\\" />
         <param name="MaxFileSize" value="10240" />
         <param name="MaxSizeRollBackups" value="100" />
         <param name="RollingStyle" value="Date" />
         <param name="StaticLogFileName" value="false" />
         <!--生成如service-20181120.log这样的.log文件-->
         <param name="DatePattern" value="'service'-yyyyMMdd&quot;.log&quot;" />
         <!--防止更新代码时出现.log文件名重叠的情况如service-20181120.logservice-20181120.log-->
         <param name="lockingModel" type="log4net.Appender.FileAppender+MinimalLock" />
         <layout type="log4net.Layout.PatternLayout">
           <param name="ConversionPattern" value="%d|`%-4p|`%m%n" />
         </layout>
       </appender>
       <appender name="InfoLogFileAppender" type="log4net.Appender.RollingFileAppender" >
         <Encoding value="UTF-8" />
         <param name="AppendToFile" value="true" />
         <param name="File" value="D:\\MSD_Logs\\Info\\" />
         <param name="MaxFileSize" value="10240" />
         <param name="MaxSizeRollBackups" value="100" />
         <param name="RollingStyle" value="Date" />
         <param name="StaticLogFileName" value="false" />
         <!--生成如service-20181120.log这样的.log文件-->
         <param name="DatePattern" value="'service'-yyyyMMdd&quot;.log&quot;" />
         <!--防止更新代码时出现.log文件名重叠的情况如service-20181120.logservice-20181120.log-->
         <param name="lockingModel" type="log4net.Appender.FileAppender+MinimalLock" />
         <layout type="log4net.Layout.PatternLayout">
           <param name="ConversionPattern" value="%d|`%-4p|`%m%n" />
         </layout>
       </appender>
       <appender name="WarnLogFileAppender" type="log4net.Appender.RollingFileAppender" >
         <Encoding value="UTF-8" />
         <param name="AppendToFile" value="true" />
         <param name="File" value="D:\\MSD_Logs\\Warn\\" />
         <param name="MaxFileSize" value="10240" />
         <param name="MaxSizeRollBackups" value="100" />
         <param name="RollingStyle" value="Date" />
         <param name="StaticLogFileName" value="false" />
         <!--生成如service-20181120.log这样的.log文件-->
         <param name="DatePattern" value="'service'-yyyyMMdd&quot;.log&quot;" />
         <!--防止更新代码时出现.log文件名重叠的情况如service-20181120.logservice-20181120.log-->
         <param name="lockingModel" type="log4net.Appender.FileAppender+MinimalLock" />
         <layout type="log4net.Layout.PatternLayout">
           <param name="ConversionPattern" value="%d|`%-4p|`%m%n" />
         </layout>
       </appender>
       <appender name="ErrorFileAppender" type="log4net.Appender.RollingFileAppender" >
         <Encoding value="UTF-8" />
         <param name="AppendToFile" value="true" />
         <param name="File" value="D:\\MSD_Logs\\Error\\" />
         <param name="MaxFileSize" value="10240" />
         <param name="MaxSizeRollBackups" value="100" />
         <param name="RollingStyle" value="Date" />
         <param name="StaticLogFileName" value="false" />
         <!--生成如service-20181120.log这样的.log文件-->
         <param name="DatePattern" value="'service'-yyyyMMdd&quot;.log&quot;" />
         <!--防止更新代码时出现.log文件名重叠的情况如service-20181120.logservice-20181120.log-->
         <param name="lockingModel" type="log4net.Appender.FileAppender+MinimalLock" />
         <layout type="log4net.Layout.PatternLayout">
           <param name="ConversionPattern" value="%d|`%-4p|`%m%n" />
         </layout>
       </appender>
       <appender name="ConsoleAppender"  type="log4net.Appender.ConsoleAppender" >
         <layout type="log4net.Layout.PatternLayout">
           <param name="ConversionPattern"  value="%d|`%-4p|`%m%n" />
         </layout>
       </appender>
     </log4net>

     <system.web>
       <compilation targetFramework="4.5.2" />
       <httpRuntime targetFramework="4.5.2" />
     </system.web>
     <appSettings>
       <add key="serviceName" value="serviceAccess" />
       <add key="servicePwd" value="service@Adidas" />
     </appSettings>
   </configuration>
   ```

4. 如需读取新的配置文件，可在程序的调用方法前加入
   `log4net.Config.XmlConfigurator.Configure(new FileInfo("log4net.xml"))`强制读取新的配置文件。

## 类库封装

1. 添加一个类库项目，安装或引用 `log4net`；

   - 右键-管理 `NuGet` 程序包，搜索 `log4net` 并安装；
   - 引用已下载的 `log4net.dll` 文件。

2. 在类库中添加一个 `log4net` 的配置文件，起名：`log4net.config`，并设置**此文件的属性复制到输出目录为：始终复制。**

   > 不设置此属性，可能会出现日志写不成功

3. 程序启动时读取 `log4net` 的配置文件，在 `AssemblyInfo.cs` 中加入
   `[assembly: log4net.Config.XmlConfigurator(ConfigFile = "log4net.config", Watch = true)]`；

4. 在类库中添加一个 `LogHelper` 类，用来调用 `log4net` 输出日志；

5. 在其它项目中引用这个类库，并在此项目目录下新建 `log4net.config` 并修改里面的配置信息，在调用此项目的写日志功能时就能读取新的配置信息。

## WebService

1. 进入需要配置 `log4net` 的项目目录下，安装 `log4net`；

   - 右键-管理 `NuGet` 程序包,搜索 `log4net` 并安装；
   - 引用已下载的 `log4net.dll` 文件。

2. 程序启动时读取 `log4net` 的配置文件，在 `AssemblyInfo.cs` 中加入
   `[assembly: log4net.Config.XmlConfigurator(ConfigFile = "web.config", Watch = true)]`；

3. 在原有的 `web.config` 上加入 `log4net` 的输出配置信息；

   > eg.参考 上面 CS 程序中的第三点

4. 不同接口调用不同的 `log4net` 配置信息(配置不同可以实现不一样的日志输出格式要求)，在各个接口调用的[webService]类里添加构造方法；

   > eg. [WebService].asmx.cs 文件中加入

   ```c#
   public WebService()
   {
       log4net.Config.XmlConfigurator.ConfigureAndWatch(new System.IO.FileInfo(AppDomain.CurrentDomain.SetupInformation.ApplicationBase + "log4net.config"));
   }
   ```

   > WebService 为对应的接口类名

## WCFService 寄宿 IIS

1. 进入需要配置 `log4net` 的项目目录下，安装或引用 `log4net`；

   - 右键-管理 `NuGet` 程序包，搜索 `log4net` 并安装；
   - 引用已下载的 `log4net.dll` 文件。

2. 程序启动时读取 `log4net` 的配置文件，在 `AssemblyInfo.cs` 中加入
   `[assembly: log4net.Config.XmlConfigurator(ConfigFile = "web.config", Watch = true)]`；

3. 在原有的 `web.config` 上加入 `log4net` 的输出配置信息；

   > eg.参考 上面 CS 程序中的第三点

4. `[CustomService].svc.cs` 加入自定义 ` ServiceHost``、ServiceHostFactory ` 类，在自定义的 `ServiceHost` 实例中注册 `log4net` 启动日志记录；

   ```c#
   ##region 使用自定义ServiceHost实现加载log4net配置文件
   public class CustomServiceHostFactory : ServiceHostFactory
   {
       protected override ServiceHost CreateServiceHost(
          Type serviceType, Uri[] baseAddresses)
       {
           CustomServiceHost customServiceHost =
              new CustomServiceHost(serviceType, baseAddresses);
           return customServiceHost;
       }
   }

   public class CustomServiceHost : ServiceHost
   {
       public CustomServiceHost(Type serviceType, params Uri[] baseAddresses)
           : base(serviceType, baseAddresses)
       {
           log4net.Config.XmlConfigurator.Configure();
       }
       protected override void ApplyConfiguration()
       {
           base.ApplyConfiguration();
       }
   }
   ##endregion
   ```

5. 右键 `[CustomService].svc` 文件-查看标记中加入`Factory` 属性;
   > eg. `Factory=“xxx.WcfSvc.CustomServiceHostFactory”`
   >
   > CustomService 为对应的 wcf 服务类名

## ASP.NET MVC

1. 进入需要配置 `log4net` 的项目目录下，安装或引用 `log4net`；

   - 右键-管理 `NuGet` 程序包，搜索 `log4net` 并安装；
   - 引用已下载的 `log4net.dll` 文件。

2. 程序启动时读取 `log4net` 的配置文件，在 `AssemblyInfo.cs` 中加入
   `[assembly: log4net.Config.XmlConfigurator(ConfigFile = "web.config", Watch = true)]`；

3. 在原有的 `web.config` 上加入 `log4net` 的输出配置信息；

   > eg.参考 上面 CS 程序中的第三点

4. 在 `Global.asax` 的 Application_Start()方法里加入以下代码。

   > eg. Global.asax.cs 文件中加入

   ```c#
   protected void Application_Start()
   {
       AreaRegistration.RegisterAllAreas();
       GlobalConfiguration.Configure(WebApiConfig.Register);
       FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
       RouteConfig.RegisterRoutes(RouteTable.Routes);
       BundleConfig.RegisterBundles(BundleTable.Bundles);
       //强制调用web.config
       log4net.Config.XmlConfigurator.ConfigureAndWatch(new System.IO.FileInfo(AppDomain.CurrentDomain.SetupInformation.ApplicationBase + "web.config"));
   }
   ```
