<template>
  <div class="login-content">
    <h1>starry✧sky</h1>
    <div id="starsBox" v-html="starList.join('')"></div>
    <div class="login">
      <header>
        <h2>Login Now</h2>
      </header>
      <div class="sr">
        <form>
          <div class="name">
            <input
              type="text"
              name="name"
              class="name"
              placeholder="Username"
              required=""
            />
          </div>
          <div class="name">
            <input
              type="password"
              name="password"
              class="password"
              placeholder="Password"
              required=""
            />
          </div>
          <ul>
            <li>
              <input type="checkbox" id="brand1" value="" />
              <label for="brand1"><span></span>Remember me</label>
            </li>
          </ul>
          <button class="dl" @click.prevent="$router.push('/xingxi')">Login</button>
        </form>
      </div>
    </div>
    <h3>Designed by Hahah Group</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starList: [],
    };
  },
  created() {
    this.setStar();
  },
  mounted() {
    setInterval(() => {
      this.moveStar();
    }, 100*1000);
  },
  methods: {
    moveStar() {
      document.querySelectorAll("#starsBox span").forEach((dom) => {
        dom.style.left = Math.random() * 100 + "%";
        dom.style.top = Math.random() * 100 + "%";
      });
    },
    setStar() {
      var cols = [
        "#f5d76e",
        "#f7ca18",
        "#f4d03f",
        "#ececec",
        "#ecf0f1",
        "#a2ded0",
      ];
      var stars = 250;
      const starList = [];
      for (var i = 0; i <= stars; i++) {
        var size = Math.random() * 6;
        var color = cols[parseInt(Math.random() * 4)];
        starList.push(
          '<span style=" width: ' +
            size +
            "px; height: " +
            size +
            "px; top: " +
            Math.random() * 100 +
            "%; left: " +
            Math.random() * 100 +
            "%; background: " +
            color +
            "; box-shadow: 0 0 " +
            Math.random() * 10 +
            "px" +
            color +
            ';"></span>'
        );
      }
      this.starList = starList;
      setTimeout(() => {
		   this.moveStar();
	  }, 500);
    },
  },
};
</script>
<style scoped>
ol,
ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
.login-content {
  height: 100%;
  overflow: hidden;
  background: url("./images/bg.jpg") no-repeat 0px 0px;
  background-size: cover;
  font-family: "Open Sans", sans-serif;
  background-attachment: fixed;
  background-position: center;
  position: relative;
}
#starsBox {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
#starsBox /deep/ span {
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  transition: 100s linear;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-top: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
}

input[type="text"],
input[type="password"] {
  width: 87.5%;
  padding: 15px 50px 15px 10px;
  background: rgba(255, 255, 255, 0.15);
  background: #fff;
  border: none;
  outline: none;
  font-size: 14px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255) url("./images/user.png") no-repeat -600px 11px;
}
input[type="password"] {
  background: rgb(255, 255, 255) url("./images/password.png") no-repeat 412px
    11px;
}

ul li input[type="checkbox"] {
  display: none;
}
ul li input[type="checkbox"] + label {
  position: relative;
  padding-left: 25px;
  border: #f0f8ff;
  color: #ffffff;
  display: inline-block;
  font-size: 14px;
}
ul li input[type="checkbox"] + label span:first-child {
  width: 13px;
  height: 13px;
  display: inline-block;
  border: 1px solid #ffffff;
  position: absolute;
  top: 1px;
  left: 4px;
  bottom: 4px;
}
ul li input[type="checkbox"]:checked + label span:first-child:before {
  content: "";
  background: url(./images/tick.png) no-repeat;
  position: absolute;
  left: 2px;
  top: 2px;
  font-size: 10px;
  width: 10px;
  height: 10px;
}

form a {
  color: #eee;
  float: right;
  font-size: 14px;
}

/*-- Responsive --*/
@media (max-width: 1440px) {
  input[type="text"],
  input[type="password"] {
    width: 86.5%;
    background: rgb(255, 255, 255) url("./images/user.png") no-repeat 370px 11px;
  }
  input[type="password"] {
    background: rgb(255, 255, 255) url("./images/password.png") no-repeat 370px
      11px;
  }
}

@keyframes cc {
  0% {
    opacity: 0.4;
    transform: scale(0.1);
    top: -500px;
  }
  50% {
    opacity: 0.4;
    transform: scale(0.5) rotateX(90deg);
    top: -250px;
  }
  90% {
    opacity: 1;
    transform: scale(1) rotateX(0deg);
    top: -75px;
  }
}

.login {
  width: 405px;
  position: relative;
  top: -75px;
  margin: 15% auto;
  /* background:url(./images/qq.jpg) no-repeat center center; */
  border-radius: 910px;
  color: #27d;
  animation: cc 4s ease-in-out;
}

.dl {
  background: #e91e63;
  padding: 13px 0;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  outline: none;
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  width: 102%;
  border: none;
  margin-top: 25px;
}
h1,
h2,
h3 {
  font-family: "Lato", sans-serif;
}

h2 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
}
h3 {
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
  position: absolute;
  margin: -100px 0;
  width: 100%;
  text-align: center;
}
</style>