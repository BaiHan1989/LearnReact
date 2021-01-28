import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from "./style";

export default memo(function YMPlayer() {

  console.log("YMPlayer")
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>YMPlayerInfo</h2>
          <h2>YMPSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>YMSimiPlayerlist</h2>
          <h2>YMSimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
