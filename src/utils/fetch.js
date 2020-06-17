import axios from 'axios'

// cnode
// let baseURL= 'https://cnodejs.org/api/v1'  // 开发环境

// 周杰伦音乐列表
let baseURL = 'http://localhost:8080'  // 解决跨域问题

const fetch=axios.create({
    baseURL:baseURL,
    timeout:7000,
    headers:{
        'Conten-Type':'application/json;charset=UTF-8',
    }
})
// 封装请求拦截器
fetch.interceptors.request.use((config)=>{
    //在这里做一些检测和包装等处理
    console.log('请求拦截',config)
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config
});
// 封装响应拦截器
fetch.interceptors.response.use((response)=>{
    // if(response.code===0){
    //     callbad
    // }
    console.log('响应拦截', response)
    if (response.data && response.data.code==0) {
        return response.data.data
      } else {
        console.log('网络异常，请稍后再试')
      }
},(error)=>{
    return Promise.reject(error)
})
export default fetch