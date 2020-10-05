age_count=1; // start age counter
my_age=19;


while(age_count < my_age){
    if(age_count > my_age/2) {
        console.log("Don't ask how old I am!");
        process.exit(); //exiting node
    } else {
        console.log(`age ${age_count}`);
    }

    
    age_count++;

}

console.log('Brandy is ' + age_count + ' years old.');