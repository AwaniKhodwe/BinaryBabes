import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Plot from 'react-plotly.js';

const useStyles = makeStyles((theme) => ({
  graphContainer: {
    width: '80%',
    margin: 'auto',
  },
}));

const LineGraphTesla = ({ data }) => {
  const classes = useStyles();

  const customGraphNames = ['Apple', 'Amazon', 'Tesla', 'Coin', 'DKNG'];
  const colorPalette = [ 'red'];

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
          title: 'Tesla Stock Prices',
          xaxis: { title: 'X-axis' },
          yaxis: { title: 'Y-axis' },
        }}
      />
    </div>
  );
};

export default LineGraphTesla;