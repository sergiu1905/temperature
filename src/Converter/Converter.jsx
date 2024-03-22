import './Converter.css';
import { useState } from 'react';

export default function Converter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const handleCelsius = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    const fahrenheitValue =
      !celsiusValue !== '' ? parseFloat(celsiusValue) * (9 / 5) + 32 : '';
    setFahrenheit(fahrenheitValue);
  };
  const handleFahrenheit = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    const celsiusValue =
      fahrenheitValue !== ''
        ? (parseFloat(fahrenheitValue) - 32) * (5 / 9)
        : '';
    setCelsius(celsiusValue);
  };
  const colorText = () => {
    if (parseFloat(celsius) <= 0) {
      return 'blue';
    }
    if (parseFloat(celsius) > 0 && parseFloat(celsius) <= 30) {
      return 'green';
    }
    if (parseFloat(celsius) > 30) {
      return 'red';
    }
    return '';
  };
  return (
    <div className="converter">
      <div className="converter_body">
        <div className="header">
          <div>
            <div className="circle" style={{ backgroundColor: 'red' }}></div>
            <div className="circle" style={{ backgroundColor: 'yellow' }}></div>
            <div className="circle" style={{ backgroundColor: 'green' }}></div>
          </div>

          <h3 style={{ color: colorText() }}>Converter</h3>
        </div>
        <div className="main_converter">
          <div className="input_temp">
            <input type="number" value={celsius} onChange={handleCelsius} />
            <label>Celsius =</label>
          </div>
          <div className="input_temp">
            <input
              type="number"
              value={fahrenheit}
              onChange={handleFahrenheit}
            />
            <label>Fahrenheit</label>
          </div>
        </div>
      </div>
    </div>
  );
}
