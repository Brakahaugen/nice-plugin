import React, { useState } from 'react';
import { ApplicationProps } from 'types';
// import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';

let circleRadiusScaleFactor = 1000


export const ApplicationCircle: React.FC<ApplicationProps> = ({ height, width, index, total_length, availability, name }) => {
    const [displayName, setName] = useState(name);

    const theme = useTheme();
  
    let cx = ((index % (total_length**0.5))*200 - 300).toString();
    let cy = (Math.floor(index / (total_length**0.5))*200 - 300).toString();
    let radius = (height*width/total_length)/circleRadiusScaleFactor
    
    return (
      <g>
        {/* <polygon points="0,100 100,0  0,-100 -100,0" style={{ fill: color }} /> */}
        
        <circle style={{ fill: availability >= 100 ? theme.palette.blue80: theme.palette.red88}} 
                onClick = {() => setName("klikkorama") }
                cx={cx}
                cy={cy}
                r={radius} />
        <text x={cx} y={cy} text-anchor="middle" stroke="#51c5cf" stroke-width="2px" dy=".3em">{displayName}</text>
        <text x={cx} y={cy} text-anchor="middle" stroke="#51c5cf" stroke-width="2px" dy=".3em">{displayName}</text>
        
      </g>
    )
  };

  export default ApplicationCircle;
