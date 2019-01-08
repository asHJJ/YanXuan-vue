<template>
    <header>
        <div class="header-top">
            <div class="header-middle">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索商品，共666款好物</span>
            </div>
        </div>
        <div class="left">
        <ul class="tag-navlist" v-if="zhuanqulist">
            <li  class="item" v-for="(item,index) in zhuanqulist" :key="index"   @click="active(index) " :class="{active:index === activeIndex}">
              <span href="javascript:;" >{{item.name}}</span>
            </li>
        </ul>
        </div>
        <div class="right">
            <div class="banner">

                <!--<img v-lazy="nav.zhuanqulist[item].bannerUrl">-->
            </div>
            <div class="cate-list">
                <ul class="list "  >
                    <li class="cateItem" v-for="(item,index) in selectOpation.subCateList" :key="index">
                        <a href="javascript:;">
                            <div class="cate-pic">
                                <img :src="item.wapBannerUrl" alt="" class="itempic" >
                               <!-- <img class="itempic" src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png?imageView&quality=85&thumbnail=144x144">-->
                            </div>
                            <div class="name">{{item.name}}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    export default{
        data(){
            return{
                activeIndex:0,
            }
        },
        methods:{
            active(indexActive){
                console.log('xxxxx');
                this.activeIndex = indexActive
                //console.log( this.activeIndex );
            },


        },
        computed: {
            ...mapState({
                zhuanqulist: state => state.catelist.zhuanqulist,
            }),
            selectOpation(){
                const {activeIndex} = this
                return this.zhuanqulist.find((item,index)=>index===activeIndex)
            }
        },
        mounted () {
            this.$store.dispatch('getCateList')
        },
        watch: {
            selectOpation () {
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll('.scroll-wrapper', {
                            click: true,
                            bounceTime: 800
                        })
                    }
                })
            }
        }

    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    header
        width 100%
        position fixed
        left 0
        top 0
        z-index 100
        .header-top
            bottom-border-1px(#e4e4e4)
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
            .header-middle
                margin-left 16px
                justify-content: center;
                height: .74667rem;
                font-size: .37333rem;
                background-color: #ededed;
                border-radius: .10667rem;
                display flex
                -webkit-align-items: center;
                width 690px
                color #666
                .iconfont
                    font-size 34px !important
                    margin-right: .13333rem;
                span
                    display inline-block



        .left
           width 162px
           height 1397.78px

           float left
           padding: .53333rem 0;
           border 1px solid #e4e4e4
           .tag-navlist
               padding: .53333rem 0;
               >li
                 width: 100%;
                 height: .66667rem;
                 text-align: center;
                 border: none;
                 margin-bottom 18px
                 color #333;
                 font-size: .37333rem;
                 line-height: .66667rem;
                 text-overflow: ellipsis;
                 white-space: nowrap;
                 overflow: hidden;
                 .txt
                   color #333;
                   font-size: .37333rem;
                   line-height: .66667rem;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                   overflow: hidden;
               .active
                   color $main
                   border-left: 4px solid #ab2b2b;



        .right
            width 588px
            height 1397.78px
            //background pink
            margin-left: 2.16rem;
            padding: .4rem .4rem .28rem;
            .banner
                width 528px
                height 192px
                background-image: url(http://yanxuan.nosdn.127.net/8f6643db675acace2420594545c3a180.jpg?imageView&thumbnail=0x196&quality=75);
            .cate-list
               width 528px
               height 1080px
               .list
                   width 100%
                   height 100%
                   .cateItem
                        margin-left 5px
                        display: inline-block;
                        margin-right: .35333rem;
                        font-size: 0;
                        width: 1.92rem;
                        float left
                        vertical-align: top
                        .cate-pic
                            width: 1.92rem;
                            height: 1.92rem;
                            .itempic
                                display: block;
                                width: 100%;
                                background: #fff;
                                height: 100%
                        .name
                            height: .96rem;
                            font-size: .32rem;
                            text-align: center;
                            line-height: .48rem;
                            display: block;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
</style>