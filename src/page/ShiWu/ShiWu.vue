<template>
    <!--导航头部-->
    <div class="app">
        <Header />
        <ul class="nav-list" >
        <li class="txt"  v-for="(item,index) in shiwu" :key="index"  :class="{active: +$route.params.id === index}">
                <RouterLink :to="`/shiwu/tab/${index}`">
                    <span>{{item.tabName}}</span>
                </RouterLink>
        </li>
     </ul>
        <div class="kong"></div>
        <!--内容区-->
        <div class="content">
            <RouterView/>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import XuanMei from '../../components/XuanMei/XuanMei.vue'
import GroupItem from '../../components/GroupItem/GroupItem.vue'
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
    export default{
        name:"ShiWu",
        data(){
            return{
                activeIndex : 0
            }
        },
        components: {
            Header,
           /* XuanMei,
            GroupItem*/
        },
        mounted () {
            this.$store.dispatch('getShiwu')
            this.$store.dispatch('getTuijian')
        },
        computed: {
            ...mapState({
                shiwu: state => state.shiwu.shiwu,
//                tuijian:state =>state.shiwu.tuijian
            }),
        },

    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
.app
    width 100%
    height 10000px
    position relative
    .nav-list
        height 76px
        background pink
        width 100%
        background: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        position fixed
        left 0
        top 92px
        z-index 20
        display flex
        justify-content space-around
        vertical-align middle
        .txt
            display: inline-block;
            height: 1rem
            line-height: 1rem;
            -webkit-box-sizing: border-box;
            font-size: 26px;
            color: #7F7F7F;
            padding: 0 .29rem;
            margin: 0 .2rem;
            vertical-align: middle;
            text-decoration:none
            &.active
                color: #B4282D;
                border-bottom: .04rem solid #B4282D;
                span
                    color: #B4282D;
    .kong
       margin-top 2.3rem
       width 100%
       height .33rem
       background #f4f4f4
       border-bottom: .01rem solid #d9d9d9;
       border-top: .01rem solid #d9d9d9;
    .content
        width 100%
        background #ffffff

</style>