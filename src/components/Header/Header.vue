<template>
<div class="header-top">
    <div class="top">
        <div class="left">
        <a href="javascript:;" class="home">
            <i class="iconfont icon-weibiaoti-"></i>
        </a>
        </div>
        <div class="head-tab">
            <span href="javascript:;" class="find" :class="{active: type === true}" @click="changeType(true)">
                发现
            </span>
            <span href="javascript:;" class="xuanze" :class="{active: type === false}" @click="changeType(false)">
                甄选家
            </span>
        </div>
        <div class="head-right">
            <a href="javascript:;" class="sousuo">
                <i class="iconfont icon-sousuo"></i>
            </a>
            <a href="javascript:;" class="cart">
                <i class="iconfont icon-gouwuche"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name:"Header",
    data () {
        return {
           type: true
        }
    },
    methods: {
        changeType (type) {
            console.log('xxx');
            this.type = type
        }
    },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .header-top
        height: 95px;
        width 100%
        background-color: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        position fixed
        left 0
        top 0
        z-index 100
        .top
            z-index: 1;
            max-width: 768px;
            padding: 0 .26rem 0 .24rem

            height 100%
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            position relative
            .left
               display block
               .iconfont
                   display block
                   color #333
                   font-size 52px
                   position absolute
                   left 27px
                   top 16px
                   float left

            .head-tab
                position: absolute;
                width: 3.2rem;
                height: 100%;
                line-height: 1.15rem;
                text-align: center;
                left: 50%;
                top: 0;
                margin-left: -1.6rem;
                font-size: .28rem;
                color: #7F7F7F;
                z-index: 1;
                display inline-block
                vertical-align middle
                .find
                   text-align: center;
                   display inline-block
                   padding: 0 .16rem;
                   font-size 25px
                   vertical-align middle
                .xuanze
                    text-align: center;
                    padding: 0 .16rem;
                    font-size: 25px;
                    vertical-align middle
                .active
                    font-size: 35px;
                    color: #b4282d;
                    font-weight: bold
            .head-right
                display block
                width 150px
                height:100%;
                margin-right: .02rem;
                float right
                .sousuo
                  height 100%
                  display inline-block
                  color #333
                  font-size 52px
                  .iconfont
                      height 100%
                      display inline-block
                      font-size 52px
                      width: .62rem
                      margin-right 20px
                .cart
                    display inline-block
                    color #333
                    font-size 52px
                    .iconfont
                        display inline-block
                        font-size 37px
                        width: .62rem



























</style>