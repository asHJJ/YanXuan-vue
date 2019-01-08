/*
* 包含n个接口请求函数的模块
* 每个函数返回promise
* */
import ajax from './ajax'

//获取data数组
export const reqData = () => ajax('/navlist')
//获取轮播数组
export const reqLunbo = () =>ajax('/focuslist')
//获取catelist 专区栏目
export const reqCateList = () =>ajax('/zhuanqulist')
//获取实物列表
export const reqShiwu = () =>ajax('/shiwulist')
export const reqTuijian = () =>ajax('/tuijian')



