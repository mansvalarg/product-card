import { comments } from "./comments.js";

// 2. Создать массив чисел от 1 до 10. 
// Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbersArray = numbersArray.filter((number) => number >= 5);

console.log(newNumbersArray);

// 3. Создать массив строк, относящихся к любой сущности 
// (название фильмов/книг, кухонные приборы, мебель и т.д.), 
// проверить, есть ли в массиве какая-то определенная сущность.

const gunsArray = ["RPG", "M911", "Glock 17", "Desert Eagle", "MP5K", "M4A1"];
const particularGun = gunsArray.includes("M1911");

console.log(particularGun);


// 4. Написать функцию, которая аргументом будет принимать массив и 
// изменять его порядок на противоположный ("переворачивать") . 
// Два вышеуказанных массива с помощью этой функции перевернуть.

function getReversedArray(array) {
  return array.reverse();
}

console.log(getReversedArray(numbersArray));
console.log(getReversedArray(gunsArray));

// Уровень 2:

// 5. Добавить файл comments.js, 
// в нём создать константу и в него поместить первые 10 объектов этого(ссылка) массива. 
// Данный массив представляет собой пример комментариев в соц. сетях, 
// поэтому переменная должна быть названа по смыслу. 
// Не забудьте удалить квадратные кавычки у ключей объектов 
// (можно использовать Chat GPT, что бы не делать это вручную)

// Сделал в файле comments.js

// 6. Сделать константу экспортируемой, 
// добавив перед "const" ключевое слово "export". 
// Таким образом мы сможем внедрить переменную из comments.js в homework-7.js и 
// работать с ней. Когда мы введем название переменной, 
// нам предложит импортировать ее - так и делаем.

// 7. Вывести в консоль массив тех комментариев, 
// почта пользователей которых содержит ".com"

const filteredComComments = comments.filter(comment =>
  comment.email.includes(".com"),
);

console.log(filteredComComments);

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или 
// равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const idComments = comments.map(comment => {
  if (comment.id <= 5) {
    comment.postId = 2;
  } else {
    comment.postId = 1;
  }
  return comment;
});

console.log(idComments);


// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const shortCommentProfile = comments.map(({ id, name }) => ({ id, name }));

console.log(shortCommentProfile);

// 10. Перебираем массив, добавляем объектам свойство isInvalid и 
// проверяем: если длина тела сообщения (body) больше 180 символов - 
// устанавливаем true, меньше - false.

const markedLongComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

console.log(markedLongComments);

// Уровень 3:

// 11. Почитать про метод массива reduce. 
// Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsOnlyArrayReduce = comments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails;
}, []);

console.log(emailsOnlyArrayReduce);

const emailsOnlyArrayMap = comments.map(comment => comment.email);

console.log(emailsOnlyArrayMap);


// 12. Почитать про методы toString(), join() и 
// перебрав массив с задания №11, привести его к строке.

const emails = emailsOnlyArrayMap.join(", ")

console.log(emails);