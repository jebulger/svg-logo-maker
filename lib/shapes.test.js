// Declaring imports
const Shape = require('./shapes.js')

// Tests for the Shape class
describe('Shape', () => {
    // Test for the section of the SVG string that determines the shape
    describe('determineShape', () => {
        test('Should return an SVG string for a square shape with green background.', () => {
            const data = {
                shape: 'square',
                shapeColor: 'green'
            };
            const shape = new Shape(data);
            const result = shape.determineShape();
            expect(result).toBe('<rect width="100%" height="100%" fill="green"/>')
        });
    });
    // Test for the completely generated SVG string
    describe('generateSVG', () => {
        test('Should return a complete SVG string for a green square, with black text, and the text says SVG.', () => {
            const data = {
                shape: 'square',
                shapeColor: 'green',
                textColor: 'black',
                text: 'SVG'
            };
            const shape = new Shape(data);
            const result = shape.generateSVG();
            const expected = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 300 200">
        <rect width="100%" height="100%" fill="green"/>
        <text x="150" y="120" font-size="60" font-family="sans" text-anchor="middle" fill="black">SVG</text>
        </svg>
          `.trim();
            expect(result.trim()).toBe(expected);
        });
        // Test to check that no errors are thrown if the inputted text is 3 characters or less
        test('Should not throw an error if the text is 3 characters or less', () => {
            const data = {
                text: 'SVG'
            };
            const shape = new Shape(data);
            expect(() => {
                shape.generateSVG();
            }).not.toThrowError('Text length cannot be greater than 3 characters.')
        });
    });
});