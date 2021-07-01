// 1 написать программу которая выводит приветствие для пользователя(имя и фамилия)
alert("Hello");
var userName = prompt("What is your name?", "userName");
    console.log(userName);
var lastName = prompt("What is your last name?", "lastName");
    console.log(lastName);
var age = prompt("How old are you?", 18);
    alert("You " + age + " old! ")

//2
// var num = 5;
// var num2 = 5;
// if (num === num2){
//   console.log("Equals")
// }else if (num > num2){
//   console.log(num + ">")
// }else {
//   console.log(num + ">")
// }

//3
// var lightController = document.querySelector(".lights");
// var lights = document.querySelectorAll(".change-light");
// function clearLights() {
//   lightController.className = "lights off";
// }
// function handleClick() {
//   // Убирает свет при нажатии любой кнопки
//   clearLights();
  
//   /* Одна функция управляет всеми огнями, прислушиваясь к имя класса внутри каждой кнопки  */
//   if (this.classList.contains("stop")) {
//     lightController.classList.add("stop");
//   } else if (this.classList.contains("slow")) {
//     lightController.classList.add("slow");
//   } else if (this.classList.contains("go")) {
//     lightController.classList.add("go");
//   }
// }
// // Перебирает каждый световой поток и привязывает при щелчке
// lights.forEach(light => {
//   light.addEventListener("click", handleClick);
// });


