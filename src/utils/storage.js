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
   * @param {boolean} bool:判断是否进行push
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
