import * as home from './actionType'

let initData = {
    orderSum: '',
    name: '',
    phoneNum: '',
    imgPath: '',
}
//表单数据
export const formData = (preState = initData, action = {}) => {
    preState = JSON.parse(JSON.stringify(preState));
    switch (action.type) {
        case home.SAVE_FORMDATA:
            return { ...preState,...{[action.datatype]:action.value}}
        case home.SAVE_IMG:
            return { ...preState,...{imgPath:action.path}}
        case home.CLEAR_DATA:
            return { ...preState,...initData}
        default:
            return preState
    }
}