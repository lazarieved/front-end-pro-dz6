var age = prompt('Введите ваш возраст:');

if (age % 10 > 4 || age % 10 == 0 || age % 100 > 10 && age % 100 < 15) {
    alert(age + ' лет');
} else if(age % 10 == 1) {
    alert(age + ' год');
} else {
    alert(age + ' года');
}