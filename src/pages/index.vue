<template>
    <div class="fillcontain">
        <head-top></head-top>
        <left-menu></left-menu>
        <section class="console">
            <bread-crumb></bread-crumb>
            <transition >
                <keep-alive :include='includePage'>
                    <router-view v-if="$route.meta.keepAlive" class='router-view'></router-view>
                    <router-view v-if="!$route.meta.keepAlive" class='router-view'></router-view>
                    </keep-alive>
            </transition>
            <!-- <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view> -->
        </section>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import leftMenu from '@/components/leftMenu'
    import breadCrumb from '@/components/breadCrumb'
    import { mapGetters } from 'vuex';

    export default {
        name: 'index',
        components: {
            headTop,
            leftMenu,
            breadCrumb
        },
        data () {
			return {
            }
        },
        computed: {
            computed: {
            ...mapGetters([
                "includePage"
            ])
            }
			// defaultActive: function(){
			// 	return this.$route.path.replace('/', '');
            // }
		},
		mounted () {
			if (this.includePage.indexOf("loanProcess") != -1) {//cdata其实就是c页面的name，可以在路由设置name
                //console.log('有缓存，清除缓存')
                this.$store.commit('UPDATE_INCLUDE_PAGE', {pageName: 'loanProcess', flag: false});
            };
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
