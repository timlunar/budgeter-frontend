import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Transactions from "@/pages/Transactions";
import SpecialOffer from "@/pages/SpecialOffer";
import Coupons from "@/pages/Coupons";
import Categories from "@/pages/Categories";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "user-profile",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "categories",
        name: "categories",
        component: Categories
      },
      {
        path: "coupons",
        name: "coupons",
        component: Coupons
      },
      {
        path: "transactions",
        name: "transactions",
        component: Transactions
      },
      {
        path: "special-offer",
        name: "Special offer",
        component: SpecialOffer
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!loggedIn) {
      next('/')
    }else
      next()
  }else
    next()
})

export default router;
