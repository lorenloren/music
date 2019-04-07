<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner, index) in Banners" :key="index">
        <img :src="banner" alt class="banner">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
      }
    };
  },
  props: {
    Banners: {
      type: Array,
      default: []
    }
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
.banner {
  border-radius: 10px;
}
</style>


