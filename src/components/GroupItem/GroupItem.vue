<script src="../../../../vue项目/yanxuan_vue_一组/yanxuan_vue/src/router/routes.js"></script>
<template>

    <a href="javascript:;">
        <div class="u-name">
            <span class="ava"><img src="https://yanxuan.nosdn.127.net/a911393b603a87e74824290f54b37b24.png?imageView&quality=65&thumbnail=56y56"></span>
            <span>{{val.nickname}}</span>
        </div>
        <div class="title">{{val.title}}</div>
        <div class="u-pic">
            <img :src="val.picUrl" style="width:100%">
        </div>
        <div class="u-rcount">
            <i class="icon"></i>
            <span>{{val.readCount}}人看过</span>
        </div>
    </a>

</template>

<script>
export default{
    name:'GroupItem',
    props:{
        val:Object
    }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .u-name
        margin-bottom: .24rem;
        font-size: .3rem;
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
            margin-right: .12rem;
        span
            display: inline-block;
            vertical-align: middle;


    .title
        font-size: .36rem;
        color: #333;
        line-height: .52rem;
        margin: -.08rem 0 .16rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-family: PingFangSC-Regular;
    .u-pic
        width: 9.6rem;
        position: relative;
        margin-bottom: .2rem;
        overflow: hidden;
        border-radius: .08rem;
        background: #f0f0f0;
    .u-rcount
        font-size: .22rem;
        color: #999;
        line-height: .32rem;
        margin-top: .18rem;

</style>