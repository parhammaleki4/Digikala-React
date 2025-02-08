import Skeleton from "react-loading-skeleton";
import React, { Component } from 'react';
import "react-loading-skeleton/dist/skeleton.css";

class LoadingStory extends Component {
  state = {  } 
  render() { 
    return Array(12).fill().map(()=>{
      return (
        <div>
          <div>
            <Skeleton circle={true} height={84} width={84} />
            <Skeleton height={15} width={60} style={{borderRadius:'1000px'}}/>
            <Skeleton height={15} width={20} style={{borderRadius:'1000px'}}/>
          </div>
        </div>
      )
    });
  }
}
 
export default LoadingStory;