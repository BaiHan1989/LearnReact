
import YMDiscovery from '@/pages/discovery'
import YMMine from '@/pages/mine'
import YMFriend from '@/pages/friend'

const routers = [
  {
    path: "/",
    exact: true,
    component: YMDiscovery
  },
  {
    path: "/mine",
    component: YMMine
  },
  {
    path: "/friend",
    component: YMFriend
  }
]

export default routers