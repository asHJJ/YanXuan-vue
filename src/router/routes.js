/*
* 包含应用中的多有路由配置模块
*
* */
import MSite from '../page/MSite/MSite.vue'
import CateList from '../page/CateList/CateList.vue'
import ShiWu from '../page/ShiWu/ShiWu.vue'
import Cart from '../page/Cart/Cart.vue'
import Profile from '../page/Profile/Profile.vue'
export default [
    {
        path: '/msite',
        component:MSite
    },
    {
        path:'/catelist',
        component:CateList
    },
    {
        path:'/shiwu',
        component:ShiWu
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path: '/',
        redirect: '/msite'
    }
]
