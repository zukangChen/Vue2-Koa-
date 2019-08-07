<template>
  <div>
    <div class="search-bar">
      <van-row >
        <van-col span="3">
          <img :src="locationIcon" width="80%" alt="" class="location-icon">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index" class="swipe-item">
          <img v-lazy="banner.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar 菜单栏 -->
    <div class="type-bar">
      <div  v-for="(cate,index) in category" :key="index" >
          <img v-lazy="cate.image" width="90%" />
          <span>{{cate.mallCategoryName}}</span> 
      </div>
    </div>
    <!--AD banner area 广告栏-->
    <div class="ad-banner">
        <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>

    <!--Recommend goods area 商品推荐-->
    <div class="recommend-area">
        <div class="recommend-title">
            商品推荐
        </div>
        <div class="recommend-body">
            <!--swiper-->
          <swiper :options="swiperOption">
            <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
              <div class="recommend-item">              
                <img :src="item.image" width="80%" />
                <div>{{item.goodsName}}</div>
                <div>￥{{item.price}} (￥{{item.mallPrice}})</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'//引入轮播插件
import swiperDefault from '../swiper/swiperDefault' //引入轮播组件
export default {
  data() {
    return {
      msg: 'Shopping Mall',
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray:[
        {imageUrl:require('../../assets/images/banner1.jpg')},
        {imageUrl:require('../../assets/images/banner3.jpg')},
        {imageUrl:require('../../assets/images/banner4.jpg')},
      ],
      category : [],//保存type bar 菜单栏数据
      adBanner: {},//保存广告图片
      recommendGoods:[],//推荐商品
      swiperOption:{
        slidesPerView:3 //设置推荐商品每次展示几项
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    swiperDefault
  },
  created(){
    axios({
        url: 'https://www.easy-mock.com/mock/5d4993a892e35c235be33044/SmileVue/index',
        method: 'get',
    })
    .then(response => {
        console.log(response);
        if(response.status==200){
          this.category=response.data.data.category;//获得type bar 菜单栏数据
          this.adBanner = response.data.data.advertesPicture; //获得广告图片
          this.bannerPicArray = response.data.data.slides;  //轮播图片
          this.recommendGoods = response.data.data.recommend; //推荐商品
        }
    })
    .catch((error) => {     
    })
  }
}
</script>

<style scoped>
  .search-bar{
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }
  .search-input{
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
  }
  /* .location-icon{

  } */
  .swiper-area{
      width:100%;
      clear:both;
      max-height: 12rem;
      overflow: hidden;
  }
  .swipe-item{
    height: 7rem!important;
  }
  .swipe-item img{
    width: 100%;
    height: 100%;
  }
  .type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
      flex : 1;
  }
   .recommend-area{
       background-color: #fff;
       margin-top: .3rem;
  }
  .recommend-title{
      border-bottom:1px solid #eee;
      font-size:14px;
      padding:.2rem;
      color:#e5017d;
  }
  .recommend-body{
       border-bottom: 1px solid #eee;
   }
  
  .recommend-item{
      width:99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }
</style>
