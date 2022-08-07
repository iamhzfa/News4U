import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, discription, imgUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my3'>
        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..." />
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-success">{source}</span>
            <div className="card-body" style={{backgroundColor:"rgb(202 255 255 / 18%)"}}>
            
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{discription}...</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem