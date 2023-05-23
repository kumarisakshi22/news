import "./NewsStyle.css";
import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class News extends Component {
    
    constructor(){
    super();
    
    this.state={
        articles: [],
        loading:false,
        page:1,

    }

  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad22f271d565486e85ba76ce918fb725";
    let data= await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    






  }
  handleNextClick=async()=>{
    console.log("nextclick")
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad22f271d565486e85ba76ce918fb725${this.state.page +1}`;
    let data= await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
    this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles
        
        
    })
    
}
handlePreviousClick=async()=>{
    console.log("previous")
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad22f271d565486e85ba76ce918fb725&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
    this.setState({
        page: this.state.page - 1,
        articles:parsedData.articles


    })


  }
    render() {
        return (
            <div className='container my-3'>
                <h1>DailyDose - Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>{
                    return <div key={element.url}  className="col-md-4">
                        <Newsitem title={element.title.slice(0,20)} description={element.description} imageUrl={element.urlToImage} newsurl={element.url} />
                    </div>
                })}
                </div>
                {/* <div className="conatiner d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" class="btn btn-dark"onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" class="btn btn-dark "onClick={this.handlenextClick}>next &rarr;</button>
                </div> */}
                
            </div>
            
        )
    }
}
