'use strict';
var user ={
    name: 'Dima',
    age: 29,
    eat: function () {
        return 'nyami nyami';
    }

};

for (var prop in user){
    if (user.hasOwnProperty(prop)){
        console.log(prop);
    }
}

