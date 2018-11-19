<template>
    <div id="login">
        <header>
            <div class="container">
                <img src="../assets/img/logo.png" class="logo" alt="惠瀜科技">
                <div class="logo-title">{{ msg }}</div>
            </div>
        </header>
        <section class="bg">
            <div class="inner-bg">
                <div class="form-text"></div>
                <div class="form-text none-background">
                    <div class="form-title">登录</div>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm" :style="{width: '200px', margin: '30px auto'}">
                        <el-form-item prop="username">
                            <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn" :style="{width: '200px'}">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </section>
        <footer>

        </footer>
    </div>
</template>

<script>
    import jquery from 'jquery'
    import Cookies from 'js-cookie'
    import md5 from 'md5'

    export default {
        name: 'login',
        props: {
            msg: String
        },
        data () {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                showLogin: false
            }
        },
        beforeCreate () {
            if(Cookies.get('_hr_token')) {
                this.$router.push('/index');
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let params = {
                            account: this.loginForm.username,
                            password: md5(this.loginForm.password),
                            LoginAgent: 'WEB'
                        };
                        this.$api.doLogin(params).then(res => {
                            if(res.data && res.data.token) {
                                Cookies.set('_hr_token', res.data.token);
                                Cookies.set('_hr_userName', res.data.loginInfo && res.data.loginInfo.name || '');
                            }
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            });
                            this.$router.push('/index');
                        }).catch(error => {
                            console.log(error);
                        })
                    } else {
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的用户名密码',
                            offset: 100
                        });
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    header {
        height: 60px;
        background-color: #fff;
        .container {
            width: 900px;
            margin: 0 auto;
            .logo {
                width: 100px;
                float: left;
                margin-top: 14px;
            }
            .logo-title {
                font-size: 15px;
                display: inline-block;
                height: 30px;
                line-height: 30px;
                border-left: 1px solid #ddd;
                margin: 16px 0 0 20px;
                padding-left: 20px;
            }
        }
    }
    section.bg {
        position: relative;
        background: url(../assets/img/background.png) no-repeat 0 0;
        height: 693px;
        .inner-bg {
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -438px;
            margin-top: -250px;
            width: 877px;
            height: 500px;
            background: url(../assets/img/bg2.png) no-repeat 0 0;
            .form-text {
                position: absolute;
                right: 0;
                top: 0;
                width: 400px;
                height: 500px;
                background-color: #fff;
                opacity: .8;
            }
            .form-text.none-background {
                background: none;
                opacity: 1;
            }
            .form-text .form-title {
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                margin: 130px 0 30px 0;
            }
            .form-text .input-text,
            .form-text .button {
                display: block;
                width: 200px;
                margin: 30px auto !important;
                border-radius: 36px !important;
                height: 36px;
            }
            .form-text .input-text {
                border: 1px solid #ddd;
            }
            .form-text .button {
                line-height: 36px;
                text-align: center;
                cursor: pointer;
            }
            .form-text .row {
                width: 200px;
                margin: 0 auto;
            }
            .copyright {
                color: #999;
                text-align: center;
                margin: 40px 0 20px 0;
            }
            .copyright a {
                color: #999;
            }
        }
    }
</style>
