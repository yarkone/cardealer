export const menuTreeMap = {
    loanProcess: {
        name: '贷款办理',
        route: 'loanProcess',
        icon: '&#xe6f9;'
    },
    myCustomer: {
        name: '我的客户',
        route: 'myCustomer',
        icon: '&#xe6c3;'
    },
    orderManage: {
        name: '订单管理',
        route: '',
        icon: '&#xe60e;'
    },
    'orderModifyAudit': {
        name: '信息修改审核',
        route: 'orderModifyAudit',
        icon: '&#xe638;'
    },
    'cancelOrderAudit': {
        name: '终止订单审核',
        route: 'cancelOrderAudit',
        icon: '&#xe60c;'
    },
    moneyManage: {
        name: '财务管理',
        route: '',
        icon: '&#xe623;'
    },
    'marginManage': {
        parent: 'moneyManage',
        name: '保证金管理',
        route: 'marginManage'
    },
    inspectData: {
        name: '贷后数据核查',
        route: '',
        icon: '&#xe65c;'
    },
    'activeInspect': {
        parent: 'inspectData',
        name: '发起主动抽查',
        route: 'activeInspect'
    },
    'historyInspect': {
        key: 'inspectData',
        name: '历史核查记录',
        route: 'historyInspect'
    },
    licenceManage: {
        name: '上牌管理',
        route: '',
        icon: '&#xe61b;'
    },
    'licenceProcess': {
        parent: 'licenceManage',
        name: '上牌办理',
        route: 'licenceProcess'
    },
    'licenceAudit': {
        key: 'licenceManage',
        name: '上牌审核',
        route: 'licenceAudit'
    },
    'licenceStatis': {
        key: 'licenceManage',
        name: '上牌进度统计',
        route: 'licenceStatis'
    },
    mortgageManage: {
        name: '抵押管理',
        route: '',
        icon: '&#xe65d;'
    },
    'mortgageProcess': {
        parent: 'mortgageManage',
        name: '抵押办理',
        route: 'mortgageProcess'
    },
    'mortgageAudit': {
        key: 'mortgageManage',
        name: '抵押审核',
        route: 'mortgageAudit'
    },
    'mortgageStatis': {
        key: 'mortgageManage',
        name: '抵押进度统计',
        route: 'mortgageStatis'
    },
    expireManage: {
        name: '逾期管理',
        route: '',
        icon: '&#xe654;'
    },
    'expireInfoInput': {
        parent: 'expireManage',
        name: '逾期信息录入',
        route: 'expireInfoInput'
    },
    'expireProcess': {
        parent: 'expireManage',
        name: '逾期处理',
        route: 'expireProcess'
    },
    'legalProcessing': {
        parent: 'expireManage',
        name: '法务催收',
        route: 'expireCollection',
        params: {
            path: 'legalProcessing'
        }
    },
    'offlineCollection': {
        parent: 'expireManage',
        name:'线下催收',
        route: 'expireCollection',
        params: {
            path: 'offlineCollection'
        }
    },
    'telephoneCall': {
        parent: 'expireManage',
        name: '电话催收',
        route: 'expireCollection',
        params: {
            path: 'telephoneCall'
        }
    },
    archiveManage: {
        name: '档案管理',
        route: '',
        icon: '&#xe630;'
    },
    'materialReceive': {
        parent: 'archiveManage',
        name: '材料收发管理',
        route: 'materialReceive'
    },
    'fileManage': {
        parent: 'archiveManage',
        name: '归档管理',
        route: 'fileManage'
    },
    archiveDownload: {
        name: '下载与打印',
        route: '',
        icon: '&#xe60a;'
    },
    'creditArchiveDownload': {
        parent: 'archiveDownload',
        name: '征信材料下载',
        route: 'creditArchiveDownload'
    },
    'loadArchiveDownload': {
        parent: 'archiveDownload',
        name: '贷款材料下载',
        route: 'loadArchiveDownload'
    },
    'documentDownload': {
        parent: 'archiveDownload',
        name: '文档下载',
        route: 'documentDownload'
    },
    archivePrint: {
        name: '资料打印',
        route: '',
        icon: '&#xe60a;'
    },
    'moneyBusinessAuditPrint': {
        parent: 'archiveDownload',
        name: '财务审批表打印',
        route: 'moneyBusinessAuditPrint'
    },
    'auditPrint': {
        parent: 'archivePrint',
        name: '审批表',
        route: 'auditPrint'
    },
    operationsAnalysis: {
        name: '统计分析',
        route: 'operationsAnalysis',
        icon: '&#xe603;'
    },
    gpsManage: {
        name: 'GPS管理',
        route: '',
        icon: '&#xe626;'
    },
    gpsPlace: {
        parent: 'gpsManage',
        name: '位置跟踪',
        route: 'gpsPlace',
    },
    // gpsStatistical: {
    // 	parent: 'gpsManage',
    // 	name: '统计报表',
    // 	route: 'gpsStatistical',
    // },
    gpsArea: {
        parent: 'gpsManage',
        name: '区域管理',
        route: 'gpsArea',
    },
    gpsEquipment: {
        parent: 'gpsManage',
        name: '设备中心',
        route: 'gpsEquipment',
    },
    organizationManage: {
        name: '合作机构管理',
        route: '',
        icon: '&#xe6cb;'
    },
    // cooperateManage: {
    // 	name: '合作机构管理',
    // 	route: '',
    // 	icon: '&#xe6cb;'
    // },
    cooperationBankManage: {
        parent: 'organizationManage',
        name: '合作银行',
        route: 'cooperationBankManage',
    },
    cooperationCarManage: {
        parent: 'organizationManage',
        name: '合作车商',
        route: 'cooperationCarManage',
    },
    cooperationGuaranteeManage: {
        parent: 'organizationManage',
        name: '合作担保',
        route: 'cooperationGuaranteeManage',
    },
    cooperationInsuranceManage: {
        parent: 'organizationManage',
        name: '合作保险',
        route: 'cooperationInsuranceManage',
    },
    cooperationAgentManage: {
        parent: 'organizationManage',
        name: '合作代理',
        route: 'cooperationAgentManage',
    },
    bigdata: {
        name: '大数据中心',
        route: '',//大数据二级菜单route都用这个analysisTable
        icon: '&#xe68a;'
    },
    valueAddOnline: {
        name: '在线查询',
        route: '',
        icon: '&#xe69b;'
    },
    valueAddcheck: {
        parent: 'valueAddOnline',
        name: '在线查询',
        route: 'valueAddcheck'
    },
    valueAddHistory: {
        parent: 'valueAddOnline',
        name: '查询历史列表',
        route: 'valueAddHistory'
    },
    systemSettings: {
        name: '系统设置',
        route: '',
        icon: '&#xe645;'
    },
    playMoneyAccount: {
        parent: 'systemSettings',
        name: '打款账户设置',
        route: 'playMoneyAccount'
    },
    feePolicy: {
        parent: 'systemSettings',
        name: '政策维护',
        route: 'feePolicy',
    },
    feePolicyApproval: {
        parent: 'systemSettings',
        name: '政策审批',
        route: 'feePolicyApproval',
    },
    feePolicyRule: {
        parent: 'systemSettings',
        name: '政策规则配置',
        route: 'feePolicyRule',
    },
    'overdueManager': {
        'name': '逾期管理',
        'route': '',
        'icon': '&#xe654;'
    },
    'overdueInfo': {
        'parent': 'overdueManager',
        'name': '逾期信息管理',
        'route': 'overdueInfo'
    },
    'overdueHi': {//还没做，为了界面美观，先注释
        'parent': 'overdueManager',
        'name': '逾期还清记录',
        'route': 'overdueHi'
    },	
    'expireManage': {
        'parent': 'overdueManager',
        'name': '逾期处理',
        'route': 'expireManage'
    }
}
