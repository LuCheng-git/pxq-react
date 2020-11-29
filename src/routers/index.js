import React, {lazy} from 'react'

const Home = lazy(/*webpackChunkName:"Home"*/()=>import("../pages/Home/Index"));
const Record = lazy(/*webpackChunkName:"Record"*/()=>import("../pages/Record/Index"));
const HelpCenter = lazy(/*webpackChunkName:"HelpCenter"*/()=>import("../pages/HelpCenter/Index"));
const Production = lazy(/*webpackChunkName:"Production"*/()=>import("../pages/Production/Index"));
const Balance = lazy(/*webpackChunkName:"Balance"*/()=>import("../pages/Balance/Index"));

export default [
    {
        path:'/',
        exact: true,
        component:Home
    },
    {
        path:'/record',
        component:Record
    },
    {
        path:'/helpcenter',
        component:HelpCenter
    },
    {
        path:'/production',
        component:Production
    },
    {
        path:'/balance',
        component:Balance
    },
   
]
