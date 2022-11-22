function person(age,name) {
    this.age = age;
    this.name = name;
    this.changeAge = function (age) {
        this.age = age;
    }
}
 var p1 = new person(25,"rafi");
 p1.changeAge("19");
  console.log(p1)

 