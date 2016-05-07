'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


function ExampleComponent(props) {
  return (
    <div class="example-component">
      <p>{props.text}</p>
    </div>
  );
}

ExampleComponent.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default ExampleComponent;
