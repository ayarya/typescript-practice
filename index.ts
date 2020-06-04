class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Ayush', 'z', 'Arya');

document.body.textContent = greeter(user);

let isDone: boolean = false; //Boolean
let decimal: number = 8; // Number

let fullName: string = 'Ayush Arya'; //String
let sentence: string = `Hello, my name is ${fullName}`;

let sum: number[] = [ 1, 2, 3 ]; // Array
let list: Array<number> = [ 1, 2, 3 ];

let x: [string, number] = [ 'sss', 10 ]; //Tuples

let y: any = 1;

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let nums: any[] = [ 1, 'hh', 2 ];
console.log(nums);

function cat(): void {
	console.log('i am a cat');
}

function create(o: object | null): void {
	console.log('kk');
}
create({ prop: 1 });
