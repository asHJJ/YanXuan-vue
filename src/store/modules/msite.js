/**
 * 管理msite相关状态数据
 */
import {reqData,reqLunbo} from '../../api'
import {
    RECEIVE_NAVLIST,
    RECEIVE_LUNBO
} from '../mutation-types'
const state = {
    navlist : [],//导航信息
    focuslist:[],//轮播信息

}
const mutations = {
    [RECEIVE_NAVLIST](state, {navlist}) {
        state.navlist = navlist
    },
    [RECEIVE_LUNBO](state,{focuslist}){
        state.focuslist = focuslist
    }
}
const actions = {
    //异步获取导航信息
    async getNavlist({commit},callback){
        //1.发送异步ajax请求
       const result = await reqData()
        //2.有了结果后，提交mutation
        if(result.code === 0){
            const navlist = result.data
            // console.log('navList');
            // console.log(callback);
            commit(RECEIVE_NAVLIST,{navlist})
            typeof callback === 'function'  && callback()
        }
    },
    //异步获取轮播信息
    async getFocuslist({commit},callback){
        //1.发送异步ajax请求
        const result = await reqLunbo()
        //2.有了结果后，提交mutation
        if(result.code ===0){
            const focuslist = result.data
            console.log(focuslist)
            commit(RECEIVE_LUNBO,{focuslist})
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