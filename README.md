## Тестирование
Git-pages: https://biryukova-nadezhda.github.io/ahj-hw-4-1/

[![Build status](https://ci.appveyor.com/api/projects/status/cgri0l51qhsx2wil?svg=true)](https://ci.appveyor.com/project/biryukova-nadezhda/ahj-hw-4-1)

---
### Credit Card Validator

#### Легенда

Вам пришла задача: сделать виджет, позволяющий вводить номер карты (можете в качестве общего развития почитать про PCI DSS).

Вам нужно провести исследовательскую работу и выяснить - на базе чего определяется, какой платёжной системе принадлежит определённая карта (не забудьте про "Мир").

#### Описание

Используйте [следующий алгоритм](https://en.wikipedia.org/wiki/Luhn_algorithm) для проверки валидности номера карты.

Изображения для карт необходимо найти самостоятельно (помните, про авторские права и недопустимость нелегального использования). Обычно информацию об использованных изображениях размещают в файле `licenses.txt` и кладут в корень сайта (настройте для этого соответствующим образом Webpack).

Напишите авто-тесты на функции проверки номера карты и принадлежности определённой платёжной системе.

Удостоверьтесь, что всё работает при прогоне тестов в Appveyor.

---
