<template>
    <el-menu :default-active="defaultActive" :default-openeds="defaultOpeneds" style="position: fixed;z-index: 10;left: 0;top: 60px;bottom: 0;width: 200px; overflow-x: hidden;border-radius:0;background-color: #fff;" router>
        <template v-for="(item, index) in menuObj" >
            <template v-if="!item.length">
                <el-menu-item :index="'/index/' + index" :key="index"><i class="el-icon-menu"></i>{{ menuTreeMap[index] && menuTreeMap[index].name || index }}</el-menu-item>
            </template>
            <template v-else>
                <el-submenu :index="index" :key="index">
                    <template slot="title"><i class="el-icon-document"></i>{{ menuTreeMap[index] && menuTreeMap[index].name || index }}</template>
                    <template v-for="(item1, index2) in item" >
                        <el-menu-item :index="'/index/' + item1" :key="index2">{{ menuTreeMap[item1] && menuTreeMap[item1].name || item1 }}</el-menu-item>
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
            
        },
		mounted () {
            
		},
        methods: {
            loadTree(cb) {
                this.$api.menuTree().then(res => {
                    this.menuObj = res.data;
                    this.menuTreeMap = menuTreeMap;
                    if(cb && typeof cb === 'function') cb();
                }).catch(error => {
                    console.log(error);
                })
            },
            defaultActive() {
                return this.loadTree(() => {
                    let firstMenuName = '';
                    for(let i in this.menuObj) {
                        firstMenuName = i;
                        break;
                    }
                    console.log(firstMenuName, this.$route.path);
                    if(firstMenuName) {
                        return '/index/' + firstMenuName;
                    } else {
                        return this.$route.path;
                    }
                });
                                
            }            
        },
        computed: {
			defaultOpeneds() {
                let arr = [];
                for(let i in this.menuObj) {
                    if(this.menuObj[i].length) {
                        arr.push(i);
                    }
                }
                return arr;
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
