
import axios from '@/http/api';
/**
 * @description 对axios请求进行封装,实现在一个单独的文件内定义url
 * @param {any} url 请求地址
 * @param {string} [type="post"] 请求方式，默认为post
 * @author wangkai 2018/4/6
 */
const createAjax = (url, type = "post") => (params, callback) => {
    let values = {};
    if (type === "post") {
        values = { 'params': params };
        axios.post(url, values).then(callback);
    } else if (type === "get") {
        values = params;
        axios.get(url, values).then(callback);
    }
}
export default createAjax;