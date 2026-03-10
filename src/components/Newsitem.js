import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,newsurl,pageurl,author,date}= this.props
    return (
      <div>
       <div classname="card"  style={{ width: '300px', height: '390px', border: '1px solid #ccc', borderRadius: '8px'}}>
  <img src={newsurl}width ="300px" height="150px" classname="card-img-top" alt="..."/>
  <div classname="card-body">
    <h5 classname="card-title">{title}</h5>
    <p classname="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <button><a href={pageurl} classname="btn btn-sm btn-primary" role="button">Read_more</a></button>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
