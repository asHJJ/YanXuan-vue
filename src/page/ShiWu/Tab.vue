<template>
    <div v-if="tabId === 9">
         <div class="main-content" v-for="(item,index) in tuijian" :key="index" >
            <div class="m-tpl" v-for="(val,index) in item.topics" :key="index" >
                <GroupItem v-if="val.style===1" :val="val" />
                <XuanMei v-if="val.style === 2" :val="val"/>
            </div>
        </div>
    </div>
    <div v-if="tabId ===7">
        <div class="shandai">
            <h3>TA们的严选生活</h3>
            <div class="btn">
                <span class="new">最新</span>
                <span class="hot">本月最热</span>
                <span class="shaidan">晒单合辑</span>
            </div>
            <div class="list">

            </div>


        </div>
    </div>
</template>
<script>
import XuanMei from '../../components/XuanMei/XuanMei.vue'
import GroupItem from '../../components/GroupItem/GroupItem.vue'
import {mapState} from 'vuex'
export default{

    name:"Tab",
    computed:{
        ...mapState({
            shiwu: state => state.shiwu.shiwu,
            tuijian:state =>state.shiwu.tuijian
        }),
        tabId () {
            if (this.$route.params.id === '0') return 9
            else if (this.$route.params.id === '1') return 4
            else if (this.$route.params.id === '2') return 5
            else if (this.$route.params.id === '3') return 7
            else if (this.$route.params.id === '4') return 6
        }
    },
    mounted () {
        if (this.tabId === 9) {
            this.$store.dispatch('getShiwu')
            this.$store.dispatch('getTuijian')
        }else if(this.tabId ===7){
            this.$store.dispath('')
        }
    },
    components: {
        XuanMei,
        GroupItem
    },


}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .main-content
          .m-tpl
                width: 100%;
                background: #fff;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                padding: .36rem .3rem

</style>