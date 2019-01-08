<template>
<div class="wrap">
    <div class="list">
        <div class="left">
            <div class="u-name">
                <span class="ava">
                    <img :src="val.avatar">
                </span>
                <span>{{val.nickname}}</span>

            </div>
            <div class="title">{{val.title}}</div>
            <div class="desc">{{val.subTitle}}</div>
            <div class="u-rcount">
                <!--<i class="icon"></i>-->
                <span class="look">{{val.readCount}}k人看过</span>
            </div>
        </div>
        <div class="right">
            <a href="javascript:;">
            <img :src="val.picUrl">
            </a>
        </div>
    </div>


</div>
</template>

<script>
export default{
    name: "XuanMei",
    props: {
        val: Object
    },
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .wrap
        height 10000px
        width: 100%;
        margin: .2rem 0
        padding: .32rem .3rem;
        .list
            display flex
            justify-content space-between
            .left
               width 5rem
               height 3.7rem
               position relative
               color: #999;
               .u-name
                    font-size: .28rem;
                    color: #333;
                    line-height: .36rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis
                    .ava
                        display inline-block
                        width: .56rem;
                        height: .56rem;
                        overflow: hidden;
                        border-radius: 50%;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        border: .01rem solid #d9d9d9;
                        margin-right: .12rem


               .title
                    width: 100%;
                    font-size: .36rem;
                    color: #333;
                    line-height: .44rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    padding-top: .32rem;
                    font-family: PingFangSC-Regular;

               .desc
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: .28rem;
                    line-height: .4rem;
                    padding-top: .08rem;
                    color: #7f7f7f;
               .u-rcount
                    position: absolute;
                    left: .3rem;
                    bottom: .26rem
                    .icon
                        display: inline-block;
                        width: .28rem;
                        height: .2rem;
                        vertical-align: middle;
                        /*background: url() no-repeat 0/100%;*/
                        margin-right: .08rem
                    .look
                        display inline-block
                        font-size 20px
                        vertical-align: middle
                        margin-top -49px

            .right
                height 3.7rem
                position: relative;
                overflow: hidden;
                border-radius: .08rem
                img
                    display: inline-block
                    width 2.9rem
                    height 3.7rem


</style>