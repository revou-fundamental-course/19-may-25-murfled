function convert() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (isNaN(celsius)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById('fahrenheit').value = fahrenheit.toFixed(1);
  document.getElementById('calculation').value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(1)}°F`;
}

function reset() {
  document.getElementById('celsius').value = "";
  document.getElementById('fahrenheit').value = "";
  document.getElementById('calculation').value = "";
}

function reverse() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  if (isNaN(fahrenheit)) {
    alert("Masukkan angka yang valid di kolom Fahrenheit!");
    return;
  }

  const celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById('celsius').value = celsius.toFixed(1);
  document.getElementById('calculation').value = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(1)}°C`;
}
