<template>
    <!-- 导航条 -->
	<div class="navigator">
		<a class="logo-field">
			<span class="logo"><img src="../assets/img/public/logo.png" alt=""></span>
			惠瀜车贷业务云
		</a>
		<ul class="user-field">
			<li class="user-li QR-Code" data-item="QR-Code">
				<a href="javascript:;" class="user-field-item"><i class="iconfont">&#xe600;</i></a>
				<div class="user-li-inner QR-Code-area">
					<img src="../assets/img/QR-Code-online.png" class="QR-Code-img"/>
					<br />
					<span class="QR-Code-text">打开手机扫一扫</span>
				</div>
			</li>
			<li class="user-li message" data-item="message">
				<a href="javascript:;" class="user-field-item message-a">
					<i class="iconfont">&#xe6b4;</i>
					<span class="message-number" id="msgCounter">0</span>
				</a>
				<div class="user-li-inner message-area">
					<ul class="message-panel">
                        <template v-if="busiMsgs.length">
                            <li class="message-item clearfix" v-for="(item, index) in busiMsgs" :key="index">
                                <div class="message-item-data">
                                    <a class="msgEvt" v-bind:title="item.title" >{{item.title}}</a>
                                </div>
                                <span class="message-time">{{item.createDate}}</span>
                            </li>
                        </template>
                        <template v-else>
                            <li class="message-item clearfix" >暂无新消息</li>
                        </template>
                        
                        <li class="message-item clearfix"><a href="#message" class="message-more">更多&gt;&gt;</a></li>
                    </ul>
				</div>
			</li>
			<li class="user-li user" data-item="user" id="userPanel">
				<a class="user-field-item">
                    <span class="user-field-item-text" v-bind:title="userName" >{{userName}}</span>
                    <i class="iconfont iconfont-arrow">&#xe621;</i>
                </a>
				<div class="user-li-inner user-area">
					<div class="user-area-top">
						<dl class="user-panel">
							<dt class="user-panel-key">机构：</dt>
							<dd class="user-panel-value">
								哈哈哈
							</dd>
						</dl>
						<dl class="user-panel">
							<dt class="user-panel-key">职位：</dt>
							<dd class="user-panel-value">总监</dd>
						</dl>
						<dl class="user-panel">
							<dt class="user-panel-key">手机：</dt>
							<dd class="user-panel-value">
								未绑定
								<a class="phone-bind navEvt" data-id="bind">绑定</a>
							</dd>
						</dl>
					</div>
					<div class="user-area-bottom clearfix">
						<a class="modify-pwd navEvt" data-id="password">修改密码</a>
						<a class="user-quit navEvt" @click="doLogout" data-id="exit">退出登录</a>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<!-- 导航条 end-->
</template>

<script>
    import Cookies from 'js-cookie'
    import { tool } from '../mixins/tool'
import { setInterval } from 'timers';

    export default {
        name: 'headTop',
        data () {
			return {
                userName: Cookies.get('_hr_userName') || '',
                busiMsgs: []
            }
		},
		mounted () {
            let that = this;
            that.$api.msgInterval().then(res => {
                console.log(res);
                this.busiMsgs = res.data.busiMsgs;
                this.busiMsgs.forEach(function(item ,index) {
                    item.createDate = tool.formatDate(item.createDate);
                });
            }).catch(error => {
                console.log(error);
            })
            // setInterval(() => {
            //     that.$api.msgInterval().then(res => {
            //         console.log(res);
            //     }).catch(error => {
            //         console.log(error);
            //     })
            // }, 5000);			
		},
        methods: {
            doLogout () {
                let params = {
                    token: Cookies.get('_hr_token')
                };
                this.$api.doLogout(params).then(res => {
                    tool.clearCookies();
                    this.$message({
                        type: 'success',
                        message: '退出成功'
                    });
                    this.$router.push('/');
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="less">
	@import "../style/defined";
    @import '../style/public';
    @import '../style/keyframes';
	@import '../style/components';
    @import '../style/headTop';    
</style>
