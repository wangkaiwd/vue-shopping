import Mock from 'mockjs';

// 首页api
const index = {};
index.swiperData = Mock.mock('http://api.com/index/swiper', {
  // mock图片参数：size,background,foreground（前景色：文字颜色）,format(图片格式'png','jpg','gif'),text(图片文字)
  // text不写的话默认为size
  'swiperList|4': [{
    'id|+1': 1,
    'imgPath': '@image("800x400","#04a1f7","#FFF","jpg","")',
  }]
});

index.section1Data = Mock.mock('http://api.com/index/section1',{
  'section1List|4':[{
    'id|+1': 1,
    'imgPath': '@image("400x400","#b7ddf2","#333","jpg","")',
  }],
  'banner':'@image("400x100","#b97cc9","#FFF","jpg","1-banner")'
})
export default index;