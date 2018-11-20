<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :stripe="true"
            :fit="true"
            empty-text="-">
            <!-- <template v-for="(item, index) in tableProps">
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :key="index" align="center">
                    <template v-if="index === 0">
                        <template slot-scope="scope">
                            {{item.label}}<span>{{ scope.row.loanTasks && scope.row.loanTasks.length && scope.row.loanTasks[0].createDateStr }}</span>
                        </template>
                    </template>
                    <template v-if="item.label === '当前进度'">
                        <template slot-scope="scope">
                            <template v-for="(item, index) in scope.row.loanTasks">
                                <span :key="index">{{ item.taskName }}<br/></span>
                            </template>
                        </template>
                    </template>
                    <template v-if="item.label === '当前操作人'">
                        <template slot-scope="scope">
                            <span>{{ scope.row.loanTasks && scope.row.loanTasks.length && scope.row.loanTasks[0].operatorName || '-' }}</span>
                        </template>
                    </template>
                    <template v-if="item.label === '操作'">
                        <template slot-scope="scope">
                            <el-button type="primary" size="small">立即处理</el-button>
                            <el-button type="primary" size="small">解锁</el-button>
                        </template>
                    </template>
                </el-table-column>
            </template> -->

            <el-table-column
                label="任务生成时间"
                min-width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.loanTasks && scope.row.loanTasks.length && scope.row.loanTasks[0].createDateStr }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="orderNo"
                label="订单号"
                min-width="210">
            </el-table-column>
            <el-table-column
                prop="realName"
                label="借款人">
                <template slot-scope="scope">
                    <span>{{ scope.row.realName || '-' }}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="demandBankName"
                label="经办银行">
            </el-table-column>
            <el-table-column
                prop="busiSourceName"
                label="进件来源">
            </el-table-column>
            <el-table-column
                prop="acceptName"
                label="经办人">
            </el-table-column>
            <el-table-column
                prop="deptName"
                label="分公司">
            </el-table-column>
            <el-table-column
                label="当前进度"
                min-width="120">
                <template slot-scope="scope">
                    <template v-for="(item, index) in scope.row.loanTasks">
                        <span :key="index">{{ item.taskName }}<br/></span>
                    </template>
                </template>
            </el-table-column>
            <el-table-column
                prop="operatorName"
                label="当前操作人"
                min-width="95">
                <template slot-scope="scope">
                    <span>{{ scope.row.loanTasks && scope.row.loanTasks.length && scope.row.loanTasks[0].operatorName || '-' }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作"
                min-width="170">
                <template slot-scope="scope">
                    <el-button type="primary" size="small">立即处理</el-button>
                    <el-button type="primary" size="small">解锁</el-button>
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
                tableProps: [{prop: '', label: '任务生成时间', width: ''},
                            {prop: 'orderNo', label: '订单号', width: '250'},
                            {prop: 'realName', label: '借款人', width: ''},
                            {prop: 'demandBankName', label: '经办银行', width: ''},
                            {prop: 'busiSourceName', label: '进件来源', width: ''},
                            {prop: 'acceptName', label: '经办人', width: ''},
                            {prop: 'deptName', label: '分公司', width: ''},
                            {prop: '', label: '当前进度', width: '120'},
                            {prop: '', label: '当前操作人', width: ''},
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
            loadData: function() {
                this.$api.loanOrderWorkbench(this.params).then(res => {
                    this.tableData = res.data || [];
                    this.page = res.page;
                    tool.scrollTop(0);
                }).catch(error => {
                    console.log(error);
                })
            },
            handleSizeChange(val) {
                this.params.pageSize = val;
                this.loadData();
            },
            handleCurrentChange(val) {
                this.params.pageNum = val;
                this.loadData();
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
