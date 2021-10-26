const result = document.getElementById('result');
const measurement = document.getElementById('measurement');
const index = document.getElementById('base-index');

function calculate() {
  const coeficients = {
    1.5: 0.024217,
    1.56: 0.02717696,
    1.6: 0.02911853,
    1.67: 0.0325161,
    1.7: 0.03397161,
    1.74: 0.0359132,
    1.8: 0.0388247,
  };
  result.textContent = (measurement.value * 100 * coeficients[index.value]).toFixed(3);

  measurement.value = '';
}

function showInfo() {
  const moreInfo = document.querySelector('.more-info');
  moreInfo.style.display = 'block';
}

function hideInfo() {
  const moreInfo = document.querySelector('.more-info');
  moreInfo.style.display = 'none';
}
