let mongoose = require('mongoose')
let validate = require('mongoose-validator')


let Validator =  {

 authorValidator: [
 validate({
  validator: 'isLength',
  arguments: [2, 25],
  message: 'Author should be between {ARGS[0]} and {ARGS[1]} characters',
}),
 validate({
  validator: 'isAlphanumeric',
  passIfEmpty: true,
  message: 'Author should contain alpha-numeric characters only',
})
 ],

 emailValidator: [
 validate({
  validator: 'isEmail',
  message: 'Valid email required',
  passIfEmpty: true,
})
 ],

 contentValidator: [
 validate({
  validator: 'isLength',
  arguments: [3, 92],
  message: 'Content should be between {ARGS[0]} and {ARGS[1]} characters',
}),
 validate({
  validator: 'isAlphanumeric',
  passIfEmpty: true,
  message: 'Content should contain alpha-numeric characters only',
})
 ],

 titleValidator: [
 validate({
  validator: 'isLength',
  arguments: [2, 12],
  message: 'Title should be between {ARGS[0]} and {ARGS[1]} characters',
}),
 validate({
  validator: 'isAlphanumeric',
  passIfEmpty: true,
  message: 'Title should contain alpha-numeric characters only',
})
 ],

}

module.exports = Validator;