<template>
    <el-menu :default-active="defaultActive" style="position: fixed;z-index: 10;left: 0;top: 60px;bottom: 0;width: 200px; overflow-x: hidden;border-radius:0;" theme="dark" router>
        <template v-for="(item, index) in menuObj" >
            <template v-if="!item.length">
                <el-menu-item index="index" :key="index"><i class="el-icon-menu"></i>{{index}}{{menuTreeMap[index]}}{{menuTreeMap.loanProcess.name}}</el-menu-item>
            </template>
            <template v-else>
                <el-submenu :index="item.length.toString()" :key="index">
                    <template slot="title"><i class="el-icon-document"></i>{{menuTreeMap[index]}}</template>
                    <template v-for="(item1, index2) in item" >
                        <el-menu-item :index="item1" :key="index2">{{menuTreeMap[index]}}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </template>
    </el-menu>
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'
    import { menuTreeMap } from '../mixins/menuTreeMap'

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
                // console.log(menuTreeMap)
                // console.log(menuTreeMap['loanProcess'].name)
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
    @import '../style/menu';
</style>
