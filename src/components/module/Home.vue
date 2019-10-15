<template>
  <div class="banner">
    <img v-for="(v,i) in img " :key="i" :src="v" v-show="i==n" />
    <div class="banner-circle">
      <ul>
        <li v-for="(v,i) in img " :key="i" :class="i==n ?'selected':''"></li>
      </ul>
    </div>
  <div class="section-flow">
    <ul>
      <li>
        <i class="iconfont icon-kuaidiyuan"></i>
        <span>1.快速下单，顺丰包邮</span>
      </li>
      <li>
        <i class="iconfont icon-anquan"></i>
        <span>2.专业检测，保障隐私</span>
      </li>
      <li>
        <i class="iconfont icon-qian"></i>
        <span>3.高价回收，神速付款</span>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      n: 0,
      img: [
        require("@/assets/img/z-1.jpg"),
        require("@/assets/img/z-2.jpg"),
        require("@/assets/img/z-3.jpg")
      ]
    };
  },
  methods: {
    fun: function() {
      //setInterval(函数体,时间)
      setInterval(this.play, 2000);
    },
    play: function() {
      this.n++;
      if (this.n == this.img.length) {
        this.n = 0;
      }
    }
  },
  mounted: function() {
    //生命周期  钩子函数   挂载完成
    this.fun();
  },
  components: {

  }
};

</script>
<style scoped>
/*index*/
.banner {
  position: relative;
  top: 135px;
    z-index: -999;
}
.banner .banner-circle {
  position: absolute;
  left: 0;
  right: 0;
  color: #fff;
 
}
.banner .banner-circle li {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
}
.banner .banner-circle ul {
   text-align: center;
  
 
}
.banner .banner-circle .selected {
  background: rgba(0, 0, 0, 0.8);
}
.banner img {
  width: 100%;
  margin: 0;
  padding: 0;
}
.section-flow{
  background:#fff;
  padding:30px 0 20px;
}
.section-flow ul {
    display: flex;
    flex-wrap: wrap;
}
.section-flow ul li {
    width: 33.33%;
    text-align: center;
    list-style: none;
    text-align: center;
}
.section-flow ul li i {
    display: inline-block;
    font-size: 60px;
    color: #ff7200;
}
.section-flow ul li span {
    display: block;
    font-size: 18px;
}
</style>