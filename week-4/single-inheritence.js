class A{
  display(){
    console.log("Hello World");
    
  }
}

class B extends A{
  display(){
    console.log("Goodbye");
    
  }
}
const a = new A();
a.display();
const b = new B();
b.display();
