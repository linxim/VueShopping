<template>
    <div class="login">
        <div class="login-2">
           <div>账号:<el-input v-model="input" placeholder="请输入用户名"></el-input> </div> 
             <div>密码:<el-input v-model="input" placeholder="请输入密码"></el-input> </div> 
             <br>
                <el-button size="medium">登录</el-button>
                <el-button size="medium">注册</el-button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
export default {
    data() {
        return {
            input:'',
            name:"登录"
        }
    },
}
</script>
<style>

    .login-2{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: 200px auto;
        width: 300px;
        height: 300px;

    }
</style>