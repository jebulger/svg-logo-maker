// Class for the Shapes
class Shape {
    constructor(data) {
        this.data = data;
    }

    // Function to determine the shape
    // Checks for the selected shape
    // then returns the corresponding string that will set the shape in the SVG
    determineShape() {
        let shapeContent = '';
        if (this.data.shape === 'square') {
            shapeContent = `<rect width="100%" height="100%" fill="${this.data.shapeColor}"/>`;
        } else if (this.data.shape === 'circle') {
            shapeContent = `<circle cx="150" cy="100" r="80" fill="${this.data.shapeColor}"/>`;
        } else {
            shapeContent = `<polygon points="150 0, 300 200, 0 200" fill="${this.data.shapeColor}"/>`;
        }
        return shapeContent;
    }

    // Function to generate the complete SVG string
    // Calls the determine shape function and stores the value into shapeContent
    // Then places the shapeContent into the rest of the string
    // and places in the rest of user inputs
    generateSVG() {
        const shapeContent = this.determineShape()
        const svgContent = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 300 200">
        ${shapeContent}
        <text x="150" y="120" font-size="60" font-family="sans" text-anchor="middle" fill="${this.data.textColor}">${this.data.text}</text>
        </svg>
        `
        return svgContent;
    }
}

// Exporting Shape class
module.exports = Shape;