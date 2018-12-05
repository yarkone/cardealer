<template>
    <div class="fillcontain">
        <head-top></head-top>
        <left-menu></left-menu>
        <section class="console">
            <div class="layout" style="position: relative;">
                <div class="errorBox">
                    <a href="javascript:;" class="button button-deep">返回贷款办理</a>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
    import headTop from '@/components/headTop'
    import leftMenu from '@/components/leftMenu'
    export default {
        name: 'NotFoundComponent',
        components: {
            headTop,
            leftMenu
        },
        data() { 
            return {

            }
        }
    }
</script>

<style lang="less">
	@import "../style/defined";
	@import '../style/public';
	@import '../style/components';
    @import '../style/headTop';
    @import '../style/console';
    .errorBox {
        margin: 90px auto;
        width: 680px;
        height: 445px;
        background: url(../assets/img/public/404.png) 0 0 no-repeat; 
        background-size:100%;
        .button-deep {
            position: absolute; 
            top: 260px;
            left:50%;
            margin-left: -62px;
        }
    }
</style>