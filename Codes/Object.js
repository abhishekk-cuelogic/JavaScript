
function Employee(FirstName,LastName){
  this.FirstName=FirstName;
  this.LastName=LastName;
  
  this.fullName=function(){
    return this.FirstName" "+this.LastName
  }
};

var emp1=new Employee('Abhi','Khutwad');

console.log(emp1.FirstName);
console.log(emp1.LastName);
console.log(emp1.fullName());


