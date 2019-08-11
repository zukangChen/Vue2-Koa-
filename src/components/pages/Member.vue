<template>
  <div>
    <div>
      <van-nav-bar title="会员中心" />
    </div>
    <div class="top">
        <div class="avatar">
            <img :src="avartarImg" class="top-img" />
        </div>
    </div>
    <div class="login">
      <div>
        <van-button type="warning" round @click="login">我要登录</van-button>
      </div>
      <div>
        <van-button type="primary" round @click="register">我要注册</van-button>
      </div>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="会员卡" is-link />
        <van-cell title="地址管理" is-link />
        <van-cell title="我的订单" is-link />
        <van-cell title="会员权益" is-link />
        <van-cell title="联系我们" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        avartarImg : require('@/assets/images/8.jpg')
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped>
.top-img {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}
.top {
  position: relative;
  height: 5rem;
  text-align: center;
  padding-top: 2rem;
  /* background-color: #eea2ad; */
  background-color: #b5dcf3;
}
.avatar{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
.login {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10px;
}
.login div {
  flex: 1;
  text-align: center;
}
</style>