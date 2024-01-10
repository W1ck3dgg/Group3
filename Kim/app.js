let chartInstance = null;

function generateChart() {
    const textInput = document.getElementById('textInput').value;
    const chartType = document.getElementById('chartType').value;
    const colorInput = document.getElementById('colorInput').value;
    const data = processData(textInput);
    const colors = processColorInput(colorInput, data.length);

    if (data.length > 0) {
        renderChart(data, chartType, colors);
    } else {
        alert('No numerical values found in the input text.');
    }
}

function processColorInput(colorInput, segments) {
    const colorArray = colorInput.split(',').map(color => color.trim());

    if (colorArray.length >= segments) {
        return colorArray;
    } else {
        // Een random kleur wordt gemaakt als de gebruiker geen input ingeeft
        const additionalColors = Array(segments - colorArray.length)
            .fill('')
            .map(() => getRandomColor());
        return colorArray.concat(additionalColors);
    }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function processData(text) {
    const matches = text.match(/(\d+)\s*([a-zA-Z]+)/g);

    if (matches) {
        return matches.map((match, index) => {
            const [value, label] = match.split(/\s+/);
            return {
                value: parseFloat(value),
                label: label,
            };
        });
    } else {
        return [];
    }
}

function renderChart(data, chartType, colors) {
    const ctx = document.getElementById('myChart').getContext('2d');

    if (chartInstance) {
        chartInstance.destroy();
    }

    const chartData = {
        labels: data.map(entry => entry.label),
        datasets: [{
            data: data.map(entry => entry.value),
            backgroundColor: colors,
        }],
    };

    chartInstance = new Chart(ctx, {
        type: chartType,
        data: chartData,
    });
}
