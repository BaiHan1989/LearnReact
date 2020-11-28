import React, { PureComponent } from 'react'

import moment from 'moment'
import { Button, DatePicker } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'

import YMHomeRecommend from './components/home/child-cpns/home-recommend'

export default class App extends PureComponent {
  render() {

    const loadings = true

    return (
      <>
        <YMHomeRecommend />
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <br />
        <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => this.enterLoading(1)}
        >
          Click me!
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[2]}
          onClick={() => this.enterLoading(2)}
        />

        <DatePicker defaultValue={moment('2015-06-06', "YYYY-MM-dd")} allowClear={false} />
      </>
    )
  }
}
