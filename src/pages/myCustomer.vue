<template>
    <div>
        我是我的客户
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'

    export default {
        name: 'myCustomer',
        data () {
			return {

            }
        },
        created () {
            // let that = this;
            // that.$api.menuTree().then(res => {
            //     console.log(res);
            //     this.menuObj = res.data;
            //     this.menuTreeMap = menuTreeMap;
            // }).catch(error => {
            //     console.log(error);
            // })
        },
		mounted () {
			
		},
        methods: {
            
        },
        computed: {
			
		}
    }
</script>

<style lang="less">
	@import "../style/defined";
	@import '../style/public';
	@import '../style/components';
</style>
