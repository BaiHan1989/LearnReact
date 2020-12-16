import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    const params = this.props.match.params
    console.log(this.props.match)

    return (
      <div>
        <h2>Detail: {params.id}</h2>
      </div>
    )
  }
}
