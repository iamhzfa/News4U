import React, { Component } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : true,
      page : 1,
      totalResults : 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News4U`;
  }

  static defaultProps = {
    contryCode : 'in',
    apiKey : '8f30a6090e404aa5b2cd9aeb2ed1f53e',
    pageSize : 10
  }
  static propTypes = {
    contryCode : PropTypes.string,
    apiKey : PropTypes.string,
    pageSize : PropTypes.number
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async fetchNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.contryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles : parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading : false
     })

  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ 
    //   articles : parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    //   loading : false
    //  })
    this.fetchNews();

  }


  // handlePreClick = async () => {
  //   // console.log("Previous");
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
  //   // this.setState({loading : true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles : parsedData.articles,
  //   //   loading : false
  //   // })
  //   this.setState({ page : this.state.page - 1 });
  //   this.fetchNews();
  // }

  // if(page+1(means next page) is greater than totalResults/pageSize)this is false than see the next page else not display next page
  // handleNextClick = async () => {
  //     // console.log("Next");
  //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.contryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
  //     // this.setState({loading : true});
  //     // let data = await fetch(url);
  //     // let parsedData = await data.json();
  //     // this.setState({
  //     //   page: this.state.page + 1,
  //     //   articles : parsedData.articles,
  //     //   loading : false
  //     // })
  //     this.setState({ page : this.state.page + 1 })
  //     this.fetchNews();
  // }

  fetchMoreData = async () => {
    this.setState({page : this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.contryCode}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles : this.state.articles.concat(parsedData.articles), 
      totalResults: parsedData.totalResults
     })
  };


  render() {

    return (
      <>
      {/* if loading is false than display the content else only display the Headline */}
        
        <h3 className="text-center my-3">News4U - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
        
        <hr className="rounded" style={{borderTop: '8px solid rgb(202 255 255)', borderRadius: '5px'}} />
          {/* if loading is true than display loading spinner else display the news content */}
        {this.state.loading && <Spinner />}

        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Spinner />}
          >

        <div className="container">  
  
          <div className="row">
              { this.state.articles.map( (element, index)=> {
                return <div className="col-md-4 my-1" key={index}>
                          <NewsItem source={element.source.name} title={element.title?element.title.slice(0, 45):""} discription={element.description?element.description.slice(0, 88):""} imgUrl={element.urlToImage?element.urlToImage:"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"} author={element.author} date={element.publishedAt} newsUrl={element.url} />
                      </div>
              }) }
          </div>
          
        </div>
        {/* if loading is false than display the content else only display the Headline */}
        {/* previos and next button for fetching newses */}
        {/* { !this.state.loading &&
        <div className="container my-3 d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark btn-sm" onClick={this.handlePreClick} >&larr; pre</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark btn-sm" onClick={this.handleNextClick} >next &rarr;</button>
        </div>} */}
        
          </InfiniteScroll>
        </>
    )
  }
}

export default News