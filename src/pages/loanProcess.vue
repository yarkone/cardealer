<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :stripe="true"
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
                        <el-button type="primary" size="small" @click="handle">立即处理</el-button>
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
            :page-sizes="[10, 15, 15, 20, 25, 50, 100]"
            :page-size="page.pageSize"
            :page-count="page.pages"
            :total="page.total">
        </el-pagination>
    </div>
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'

    export default {
        name: 'loanProcess',
        data () {
			return {
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
                    pageSize: 20
                }
            }
        },
        created () {
            this.loadData();
        },
		mounted() {
			
		},
        methods: {
            loadData(cb) {
                this.$api.loanOrderWorkbench(this.params).then(res => {
                    this.tableData = res.data || [];
                    this.page = res.page;
                    if(cb && typeof cb == 'function') {
                        cb();
                    }
                }).catch(error => {
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
            handle() {

            },
            openOrder(idx) {
                let ids = [];
                console.log(idx)
                this.tableData[idx].loanTasks.forEach(function(item ,index) {
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
</style>
