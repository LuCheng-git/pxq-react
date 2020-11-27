# pxq-react

**day01**

在react脚手架中@符号代表src文件目录底下

pages文件里放各个页面，组件名要大写，放各自的jsx与less文件。

store文件里有个暴露文件index.js里面需要

`import {createStore,combineReducers,applyMiddleware} from 'redux';`

`import thunk from 'redux-thunk';`

各个页面独立的store如同

`import * as home from './home/reducer'`

引入,*意思为全部集结成一个Home模型组件，命名可以自定义，然后可以通过点语法，来使用组件里面的所有export的组件

这个暴露文件中要创建仓库

`let store = createStore()`

仓库中合并reducers:`combineReducers({...home},{...production})` 使用中间件函数applyMiddleware

在pages页面中使用connect高阶组件链接reducer与当前的页面标签

store只有action（事件），actiontype（事件类型），与reducer（仓库的数据）

store 先准备数据

要安装

immutable.js :Immutable数据就是一旦创建，就不能更改的数据。每当对Immutable对象进行修改的时候，就会返回一个新的Immutable对象，以此来保证数据的不可变。
不可变数据让纯函数更强大，也让程序开发愈发简单明了

`const Home = lazy(/*webpackChunkName:"Home"*/()=>import("../pages/Home/Index"));`  路由懒加载，..不能变@

懒加载 要添加Suspense fallback 不然报错

用了className="xx" 不是{}





