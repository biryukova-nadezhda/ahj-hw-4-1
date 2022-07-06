export default class Valid {
  constructor(str) {
    this.str = str;
  }

  // Удаляем последний элемент строки
  cutStr() {
    const end = this.str.length - 1;
    const str = this.str.substring(0, end);
    return str;
  }

  // Метод получения массива из строки
  getArr(str) {
    this.name = 'getArr';
    const arr = str.split('');
    return arr;
  }

  // Переворачиваем строку
  reverseStr(arr) {
    this.name = 'reverseStr';
    return arr.reverse();
  }

  // Разделяем массив по четным и нечетным элементам
  separat(arr) {
    this.name = 'separat';
    const oddArr = [];
    const evenArr = [];
    let item;

    for (let i = 0; i < arr.length; i += 1) {
      if (i % 2 === 0) {
        item = arr[i];
        oddArr.push(item);
      } else {
        item = arr[i];
        evenArr.push(item);
      }
    }

    const obj = {
      oddArr,
      evenArr,
    };

    return obj;
  }

  // Метод формирует массив нечетных чисел умноженных
  // на 2 и прошедших проверку на 9
  check(arr) {
    this.name = 'check';
    const oddItemArr = [];

    arr.forEach((el) => {
      let item = el * 2;
      if (item > 9) {
        item -= 9;
        oddItemArr.push(item);
      } else {
        oddItemArr.push(item);
      }
    });

    return oddItemArr;
  }

  // Метод нахождения суммы элементов массива
  getSumArr(arr) {
    this.name = 'getSumArr';
    let sum = 0;
    arr.forEach((el) => {
      const item = Number(el);
      sum += item;
    });
    return sum;
  }

  // Проверка валидности карты
  checkValid(sum) {
    const arrOrigin = this.getArr(this.str);
    const check = Number(arrOrigin[arrOrigin.length - 1]);

    if ((sum + check) % 10 === 0) {
      return true;
    }
    return false;
  }

  start() {
    const cutStr = this.cutStr();
    const arrStr = this.getArr(cutStr);
    const revArr = this.reverseStr(arrStr);
    const { oddArr, evenArr } = this.separat(revArr);
    const oddItemArr = this.check(oddArr);
    const sum = this.getSumArr(oddItemArr) + this.getSumArr(evenArr);
    const result = this.checkValid(sum);
    return result;
  }
}
