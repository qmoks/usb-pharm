var f = document.querySelector('form')

f.addEventListener('submit', function(e) {
  e.preventDefault();
  var data = new FormData(this) // Сборка формы
  var url = 'https://jsonplaceholder.typicode.com/posts'
  fetch(url, {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: data // Отправка самой формы
    })
    .then(response => response.json())
    .then((json) => { // Ответ
      if (json.id === 101) { // Для примера проверка пройдена если id === 101
        // Добавление поля
        var info = document.querySelector('.info')
        info.innerText = 'Удачно Отправлено'
      }
      // Дебаг узнать что прошла форма
      console.log(json)
    })
    .catch(err => console.log(err));
})
