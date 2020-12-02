import * as home from './actionType';

//保存表单数据
export const saveFormData = (value,datatype) => {
    return {
        type:home.SAVE_FORMDATA,
        value,
        datatype,
    }
}

//保存图片地址
export const saveImg = path => {
    return {
        type:home.SAVE_IMG,
        path,
    }
}
//清空数据
export const clearData = () => {
    return {
      type: home.CLEAR_DATA,
    }
  }