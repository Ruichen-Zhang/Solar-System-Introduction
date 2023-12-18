<template>
  <div class="star-content">
    <a href="javascript:void(0);" class="sun">
      <img src="./images/dong.gif" @click="goPage('sun','太阳')" />
    </a>
    <a href="javascript:void(0);" class="shui">
      <img src="./images/shui.gif" @click="goPage('shui','水星')" />
    </a>
    <a href="javascript:void(0);" class="jin">
      <img src="./images/jin.jpeg" @click="goPage('jin','金星')" />
    </a>
    <a href="javascript:void(0);" class="di">
      <img src="./images/di.gif" />
      <img class="moon" src="./images/moon.gif" alt=""  @click="goPage('moon','月球')"/>
    </a>
    <a href="javascript:void(0);" class="huo">
      <img src="./images/huo.gif" @click="goPage('huo','火星')" />
    </a>
    <a href="javascript:void(0);" class="mu">
      <img src="./images/mu.gif" @click="goPage('mu','木星')" />
    </a>
    <a href="javascript:void(0);" class="tu">
      <img src="./images/tu.jpeg" @click="goPage('tu','土星')" />
    </a>
    <a href="javascript:void(0);" class="tian">
      <img src="./images/tian.jpeg" @click="goPage('tianwang','天王星')"/>
    </a>
    <a href="javascript:void(0);" class="hai">
      <img src="./images/hai.jpeg" @click="goPage('haiwang','海王星')"/>
    </a>
    <a href="javascript:void(0);" class="hui">
      <img src="./images/hui.png" @click="goPage('hui','彗星')"/>
    </a>
  </div>
</template>

<script scoped>
import "./css/style.css"
export default {
  methods:{
    goPage(star,name){
      this.$router.push({path:"/tianxiang",query:{star,name}})
    }
  }
};
</script>

<style>

</style>