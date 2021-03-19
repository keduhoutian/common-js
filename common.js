// ---------- TIME ----------

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

// Judge leap year
function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else return year % 400 === 0;
}



// ---------- JUDGE TYPE ----------
