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

/* Het maken van een custom dropdown menu */

var x, i, j, l, ll, selElmnt, a, b, c;
/* Kijkt naar de elementen in het dorpdown menu */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* Voor elk element wordt een nieuwe div gemaakt */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* Voor elke optie in het menu wordt een divgemaakt */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* Als een item wordt geklikt, wordt de optie geupdate */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* Als iets geselecteerd wordt, worden de andere opties niet meer actief. */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* Het sluit alle opties behalve het geselecteerde item. */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* Als een gebruiker buiten het menu klikt sluit alles: */
document.addEventListener("click", closeAllSelect);