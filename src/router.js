import vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Sign_In from './components/signIn.vue'
import CustDashboard from './components/dashBoard.vue'
import GuestNav from './components/guestNav.vue'
import HomeDashboard from './components/homeDashboard.vue'
import ProductDashboard from './components/productDashboard.vue'
import ProductPage from './components/product-page.vue'
import TailorDashboard from './components/tailor-dashboard.vue'
import Detail from './components/details.vue'
import Manage from './components/manage.vue'
import MyService from './components/myService.vue'
import MySupport from './components/mySupport.vue'
import MyProfile from './components/myProfile.vue'
import Earnings from './components/Myearning.vue'
import Setting from './components/setting.vue'
import ManageJob from './components/manageJob.vue'
import Client from './components/client.vue'

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
	},
	{
		path: '/tailorhome',
		name: 'HomePage',
		component:TailorDashboard
	},
	{
		path: '/myService',
		name: 'myService',
		component: MyService
	},
	{
		path: '/mySupport',
		name: 'mySupport',
		component: MySupport
	},

	{
		path: '/myprofile',
		name: 'myprofile',
		component: MyProfile
	},
	{
		path: '/setting',
		name: 'setting',
		component: Setting
	},
	{
		path: '/manageJob',
		name: 'manageJob',
		component: ManageJob
	},
	{
		path: '/earn',
		name: 'earn',
		component: Earnings
	},
	{
		path: '/client',
		name: 'clients',
		component: Client
	},
	{
		path: '/details',
		name: 'details',
		component: Detail
	},
	{
		path: '/manage',
		name: 'manage',
		component: Manage
	}
]
	})