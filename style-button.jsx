import React from 'react';
import styled from 'styled-components';

const Template = styled.template`
  .button{
    color: red;
  }
`
export default class StyleButton extends React.Component{
  state= {
    fontSize: 12
  }
  render(){
    return (
      <Template>
        <button 
          {...this.props} 
          className={`button ${this.props.className}`}
          style={{fontSize: `${this.state.fontSize}px`}}
        >
          {this.props.children}
        </button>
      </Template>
    )
  }
}