function leftpad(str, len, ch) {
  if (!ch && ch !== 0) ch = ' ';
  var len = len - str.length,
    total = ''
  while (true) {
    // 如果len是基数，total上就加一个ch
    if (len & 1) total += ch;
    if (len == 1) return total + str;
    // 每次ch都变成chch
    ch += ch;
    //长度减半
    len = len >> 1;
  }

}
console.log(leftpad('hello', 10, '0'))
