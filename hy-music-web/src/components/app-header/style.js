import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    background-color: blue;
    color: #fff;

    display: flex;
    justify-content: space-between
  }

  .divider {
    height: 5px;
    background-color: #C20C0C
  }
`

export const HeaderLeft = styled.div`
  .logo {
    display: block;
    height: 69px;
    width: 177px;
    background-position: 0 0;
  }
`

export const HeaderRight = styled.div`

`