import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plot from 'react-plotly.js';

const useStyles = makeStyles((theme) => ({
  graphContainer: {
    width: '80%',
    margin: 'auto',
  },
}));

const LineGraphNifty = ({ data }) => {
  const classes = useStyles();

  const customGraphNames = ['Apple', 'Amazon', 'Tesla', 'Coin', 'DKNG'];
  const colorPalette = [ '#33FF57'];

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
          title: 'Nifty50 Stock Prices',
          xaxis: { title: 'X-axis' },
          yaxis: { title: 'Y-axis' },
        }}
      />
    </div>
  );
};

export default LineGraphNifty;