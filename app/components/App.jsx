import React from 'react';

require('./App.css');

 const names =['Jack','Bob']

export default () => <div>
  {
    names.map((name) => (
      <p>{name}</p>
    ))
  }
</div>
