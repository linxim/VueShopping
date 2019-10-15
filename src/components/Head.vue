<template>
  <div class="nav-head">
    <div class="line"></div>
    <el-menu
        :default-active="activeIndex2"
      class="el-menu-demo text-right"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f4f4f4"
      text-color="#000"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/information" class="z-head-a">
          <img src="@/assets/img/z-user.jpg" class="img-size" />
          林夕
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/home" class="z-head-a">放心收</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/login" class="z-head-a">登录</router-link>
      </el-menu-item>
      <el-menu-item index="4"><router-link to="/find" class="z-head-a">快递信息</router-link> </el-menu-item>

      <el-menu-item index="5" @click="onSubmit1()">
        <router-link to="/shocart" class="z-head-a">订单管理</router-link>
      </el-menu-item>
    </el-menu>
    <div class="header-search">
    <div class="header-l">

      <input
      type="text" 
      class="form-control "
        placeholder="请输入内容"
        v-model="keyword"
        @keyup="get($event)"
        @keydown.down.prevent="selectDown"
        @keydown.up.prevent="selectUp"
      >
      </input> 
         <el-button>搜索</el-button>
    </div>
      <div class="header-r">
      <div class="header-nav">
        <ul>
          <li>
            <router-link to="/home">
              <label>手机回收</label>
            </router-link>
          </li>
          <li>
            <router-link to="/oldfornew">
              
              <el-tooltip content="此功能还未完善" placement="top" class="z-el-button">
              <el-button>以旧换新</el-button>
              </el-tooltip>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
               <el-tooltip content="此功能还未完善" placement="bottom" class="z-el-button">
              <el-button>笔记本回收</el-button>
              </el-tooltip>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
               <el-tooltip content="此功能还未完善" placement="top" class="z-el-button">
              <el-button>其他回收</el-button>
              </el-tooltip>
            </router-link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return {
        input: "",
         activeIndex1: "1",
       activeIndex2: "1",
             myData:[],
             keyword:'',
             now:-1
      }
        },
        methods:{
            handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
            get:function (event) {
                if(event.keyCode==38||event.keyCode==40)return;
                if(event.keyCode==13){
                    window.open('https://www.baidu.com/s?wd='+this.keyword);
                    this.keyword=''
                }
                this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su' ,{
                    wd:this.keyword
                },{
                    jsonp:'cb'
                }).then(function (res) {
                    this.myData=res.data.s;
                },function () {

                });
            },
            selectDown:function () {
                this.now++;
                if(this.now==this.myData.length)this.now=-1;
                this.keyword=this.myData[this.now];
            },
            selectUp:function () {
                this.now--;
                if(this.now==-2)this.now=this.myData.length-1;
                this.keyword=this.myData[this.now];
            }
        }
  
};
</script>
<style scoped>
.nav-head {
  padding: 0;
  margin: 0;
  height: 135px;
  z-index: 999;
}
.header-nav {
  position: relative;
  z-index: 10;
  width: 500px;
  list-style-type: none;
  font-size: 16px;
  display: inline-block;
}
.header-nav li {
  list-style: none;
  display: inline-block;
  padding: 10px 10px;
}

.header-nav li a:hover {
  color: #f0423c;
}
.header-nav li a {
  text-decoration: none;
  color: #000;
}
.text-right {
  float: right;
  margin: 0;
  padding: 0;
  height: 51px;
}
/* .text-right li {
  height: 51px;
} */
.header-search {
  left: 100px;
  width: 100%;
  position: relative;
  display: inline-block;
  height: 100px;
}
.el-input {
  outline: none;
  width: 300px;
}
.el-input__inner {
  border: 1px solid #f0423c;
  border-radius: 0;
  outline: none;
}
.el-input__inner:focus {
  border-color: #fff;
}
.el-button {
  padding: 12px 5px;
  background: #f0423c;
  color: #fff;

}
.el-tabs__nav-wrap {
  position: absolute;
  display: inline-block;
  width: 500px;
}
.img-size {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
}
.title {
  color: #ffffff;
  text-align: center;
}
.gray {
  background-color: #dff0d8;
}
.textprimary {
  color: #3c763d;
  text-align: center;
  font-family: "Microsoft YaHei UI";
  font-size: larger;
  font-weight: bolder;
  font-size: 30px;
}

.form-control{
  width: 300px;
  display: inline-block;
}
.header-l{
  display: inline-block;
  width: 400px;
  height:50px;

}
.header-r{
  display: inline-block;
  width: 400px;
  height:50px;
}
.z-el-button{
  background:rgba(0,0,0,0);
  color: #000;
  border: none;
  font-size: 16px;
}
.z-el-button:hover{
  color: #f0423c;
  text-decoration: none;
}
.z-head-a{
  display: block;
  padding: 0 25px;

}
.z-head-a:hover{
  text-decoration: none;
}
.el-menu-item{
  padding: 0;
}
</style>