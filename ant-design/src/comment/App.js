import React, { PureComponent } from 'react'
import CommentInput from './components/CommentInput'

import CommentItem from './components/CommentItem'

export default class App extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }

  render() {
    return (
      <div style={{width: "500px", padding:"20px"}}>
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem key={item.id} info={item} removeComment={() => this.removeComment(index)}/>
          })
        }
        <CommentInput commentInfo={(info) => this.addCommentInfo(info)}/>
      </div>
    )
  }

  addCommentInfo(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  removeComment(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }
}