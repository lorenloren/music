<template>
  <div>
    <TopNav/>
    <MusicList title="今日推荐" :RequestData="TodayRecommand"/>
    <MusicList title="热门歌单" :RequestData="HotSong"/>
    <MusicList title="新歌速递" :RequestData="NewSong"/>
    <SwiperVue :Banners="Banners"/>
    <MusicTop />
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import MusicList from "../components/MusicList";
import SwiperVue from "../components/SwiperVue";
import MusicTop from "./HomeSub/MusicTop";

export default {
  components: {
    TopNav,
    MusicList,
    SwiperVue,
    MusicTop 
  },
  name: "Home",
  data() {
    return {
      TodayRecommand: {
        method: "baidu.ting.billboard.billList",
        type: 22,
        size: 6,
        offset: 0
      },
      HotSong: {
        method: "baidu.ting.billboard.billList",
        type: 2,
        size: 6,
        offset: 0
      },
      NewSong: {
        method: "baidu.ting.billboard.billList",
        type: 1,
        size: 3,
        offset: 0
      },
      Banners:[
        require("../assets/img/b1.jpg"),
        require("../assets/img/b2.jpg"),
        require("../assets/img/b3.jpg")
      ]
    };
  }
};
</script>

<style>
</style>
