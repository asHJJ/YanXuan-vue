<template>
    <footer class="footer_guide border-1px">
        <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/msite'}" @click="goTo('/msite')"> <!--对象语法: 类名确定, 但不确定有没有-->
            <span class="item_icon">
        <i class="iconfont icon-weibiaoti-"></i>
      </span>
            <span>首页</span>
        </a>
        <span class="guide_item" :class="{on: $route.path==='/catelist'}" @click="goTo('/catelist')">
      <span class="item_icon">
        <i class="iconfont icon-liebiaofenlei"></i>
      </span>
      <span>分类</span>
    </span>
        <a href="javascript:;" class="guide_item" :class="{on:  $route.path.includes('/shiwu')}" @click="goTo('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-shiwutupian"></i>
      </span>
            <span>实物</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/cart'}" @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
            <span>购物车</span>
        </a>
        <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
            <span>个人</span>
        </a>
    </footer>
</template>

<script>
export default{
    methods:{
       goTo(path){
           //编程式导航
           this.$router.replace(path)
       }
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"

    .footer_guide  //footer
        top-border-1px(#e4e4e4)
        position fixed
        z-index 100
        left 0
        right 0

        bottom 0
        background-color #fff
        width 100%
        height 1.30667rem
        //background pink
        display flex
        .guide_item
            display flex
            flex 1
            text-align center
            flex-direction column
            align-items center
            margin 5px
            color #999999
            &.on
                color #b4282d
            span
                font-size .32rem
                margin-top 2px
                margin-bottom 3px
                .iconfont
                    font-size: 39.9px
                    line-height: 1.3;


                    /*box-sizing: border-box;*/
</style>