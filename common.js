
// -------------------- time part --------------------

// timestamp to format time
function toFormatTime(timestamp, dateDelimiter = '-') {
  let d = new Date(timestamp),
    year = d.getFullYear(),
    month = fillZero(d.getMonth() + 1),
    day = fillZero(d.getDate()),
    hour = fillZero(d.getHours()),
    minute = fillZero(d.getMinutes()),
    second = fillZero(d.getSeconds());

  return year + dateDelimiter + month + dateDelimiter + day + ' ' + hour + ':' + minute + ':' + second;
}

//  format time to timestamp
function toTimestamp(formatTime) {
  let d = new Date(formatTime);
  return d.getTime();
}

// time fill zero
function fillZero(time) {
  if (time < 10) time = '0' + time;
  return time;
}

// judge is the leap year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return year % 400 === 0;
  }
}


// -------------------- number part --------------------

// get random number (from ... to ...)
function getRandomNumber(start, end) {
  return Math.round(Math.random()*(end - start) + start);
}

// calculate the number (not user eval())
function calculate(num1, num2, operator) {
  let f1 = getFloatNumber(num1),
    f2 = getFloatNumber(num2),
    allFloatNumber = f1 + f2;
  num1 = f1 ? num1 * Math.pow(10, f1) : num1;
  num2 = f2 ? num2 * Math.pow(10, f2) : num2;
  switch (operator) {
    case '+':
      return (Number(num1) + Number(num2)) / Math.pow(10, allFloatNumber);
    case '-':
      return (num1 - num2) / Math.pow(10, allFloatNumber);
    case '*':
      return (num1 * num2) / Math.pow(10, allFloatNumber);
    case '/':
      return (num1 / num2) / Math.pow(10, allFloatNumber);
  }
}

// get the float number of number
function getFloatNumber(num) {
  let str = num.toString();
  if (str.indexOf('.') > -1) return str.substring(str.indexOf('.') + 1).length;
  return 0;
}


// -------------------- type part --------------------

// judge the value is a number
function isNumber(val) {
  return typeof val === 'number';
}

// judge the value is a string
function isString(val) {
  return typeof val === 'string';
}

//  judge the type of value
function classof(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}


// -------------------- data part --------------------

// clear form data
function clearFormData(data, boolean = false) {
  for (let x in data) {
    let type = typeof data[x];
    switch (type) {
      case 'number':
        data[x] = 0;
        break;
      case 'string':
        data[x] = '';
        break;
      case 'boolean':
        data[x] = boolean;
        break;
      case 'object':
        if (Array.isArray(data[x])) {
          data[x] = [];
        } else {
          data[x] = {};
        }
        break;
    }
  }
  return data;
}


// -------------------- url part --------------------

// get the parameters in the url
function getUrlParameter(url, key) {
  let pattern = new RegExp(key + "=(.+?)(&|$)");
  return url.match(pattern)[1];
}


// -------------------- verify part --------------------

// verify phone number
function isPhoneNumber(val) {
  let pattern = /^1[3-9]\d{9}$/;
  return pattern.test(val)
}
