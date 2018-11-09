<template>
    <head-top></head-top>
</template>

<script>
    import headTop from '@/components/headTop'

    export default {
        name: 'index',
        components: {
            headTop,
            // leftMenu
        },
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
	@import '../style/components';
    @import '../style/headTop';
    // @import '../style/leftMenu';
</style>
