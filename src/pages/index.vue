<template>
    <div class="fillcontain">
        <head-top></head-top>
        <left-menu></left-menu>
        <section class="console">
            <!-- <bread-crumb></bread-crumb> -->
            <!-- <transition >
                <keep-alive :include='includePage'>
                    <router-view v-if="$route.meta.keepAlive" class='router-view'></router-view>
                    <router-view v-if="!$route.meta.keepAlive" class='router-view'></router-view>
                    </keep-alive>
            </transition> -->
            <h1>我是首页</h1>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </section>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import leftMenu from '@/components/leftMenu'
    // import breadCrumb from '@/components/breadCrumb'

    export default {
        name: 'index',
        components: {
            headTop,
            leftMenu,
            // breadCrumb
        },
        data () {
			return {}
        },
        computed: {
			// defaultActive: function(){
			// 	return this.$route.path.replace('/', '');
            // }
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
	@import '../style/components';
    @import '../style/headTop';
    @import '../style/console';
</style>
