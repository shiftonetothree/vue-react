import React from 'react';
import styled from 'styled-components';
const blue = 'blue';
import '../variables.scss';

const Template = styled.template`
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid ${blue};
}
`

export default class BaseInputText extends React.Component {
  listeners = () => {
    return {
      ...this.props,
      onChange: e => this.props.onChange(e.target.value),
      onKeyDown: e => e.code === 13 && this.props.onEnter(e),
    }
  }
  return(){
    return (
      <Template>
        <input
          type='text'
          className='input'
          value={this.props.value}
          {...this.listeners()}
        />
      </Template>
    );
  }
}
