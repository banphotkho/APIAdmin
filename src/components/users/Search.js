import React, { Component } from 'react'

class Search extends Component {
    state = {
        text: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }
  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit} className="from">
              <input type="text" name="text" placeholder="Search user..." value={this.state.text} onChange={this.onChange}></input>
              <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
          </form>
        
      </div>
    )
  }
}

export default Search;
