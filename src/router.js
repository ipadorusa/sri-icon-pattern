import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import PcIcon from './views/PcIcon.vue'
import MobileIcon from './views/MobileIcon.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
	  path: '/',
	  name: 'home',
	  component: Home
	},
	{
	  path: '/icon/pc/',
	  name: 'pcicon',
	  component: PcIcon
	},
	{
	  path: '/icon/mobile/',
	  name: 'mobileIcon',
		component: MobileIcon
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
	}
	]
})
