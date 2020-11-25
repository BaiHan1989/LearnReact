import styled from 'styled-components'

export const HomeWrapper = styled.div`
  font-size: 20px;
  color: red;

  .banner {
    background-color: blue;

    span {
      color: white;

      &.active {
        color: green;
      }

      &:hover {
        color: red;
      }

      &::after {
        content: "aaa"
      }
    }
  }
`

export const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${props => props.theme.themeColor};
  font-size: ${props => props.theme.fontSize};
`