import React from 'react';
import styled from 'styled-components';

const Template = styled.template`
  button{
    color: red;
  }
`
export default class TodoListItem extends React.Component{
  render(){
    return (
      <Template>
        <li>
          { props.todo.text }
          <button onClick={()=>remove(props.todo.id)}>
            X
          </button>
        </li>
      </Template>
    )
  }
}