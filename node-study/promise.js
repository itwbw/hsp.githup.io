// 异步调用中,回调地狱问题,
setTimeout(() => {
    console.log('江苏省')
}, 1000)
setTimeout(() => {
    console.log('江苏省常州市')
}, 1000)
setTimeout(() => {
    console.log('江苏省常州市武进区')
}, 1000)

//回调中继续调用
setTimeout(() => {
    console.log('江苏省')
    setTimeout(() => {
        console.log('江苏省常州市')
        setTimeout(() => {
            console.log('江苏省常州市武进区')
        }, 1000)
    }, 1000)

}, 1000)

//我们需要将一个异步请求包装成一个promise对象
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('江苏省')
        resolve('江苏省')
    }, 1000)
})
    .then(res => {
        console.log('这里是从第一个任务中传递进来的-------' + res)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(res + '常州市')
                resolve(res + '常州市')
            }, 1000)
        })
    })
    .then(res => {
        console.log('这里是从第一个任务中传递进来的-------' + res)

    })
