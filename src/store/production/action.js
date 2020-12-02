import * as pro from './actionType'
import API from '../../api/api'

//初始化数据
export const getProData = () =>{
    return async dispatch =>{
        try {
            let result = await API.getProduction()
            console.log(result)
            result.map(item => {
                item.selectStatus = true
                item.selectNum = 0
                return item;
            })
            dispatch({
                type: pro.GET_PRODUCTION,
                dataList: result,
              })
        } catch (error) {
            throw error
        }
    }
    
}

//选择商品
export const togleProduction = index => {
    return {
        type:pro.TOGLE_PRODUCTION,
        index,
    }
}

//编辑商品
export const editProduction = (index,selectNum) => {
    return {
        type:pro.EDIT_PRODUCTION,
        index,
        selectNum,
    }
}