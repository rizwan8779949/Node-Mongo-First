const Joi = require('@hapi/joi');

module.exports.signup = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required()
});

module.exports.createUser = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  country: Joi.string().optional(),
  state: Joi.string().optional(),
  city: Joi.string().optional(),
  profilePic: Joi.string().optional()
});

module.exports.login = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required()
});