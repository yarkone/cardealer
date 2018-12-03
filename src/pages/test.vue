<template>
    <div class="credit-material-upload">
        <el-button type="primary" @click="back">返回征信上传【返回一次】</el-button>
        <el-button type="primary" @click="back2">返回搜索结果【返回两次】</el-button>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() { 
        return {

        }
    },
    methods: {
        back() {
            this.$router.back();
        },
        back2() {
            this.$router.push('loanProcess');
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