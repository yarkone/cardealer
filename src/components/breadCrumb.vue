<template>
    <el-breadcrumb separator="/" class="breadCrumb" separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="(item) in levelList" :key="item.path" v-if="item.meta.title">
            <router-link :to="item.redirect||item.path">{{item.meta.title}}</router-link>
          </el-breadcrumb-item>
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
                levelList: null
            }
		},
		mounted () {
            this.getBreadcrumb();
            
		},
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name)
                const first = matched[0]
                if (first && first.name !== '首页') {
                    matched = [{path: '/index', meta: { title: '首页' }}].concat(matched)
                }
                this.levelList = matched;
            }
        },
        watch: {
            $route(to, from) {
                this.getBreadcrumb();
            }
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
