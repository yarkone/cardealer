<template>
    <el-breadcrumb separator="/" class="breadCrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'
import { setInterval } from 'timers';

    export default {
        name: 'breadCrumb',
        data () {
			return {

            }
		},
		mounted () {
            	
		},
        methods: {
            
        }
    }
</script>

<style lang="less">
	@import "../style/defined";
    @import '../style/public';
    @import '../style/keyframes';
    @import '../style/components';
    .breadCrumb {
        margin-bottom: 15px;
        border: 1px solid @borderColor;
        background-color: #fff;
        padding: 10px 0;
    }
</style>
