import React from 'react'
import { Redirect } from 'react-router-dom'

const YMDiscovery = React.lazy(_ => import("@/pages/discovery"))
const YMMine = React.lazy(_ => import("@/pages/mine"))
const YMFriend = React.lazy(_ => import("@/pages/friend"))
const YMRecommend = React.lazy(_ => import("@/pages/discovery/c-pages/recommend"))
const YMRanking = React.lazy(_ => import("@/pages/discovery/c-pages/ranking"))
const YMSongs = React.lazy(_ => import("@/pages/discovery/c-pages/songs"))
const YMDjradio = React.lazy(_ => import("@/pages/discovery/c-pages/djradio"))
const YMArtist = React.lazy(_ => import("@/pages/discovery/c-pages/artist"))
const YMAlbum = React.lazy(_ => import("@/pages/discovery/c-pages/album"))
const YMPlayer = React.lazy(_ => import("@/pages/player"))

// import YMDiscovery from '@/pages/discovery'
// import YMMine from '@/pages/mine'
// import YMFriend from '@/pages/friend'
// import YMRecommend from '@/pages/discovery/c-pages/recommend'
// import YMRanking from '@/pages/discovery/c-pages/ranking'
// import YMSongs from '@/pages/discovery/c-pages/songs'
// import YMDjradio from '@/pages/discovery/c-pages/djradio'
// import YMArtist from '@/pages/discovery/c-pages/artist'
// import YMAlbum from '@/pages/discovery/c-pages/album'
// import YMPlayer from '@/pages/player'

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
      },
      {
        path: "/discover/player",
        component: YMPlayer
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
  },
  
]

export default routers