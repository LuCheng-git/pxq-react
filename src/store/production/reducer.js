import * as pro from './actionType'
import Immutable from 'immutable'

let initState = {
    dataList:[],
}

export const proData = (preState = initState , action) => {
    preState = JSON.parse(JSON.stringify(preState))
    return proData
}