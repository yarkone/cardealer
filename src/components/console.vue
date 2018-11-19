<template>
    <keep-alive>
        router
    </keep-alive>
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'

    export default {
        name: 'leftMenu',
        data () {
			return {
                menuObj: {},
                menuTreeMap: {}
            }
        },
        created () {
            let that = this;
            that.$api.menuTree().then(res => {
                console.log(res);
                this.menuObj = res.data;
                this.menuTreeMap = menuTreeMap;
            }).catch(error => {
                console.log(error);
            })
        },
		mounted () {
			
		},
        methods: {
            
        },
        computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		}
    }
</script>

<style lang="less">
	@import "../style/defined";
	@import '../style/public';
	@import '../style/components';
</style>
