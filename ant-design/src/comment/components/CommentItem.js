import React, { PureComponent } from 'react'

import { Comment, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'

export default class CommentItem extends PureComponent {

  render() {
    const { avatar, nickname, dateTime, content } = this.props.info

    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={
          <Avatar src={avatar} />
        }
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={dateTime.format("yyyy-MM-DD HH:mm:ss")}>
            <span>{dateTime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={() => this.removeItem()}>
            <DeleteOutlined />删除
          </span>
        ]}
      />
    )
  }

  removeItem() {
    this.props.removeComment();
  }
}
