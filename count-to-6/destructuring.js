let userArr = process.argv.slice(2);

let [userId, username, email, age, firstName, lastName] = userArr;

let result = { username, email };

console.log(result);
