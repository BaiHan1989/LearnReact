import React, { PureComponent } from 'react'

import { Button, Input } from "antd";

import moment from 'moment'

export default class CommentInput extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      content: ""
    }
  }

  render() {
    return (
      <div>
        <Input.TextArea rows={4} value={this.state.content} onChange={e => this.textDidChange(e)}/>
        <Button type="primary" onClick={() => this.addComment()}>添加评论</Button>
      </div>
    )
  }

  textDidChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://upload.jianshu.io/users/upload_avatars/4121307/f918e831-9743-4a02-a579-c7fbf1982dfe.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
      nickname: "lazyload",
      dateTime: moment(),
      content: this.state.content
    }
    this.props.commentInfo(commentInfo)
    // 清空文本框
    this.setState({
      content: ""
    })
  }
}
