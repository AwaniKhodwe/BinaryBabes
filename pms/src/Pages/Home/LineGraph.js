import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plot from 'react-plotly.js';

const useStyles = makeStyles((theme) => ({
  graphContainer: {
    width: '30%',
    margin: 'auto',
  },
}));

const LineGraph = ({ data }) => {
  const classes = useStyles();

  const customGraphNames = ['Apple', 'Amazon', 'Tesla', 'Coin', 'DKNG'];
  const colorPalette = ['#FF5733', '#33FF57', '#5733FF', '#FF33E6' ,'red'];

  return (
    <div className={classes.graphContainer}>
      <Plot
        data={data.map((graph, index) => ({
          x: graph.xValues,
          y: graph.yValues,
          type: 'scatter',
          mode: 'lines+points',
          marker: {  color: colorPalette[index % colorPalette.length] },
          name: customGraphNames[index],
        }))}
        layout={{
          title: 'Line Graphs',
          xaxis: { title: 'X-axis' },
          yaxis: { title: 'Y-axis' },
        }}
      />
    </div>
  );
};

export default LineGraph;