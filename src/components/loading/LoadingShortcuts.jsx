import Skeleton from "react-loading-skeleton";
import React, { Component } from 'react';
import "react-loading-skeleton/dist/skeleton.css";

class LoadingShortcuts extends Component {
  state = {  } 
  render() { 
    return Array(8).fill().map(()=>{
      return (
        <div>
          <div>
            <Skeleton style={{width:'52px',height:'52px'}}/>
            <Skeleton style={{height:'15px',width:'75px',borderRadius:'1000px',marginTop:'15px'}}/>
          </div>
        </div>
      )
    });
  }
}
 
export default LoadingShortcuts;