import vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Sign_In from './components/signIn.vue'
import CustDashboard from './components/dashBoard.vue'
import GuestNav from './components/guestNav.vue'

vue.use(Router)

export default new Router({
routes: [
	{
		path: '/',
		name: 'index',
		component: GuestNav
	},
	{
		path: '/signIn',
		name: 'sign',
		component: Sign_In
	},
	{
		path: '/custDash',
		name: 'custdash',
		component: CustDashboard
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	}
]
	})