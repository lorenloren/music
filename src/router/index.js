import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home'
import Mine from '@/containers/Mine'
import MusicList from '@/containers/MusicList'
import Search from '@/containers/Search'
import Singer from '@/containers/Singer'
import Top from '@/containers/Top'
import Play from '@/containers/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/musiclist',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/top',
      name: 'Top',
      component: Top
    },
    {
      path: '/play/:id',
      name: 'Play',
      component: Play
    }
  ]
})
