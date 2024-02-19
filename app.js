function reduction(surname, firstName, patronymic){
    let name = firstName.charAt(0) + ".";
    let abbreviatedPatronymic = patronymic.charAt(0) + "."

    return `${surname} ${name} ${abbreviatedPatronymic}`;
}
console.log(reduction("Николас", "Ким", "Коппола"))



let bookTitle = ['Жизнь взаймы','На Западном фронте без перемен','Гарри Потер и узник Азкабана','451 градус по Фаренгейту','Гроздья гнева','Портрет Дориана Грея','Анна Каренина','Приключения Тома Сойера','Белый клык','Прислуга','Буря мечей','Побег из шоушенко'];
function books(bookTitle){
    let booksWithLetterU = [];
    let otherBooks = [];

    bookTitle.forEach(title => {
        if (title.toLowerCase().includes('у')){
            booksWithLetterU.push(title);
        }else {
            otherBooks.push(title);
        }
    });
    console.log('Книги в названиях где содержится букыу "у" ',  booksWithLetterU)
    console.log('Остальные книги', otherBooks)
}
books(bookTitle)



const users = [
    {name: 'Robert Downey Jr', dateOfBirth: '4 April 1965'},
    {name: 'Sanjay Dutt', dateOfBirth: '29 July 1959'},
    {name: 'Jagathy Sreekumar', dateOfBirth: '5 January 1951'},
    {name: 'Rajendra Prasad', dateOfBirth: '19 July 1956'},
    {name: ' Shah Rukh Khan', dateOfBirth: '2 November 1965'},
    {name: 'Naseeruddin Shah', dateOfBirth: '20 July 1950'},
    {name: 'Mithun Chakraborty', dateOfBirth: '16 June 1950'},
]
    users.forEach(user =>{
    console.log(`-Пользователь ${user.name}, родился ${user.dateOfBirth}`);
})



// числа фибоначи
function generateFibonacci (number){
    const fibonacci = [0,1]
    for (let i =2; i < number; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i-2]
    }
    return console.log(fibonacci)
}
generateFibonacci(20)





function isPalindrome (str){
    const string = str.toLowerCase()

    let stringWithoutSpaces = ``
    for (let i = 0; i < string.length; i++){
        if (string[i] !== ' '){
            stringWithoutSpaces += string[i]
        }
    }
    for (let i =0; i< stringWithoutSpaces.length / 2; i++){
        if (stringWithoutSpaces[i] !== stringWithoutSpaces [stringWithoutSpaces.length -1 -i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome("A man a plan a canal Panama"))
console.log(isPalindrome('hello world'))

// .length -1 получаем последний эллемент

















