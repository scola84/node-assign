'use strict';

function isObject(value) {
  return Boolean(value) &&
    value.constructor.toString().match(/object/i);
}

function assign(target, values) {
  target = Object(target);

  if (!isObject(values)) {
    return target;
  }

  Object.keys(values).forEach((key) => {
    if (isObject(values[key]) && isObject(target[key])) {
      target[key] = assign(target[key], values[key]);
    } else {
      target[key] = values[key];
    }
  });

  return target;
}

module.exports = assign;
