var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = new Student('Ayush', 'z', 'Arya');
document.body.textContent = greeter(user);
var isDone = false; //Boolean
var decimal = 8; // Number
var fullName = 'Ayush Arya'; //String
var sentence = "Hello, my name is " + fullName;
var sum = [1, 2, 3]; // Array
var list = [1, 2, 3];
var x = ['sss', 10]; //Tuples
var y = 1;
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var nums = [1, 'hh', 2];
console.log(nums);
function cat() {
    console.log('i am a cat');
}
function create(o) {
    console.log('kk');
}
create({ prop: 1 });
function name2(firstName, lastName) { }
name2('a');
function name3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Sam'; }
}
name2('a');
var cars = ['aa', 'ba', 'dc'];
cars.map(function (car) {
    return car.toLocaleLowerCase();
});
