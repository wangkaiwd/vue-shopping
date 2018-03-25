// 将内容存到localStorage中


export default {
  /**
   * @description 从本地存储中获取数据
   * @author wangkai
   * @param {String} k:取出内容的键 
   * @returns  从localStorage中取出的数据
   */
  getItem(k) {
    return JSON.parse(localStorage.getItem(k));
  },
  /**
   * @description 为本地存储设置数据
   * @author wangkai
   * @param {String} k: 设置内容的键
   * @param {boolean || String} val:设置内容的值
   * @param {boolean} bool: bool为true的话为localStorage中已有数组进行push内容，
   * 如果bool为false进行对localStorage中的内容重写旧内容或者重新添加一个新内容
   */
  setItem(k, val,bool) {
    if(typeof(val) === 'object' && bool) {
      const arr = this.getItem(k) || [];
      arr.push(val);
      const string = JSON.stringify(arr);
      return localStorage.setItem(k,string);
    }
    const string = JSON.stringify(val);
    localStorage.setItem(k, string);
  }
}
