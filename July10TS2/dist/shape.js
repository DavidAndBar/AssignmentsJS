"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(`Circle area: ${circle.calculateArea()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
