<template>
    <div class="fillcontain">
        <head-top></head-top>
        <left-menu></left-menu>
        <section class="console">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </section>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import leftMenu from '@/components/leftMenu'
    import console from '@/components/console'

    export default {
        name: 'index',
        components: {
            headTop,
            leftMenu,
            console
        },
        data () {
			return {
                
            }
        },
        computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
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
	@import '../style/components';
    @import '../style/headTop';
    @import '../style/console';
</style>
