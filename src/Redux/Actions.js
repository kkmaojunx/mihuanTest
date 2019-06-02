import HttpClientUtil from '../utils/HttpClientUtil';

// 获取后台数据
export const getData = result => ({
  type: 'getData',
  value: result,
});
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
export const requestData = urlArr => (dispatch) => {
  const promiseArr = [];
  for (let i = 0; i < urlArr.length; i++) {
    promiseArr.push(HttpClientUtil.httpPost(urlArr[i], null, { method: 'GET' }));
  }

  Promise.all(promiseArr).then((result) => {
    dispatch(getData(result));
  });
};


// 当点击随机抽取按钮时触发的action setKey为要设置的数组，mainArr为主数组。
export const clickRandom = (setKey, mainArrKey) => ({
  type: 'randomOnce',
  setKey,
  mainArrKey,
  func() {
    return Math.floor((Math.random() * 10)) % 3;
  },
});
