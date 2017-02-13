import React from 'react';
import sayHello from './stuff'

export default class Arrow extends React.Component {

  cb = () => { // the class property is initialized with an arrow function that binds this to the class
console.log('testing=cb clicked')
  }

  render() {
    console.log('testing=sayHello()',sayHello() )
    return (
      <button onClick={ this.cb }>Click</button>
    );
  }
}
