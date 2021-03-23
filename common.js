// ---------- time ----------

// time stamp to formatTime
function formatTimeStamp(timeStamp, dateDelimiter = '-') {
  let d = new Date(timeStamp),
    year = d.getFullYear(),
    month = fillZero(d.getMonth() + 1),
    day = fillZero(d.getDate()),
    hour = fillZero(d.getHours()),
    minute = fillZero(d.getMinutes()),
    second = fillZero(d.getSeconds());

  return year + dateDelimiter + month + dateDelimiter + day + ' ' + hour + ':' + minute + ':' + second;
}

//  formatTime to time stamp
function toTimeStamp(formatTime) {
  let d = new Date(formatTime);
  return d.getTime();
}

// time fill zero
function fillZero(time) {
  if (time < 10) time = '0' + time;
  return time;
}

// judge leap year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else return year % 400 === 0;
}


// ---------- judge is a number/string ----------

function isNumber(val) {
  return typeof val === 'number';
}

function isString(val) {
  return typeof val === 'string';
}


// ---------- judge class ----------

function classof(val) {
  if (val === null) return "Null";
  if (val === undefined) return "Undefined";
  return Object.prototype.toString.call(val).slice(8, -1);
}


// ---------- clear object data ----------

function clearData(data, boolean = false) {
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