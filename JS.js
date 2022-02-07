let input = document.querySelector('#input')
let select = document.querySelector('#select')

let optAll = document.querySelectorAll('.opt')
let option1  = document.querySelector('.option1')

let p = document.querySelector('#p')

let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let cancel = document.querySelector('#cancel')

let gameTimerP = document.querySelector('#timer')


let arr = []


console.log(optAll);  

console.log(select.value);




// Вариация отслеживания выбранного пункта из селекта (версия вторая)

// select.onchange = function() {
        
//   let indexSelected = select.selectedIndex
//   let option = select.querySelectorAll('option')[indexSelected];
      
//   var selectedId = option.getAttribute('id');

//   if( selectedId == '1' &&  arr2.length < selectedId)  {
     
//      console.log(select.value)
//   } 

//   if( selectedId == '2' &&  arr2.length < selectedId )  {
//      console.log(select.value)
//   }
 
//   if( selectedId == '3' &&  arr2.length < selectedId )  {

//     console.log(select.value)
//   }

//   if( selectedId == '4' &&  arr2.length < selectedId )  {

//     console.log(select.value)
//   }

//   if( selectedId == '5' &&  arr2.length < selectedId ) {

//     console.log(select.value)
//   }

//   if( selectedId == '6' &&  arr2.length < selectedId )  {

//     console.log(select.value)
//   }

// };


// Вариация отслеживания выбранного пункта из селекта (версия первая)
  select.addEventListener('change', ()=> {
      console.log(select.value);
})


// Вызов функций с помощью обработчика событий по нажатию на кнопку старт
start.addEventListener('click', ()=> {

        ArrayText()
        gameTimer();

        // Попытка отследить выбранную опцию селекта и сравнить её значение с количеством слов в инпуте
        
        // option.addEventListener('focus', ()=> {

        //     for(let elem of optAll) {
        //         console.log(elem);
            
        //             if(elem.innerHTML == 1) {
        //                 for(let i = 0; i< elem.value; i++) {
        //                     // p.innerHTML = arr;
        //                 }
        //             }
            
        //             if(elem.innerHTML == 2) {
        //                 for(let i = 0; i< elem.value; i++) {
        //                     // p.innerHTML = arr;
        //                     console.log(arr);
        //                 }
        //             }
            
        //             if(elem.innerHTML == 3) {
        //                 for(let i = 0; i< elem.value; i++) {
        //                     // p.innerHTML = arr;
        //                     console.log(arr);
        //                 }
        //             }
            
        //             if(elem.innerHTML == 4) {
        //                 for(let i = 0; i< elem.value; i++) {
        //                     // p.innerHTML = arr;
        //                     console.log(arr);
        //                 }
        //             }
            
        //             if(elem.innerHTML == 5) {
        //                 for(let i = 0; i< elem.value; i++) {
        //                     // p.innerHTML = arr;
        //                     console.log(arr);
        //                 }
        //             }    
             
        //     }
        // })

}) 

// Функция для вытаскивания значений из инпута и заполнения их в тэг "p"
    function ArrayText() {

      arr = [input.value]
      let str = arr.join('')
      let arr2 = []
      arr2 = str.split(' ')

      let arr_start = 0
      let arr_count = arr2.length - 1

      //  Функция на бесконечный цикл по заполнению в тэг "p" значений из инпута последовательно каждую секунду
      function InfinityArrayText() {
          let infinityRecycle = setInterval( ()=> {

            p.textContent += arr2[arr_start] + ' '
            console.log(arr2[arr_start])

            if(arr_start == arr_count) {
              arr_start = 0
            }

            else {
              arr_start++
            }

          },1000)
          // Кнопка стоп для прерывания заполнения элементов массива в тэг "p"
          stop.onclick = ()=> {
            clearInterval(infinityRecycle)
            console.log("Бесконечный цикл прерван")
          }
      }
      
      InfinityArrayText() 
      
      //Вариант заполнения значений из инпута в тэг "p" последоватлельно каждую секунду, но без бесконечного цикла

        // for(let i = 0; i < arr2.length; i++) {
        //   setTimeout( ()=> {
        //       p.textContent += arr2[i] + ' ';
        //       console.log(arr2[i])
        //   },(i+1)*1000)
        // }

    }


   
// Таймер
    function gameTimer(){
        let date = new Date(0,0, 0, 0,0,0,0);
      
        let gameTimerId = setInterval(function(){
          date.setSeconds(date.getSeconds()+1);
          gameTimerP.textContent = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
        }, 1000);

      // Остановка таймера
        function stopTimer(){

          //Узнаем количетсво слов в нашем теге "p"
            let arr = [p.textContent]
            let str = arr.join('');
            let arr2 = str.split(' ')
            let count = arr2.length-1

            clearInterval(gameTimerId);

            gameTimerP.innerHTML = 'Прошло ' + date.getMinutes() + ' минут' + ' ' + date.getSeconds() + ' секунды ' + 'и было показано слов в количестве :' + count + ''
            
        }

        function addZero(n){
          if (n<10){
            return '0'+n;
          } else {
            return ''+n;
          }
        }

        // Кнопка стоп для таймера
        stop.addEventListener('click', ()=> {
          stopTimer();
        });
    

        // Кнопка отмена
        cancel.addEventListener('click', Remove )
      
        function Remove() {
            input.value = '';
            input.focus();
            // option1.setAttribute(select, selected); // Выделение опции с значением 1, при нажатии кнопки отмена(Не рабоатет)
            clearInterval(gameTimerId)
            gameTimerP.textContent = '';
            p.textContent = ''
         }

    }

    
    
   

  