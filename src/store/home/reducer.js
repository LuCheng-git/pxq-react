import * as home from './actionType'

let initData = {
    orderSum:'',
    name:'',
    phoneNum:'',
    imgPath:'',
}
//表单数据
export const formData = (preState = initData , action = {}) => {
    preState = JSON.parse(JSON.stringify(preState));
 
}