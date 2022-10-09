/*
 * @Description: What's this for
 * @Autor: WangYuan1
 * @Date: 2022-10-09 16:06:18
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-10-09 16:31:32
 */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,PUT,DELETE,FETCH',
        'Access-Control-Allow-Headers': 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization,token,source'
      },    
     }
  }
}
