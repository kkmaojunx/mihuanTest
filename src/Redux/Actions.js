import HttpClientUtil from "../utils/HttpClientUtil";
//获取后台数据
export const requestData = (urlArr) => {
    return (dispatch) => {
        let promiseArr = [];
        for (let i = 0; i < urlArr.length; i++) {
            promiseArr.push(HttpClientUtil.httpPost(urlArr[i], null, {method: 'GET'}))
        }
        ;
        Promise.all(promiseArr).then(result => {
            dispatch(getData(result))
        })
    }
}

export const getData = (result) => {
    return {
        type: 'getData',
        value: result
    }
}

//当点击随机抽取按钮时触发的action setKey为要设置的数组，mainArr为主数组。
export const clickRandom = (setKey, mainArrKey) => {
    return {
        type: 'randomOnce',
        setKey: setKey,
        mainArrKey: mainArrKey,
        func: function () {
            const randomValue = Math.floor((Math.random() * 10)) % 3;
            return randomValue;
        }
    }
}

