import Vue from "vue";
import VueRouter from "vue-router";
import Cart from '../views/shopcart/Cart.vue';
import Pay from '../views/shopcart/Pay.vue'
import ProductDetail from '../views/shopcart/ProductDetail.vue'
import Dingdan from '../views/shopcart/Dingdan.vue'
import Flower from '../views/flowers/Flower.vue'


const Homepage = () => import('../views/homepage/Homepage');
const Category = () => import('../views/category/Category')
const Cartpage = () => import('../views/cartpage/Cartpage')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter);
const routes = [
  {
    path:'/flower',
    component:Flower
  },
  {
    path: '',
    redirect: '/homepage'
  },
  {
    path: '/homepage',
    component: Homepage
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cartpage',
    component: Cartpage
  },
  {
    path: '/profile',
    component: Profile
  },
  
  {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;