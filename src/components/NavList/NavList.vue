<template>
    <!--header 头部-->
    <header>

        <div class="header-bottom">
            <div class="wrapper">
                <ul class="content">
                    <li class="active " >
                        <span class="a_txt active">
                            推荐
                        </span>
                    </li>
                    <li>居家</li>
                    <li>鞋包配饰</li>
                    <li>服装</li>
                    <li>电器</li>

                </ul>
                <i class="iconfont  icon-zhankai"></i>
            </div>
        </div>
    </header>
</template>

<script>

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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
            background #ffffff
            color #b4282d
            flex-shrink: 0;
            padding: 0 .4rem;
            background: #fff
            position relative
            .wrapper
                width 100%
                display inline-block
                .content
                    width 100%
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
                        .active
                            color $main
                            wdith 100%
                            height 0.05333rem;
                            .a_txt
                                display inline-block
                            &:after
                                content ''
                                left 0
                                top 0
                                width 100%
                                height 0.05333rem;
                                display block
                                background-color: #b4282d;
                                color: #b4282d

            //margin-bottom 3px




                .iconfont
                    font-size 35px
                    color #000
                    float right
                    font-weight bold
                    color #666
                    display inline-block
                    position absolute
                    right 50px
                    bottom 0
                    margin-top: .2rem
</style>