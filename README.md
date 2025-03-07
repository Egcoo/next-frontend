# 智能答题应用平台前端代码

#### `config`
**配置文件**
菜单列表、权限列表的配置文件。

#### `access`
**权限管理**  
所有和权限管理相关的代码都在这里。

#### `api`
**API**
使用`openapi-generator`生成的####

#### `components`
**组件**
项目中使用的通用组件。

#### `layouts`
**布局**
定义应用的全局布局。

#### `pages`
**页面**
应用的各个页面。

#### `stores`
**状态管理**
Redux 状态管理相关的代码。API代码。

#### `libs`

文件用于创建和配置一个 Axios 实例 `myAxios`，用于处理 HTTP 请求。
功能：
1. 创建 Axios 实例并设置基础 URL 和超时时间。
2. 配置请求拦截器，在请求发送前执行一些操作。
3. 配置响应拦截器，处理响应数据和错误。
4. 导出配置好的 Axios 实例供其他模块使用。


前端页面开发，跑通前后端核心业务流程

主要包括：
- 基础页面开发
  - 用户模块
    - 分析：用户登录注册页的核心其实是填表单
  - 题库管理页面
  - 题目管理页面
- 核心页面开发
  - 主页
  - 题库列表页
  - 题目搜索页
  - 题库详情页
- 题目题库绑定（管理员）
  - 按照题库查询题目 
  - 修改题目所属题库



记住：next.js 的路由是基于文件系统的，所以在 pages 目录下创建的文件会自动映射到对应的路由上。

就是想多了，觉得什么都要面面俱到，其实不是这样的，最主要是根据应用场景，当需要某个方面做的更好了
不能满足一致性的要求了，不能满足实时性的要求了，我再去提高，或者更换方案。而不是提前就去过度设计。

谨慎使用全局重构

当我设置最大并发为1的时候，如果同时来好几个任务或者好几个事务进行操作，那么就会出现一个事务卡住其他事务的情况，这样就会导致整个系统的性能下降，
甚至任务会出现失败。

通过druid的监控面板来统计并发的参数，什么情况就是需要更改连接池的参数？当系统进行压力测试的时候，
并发数上不去，但同时cpu占用，内存占用都是好的，但就是没有办法承载更多的并发，这个时候就需要调整连接池的参数。

可观测性，druid本身就是提高了系统本身的可观测性，在没用druid以前，系统就是一个黑盒，根本不了解系统内部到底怎么样，但是有了druid之后，
就可以通过druid的监控面板来查看系统的运行情况，这样就提高了系统的可观测性。



用户功能页
- 注册
  - 账户名
  - 用户名
  - 用户简介
  - 用户密码
  - 用户确认密码
- 编辑个人资料
  - 修改个人资料
  - 修改密码



