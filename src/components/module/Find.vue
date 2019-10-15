<template>
  <div class="z-content">
    <div class="head">
      <div class="z-content-size">
        <div class="header-title">放心快递</div>
        <p class="header-p">
          用安全追求速度，用速度追求效率，
          用效率追求服务，用服务感动客户
        </p>
      </div>
    </div>
    <div class="z-body-title">
      <el-tag type="success">亲，您的快递信息</el-tag>
    </div>
      <!-- 信息区 -->
    <el-table :data="tableData" style="width: 70%;margin:auto;" class="title">
      <el-table-column prop="date" label="发货日期" width="180"></el-table-column>
      <el-table-column prop="name" label="客户昵称" width="180"></el-table-column>
      <el-table-column prop="address" label="收货地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-steps :active="mount" align-center v-if="show">
      <el-step title="已下单" description="您好,您的订单已经收到，正在处理..."></el-step>
      <el-step title="代发货" description="亲,您的包裹已经打包好了"></el-step>
      <el-step title="已发货" description="亲，您的包裹在路上，请注意最新物流信息"></el-step>
      <el-step title="完成" description="感谢亲的信任，5星好评哦"></el-step>
    </el-steps>
    <br />
    <br />
    <el-divider content-position="left">目的地查看</el-divider>
      <!-- 地图区 -->
    <baidu-map class="bm-view" ak="MYiuOlcui11VdqBCsptfXfnRIM2WNvLL">
      <Map></Map>
    </baidu-map>
    <br />
    <br />
    <el-divider content-position="left">客官，满意给个好评呗</el-divider>
      <!-- 评论区 -->
    <div class="z-floor-pingjia">

    <div class="block">
      <span class="demonstration">评价</span>
      <el-rate v-model="value2" :colors="colors"></el-rate>
    </div>
    <el-radio-group v-model="direction">
      <el-radio label="btt" v-show="false">从下往上开</el-radio>
    </el-radio-group>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">评价</el-button>
    <el-drawer
      title="请写下您宝贵的建议"
      :visible.sync="drawer"
      :direction="direction"
    >
      <input type="text" class="z-pinglun">
      <el-button class="emit" type="text"  @click="handleClose">提交</el-button>
     
    </el-drawer>
    </div>
  </div>
</template>

<script>
import BaiduMap from "./common/Map.vue";

export default {
  components: {
    BaiduMap
  },
  methods: {
    handleClick(row) {
      console.log(row.date);
      let date1 = new Date();
      date1.setTime(date1.getTime());
      var s1 =
        date1.getFullYear() +
        "-" +
        (date1.getMonth() + 1) +
        "-" +
        date1.getDate();

      //获取当前月份之差
      let month1 = row.date.split("-")[1];
      let month2 = s1.split("-")[1];
      //获取当前日期之差
      let day1 = row.date.split("-")[2];
      let day2 = s1.split("-")[2];

      let timeValue = (month2 - month1) * 30 + (day2 - day1);
      console.log(timeValue);
      if (timeValue == 0) {
        this.mount = 1;
      } else if (timeValue < 3) {
        this.mount = 2;
      } else if (timeValue < 5) {
        this.mount = 3;
      } else {
        this.mount = 4;
      }
      this.show = !this.show;
    },
    handleClose(done) {
      this.$confirm("感谢提交,您的鼓励会让我们做得更好")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      tableData: [
        {
          date: "2019-10-15",
          name: "林夕",
          address: "四川省成都市武侯区88号"
        },
        {
          date: "2019-10-13",
          name: "林夕",
          address: "四川省成都市武侯区88号"
        },
        {
          date: "2019-10-12",
          name: "林夕",
          address: "四川省成都市武侯区88号"
        },
        {
          date: "2019-08-01",
          name: "林夕",
          address: "四川省成都市武侯区88号"
        }
      ],
      show: false,
      mount: 1,
      drawer: false,
      direction: "btt"
    };
  }
};
</script>

<style>
.head {
  height: 420px;
  margin: 0 auto;
  background: url("~@/assets/img/z-kuaidi2.jpg") no-repeat center;
  background-size: 2000px 420px;
  overflow: hidden;
}
.bm-view {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 300px;
}
.title {
  position: relative;
}

.z-content {
  width: 100%;
  height: 600px;
  position: relative;
}
.header-title {
  margin-top: 200px;
  font-size: 40px;
  color: #ffffff;
  letter-spacing: 2px;
  text-align: center;
  line-height: 48px;
}
.header-p {
  margin-top: 18px;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 20px;
}
.z-body-title {
  font-size: 18px;
  position: relative;
  top: 20px;
}
.block {
  width: 200px;
  height: 100px;
}
.el-rate::before {
  content: "物流";
}
.z-floor-pingjia{
    width: 200px;
    height: 110px;
    margin: 0 auto;
}
.z-pinglun{
    position: relative;
    top: 0px;
    left: 40px;
    display: block;
    width: 200px;
    height:50px;
}
.emit{
    position: relative;
    margin: 0 auto;
    left: 50px;
}
.el-drawer__header {
    margin:0;
}
</style>