import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


function News (props) {

 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, setTotalResults] = useState(0);

  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.contryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    // props.setProgress(60);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News4U`;
    fetchNews();
        // eslint-disable-next-line
  }, []);

 


  // handlePreClick = async () => {
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.contryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pagesize=${props.pageSize}`;
  //   // this.setState({loading : true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   page: page - 1,
  //   //   articles : parsedData.articles,
  //   //   loading : false
  //   // })
  //   this.setState({ page : page - 1 });
  //   this.fetchNews();
  // }

  // if(page+1(means next page) is greater than totalResults/pageSize)this is false than see the next page else not display next page
  // handleNextClick = async () => {
  //     // console.log("Next");
  //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.contryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
  //     // this.setState({loading : true});
  //     // let data = await fetch(url);
  //     // let parsedData = await data.json();
  //     // this.setState({
  //     //   page: page + 1,
  //     //   articles : parsedData.articles,
  //     //   loading : false
  //     // })
  //     this.setState({ page : page + 1 })
  //     this.fetchNews();
  // }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.contryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
    setPage(page+1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };


    return (
      <>
      {/* if loading is false than display the content else only display the Headline */}
        
        <h3 className="text-center" style={{ margin: '35px 0px', color:props.mode==='light' ? 'black' : 'whitesmoke', marginTop: '90px' }} >News4U - Top {capitalizeFirstLetter(props.category)} Headlines</h3>
        
        <hr className="rounded" style={{borderTop: '8px solid rgb(202 255 255)', borderRadius: '5px'}} />
          {/* if loading is true than display loading spinner else display the news content */}
        {loading && <Spinner />}

        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={loading && <Spinner />}
          >

        <div className="container my-3">  
  
          <div className="row">
              { articles.map( (element, index)=> {
                return <div className="col-md-4 my-1" key={index}>
                          <NewsItem mode={props.mode} source={element.source.name} title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage?element.urlToImage:"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"} author={element.author} date={element.publishedAt} newsUrl={element.url} />
                      </div>
              }) }
          </div>
          
        </div>
        {/* if loading is false than display the content else only display the Headline */}
        {/* previos and next button for fetching newses */}
        {/* { !loading &&
        <div className="container my-3 d-flex justify-content-between">
        <button disabled={page<=1} className="btn btn-dark btn-sm" onClick={this.handlePreClick} >&larr; pre</button>
        <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} className="btn btn-dark btn-sm" onClick={this.handleNextClick} >next &rarr;</button>
        </div>} */}
        
          </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
  contryCode : 'in',
  apiKey : '8f30a6090e404aa5b2cd9aeb2ed1f53e',
  pageSize : 10
}
News.propTypes = {
  contryCode : PropTypes.string,
  apiKey : PropTypes.string,
  pageSize : PropTypes.number
}

export default News