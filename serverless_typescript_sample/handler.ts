'use strict';

const axios = require('axios')

module.exports.index = async event => {
  //API Gateway プロキシ統合で必要なフォーマット
  const lambda_response_format = {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {"Contente-Type": "application/json", "Access-Control-Allow-Origin": "*"},
    body: ""
  }

  console.log('input event: ', event)
  try {
    await axios.get("https://google.com")
    lambda_response_format.body = JSON.stringify(event)
    return lambda_response_format
  }catch (err){
    const mesage = `ERROR: error:message ${err}`
    lambda_response_format.statusCode = 500
    lambda_response_format.body = mesage
    console.error("err", err)
    return lambda_response_format
  }
}

