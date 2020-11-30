import * as pro from './actionType'
import API from '../../api/api'

//初始化数据
export const getProData = () =>{
    return async dispatch =>{
        try {
            let result = await API.getProduction()
            result.map(item => {
                item.selectStatus = true
                item.selectNum = 0
                return item;
            })
        } catch (error) {
            throw error
        }
    }
}