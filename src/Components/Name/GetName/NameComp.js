import React from 'react';

const NameComp = props => {
  console.log('NC', props);
  return (
    <div>
      <h1>
        Name: {props.nameMaybe.name}
        {/* {props.nameMaybe.index} */}
      </h1>
      {console.log(11, props.nameMaybe.name)}
      {/* <h3 /> */}
    </div>
  );
};
export default NameComp;
