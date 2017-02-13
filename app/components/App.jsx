import React from 'react';

require('./App.css');

const names =['Jack','Bob','Polo']

//filter names
const filtered =names.filter( n => n.length>3)

export default () => <div>
  {
    filtered.map((name) => (
      <p>{name}</p>
    ))
  }


</div>
