//area of a rectangle
/*function areaOfARectangle(length, width) {
   return length * width;
}
let area = areaOfARectangle(10, 10);

console.log(area);
*/

function getLength() {
    let length = parseInt(document.getElementById('length').value);
    console.log(length);
    return length;
}

function getWidth() {
    let width = parseInt(document.getElementById('width').value);
    console.log(width);
    return width;
}

function calcArea() {
    let l = getLength();
    let w = getWidth();
    let area = l * w;
    console.log(area);
    alert('The rectangle area is ' + area + ' units squared');
    return area;
} 

//area of a triangle
/*
function areaOfATriangle(base, height) {
    return (base / 2) * height
}
alert(areaOfATriangle(10, 10));
*/

function getBase() {
    let base = parseInt(document.getElementById('base').value);
    console.log(base);
    return base;
}

function getTriangleHeight() {
    let tHeight = parseInt(document.getElementById('tHeight').value);
    console.log(tHeight);
    return tHeight;
}

function calcTHeight() {
    let b = getBase();
    let tH = getTriangleHeight();
    let area = (b / 2) * tH;
    console.log(area);
    alert('The area of the triangle is ' + area + ' units squared');
    return area;
}

//Area of a Circle
/*function areaOfACircle(radius) {
    let area = Math.PI * (Math.pow(radius, 2));
    console.log('This area of the circle is ' + area);
    return area;
}

areaOfACircle(10);
*/

function getRadius() {
    let radius = parseInt(document.getElementById('radius').value);
    console.log(radius);
    return radius;
}

function calcCArea() {
    let r = getRadius();
    let area = Math.PI * (Math.pow(r, 2));
    console.log('This area of the circle is ' + area);
    alert('This area of the circle is ' + area);
    return area;
}

//Celsius to Fahrenheit
/*function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}

celsiusToFahrenheit(-20);
*/
function getCelsius() {
    let celsius = parseInt(document.getElementById('celsius').value);
    return celsius;
}

function celsiusToFahrenheit() {
    let c = getCelsius();
    let fahrenheit = c * (9/5) + 32;
    console.log('The temperature in Fahrenheit is ' + fahrenheit);
    alert('The temperature in Fahrenheit is ' + fahrenheit);
    return fahrenheit;
}