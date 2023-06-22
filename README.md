# random-rgb-color

Generate a random RGB color.

## Installation

```bash
npm install --save random-rgb-color
```

## Usage

The `randomRGBColor` function can be used to generate a random RGB color. By default, it returns the color as a string in the `rgb(R, G, B / A%)` format. However, you can also opt to get an object representation of the color by setting the `useObjectExport` parameter to `true`.

### Parameters

The `randomRGBColor` function accepts the following parameters:

- `minRed` (optional, default: 0): The minimum value for the red channel (range: 0 to 255).
- `maxRed` (optional, default: 255): The maximum value for the red channel (range: 0 to 255).
- `minGreen` (optional, default: 0): The minimum value for the green channel (range: 0 to 255).
- `maxGreen` (optional, default: 255): The maximum value for the green channel (range: 0 to 255).
- `minBlue` (optional, default: 0): The minimum value for the blue channel (range: 0 to 255).
- `maxBlue` (optional, default: 255): The maximum value for the blue channel (range: 0 to 255).
- `minAlpha` (optional, default: 0): The minimum value for the alpha channel (range: 0 to 1 or 0% to 100%).
- `maxAlpha` (optional, default: 1): The maximum value for the alpha channel (range: 0 to 1 or 0% to 100%).
- `useObjectExport` (optional, default: false): Whether to return the color as an object instead of a string.

### Examples

```javascript
const randomRGBColor = require('random-rgb-color');

// Generate random RGB color as a string
console.log(randomRGBColor()); // rgb(64, 149, 191)
console.log(randomRGBColor(0, 255, 0, 255, 0, 255, 0, 1)); // rgb(181, 67, 178 / 26%)

// Generate random RGB color as an object
console.log(randomRGBColor(0, 255, 0, 255, 0, 255, 0, 1, true));
// { red: 217, green: 126, blue: 83, alpha: '86%' }
```

In the object representation, the returned object contains the following properties:

- **red**: The value of the red channel (range: 0 to 255).
- **green**: The value of the green channel (range: 0 to 255).
- **blue**: The value of the blue channel (range: 0 to 255).
- **alpha**: The value of the alpha channel (range: 0 to 1 or 0% to 100%).

By adjusting the input parameters and using the `useObjectExport` parameter, you can control the range of each channel and obtain the color as an object with the respective channel values.

## Acknowledgements

Inspired by [random-hex-color by John Otander](http://github.com/johno/random-hex-color) which is repackaged from a [post by Paul Irish](http://www.paulirish.com/2009/random-hex-color-code-snippets/).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

