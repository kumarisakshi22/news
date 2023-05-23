import React, { Component } from 'react'

export class Newsitem extends Component {
  constructor(){
    super();
    console.log("heelo i am a constructure")
  }
    render() {
        let { title, description,imageUrl,newsurl} = this.props;
        return (
            <div className='my-3'>
            <div className="card" style={{width:" 18rem"}}>
              <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>

            </div>
        )
    }
}

export default Newsitem
