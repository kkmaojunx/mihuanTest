export default class HttpClientUtil {

  /**
   * 请求
   *
   * @param {string} url 完整请求地址
   * @param {string} body 序列化好的请求体
   * @param {{}} extension 扩展参数
   */
  static httpPost(url, body, extension) {

    let options = {
      method: extension.method || "POST",
      headers: extension.headers || {},
      body: body,
      mode: extension.mode || "cors",
      cache: extension.cache || "default",
    };
    let request = fetch(url, options);

    let timeout = extension.timeout || 30000;//超时时间
    let timeoutPromise = new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error("请求超时")), timeout)
    });

    return Promise.race([request, timeoutPromise])
    .then((response) => {
      let status = response.status;
      if (status >= 200 && status < 300) {
        return response;
      } else {
        throw new Error("未知错误");
      }
    })
        .then(response=>{
          return response.json();
        })
    .catch((e) => {
      throw e;
    });
  }
}
