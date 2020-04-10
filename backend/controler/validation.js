const Joi = require("@hapi/joi");

function validateRegister(data) {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(8),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  return schema.validate(data);
}
function ValidationLogin(data){
  const schema = Joi.object({
      email: Joi.string() .min(6) .required() .email(),
      password: Joi.string() .min(6) .required() });
      return  schema.validate(data)
}

module.exports = {
    validateRegister,
    ValidationLogin,
}

