// 用户可能存在多种请求的功能：登录、退出、获取信息。。。
var user = {
  // login函数用来进行登录接口的调用设置：
  login: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN, // url地址是从config.js中获取的，要学会习惯
      // 用户传入的请求参数
      data: options.data,
      // 用户传入的回调函数
      success: options.callback
      /* 
      // 上面的写法是这种写法的简写：
      success: function (res) {
        options.callback(res);
      } 
      */
    });
  },
  // logout函数用来进行退出接口的调用设置：
  logout: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback
    })
  },

  // getInfo函数用来进行用户的信息获取接口设置：(简单数据2条)
  getInfo: function (options) {
    $.ajax({
      url: USER_INFO,
      success: options.callback
    });
  },

  // info_get函数用来获取用户的详细信息(5条)
  info_get: function (options) {
    $.ajax({
      url: USER_INFO_GET,
      success: options.callback
    });
  },

  info_edit: function (options) {
    $.ajax({
      type: 'post',
      url: USER_INFO_EDIT,
      data: options.data, // 请求发送的是formData
      contentType: false,
      processData: false,
      success: options.callback
    });
  }



};