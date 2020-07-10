import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
import ApplicationCircle from "applicationCircle"

interface Props extends PanelProps<SimpleOptions> {}


export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme();
  const styles = getStyles();
  console.log(options)
  console.log(data)
  console.log(width)
  console.log(height)

  // console.log(data["series"][0]["fields"][0]["values"].get(0)) //This will access the first row of values
  
  const timeStamps = data["series"][0]["fields"][0]["values"]
                                    //^-For each
  const availabilityResults = data["series"][0]["fields"][1]["values"]

  console.log(timeStamps)
  console.log(availabilityResults)

  console.log(data["series"].length)
  
  let availableApplications = [];
  // let unavailableApplications = [] //Burde pushe navnet eller noe


  for (let i = 0; i < data["series"].length; ++i) {
    console.log(data["series"][i]["fields"][0]["values"].get(0));
    console.log(data["series"][i]["refId"])
    let avail = data["series"][i]["fields"][0]["values"].get(i);
    // avail >= 100 ? 
    availableApplications.push(<ApplicationCircle 
                                    height={height}
                                    width={width}
                                    total_length={data["series"].length} 
                                    availability={avail} 
                                    index={i}
                                    name={data["series"][i]["refId"]}
                                  />)
        // data["series"][i]["refId"]): 
      // unavailableApplications.push(data["series"][i]["refId"]);
      
  }

  //Nå holder series alle seriene som har blitt querya etter.
  console.log(availableApplications)
  // console.log(unavailableApplications)
  


  

  // let color: string;
  // switch (options.color) {
  //   case 'red':
  //     color = theme.palette.redBase;
  //     break;
  //   case 'green':
  //     color = theme.palette.greenBase;
  //     break;
  //   case 'blue':
  //     color = theme.palette.blue95;
  //     break;
  // }
  
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >

        <circle 
          style={{ fill: theme.palette.red88}} 
          onClick = {() => console.log("cli")}
          cx={0} 
          cy={0} 
          r={50} 
        />
        <circle 
          style={{ fill: theme.palette.red88}} 
          onClick = {() => console.log("cli")}
          cx={width/2} 
          cy={height/2} 
          r={50} 
        />
        

              
        {availableApplications.map((component, index) => (
          <React.Fragment key={index}>
            { component }
          </React.Fragment>
        ))}



      </svg>
      

      <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
