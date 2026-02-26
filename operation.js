let fruits = ['Mango', 'banana', 'Cherry']

fruits.push('Orange');
console.log(fruits);

fruits.pop('banana');
console.log(fruits);

fruits.shift(); // removes apple / first element
console.log(fruits);

fruits.unshift('apple');
console.log(fruits);

fruits[1] = 'Santra';
console.log(fruits);

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
}
console.log(person.firstName + ' ' + person.lastName);

person.firstName = 'Ganja';
person.lastName = 'Topibaaz';
console.log(person.firstName + ' ' + person.lastName);

delete person.age;

console.log(person)