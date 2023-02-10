import React from 'react';
import CountUp from 'react-countup';

const Counter = ({start,end,duration}) => {




  return (
    <div className="counter">
      <div style={{fontSize:'50px' }}>
        <CountUp
          start={start}
          end={end}
          duration={duration}
        />    
      </div>
    </div>
  );
};
export default Counter;