import * as pro from './actionType'
import Immutable from 'immutable'

let initState = {
    /**
   * 商品数据
   * @type {Array}
   * example: [{
   *    product_id: 1, 商品ID 
   *    product_name: "PaiBot（2G/32G)", 商品名称
   *    product_price: 2999, 商品价格
   *    commission: 200, 佣金
   *    selectStatus: false, 是否选择
   *    selectNum: 0, 选择数量
   * }]
   */
    dataList:[],
}

export const proData = (preState = initState , action) => {
    preState = JSON.parse(JSON.stringify(preState))
   
}