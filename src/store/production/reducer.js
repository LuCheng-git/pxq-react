import * as pro from './actionType'
import Immutable from 'immutable'

let initState = {
    dataList:[],
}

export const proData = (preState = initState , action) => {
    preState = JSON.parse(JSON.stringify(preState))
   
    let imuDataList ;
    let imuItem;
    switch(action.type) {
        case pro.GET_PRODUCTION:
            return  {...preState, ...action}
        default:
        return preState
    }
  
}

