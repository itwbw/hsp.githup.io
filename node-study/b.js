let user = {
    usernmae: '张三',
    password: '123422',
    login(){
        console.log('login success!')
    }
}

//b.js 需要导出
export default user;
export let a= 'xxx';
export let b= 'xxx';
export let c= 'xxx';