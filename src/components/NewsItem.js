import React from 'react'

function NewsItem (props) {
    let {title, discription, imgUrl, newsUrl, author, date, source} = props;

    return (
      <div className='my3'>
        <div className={`card border border-${props.mode==='light'?'rgb(0 0 0 / 55%)':'secondary'}`}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-success">{source}</span>
            <div className="card-body" style={{backgroundColor:props.mode==='light' ? 'rgb(202 255 255 / 18%)' : 'rgb(24 27 30)'}} > 
            
                <h5 className="card-title" style={{color:props.mode==='light'?'black':'#f5f5f5e6'}} >{title}...</h5>
                <p className="card-text" style={{color:props.mode==='light'?'black':'#f5f5f58a'}} >{discription}<a href={newsUrl} target="_blank" rel='noreferrer' style={{textDecoration:'none'}}>...</a></p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className={`btn btn-sm btn-outline-${props.mode==='light'?'secondary':'light'} mt-2 mx-2`}>Read More...</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem