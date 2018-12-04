<template>
    <div class="credit-material-upload">
        <div class="panel mt15 padding20 modifyBank">
            <div class="panel-item">
                <div class="key-value-box">
                    <span class="key">征信查询银行：</span><span class="value">银行</span>
                        <a href="javascript:;" class="modifyBankEvt">修改</a>
                </div>
            </div>
            <div class="panel-item">
                <div class="key-value-box">
                    <span class="key">业务发生地：</span><span class="value">哈哈哈哈银行</span>
                </div>
            </div>
        </div>
        <el-button type="primary" @click="back">返回列表</el-button>
        <el-button type="primary" @click="go">进入test页面</el-button>
    </div>
</template>

<script>
export default {
    name: 'creditMaterialsUpload',
    data() { 
        return {
            res: {},
            isFirstEnter: false // 是否第一次进入，默认false
        }
    },
    beforeRouteEnter(to, from, next) {
        // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
        // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
        // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
        // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
        if(from.name === 'test') {
            to.meta.isBack = true;
            //判断是从哪个路由过来的，
            //如果是test过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
        }
        
        next();
    },
    created () {
        this.isFirstEnter = true;
        console.log('page2：created')
    },
    mounted () {
        console.log('page2：mounted')
    },
    activated () {
        console.log('page2：activated');
        if(!this.$route.meta.isBack || this.isFirstEnter){
            // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
            // 如果isFirstEnter是true，表明是第一次进入此页面或用户刷新了页面，需获取新数据
            this.res = {};              // 把数据清空，可以稍微避免让用户看到之前缓存的数据
            this.loadData();//请求接口
        }
        // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
        this.$route.meta.isBack = false;
        // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
        this.isFirstEnter = false;    
    },
    methods: {
        loadData() {
            this.$api.menuTree().then(res => {
                this.res = res;
                console.warn('page2：请求接口了');
            }).catch(error => {
                console.log(error);
            })
        },
        back() {
            this.$router.go(-1);
        },
        go() {
            this.$router.push('test')
        }
    }
}
</script>

<style lang="less">
	@import "../style/defined";
	@import '../style/public';
    @import '../style/components';
    // @import '../style/global';
</style>