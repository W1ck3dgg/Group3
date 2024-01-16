import React, { Component } from "react";
import "../style/ChartGenerator.css"; // Import your CSS styles
import Chart from "chart.js/auto"; // Import Chart.js

class Infograph extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      chartType: "pie",
      colorInput: "",
      textInput: "",
    };
  }

  handleChartTypeChange = (event) => {
    this.setState({ chartType: event.target.value });
  };

  handleColorInputChange = (event) => {
    this.setState({ colorInput: event.target.value });
  };

  handleTextInputChange = (event) => {
    this.setState({ textInput: event.target.value });
  };

  generateChart = () => {
    const { textInput, chartType, colorInput } = this.state;
    const data = this.processData(textInput);
    const colors = this.processColorInput(colorInput, data.length);

    if (data.length > 0) {
      this.renderChart(data, chartType, colors);
    } else {
      alert("No numerical values found in the input text.");
    }
  };

  processData = (text) => {
    const matches = text.match(/(\d+)\s*([a-zA-Z]+)/g);

    if (matches) {
      return matches.map((match) => {
        const [value, label] = match.split(/\s+/);
        return {
          value: parseFloat(value),
          label: label,
        };
      });
    } else {
      return [];
    }
  };

  processColorInput = (colorInput, segments) => {
    const colorArray = colorInput.split(",").map((color) => color.trim());

    if (colorArray.length >= segments) {
      return colorArray;
    } else {
      const additionalColors = Array(segments - colorArray.length)
        .fill("")
        .map(() => this.getRandomColor());
      return colorArray.concat(additionalColors);
    }
  };

  getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  renderChart = (data, chartType, colors) => {
    const ctx = this.chartRef.current.getContext("2d");

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    const chartData = {
      labels: data.map((entry) => entry.label),
      datasets: [
        {
          data: data.map((entry) => entry.value),
          backgroundColor: colors,
        },
      ],
    };

    this.chartInstance = new Chart(ctx, {
      type: chartType,
      data: chartData,
    });
  };

  render() {
    return (
      <div>
        <h1>AI-tool generate chart</h1>
        <div className="textContainer">
          <label>Select the type of chart:</label>
          <div className="custom-select">
            <select
              id="chartType"
              onChange={this.handleChartTypeChange}
              value={this.state.chartType}
            >
              <option value="pie">Pie Chart</option>
              <option value="bar">Bar Chart</option>
              <option value="line">Line Chart</option>
            </select>
          </div>
          <br />
          <label for="colorInput">Colors that you want to use:</label>
          <input
            type="text"
            id="colorInput"
            placeholder="#ff5733, #3380ff, #4caf50"
            onChange={this.handleColorInputChange}
            value={this.state.colorInput}
          />
        </div>

        <textarea
          id="textInput"
          placeholder="Please enter your text with numerical values."
          onChange={this.handleTextInputChange}
          value={this.state.textInput}
        ></textarea>
        <button className="ButtonChart" onClick={this.generateChart}>
          Generate Chart
        </button>
        <canvas
          id="myChart"
          width="300"
          height="300"
          ref={this.chartRef}
        ></canvas>
      </div>
    );
  }
}

export default Infograph;
