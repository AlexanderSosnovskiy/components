import React from 'react';
import ReactDom from 'react-dom'

function Welcome(props) {
  let { name } = props

  return (
    <React.Fragment>
      <Intro nickname={name} />
    </React.Fragment>
  )
}

class Intro extends React.Component {
  render() {
    return (
      <section>
        <div className='centered'>
          <h2>Nice to meet you, {this.props.nickname}</h2>
        </div>
      </section>
    )
  }
}

const Greeting = () => {
  return React.createElement(Welcome, { name: 'Max;)' })
}

ReactDom.render(<Greeting />, document.getElementById('root'))



