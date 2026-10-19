class UnitConverter {
    constructor() {
        this.conversions = {
            'Celsius-Fahrenheit': val => (val * 9/5) + 32,
            'Fahrenheit-Celsius': val => (val - 32) * 5/9,
            'Kilometer-Mile': val => val * 0.621371,
            'Mile-Kilometer': val => val / 0.621371,
            'Kilogram-Pound': val => val * 2.20462,
            'Pound-Kilogram': val => val / 2.20462
        };
        this.attachEventListeners();
    }
    convert() {
        const input = parseFloat(document.getElementById('inputValue').value);
        const from = document.getElementById('fromUnit').value;
        const to = document.getElementById('toUnit').value;
        const key = `${from}-${to}`;
        if (isNaN(input) || !this.conversions[key]) {
            document.getElementById('outputValue').value = '';
            return;
        }
        const result = this.conversions[key](input);
        document.getElementById('outputValue').value = result.toFixed(2);
    }
    attachEventListeners() {
        document.getElementById('inputValue').addEventListener('input', () => this.convert());
        document.getElementById('fromUnit').addEventListener('change', () => this.convert());
        document.getElementById('toUnit').addEventListener('change', () => this.convert());
    }
}
const app = new UnitConverter();
