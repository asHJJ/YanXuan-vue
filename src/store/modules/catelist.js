/*
* 管理catelist的数据
*
* */
import {reqCateList} from '../../api'
import {
    RECEIVE_CATELIST
} from '../mutation-types'

const state = {
    zhuanqulist:[]
}
const mutations = {
    [RECEIVE_CATELIST](state, {zhuanqulist}) {
        state.zhuanqulist = zhuanqulist
    },
}
const actions = {
    //异步获取导航信息
    async getCateList ({commit},callback){
        //1.发送ajax请求
        const result = await reqCateList()
        //2.有了结果后，提交mutation
        if(result.code ===0){
            const zhuanqulist = result.data
            commit(RECEIVE_CATELIST,{zhuanqulist})
            typeof callback === 'function' && callback()
        }
}
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}