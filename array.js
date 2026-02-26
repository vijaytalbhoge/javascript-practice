let cartoons = ['Jerry','Tom','Manthan']

console.log(cartoons[0],cartoons[2])
cartoons.push('Vikrant')
console.log(cartoons)

let cartoons2 = cartoons.map(cartoon => cartoon.toUpperCase());
console.log(cartoons2);

let mouse = cartoons.filter(cartoon => cartoon.length > 5 )
console.log(mouse);