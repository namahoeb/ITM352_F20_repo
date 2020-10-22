/*attributes = "Brandy Namahoe;54;Accounting";
parts = attributes.split(';');

console.log(parts);
*/

/*
name = "Brandy";
age = 19;
attributes  =  name + ";" + age + ";" + (age + 0.5) + ";" +  (0.5 - age);
parts = attributes.split(';');

for(part of parts) {

console.log(typeof parts);

}
*/

/*attributes = "Brandy Namahoe;54;Accounting";
parts = attributes.split(';');

console.log(parts);
*/

/*
name = "Brandy";
age = 19;
attributes  =  name + ";" + age + ";" + (age + 0.5) + ";" +  (0.5 - age);
parts = attributes.split(';');

for(part of parts) {

console.log(`${part} is a ${typeof part}`);

}
console.log(typeof parts);
*/

/*
name = "Brandy";
age = 19;
attributes  =  name + ";" + age + ";" + (age + 0.5) + ";" +  (0.5 - age);
parts = attributes.split(';');

for(i in parts) {

    parts[i] = `${typeof parts[i]} ${parts[i]}`;

//console.log(`${i} is a ${typeof parts[i]} ${parts[i]}`);

}
console.log(parts.join(","));
*/


name = "Brandy";
age = 19;
attributes  =  name + ";" + age + ";" + (age + 0.5) + ";" +  (0.5 - age);
parts = attributes.split(';');



for(part of parts) {

console.log(`${part} is a ${typeof parts}`);

}




name = "Brandy";
age = 19;
attributes  =  name + ";" + age + ";" + (age + 0.5) + ";" +  (0.5 - age);
parts = attributes.split(';');

for(i in parts) {

    parts[i] = `${typeof parts[i]} ${parts[i]}`;

}
console.log(parts.join(","));
