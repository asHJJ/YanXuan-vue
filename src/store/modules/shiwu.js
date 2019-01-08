/*
*管理shiwu相关数据状态
 */
 import{reqShiwu,reqTuijian} from '../../api'
 import{
     RECEIVE_SHIWU,
     RECEIVE_TUIJIAN
 } from '../mutation-types'

 const state ={
     shiwu:[],//实物信息
     tuijian:[],//实物的推荐列表
 }
 const mutations ={
     [RECEIVE_SHIWU](state,{shiwu}){
         state.shiwu = shiwu
     },
     [RECEIVE_TUIJIAN](state,{tuijian}){
         state.tuijian = tuijian
     }
 }
 const actions = {
     //异步获取实物导航信息
     async getShiwu({commit},callback){
         //1.发送异步ajax请求
         const result = await reqShiwu()
         //2.有了结果后提交mutation
         if(result.code ===0){
             const shiwu = result.data
             commit(RECEIVE_SHIWU,{shiwu})
             typeof callback === 'function'  && callback()

         }
     },
     //异步获取推荐信息
     async getTuijian({commit},callback){
         //1.发送异步ajax请求
         const result = await reqTuijian()
         //2.有了结果后提交mutation
         if(result.code ===0){
             const tuijian = result.data
             commit(RECEIVE_TUIJIAN,{tuijian})
             typeof callback === 'function'  && callback()
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
