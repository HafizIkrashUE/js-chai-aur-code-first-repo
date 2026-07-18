// // ES6
class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changetouppercase(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new User("ikrash","mail@","321");
console.log(user1.encryptpassword());
console.log(user1.changetouppercase());


// behind the scene happening

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());