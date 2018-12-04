<template>
    <div>
        <!-- <bread-crumb :prop="location"></bread-crumb> -->
        <div class="select-area">
            <div class="demo-input-suffix">
                经办银行：
                <el-select 
                v-model="params.demandBankId"
                :title="selectTitle.bankName"
                placeholder="全部"
                clearable
                @visible-change="selectBank"
                @change="loadData">
                    <el-option
                    v-for="item in bankOptions"
                    :key="item.id"
                    :label="item.bankName"
                    :value="item.id"
                    :title="item.bankName">
                    </el-option>
                </el-select>
            </div>
            <div class="demo-input-suffix">
                分公司：
                <el-select 
                v-model="params.deptId"
                :title="selectTitle.deptName"
                placeholder="全部"
                clearable
                @visible-change="getPmsDeptList"
                @change="loadData">
                    <el-option
                    v-for="item in deptOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                    :title="item.name">
                    </el-option>
                </el-select>
            </div>
            <div class="demo-input-suffix">
                <el-input v-model="params.fuzzyParam" style="width: 300px;" placeholder="订单号\借款人姓名\身份证号\手机号"></el-input>
            </div>
            <div class="demo-input-suffix">
                <a href="javascript:;" @click="reset">重置</a>
                <el-button type="primary" @click="loadData">搜索</el-button>
            </div>
        </div>
        <el-table
            :data="tableData"
            :stripe="true"
            :show-header="true"
            :fit="true">
            <el-table-column v-for="(item, index) in tableProps" :prop="item.prop" :label="item.label" :width="item.width" :key="index">
                <template slot-scope="scope">
                    <template v-if="item.label === '任务生成时间'">
                        <span>{{ scope.row.loanTasks && scope.row.loanTasks.length && scope.row.loanTasks[0].createDateStr || '--' }}</span>
                    </template>
                    <template v-else-if="item.label === '当前进度'">
                        <template v-for="(item1, index2) in scope.row.loanTasks">
                            <span :key="index2">{{ item1.taskName }}<br/></span>
                        </template>
                    </template>
                    <template v-else-if="item.label === '当前操作人'">
                        {{ scope.row.loanTasks && scope.row.loanTasks.length && scope.row.loanTasks[0].operatorName || '--' }}
                    </template>
                    <template v-else-if="item.label === '操作'">
                        <el-button type="primary" size="small" @click="handle(scope.$index, scope.row)">立即处理</el-button>
                        <router-link to="creditMaterialsUpload">征信上传</router-link>
                        <el-button type="primary" size="small" v-show="scope.row.loanTasks[0].lock && scope.row.loanTasks[0].lockMack" @click="openOrder(scope.$index)">解锁</el-button>
                    </template>
                    <template v-else>
                        {{ scope.row[item.prop] || '--' }}
                    </template>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            style="margin-top: 15px;border-radius: 3px;border: 1px solid #ddd;background: #fff;padding: 10px;text-align: right;"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[10, 15, 20, 25, 50, 100]"
            :page-size="page.pageSize"
            :page-count="page.pages"
            :total="page.total">
        </el-pagination>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'
    import breadCrumb from '@/components/breadCrumb'

    export default {
        name: 'loanProcess',
        components: {
            breadCrumb
        },
        data () {
			return {
                isFirstEnter: false, // 是否第一次进入，默认false
                location: {},
                bankOptions: [],
                deptOptions: [],
                hasBankload: false,
                hasDeptload: false,
                tableProps: [{prop: '', label: '任务生成时间', width: '120'},
                            {prop: 'orderNo', label: '订单号', width: '250'},
                            {prop: 'realName', label: '借款人', width: ''},
                            {prop: 'demandBankName', label: '经办银行', width: ''},
                            {prop: 'busiSourceName', label: '进件来源', width: ''},
                            {prop: 'acceptName', label: '经办人', width: ''},
                            {prop: 'deptName', label: '分公司', width: ''},
                            {prop: '', label: '当前进度', width: '120'},
                            {prop: '', label: '当前操作人', width: '125'},
                            {prop: '', label: '操作', width: '170'}],
                tableData: [],
                page: {},
                params: {
                    pageNum: 1,
                    pageSize: 20,
                    demandBankId: '',
                    deptId: '',
                    fuzzyParam: ''
                },
                selectTitle: {
                    bankName: '',
                    deptName: ''
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            // 路由导航钩子，此时还不能获取组件实例 `this`，所以无法在data中定义变量（利用vm除外）
            // 参考 https://router.vuejs.org/zh-cn/advanced/navigation-guards.html
            // 所以，利用路由元信息中的meta字段设置变量，方便在各个位置获取。这就是为什么在meta中定义isBack
            // 参考 https://router.vuejs.org/zh-cn/advanced/meta.html
            if(from.name === 'creditMaterialsUpload' || from.name === 'test') {
                to.meta.isBack = true;
                //判断是从哪个路由过来的，
                //如果是creditMaterialsUpload过来的，表明当前页面不需要刷新获取新数据，直接用之前缓存的数据即可
            }
            
            next();
        },
        created () {
            this.isFirstEnter = true;
            // 只有第一次进入或者刷新页面后才会执行此钩子函数
            // 使用keep-alive后（2+次）进入不会再执行此钩子函数
        },
		mounted() {

        },
        activated() {
            console.log('page1：activated');
            if(!this.$route.meta.isBack || this.isFirstEnter){
                // 如果isBack是false，表明需要获取新数据，否则就不再请求，直接使用缓存的数据
                // 如果isFirstEnter是true，表明是第一次进入此页面或用户刷新了页面，需获取新数据
                this.params = {
                    pageNum: 1,
                    pageSize: 20,
                    demandBankId: '',
                    deptId: '',
                    fuzzyParam: ''
                };// 把数据清空，可以稍微避免让用户看到之前缓存的数据
                this.loadData();
            }
            // 恢复成默认的false，避免isBack一直是true，导致下次无法获取数据
            this.$route.meta.isBack = false;
            // 恢复成默认的false，避免isBack一直是true，导致每次都获取新数据
            this.isFirstEnter = false;
        
        },
        methods: {
            reset() {
                this.params = {
                    pageNum: 1,
                    pageSize: 20,
                    demandBankId: '',
                    deptId: '',
                    fuzzyParam: ''
                };
                this.loadData();
            },
            loadData(cb) {
                this.$api.loanOrderWorkbench(this.params).then(res => {
                    console.warn('page1：请求接口了');
                    this.tableData = res.data || [];
                    this.page = res.page;

                    //此处为避免下拉框过短，造成选中之后看不见内容的问题，故加上title用于鼠标移上显示
                    let arr1 = this.bankOptions.filter((item)=>{
                        return item.id === this.params.demandBankId;
                    }), arr2 = this.deptOptions.filter((item)=>{
                        return item.id === this.params.deptId;
                    });
                    this.selectTitle.bankName = arr1.length && arr1[0].bankName || '';
                    this.selectTitle.deptName = arr2.length && arr2[0].name || '';
                    
                    if(cb && typeof cb === 'function') {
                        cb();
                    }
                }).catch(error => {
                    console.log(error);
                })
            },
            selectBank(boolean) {
                if(boolean && !this.hasBankload)
                    this.$api.demandBankSelectBank().then(res => {
                        this.hasBankload = true;
                        this.bankOptions = res.data;
                    }).catch(error => {
                        this.hasBankload = false;
                        console.log(error);
                    })
            },
            getPmsDeptList(boolean) {
                if(boolean && !this.hasDeptload)
                    this.$api.pmsDeptGetPmsDeptList().then(res => {
                        this.hasDeptload = true;
                        this.deptOptions = res.data;
                    }).catch(error => {
                        this.hasDeptload = false;
                        console.log(error);
                    })
            },
            handleSizeChange(val) {
                this.params.pageSize = val;
                this.loadData(tool.scrollTop(0));
            },
            handleCurrentChange(val) {
                this.params.pageNum = val;
                this.loadData(tool.scrollTop(0));
            },
            handle(index, row) {
                console.log(row.loanTasks[0].category);
                if (row.loanTasks && row.loanTasks.length) {
                    this.$router.push({
                        name: row.loanTasks[0].category,
                        query: tool.redirect(row.loanTasks)
                    })
                }
            },
            openOrder(idx) {
                let ids = [];
                this.tableData[idx].loanTasks.forEach((item ,index) => {
                    ids.push(item.id);
                });
                let params = {
                    type: 1,
                    ids: ids.join(',')
                };
                this.$confirm('确认解锁改订单吗？', '提示', {
                    lock: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    this.$api.taskLock(params).then(res => {
                        this.loadData(() => {
                            this.$message({
                                type: 'success',
                                message: '解锁成功!'
                            });
                        });
                    }).catch(error => {
                        console.log(error);
                    })
                }).catch(() => {});
                
            }
        },
        watch: {
            
        },
        computed: {
			
		}
    }
</script>

<style lang="less">
	@import "../style/defined";
	@import '../style/public';
    @import '../style/components';
    .select-area {
        border: 1px solid @borderColor;
        background: #fff;
        padding: 20px 40px;
        border-bottom: 0;
    }
    .demo-input-suffix {
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 10px;
    }
</style>
