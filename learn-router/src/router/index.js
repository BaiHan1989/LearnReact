import About, { AboutContact, AboutCultrue, AboutHsitory, AboutJoin } from "../pages/about";
import Detail from "../pages/detail";
import Detail2 from "../pages/detail2";
import Detail3 from '../pages/detail3'
import Home from "../pages/home";
import Product from "../pages/product";
import Profile from "../pages/profile";
import User from "../pages/user";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutHsitory       
      },
      {
        path: "/about/culture",
        component: AboutCultrue       
      },
      {
        path: "/about/contact",
        component: AboutContact       
      },
      {
        path: "/about/join",
        component: AboutJoin      
      },
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/detail2",
    component: Detail2
  },
  {
    path: "/detail3",
    component: Detail3
  },
  {
    path: "/product",
    component: Product
  },
]

export default routes