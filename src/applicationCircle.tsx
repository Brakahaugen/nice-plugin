import React, { useState } from 'react';
import { ApplicationProps } from 'types';
// import { css, cx } from 'emotion';
import { useTheme } from '@grafana/ui';
// import { useHistory } from "react-router-dom";

let circleRadiusScaleFactor = 0.7
let circleSpacingFactor = 0.01

// const history = useHistory();

// const routeChange = () =>{ 
//   let path = `http://localhost:3000/d/SR6AHV7Gk/fond?orgId=1`; 
//   history.push(path);
// }

export const ApplicationCircle: React.FC<ApplicationProps> = ({ height, width, index, total_length, availability, name }) => {
    const [displayName] = useState(name);
    const theme = useTheme();
  
    // let cx = ((index % (total_length**0.5))*width/2 - width/2).toString();
    // let cy = (Math.floor(index / (total_length**0.5))*200 - 300).toString();

    console.log((Math.floor(index / 2) / total_length))

    // let radius = (height*width/total_length)/circleRadiusScaleFactor

    let radius = (height/total_length) * circleRadiusScaleFactor
    let cx = ((((index % 2) - 1) * width/2) + width/4).toString()
    // let cy = (((index / total_length) * height) - height/2 + radius ).toString()
    let cy = ((index+1) * height/total_length - height/2 - ((1/(2*total_length)) * height))*circleRadiusScaleFactor + height*circleSpacingFactor*index
    console.log([index, cx, cy, total_length])

    return (
      <g>
        {/* <polygon points="0,100 100,0  0,-100 -100,0" style={{ fill: color }} /> */}
        
        <circle style={{ fill: availability >= 100 ? theme.palette.greenBase: theme.palette.red88, stroke: "#111111"}}
                onClick={() => console.log("Burde vært link, men linken er i hjørnet av panel")}
                cx={cx}
                cy={cy}
                r={radius} />
        <text x={cx} y={cy - radius/4} text-anchor="middle" stroke={theme.palette.black} stroke-width="1px" dy=".4em">{displayName}</text>
        <text x={cx} y={cy + radius/4} text-anchor="middle" stroke={theme.palette.black} stroke-width="1px" dy=".4em">{"Availability: " + availability}</text>
        
      </g>
    )
  };

  export default ApplicationCircle;
