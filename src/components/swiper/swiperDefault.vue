<template>
  <div >
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
           Slide {{item}} 
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
            slide: [1,2,3,4,5,6],
            //swipe 的options
            swiperOption:{
                autoplay: {
                  delay: 3000, //自动切换的时间间隔，单位ms
                },
                direction:'vertical',//轮播方向
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,//点击分页器切换轮播
                },
                loop:true,//无限循环滚动
            },
          }
        },
        components:{swiper,swiperSlide}
    }
</script>

<style scoped>
  .swiper-slide{
      height: 4rem;
      text-align: center;
      padding-top: 3rem;
      border-bottom: 1px solid #ccc;
      padding-top: 0px;
      line-height: 4rem;
      box-sizing: border-box;
  }
  .swiper{
    height: 7rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
  }
</style>
