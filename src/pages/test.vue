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
    mounted () {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$api.menuTree().then(res => {
                console.warn('page3：请求接口了');
            }).catch(error => {
                console.log(error);
            })
        },
        back() {
            this.$router.go(-1);
        },
        back2() {
            this.$router.go(-2);
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