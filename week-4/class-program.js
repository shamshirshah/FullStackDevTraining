
// constructor
// constructor is a method in class or a type of function in javascript
// constructor is used to initialize the object
// constructor is called when object is created

class Programming{ 
  constructor(){
      console.log("constructor is executed successfully started");
      this.id='';
      this.name='';
      this.course='';
      console.log("Constructor executed successfully ended");
    }
    // Setters Functions
    setId(id){
      this.id = id;
    }
  
    setName(name){
      this.name = name;
    }
    setCourse(course){
      this.course = course;
    }
  
    // Getters Functions
    getId(){
      return this.id;
    }
    getName(){
      return this.name;
    }
    getCourse(){
      return this.course;
    }
  }
  const p1 = new Programming();
  p1.id = 1;
  p1.name = "Shah";
  p1.course = "Java";
  console.log("Id :- " + p1.id+ "\nName :- " + p1.name+ "\nCourse :- " + p1.course);
  
  
  const p2 = new Programming();
  p2.id = 2;
  p2.name = "Hussain";
  p2.course = "C Programming";
  console.log("Id :- " + p2.id+ "\nName :- " + p2.name+ "\nCourse :- " + p2.course);
  
  const p3 = new Programming();
  p3.setId(3);
  p3.setName("Qasam");
  p3.setCourse("C++");
  console.log("Id :- " + p3.getId()+ "\nName :- " + p3.getName()+ "\nCourse :- " + p3.getCourse());
  
  const p4 = new Programming();
  p4.id=4;
  p4.name="Ali";
  p4.course="C++";
  console.log("Id :- " + p4.id+ "\nName :- " + p4.name+ "\nCourse :- " + p4.course);
  
  const p5 = new Programming();
  p5.setId(5);
  p5.setName("Manazer");
  p5.setCourse("Sparky");
  console.log("id :-" +p5.getId()+ "\nName :-" +p5.getName()+ "\nCourse :-" +p5.getCourse());
  
  const p6 = new Programming();
  p6.id=6;
  p6.namme = "Sayed";
  p6.course = "Python";
  console.log("id :- " +p6.id+ "\nName :- " +p5.name+ "\nCourse :- " +p6.course);
  
  
  