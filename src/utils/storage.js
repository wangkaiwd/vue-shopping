// 将内容存到localStorage中


export default {
  /**
   * @description 
   * @author (authorName)wk
   * @param {any} k:取出内容的键 
   * @returns  从localStorage中取出的数据
   */
  getItem(k) {
    return JSON.parse(localStorage.getItem(k));
  },
  /**
   * @description 
   * @author (authorName)
   * @param {any} k: 设置内容的键
   * @param {any} val:设置内容的值
   */
  setItem(k, val) {
    if(typeof(val) === 'object') {
      const arr = this.getItem(k) || [];
      arr.push(val);
      const string = JSON.stringify(arr);
      console.log(string);
      return localStorage.setItem(k,string);
    }
    localStorage.setItem(k, val);
  }
}
