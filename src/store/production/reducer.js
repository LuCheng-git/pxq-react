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
        case pro.TOGLE_PRODUCTION:
            imuDataList = Immutable.List(preState.dataList)
            imuItem = Immutable.Map(preState.dataList[action.index])
            imuItem = imuItem.set('selectStatus',!imuItem.get('selectStatus'))
            imuDataList = imuDataList.set(action.index,imuItem)
            return {...preState, ...{dataList:imuDataList.toJS()}}
        case pro.EDIT_PRODUCTION:
            imuDataList = Immutable.List(preState.dataList)
            imuItem = Immutable.Map(preState.dataList[action.index])
            imuItem = imuItem.set('selectNum',action.selectNum)
            imuDataList = imuDataList.set(action.index,imuItem)
            return {...preState, ...{dataList:imuDataList.toJS()}}
        default:
        return preState
    }
  
}

