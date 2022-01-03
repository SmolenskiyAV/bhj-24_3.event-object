class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    let currentWord = this.wordElement.querySelectorAll('.symbol')
    const currentWordArray = [...currentWord];
    
    document.addEventListener('keydown', (event) => {

      this.pressedSymbol = event.key; // получение символа по нажатию на кнопку клавиатуры
      console.log(this.currentSymbol.innerHTML.toLowerCase());
      console.log(this.pressedSymbol)
      console.log(this.currentSymbol.innerHTML.toLowerCase() === this.pressedSymbol.toLowerCase()) // точка контроля: нажатая кнопка выдаёт символ, равный текущему или нет?
        
      console.log('начало проверки')
      if (this.currentSymbol.innerHTML.toLowerCase() !== this.pressedSymbol.toLowerCase()) {
            
        this.fail()
        console.log('нажата не та клавиша!!!')
        
        } else {
            
            this.currentSymbol.classList.remove('symbol_current'); // удаляем класс "текущий символ" у текущего элемента
          
            if (currentWordArray.indexOf(this.currentSymbol) < currentWord.length -1) {
              currentWord[
              currentWordArray.indexOf(this.currentSymbol) + 1
              ].classList.add('symbol_current'); // присваиваем класс "текущий символ" следующему элементу
              
              //this.currentSymbol.nextElementSibling.classList.add('symbol_current');  ПОЧЕМУ эта строка кода, при замене на неё строк 48-50, после второй проверки слова ВЫДАЁТ ОШИБКУ??? (значение null)
            }

          this.success()

        };
      });
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 2) {  //проверка на два правильно введённых слова
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) { //проверка на пять неправильных введённых символов
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord(); // новое слово

    this.renderWord(word); // перезапись нового слова в элемент 'word'
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length); // случайная выборка слова из массива

    return words[index]; // возвращение(вывод) выбранного слова
  }

  renderWord(word) { // метод посимвольной перезаписи нового слова в элемент 'word'
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>` // заполнение элемента 'word' span-символами, с присвоением первому символу класса 'symbol_current'
      )
      .join(''); // объединение символов массива в единую строку(слово)
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current'); // поиск текущего символа
  }
}

new Game(document.getElementById('game'))

