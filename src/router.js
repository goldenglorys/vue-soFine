import vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import SignIn from './components/signIn.vue'
// import CustomerDashBoard from './components/customer-dashBoard.vue'

vue.use(Router)

export default new Router({
routes: [
	{
		path: '/',
		name: 'index',
		component: Home
	},
	{
		path: '/signIn',
		name: 'sign',
		component: SignIn
	}
	// {
	// 	path: '/custDash',
	// 	name: 'custdash',
	// 	component: CustomerDashBoard
	// }
]
	})