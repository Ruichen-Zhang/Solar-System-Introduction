<template>
  <div class="tianxiang-content" style="">
    <div class="left-box">
      <div>
        <h1>{{name}}</h1>
        <img :src="tianxiangImgs[star]" alt="" />
      </div>
    </div>
    <div class="right-box">
      <div class="item" v-if="star!== 'tianwang' && star!== 'haiwang'">
        <h3>天象个数：{{tianxiangData[star].length}}</h3>
        <div class="table-data">
          <table border="1" cellspacing="0">
            <thead>
              <th>序号</th>
              <th>年号干支纪年</th>
              <th>公元纪年</th>
              <th>天象记录</th>
            </thead>
            <tbody>
              <tr v-for="(item,index) in tianxiangData[star]" :key="index">
                <td>{{index+1}}</td>
                <td><div class="text">{{item.param1}}</div></td>
                <td><div class="text">{{item.param2}}</div></td>
                <td><div class="text">{{item.param3}}</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <h3>天象个数：0</h3>
        <ul>
          <li v-for="(item,index) in tianxiangData[star]" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import jin from "@/store/jin";
import mu from "@/store/mu";
import shui from "@/store/shui";
import huo from "@/store/huo";
import tu from "@/store/tu";
import sun from "@/store/sun";
import moon from "@/store/moon";
import hui from "@/store/hui";
import tianwang from "@/store/tianwang";
import haiwang from "@/store/haiwang";
export default {
  data() {
    return {
      tianxiangData: {
        jin,
        mu,
        shui,
        huo,
        tu,
        sun,
        moon,
        hui,
        tianwang,
        haiwang
      },
      tianxiangImgs:{
        jin:require("./images/jin.gif"),
        mu:require("./images/mu.gif"),
        shui:require("./images/shui.gif"),
        huo:require("./images/huo.gif"),
        tu:require("./images/tu.jpeg"),
        sun:require("./images/sun.gif"),
        moon:require("./images/moon.gif"),
        hui:require("./images/hui.png"),
        tianwang:require("./images/tian.jpeg"),
        haiwang:require("./images/hai.jpeg"),
      },
      star:"",
      name:""
    };
  },
  created(){
    this.star = this.$route.query.star;
    this.name = this.$route.query.name;
  },
  methods: {
    getData(star){

    }
  },
};
</script>

<style>
.tianxiang-content {
  background: url('./images/bg.jpg') no-repeat 0px 0px;
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;
}
.left-box {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.left-box> div{
  width: 100%;
}
.left-box img {
  width: 100%;
  max-width: 500px;
}
.right-box {
  width: 50%;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
}
.right-box ul {
  max-height: 500px;
  overflow: auto;
  list-style: none;
  padding: 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
.right-box ul li {
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  padding: 5px;
}
.right-box .item{
  width: 100%;
}
.right-box table{
  position: relative;
  width: 100%;
  border-color: #fff;
}
.right-box table tbody{
  width: 100%;
  height: 500px;
  overflow: auto;
}
.text{
  max-width: 300px;

}
.table-data{
  max-height: 600px;
  overflow: auto;
}
</style>