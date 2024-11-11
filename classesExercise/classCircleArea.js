class Shape{
  area(){
    throw new Error("Method 'area' must be implemented in subclasses.");
  }
}
class Circle extends Shape{
  constructor(radius){
    super(radius);
    this.radius = radius;
  }
  area(){
    return Math.PI * Math.pow(this.radius, 2);
  }
}
class Square extends Shape{
  constructor(side){
    super(side);
    this.side = side;
  }
  area(){
    return Math.pow(this.side, 2);
  }
}

const circle = new Circle(5);
console.log('Circle area : ' +circle.area());

const square = new Square(4);
console.log('Square area :  '  +square.area());