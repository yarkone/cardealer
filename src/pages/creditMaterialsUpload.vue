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
        <el-button type="primary" @click="go">再进入详情页面</el-button>
        <el-button type="primary" @click="back">返回列表</el-button>
    </div>
</template>

<script>
export default {
    name: 'creditMaterialUpload',
    data() { 
        return {

        }
    },
    mounted () {
        
        this.$api.menuTree().then(res => {
            console.log(`响应数据：${res}`);
        }).catch(error => {
            console.log(error);
        })
    },
    methods: {
        back() {
            this.$router.back();
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