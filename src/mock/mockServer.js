/*
* 使用mockjs提供mock数据接口
* */
import Mock from 'mockjs'
import data from './shouye_data.json'//已自动解析js对应的类型：对象
import zhuanqu from './fenlei_zhuanqu.json'
import shiwu from './shiwu.json'
import tuijian from './yanxuan-tuijian.json'
//kingKongModule接口
Mock.mock('/navlist',{code:0,data:data.kingKongModule.kingKongList});
Mock.mock('/focuslist',{code:0,data:data.focusList})
Mock.mock('/zhuanqulist',{code:0,data:zhuanqu.categoryL1List})
Mock.mock('/shiwulist',{code:0,data:shiwu.data})
Mock.mock('/tuijian',{code:0,data:tuijian.data})


// console.log('mockServer....')