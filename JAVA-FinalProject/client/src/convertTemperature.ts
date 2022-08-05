export function convertTemperature(fromUnity: any, toUnity: any, value: any) {
  if (fromUnity == 'kelvin' && toUnity == 'Celsius') {
    return parseInt(value) - 273.15;
  }
  if (fromUnity == 'kelvin' && toUnity == 'Fahrenheit') {
    return ((value - 273.15) * 9) / 5 + 32;
  }
  if (fromUnity == 'Celsius' && toUnity == 'kelvin') {
    return parseInt(value) + 273.15;
  }
  if (fromUnity == 'Celsius' && toUnity == 'Fahrenheit') {
    return (value * 9) / 5 + 32;
  }
  if (fromUnity == 'Fahrenheit' && toUnity == 'kelvin') {
    return ((value - 32) * 5) / 9 + 273.15;
  }
  if (fromUnity == 'Fahrenheit' && toUnity == 'Celsius') {
    return ((value - 32) * 5) / 9;
  }
  return value;
}
