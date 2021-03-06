import React, { Component } from 'react'

class Useritem extends Component {
  render() {
      const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
          <img className="round-img" src={avatar_url} alt='' style={{width: '60px'}}  ></img>
          <h3>{login}</h3>
          <div>
            <a href={html_url} className='btn btn-dark btn-sm my-1'>Linke more...</a>
          </div>
      </div>
    )
  }
}

export default Useritem;
