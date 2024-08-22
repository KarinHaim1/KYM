const jwt = require ('jsonwebtoken');
const secret = 'cocacola';

const createToken = (payload) => {
  const token = jwt.sign(payload,secret);
  console.log(token);}

  const verify = token => {
    try{
    const result = jwt.verify (token, secret);
    console.log(result);
    return result;
    } catch (err) {
    console.log(err);}}
// verify(token);

module.exports = {createToken,verify};