module.exports = {
    register: async(name, pwd) => {
        let data
        if (name === 'yyh123' && pwd === '123456') {
            data = `<h1> Hello ${name}`
        } else {
            data = '<h1> 账号信息错误 </h1>'
        }
         return data;
    }
}

