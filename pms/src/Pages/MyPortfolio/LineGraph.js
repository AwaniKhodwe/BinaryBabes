import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plot from 'react-plotly.js';


const useStyles = makeStyles((theme) => ({
  graphContainer: {
    width: '80%',
    margin: 'auto',
  },
}));

const LineGraph = ({ data }) => {
  const classes = useStyles();

  const customGraphNames = ['Invesco', 'Franklin', 'SBI', 'DSP'];

  return (
    <div className={classes.graphContainer}>
      <Plot
        data={data.map((graph, index) => ({
          x: graph.xValues,
          y: graph.yValues,
          type: 'scatter',
          mode: 'lines+points',
          marker: { color: `rgba(0, 0, 255, ${index * 0.2 + 0.2})` },
          name: customGraphNames[index],
        }))}
        layout={{
          title: 'Line Graphs',
          xaxis: { title: 'X-axis' },
          yaxis: { title: 'Y-axis' },
          animate: true, // Enable animation
          animation: {
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing function
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
