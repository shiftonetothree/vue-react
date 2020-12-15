import React from 'react';
import styled from 'styled-components';
import StyleButton from './style-button.jsx';

const Template = styled.template`
.remove-button{
  color: orangered;
}
`
export default class TodoListItem extends React.Component{
  render(){
    return (
      <Template>
        <li>
          { this.props.todo.text }
          <StyleButton
            className={"remove-button"}
            onClick={()=>this.props.remove(this.props.todo.id)}
          >
            X
          </StyleButton>
        </li>
      </Template>
    )
  }
}