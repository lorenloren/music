<template>
  <div class="musictop">
    <tabs class="tabs" :currentIndex="currentIndex" @changeKey="collback" v-if="bangdanData.length > 0 ">
      <tab
        v-for="(element,index) in bangdanData"
        :key="index"
        :className="element.billboard.name"
        :index="index"
      >
        <!-- <li v-for="(item,index) in element.song_list" :key="index">
            {{item.title}}
        </li>-->
        <div class="panel hotsongs on">
          <ul class="list">
            <router-link 
            tag="li"
            :to="{name:'Play',params:{id:item.song_id} }" 
            class="song url" 
            v-for="(item,index) in element.song_list" 
            :key="index"
            >
              <div class="poster">
                <img :src="item.pic_big" :alt="item.title">
              </div>
              <div class="info">
                <div class="name">{{ item.title }}</div>
                <div class="author">{{ item.artist_name }}</div>
              </div>
            </router-link>
          </ul>
          <div class="more-songs url">查看该榜单&gt;</div>
        </div>
      </tab>
    </tabs>
  </div>
</template>
<script>
export default {
  name: "MusicTop",
  data() {
    return {
      bangdanData: [],
      currentIndex: 1
    };
  },
  methods: {
    collback(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    let _this = this;
    function hotSong() {
      return _this.$axios.get(_this.HOST + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.billboard.billList",
          type: 2,
          size: 5,
          offset: 0
        }
      });
    }

    function newSong() {
      return _this.$axios.get(_this.HOST + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.billboard.billList",
          type: 1,
          size: 5,
          offset: 0
        }
      });
    }
    function oldSong() {
      return _this.$axios.get(_this.HOST + "/v1/restserver/ting", {
        params: {
          method: "baidu.ting.billboard.billList",
          type: 22,
          size: 5,
          offset: 0
        }
      });
    }

    this.$axios.all([hotSong(), newSong(), oldSong()]).then(
      _this.$axios.spread(function(hots, news, olds) {
        // 两个请求现在都执行完成
        _this.bangdanData.push(hots.data, news.data, olds.data);
        // console.log(_this.bangdanData);
      })
    );
  }
};
</script>

<style scoped>
.musictop {
  background: #fff;
  padding: 10px;
}

.panel {
  border-top: 1px solid #eee;
  position: relative;
  top: -1px;
  display: block;
  background: #fff;
}

.list {
  padding-top: 0;
  height: 375px;
}

.panel .list li {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 0;
  display: flex;
  padding-top: 10px;
}

.panel .list li .poster {
  position: relative;
  width: 45px;
  margin-right: 8px;
}

.panel .list li .poster img {
  border: 1px solid #eee;
}
.info {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info .name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #333;
}

.info .author {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.more-songs {
  color: #999;
  margin-top: 9px;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
</style>


