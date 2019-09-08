import React, { Component } from 'react';

class Subject extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
          lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
          i += 1;
      }


      return(
        <header>
          <ul>
              {lists}
          </ul>
        </header>
      );
    }
  }

  export default Subject;