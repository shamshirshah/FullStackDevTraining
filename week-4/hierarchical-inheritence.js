// hierarchical inheritance
// single parent and multiple children

class A{
  display(){
    console.log("Hello World");
    
  }
}

class B extends A{
  display(){
    console.log("Class B");
    
  }
}

// multiple inheritance

class C extends A{
  display(){
    console.log("Class C");
  }
}

class D extends A{
  display(){
    console.log("Class D");
  }
}
class E extends A{
  display(){
    console.log("Class E");
  }
}
const a = new A();
a.display();

const b = new B();
b.display();

const c = new C();
c.display();

const d = new D();
d.display();

const e = new E();
e.display();

