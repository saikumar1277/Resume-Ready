import React from 'react';
import { Link, Element } from 'react-scroll';

function Test() {
  return (
    <div>
      <nav>
        <Link to="targetDiv" smooth={true} duration={500}>Click me to scroll</Link>
      </nav>
      
      <div style={{ height: '100vh' }}>Some content above</div>
      
      <Element name="targetDiv" className="target-div">
        <div>This is the target div</div>
      </Element>
      
      <div style={{ height: '100vh' }}>Some content below</div>
    </div>
  );
}

export default Test;
