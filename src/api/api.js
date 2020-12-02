import Server from './server'

class API extends Server {

    //获取商品
    async getProduction(params = {}) {
        try {
            let result = await this.axios('get', 'https://api.cangdu.org/shopro/data/products', params)
            if (result && (result.data.data instanceof Object) && result.http_code === 200) {
                return result.data.data || [];
            } else {

            }
        } catch (error) {
            throw error
        }
    }

    //获取金额
    async getBalance(params = {}) {
        try {
            let result = await this.axios('get', 'https://api.cangdu.org/shopro/data/balance', params);
            if (result && (result.data.data instanceof Object) && result.http_code === 200)
            return result.data;
        } catch (error) {
            throw error
        }
    }

}


export default new API();