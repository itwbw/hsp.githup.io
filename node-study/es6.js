// 解构

let user = {
    username: '张三',
    password: '123',
    eat(){
        console.log('I am eating')
    }
};

let {username,password} = user
console.log(username)
console.log(password)

let [a,...d] = [1,2,3,4];
console.log(a)
console.log(d)

let {eat} = user;
eat()
