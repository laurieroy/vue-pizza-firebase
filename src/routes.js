
import Admin from './components/Admin';
import About from './components/About';
import Contact from './components/Contact';
import Delivery from './components/Delivery';
import History from './components/History'
import Home from './components/Home'
import Menu from './components/Menu'
import OrderingGuide from './components/OrderingGuide'

export const routes = [
	{ path: '/', name: 'homeLink',
		components: {
			default: Home,
			"ordering-guide": OrderingGuide,
			"delivery": Delivery,
			"history": History
		} },
  { path: '/menu', name: 'menuLink',  component: Menu },
  { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to, from, next) => {
    alert('This area is for authoerized users only, please login to continue.');
    next();
  } },
  { path: '/about', name: 'aboutLink', component: About, children: [
    { path: '/contact', name: 'contactLink', component: Contact },
    { path: '/history', name: 'historyLink', component: History },
    { path: '/delivery', name: 'deliveryLink', component: Delivery },
    { path: '/ordering-guide', name: 'orderingLink', component: OrderingGuide }
  ]},
  { path: '*', redirect: '/' }
]
