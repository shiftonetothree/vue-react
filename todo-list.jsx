import React from 'react'
import styled from 'styled-components'

import BaseInputText from './base-input-text.jsx'
import TodoListItem from './todo-list-item.jsx'

const Template = styled.template`
`

let nextTodoId = 1

export default class TodoList extends React.Component{

  state = {
    newTodoText: '',
    todos: [
      {
        id: nextTodoId++,
        text: 'Learn Vue'
      },
      {
        id: nextTodoId++,
        text: 'Learn about single-file components'
      },
      {
        id: nextTodoId++,
        text: 'Fall in love'
      }
    ]
  }

  setNeTodoText = (value) => {
    this.setState({ newTodoText });
  }

  addTodo = () => {
    const trimmedText = this.state.newTodoText.trim()
    if (trimmedText) {
      this.setState({
        todos: this.state.todos.concat([{
          id: nextTodoId++,
          text: trimmedText
        }])
      })
      this.setState({newTodoText: ''})
    }
  },

  removeTodo = (idToRemove) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== idToRemove
      })
    })
  }

  render(){
    return (
      <Template>
        <div>
          <BaseInputText 
            value={this.state.newTodoText}
            placeholder="New todo"
            onChange={this.setNeTodoText}
            onEnter={this.addTodo}
          />
          {todos.length && 
            <ul>
              {this.state.todos.map(todo=>
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  remove={this.removeTodo}
                />
              )}
            </ul>
          }
          <p v-else>
            Nothing left in the list. Add a new todo in the input above.
          </p>
        </div>
      </Template>
    )
  };
}