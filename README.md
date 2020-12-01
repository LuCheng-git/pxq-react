# pxq-react

**day01**

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

`const Home = lazy(/*webpackChunkName:"Home"*/()=>import("../pages/Home/Index"));`  路由懒加载

懒加载 要添加Suspense fallback 不然报错

用了className="xx" 不是{}

移动端适配注意ipad与web端显示原始大小，撑不起100%的宽高，所以要宽度给100%而不是375px！



# day02

`@import (reference) "foo.less";` 使用 @ import(reference) 导入外部文件,reference 是 Less 语言中最强大的特性之一,除非引用，否则不将导入的样式添加到已编译的输出中

注意！getStyleLoaders中接收lessOptions,一定要在css-loader后面一段代码最后追加less-loader

antd按需引入 安装 babel-plugin-import插件

webpack.config.js中

```javascript
  {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: true,
                configFile: false,
```

babelrc开为true，创建.babelrc文件，注意！此文件会与package.json里的`"babel":{}`冲突，所以要删掉package里的这个文件

antdesign自定义样式

```js
// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
+     options: {
+       lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
+         modifyVars: {
+           'primary-color': '#1DA57A',
+           'link-color': '#1DA57A',
+           'border-radius-base': '2px',
+         },
+         javascriptEnabled: true,
+       },
+     },
    }],
    // ...other rules
  }],
  // ...other config
}
```

# day03

先安装 redux 再安装 react-redux，脚手架中并没有他们两个,

redux-devtools-extension 可以查看redux的工具

`import {composeWithDevTools} from "redux-devtools-extension";` 放在store的index中

`const middleware = IS_DEVELOPMENT?composeWithDevTools(applyMiddleware(thunk)):applyMiddleware(thunk);`



# day04

better-scroll 模拟滚动插件

webpackconfig里alias能配别名

z-index要给最外层的，不能影响外部不相关的元素样式

状态在组件中设置 `state = {}` 其他都是函数，目前都写成箭头函数

设置`position:fixed;` 一定要设置`top right left bottom` 不然会出Bug

class组件中定义函数，函数中使用函数要加this,render里函数要加bind(this)!

`componentWillReceiveProps(nextProps)`  可以获得下次更新时候的数据，能触发N次

按需加载，只有切换到页面的时候才去加载对应的js文件。react配合webpack进行按需加载的方法很简单，Route的component改为getComponent，组件用require.ensure的方式获取，并在webpack中配置chunkFilename。(没做)

```js
const helpCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Component/helpCenter').default)
    },'helpCenter')
}

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="helpCenter" getComponent={helpCenter} />//帮助中心
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);
```

connect，Provider，mapStateToProps,mapDispatchToProps是react-redux提供的



redux要有dispatch来触发,dispatch里面一定要有type`store.dispatch{type:""}`,所有action要有type。dispatch调用的是reducer.仓库的值是reducer的返回值,reducer在创建仓库的时候执行,reducer接收两个参数，数据的初始值和action,store.dispatch里也要有payload:  能传递东西进reducer,store.subscribe在数据变化时会执行unsubscribe就是subscribe的值，将它运行就清除subscribe

构造类函数定义要用 new 

```js
class API extends Server  {
    

    async getProduction (params={}){
        try{
            let result = await this.axios('get','https://api.cangdu.org/shopro/data/products',params)
            if(result && (result.data.data instanceof Object) && result.http_code === 200){
                return result.data.data || [];
            }else{
               
            }
        }catch(error){
            throw error
        }
    }
}

export default new API();
```

