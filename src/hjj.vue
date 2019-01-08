
<template>

</template>

<script>

</script>
<style scoped lang="stylus"     rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    section
    width 100%
    height 10000px
    background #fff
    header
    width 100%
    position fixed
    left 0
    top 0
    z-index 100
    .header-top
    height 87.9688px
    padding: .21333rem .4rem
    width 100%
    background #fff;
    display flex
    flex 1
    text-align center
    align-items center
    box-sizing border-box
    margin-right: .26667rem;
    .header-left
    display inline-block
    margin-right 3px
    .header-middle
    margin-left 16px
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    display flex
    -webkit-align-items: center;
    width 442.016px
    //box-sizing border-box
    color #666
    .iconfont
    font-size 34px !important
    margin-right: .13333rem;
    span
    display inline-block
    .header-right
    width: .98667rem;
    height: .53333rem;
    line-height: .53333rem;
    text-align: center;
    color: #b4282d;
    border: 1px solid #b4282d;
    border-radius: .10667rem;
    margin-left: .21333rem;
    font-size: .32rem;
    .header-bottom
    width 100%
    height 60px
    color #b4282d
    flex-shrink: 0;
    padding: 0 .4rem;
    background: #fff
    position relative
    overflow hidden
    .wrapper
    width 100%
    display inline-block
    overflow hidden
    //float left
    .content
    width 200%
    overflow:hidden;
    li
    float left
    box-sizing border-box
    line-height: .8rem;
    font-size: .37333rem;
    color: #333;
    text-align: center;
    padding: 0 .3rem;
    display inline-block
    overflow hidden
    .active
    color $main

    .a_txt
    display inline-block
    /* &.on
       color $main
       width 100%
       height  0.05333rem*/
    /*&:after
           content ''
           left 0
           top 0
           width 100%
           height 0.05333rem;
           display block
           background-color: #b4282d;
           color: #b4282d*/
    .sanjiao
    width 100px
    height 90px
    background #fff
    position absolute
    right 0
    top 0
    .iconfont
    line-height: .8rem;
    display inline-block
    background #fff
    font-size 35px
    color #000
    float right
    font-weight bold
    color #666
    display inline-block
    position absolute
    right 50px
    bottom 24px
    margin-top: .2rem



    /*.toggle
        width 15%
        height 99.98px
        background red
        float left
        z-index 100
        .iconfont
            line-height: .8rem;
            width 15%
            display inline-block
            background #fff
            font-size 35px
            color #000
            float right
            font-weight bold
            color #666
            display inline-block
            position absolute
            right 50px
            bottom 0
            margin-top: .2rem*/
    .swiper
    width 100%
    //margin-top 7px
    margin-top 156.57px

    .sever
    width 100%
    background-color #fff
    height: .96rem;
    padding: 0 .4rem;
    //background pink
    color #B4282D
    .s_three
    width 100%
    height: .96rem;
    //padding: 0 .4rem;
    display: flex;
    align-items: center;
    justify-content space-between
    .item
    float left
    font-size .32rem
    line-height: .42667rem;
    display: inline-block;
    vertical-align middle
    margin-left 3px
    .iconfont
    display inline-block
    font-size 40px
    vertical-align middle
    .msite_nav
    width 100%
    background pink
    bottom-border-1px(#e4e4e4)
    margin-top 10px
    height 392px
    background #fff
    .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
    width 100%
    height 100%
    .swiper-slide
    display flex
    justify-content center
    align-items flex-start
    flex-wrap wrap
    .link_to_category
    width 20%
    color #333
    .category_container
    display block
    width 100%
    text-align center
    padding-bottom 10px
    font-size 0
    img
    display inline-block
    width: 1.46667rem;
    height: 1.46667rem
    span
    display block
    width 100%
    text-align center
    font-size .32rem
    color #333333
    line-height: .48rem;
    margin-top: .13333rem
    .space
    width 100%
    height 20px
    background-color #ededed
    .new_gift
    width 100%
    height 557.97px
    /*background pink*/
    .new_title
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: .42667rem;
    .txt
    display inline-block
    position relative
    .txt:before
    content: '';
    position: absolute;
    top: .6rem;
    left: -.53333rem;
    width: .32rem;
    height: .04rem;
    background: #333;
    .txt:after
    content:''
    position absolute
    top .6rem
    right: -.53333rem;
    width: .32rem;
    height: .04rem;
    background: #333;
    .content
    background: #fff;
    overflow: hidden;
    height: 437.97px;
    margin-left: .4rem;
    margin-top: .26667rem;
    .left_con
    display: block;
    width: 4.57333rem;
    height: 5.78667rem;
    background: #F9E9CF;
    border-radius: .05333rem;
    margin-right: .05333rem;
    padding-bottom: .4rem;
    float: left;
    color: #333;
    .name
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
    padding: .4rem 0 0 .4rem
    .imgwrap
    display inline
    margin: .49333rem auto;
    width: 3.44rem;
    height: 3.42667rem;
    position relative
    .load
    width: 3.44rem;
    height: 3.42667rem
    text-align center
    position absolute
    left 44px
    top 50px
    .right_con
    float left
    /*background deeppink*/
    .module1
    background: #FBE2D3;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
    margin-bottom: .05333rem
    .fuli
    display: block;
    color: #333;
    width: 4.57333rem;
    height: 2.93333rem;
    float: left;
    border-radius: .05333rem;
    margin: 0 .05333rem .05333rem 0;
    font-size: .32rem;
    padding: .26667rem 0 0 .4rem
    /*background #bfa*/
    position relative
    .con_fuli
    font-family: PingFangSC-Medium;
    font-size: .42667rem
    margin-bottom 12px
    .con_tejia
    color #666
    .con_pic
    width: 2.66667rem;
    height: 2.66667rem;
    /*background darkred*/
    float right
    top: .2rem;
    position absolute
    right 0
    .discount
    width: 1.06667rem;
    height: 1.06667rem;
    background #F59524
    position absolute
    right .4rem
    top 0
    opacity: .8;
    border-radius: 50%;
    padding-top: .13333rem;
    color: #fff;
    text-align: center;
    .line1
    font-size: .32rem
    margin-bottom 11px
    .line2
    font-size: .26667rem;
    margin-top: -.09333rem;
    text-decoration: line-through
    .module2
    background: #FFECC2;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
    .new_pintuan
    height: 2.86667rem;
    display: block;
    color: #333;
    width: 4.57333rem;
    height: 2.93333rem;
    float: left;
    border-radius: .05333rem;
    margin: 0 .05333rem .05333rem 0;
    font-size: .32rem;
    padding: .26667rem 0 0 .4rem;
    position relative
    .con_pt
    font-family: PingFangSC-Medium;
    font-size: .42667rem
    margin-bottom 12px
    .con_by
    position: relative;
    display: inline-block;
    padding: 0 .13333rem;
    height: .42667rem;
    background: #CBB693;
    border-radius: .05333rem;
    color: #fff;
    font-size: .29333rem;
    line-height: .42667rem;
    text-align: center;
    .con_newpc
    width: 2.66667rem;
    height: 2.66667rem
    /*background #bfa*/
    position absolute
    right 0
    top: .2rem;
    .discount
    width: 1.06667rem;
    height: 1.06667rem;
    background #F59524
    position absolute
    right .4rem
    top 0
    opacity: .8;
    border-radius: 50%;
    padding-top: .13333rem;
    color: #fff;
    text-align: center;
    .line1
    font-size: .32rem
    margin-bottom 11px
    .line2
    font-size: .26667rem;
    margin-top: -.09333rem;
    text-decoration: line-through






    .pinpai
    width 100%
    height 681.95px
    /*background #bfa*/
    .pinpai_title
    width: 100%;
    height: 1.33333rem;
    line-height: 1.33333rem;
    padding: 0 .4rem;
    background: #fff;
    overflow: hidden;
    .pinpai_left
    float: left;
    font-size: .42667rem;
    font-family: PingFangSC-Regular;
    .pinpai_right
    display: block;
    font-size: .37333rem;
    float: right;
    color: #333;
    line-height: 1.33333rem
    .more
    display inline-block
    .icon-gengduo
    font-size 39px
    display: inline-block;
    vertical-align: middle;
    margin: -.06667rem 0 0 .10667rem;
    .shop_list
    width 100%
    height 553.97px
    //background #7e8c8d
    .category
    position: relative;
    overflow: hidden;
    background: #fff;
    margin-bottom: .26667rem;
    padding: 0 .34667rem .34667rem .4rem;
    .one
    display: inline-block;
    position: relative;
    margin: 0 .05333rem .05333rem 0;
    width: 4.57333rem;
    height: 3.46667rem;
    overflow: hidden;
    background-color: #f4f4f4;
    border-radius: .05333rem
    background-image: url(http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1);
    background-size: 100% 100%;
    float left
    .cnt
    position: absolute;
    left: 0;
    top: 0;
    padding-top: .30667rem
    width: 100%;
    z-index: 4;
    text-align: center;
    /*background pink*/
    height 95px
    .title
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    font-family: PingFangSC-Medium;
    font-size: .37333rem;
    line-height: .45333rem;
    margin-bottom: .04rem;
    .new_start
    line-height: .45333rem;
    font-size: .32rem;
    .price_start
    display inline-block
    font-size .32rem
    .newIcon
    display: inline-block;
    width: 0.85333rem;
    height: 0.42667rem;
    color: #fff;
    line-height: 0.42667rem;
    text-align: center;
    background: #cbb693;
    border-radius: 0.05333rem;
    margin-left: 0.13333rem;
    .two
    display: inline-block;
    position: relative;
    margin: 0 .05333rem .05333rem 0;
    width: 4.57333rem;
    height: 3.46667rem;
    overflow: hidden;
    /* background-color: #f4f4f4; */
    border-radius: .05333rem;
    background-image: url(http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1);
    background-size: 100% 100%;
    float left
    .two_title
    display: inline-block;
    position: relative;
    margin: 0 .05333rem .05333rem 0;
    width: 4.57333rem;
    height: 3.46667rem;
    overflow: hidden;
    /* background-color: #f4f4f4; */
    border-radius: .05333rem;
    position: absolute;
    left: 0;
    top: 0;
    padding-top: .30667rem;
    width: 100%;
    z-index: 4;
    text-align: center;
    .title
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    font-family: PingFangSC-Medium;
    font-size: .37333rem;
    line-height: .45333rem;
    margin-bottom: .04rem;
    .new_start
    color: #7F7F7F;
    font-size: .32rem;
    .price_start
    display inline-block
    font-size: .32rem;
    .three
    display: inline-block;
    position: relative;
    margin: 0 .05333rem .05333rem 0;
    width: 4.57333rem;
    height: 3.46667rem;
    overflow: hidden;
    /* background-color: #f4f4f4; */
    border-radius: .05333rem;
    background-image: url(http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1);
    background-size: 100% 100%;
    .three_title
    position: absolute;
    left: 0;
    top: 0;
    padding-top: .30667rem;
    width: 100%;
    z-index: 4;
    text-align: center;
    .title
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #333;
    font-family: PingFangSC-Medium;
    font-size: .37333rem;
    line-height: .45333rem;
    margin-bottom: .04rem;
    .new_xiuli
    line-height: .45333rem;
    font-size: .32rem;
    .price_start
    display inline-block
    font-size: .32rem;












</style>