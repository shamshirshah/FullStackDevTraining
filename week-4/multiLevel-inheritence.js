class A{
  display(){
    console.log("Hello World");
    
  }
}

class B extends A{

}

// multiple inheritance

class C extends B{

}
const a = new A();
a.display();

const b = new B();
b.display();

const c = new C();
c.display();
