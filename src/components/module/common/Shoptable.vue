<template>
  <div id="shopcart">
    <div class="panel panel-success">
      <!-- 头部 -->
      <div class="panel-heading">
        <h1>购物车</h1>
      </div>
      <!-- 头部 -->
     <!-- <div class="panel-body">
        <div class="input-group">
          <span class="input-group-btn">
            <a class="btn btn-success">名称搜索</a>
          </span>
          <input type="text" class="form-control" placeholder="请输入查询内容" v-model="searchValue"/>
        </div>
      </div>  -->
      <div class="panel-body">
        <table class="table table-condensed">
          <thead>
            <tr>
              <th>图片</th>
              <th>商品名称</th>
              <th>回收数量</th>
              <th>回收单价(元)</th>
              <th>回收总金额(元)</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in searchFor" :key="index">
              <td>
                <img :src="item.img_url" alt="小米手机" />
              </td>
              <td>{{item.name}}</td>
              <td>
                <button @click="minus(item.count -=1)" :disabled="item.count===0" class="btn btn-default btn-xs">-</button>
                {{item.count}}
                <button @click="add(item.count +=1)"class="btn btn-default btn-xs active">+</button>
              </td>
              <td>{{item.price | numFilter(2)}}</td>
              <td>{{item.count*item.price | numFilter(1)}}</td>
              <td><button type="button" class="btn btn-success btn-sm" >商品详情</button></td>
              <td><button  @click="remove(index)">删除</button></td>
              
            </tr>
            <tr>
              <td colspan="6">{{totalCount}} 件商品总计(不含运费):{{totalPrice | numFilter(2)}}</td>
               <button type="button" >提交订单</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "小米2", price: 120, count: 1, img_url: "./img/p0.jpg" },
        {
          id: 2,
          name: "红米note",
          price: 134,
          count: 1,
          img_url: "./img/p1.jpg"
        },
        { id: 3, name: "魅族2", price: 90, count: 1, img_url: "./img/p2.jpg" },
        {
          id: 4,
          name: "iphone7",
          price: 2000,
          count: 1,
          img_url: "./img/p3.jpg"
        }
      ]
    }
  },
  searchValue: "", //查询条件
  filters: {
    // 过滤器
    numFilter: function(data, n) {
      //data==item.price 过滤的数据
      return "￥" + data.toFixed(n);
    }
  },
  computed: {
    //计算属性
    searchFor: function() {
      if (!this.searchValue) {
        return this.items;
      }
      return this.items.filter((v, i) => {
        if (v.name.indexOf(this.searchValue) !== -1) {
          return v;
        }
      });
    },
    totalCount: function() {
      var n = 0;
      this.items.forEach(function(v, i) {
        n += v.count;
      });
      return n;
    },
    totalPrice: function() {
      var n = 0;
      this.items.forEach(function(v, i) {
        n += v.count * v.price;
      });
      return n;
    }
  },
  methods: {
     remove: function (index) {
        this.searchFor.splice(index, 1);
        
    },
    
  
  }
};
</script>
<style>
@import "bootstrap/dist/css/bootstrap.min.css";
.btn-default {
  padding: 10px;
  background: red;
  color: aliceblue;
}

</style>