import vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Sign_In from './components/signIn.vue'
import CustDashboard from './components/dashBoard.vue'
import GuestNav from './components/guestNav.vue'
import HomeDashboard from './components/homeDashboard.vue'
import ProductDashboard from './components/productDashboard.vue'
import ProductPage from './components/product-page.vue'

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
	},
	{
		path: '/homedash',
		name: 'homedash',
		component: HomeDashboard
	},
	{
		path: '/productDash',
		name: 'productDash',
		component: ProductDashboard
	},
	{
		path: '/productPage',
		name: 'productPage',
		component: ProductPage
	}
]
	})