let users = [];


function getUserInput(id) {
    let name = prompt(`Foydalanuvchi ismingizni kiriting ${id}:`);
    let age = prompt(`Foydalanuvchi yoshingizni kiriting ${id}:`);
    return { id: id, name: name, age: age };
}


for (let i = 1; i <= 10; i++) {
    
    if (i === 5 || i === 6 || i === 7) {
        continue;
    }

    
    let user = getUserInput(i);

    
    users.push(user);
}


users.forEach(user => {
    console.log(`Foydalanuvchi ${user.id}`);
    console.log(`Uni ismi ${user.name}`);
    console.log(`Yoshi ${user.age}`);
});


console.log("\nButun foydalanuvchilar ma'lumotlar bazasi:");
console.log(users);