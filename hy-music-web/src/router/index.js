
import YMDiscovery from '@/pages/discovery'
import YMMine from '@/pages/mine'
import YMFriend from '@/pages/friend'
import YMRecommend from '@/pages/discovery/c-pages/recommend'
import YMRanking from '@/pages/discovery/c-pages/ranking'
import YMSongs from '@/pages/discovery/c-pages/songs'
import YMDjradio from '@/pages/discovery/c-pages/djradio'
import YMArtist from '@/pages/discovery/c-pages/artist'
import YMAlbum from '@/pages/discovery/c-pages/album'


import { Redirect } from 'react-router-dom'

const routers = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: YMDiscovery,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path: "/discover/recommend",
        component: YMRecommend
      },
      {
        path: "/discover/ranking",
        component: YMRanking
      },
      {
        path: "/discover/songs",
        component: YMSongs
      },
      {
        path: "/discover/djradio",
        component: YMDjradio
      },
      {
        path: "/discover/artist",
        component: YMArtist
      },
      {
        path: "/discover/album",
        component: YMAlbum
      }
    ]
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