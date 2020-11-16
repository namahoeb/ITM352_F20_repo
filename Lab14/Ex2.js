const fs = require('fs');

const user_data_filename = 'user_data.json';

// check if file exists before reading
if (fs.existsSync(user_data_filename) ) {


    
    var data = fs.readFileSync(user_data_filename, 'utf-8');
    users_reg_data = JSON.parse(data);
}

if(typeof users_reg_data['itm352'] != 'undefined') {
    console.log(users_reg_data['itm352']['password']=='xxx');
}

console.log(`ERR : ${user_data_filename} does not exist!!!`)

//console.log(users_reg_data, typeof users_reg_data, typeof data);

//console.log(users_reg_data['dport']['password']); // shows password for dport


