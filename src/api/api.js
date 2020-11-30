import Server from './server'

class API extends Server  {
    async uploadImg(params = {}){
        try {
            let result = await this.axios('post','//elm.cangdu.org/v1/addimg/shop',params)
        } catch (error) {
            throw error
        }
    }

    async getProduction (params={}){
        try{
            let result = await this.axios('get','https://api.cangdu.org/shopro/data/products',params)
            if(result && (result.data.data instanceof object) && result.http_code === 200){
                return result.data.data || [];
            }else{
                let err = {
                    tip = '获取数据失败'
                }
                throw err;
            }
        }catch(error){
            throw error
        }
    }
}