/*Функции */
/*
	function funcName(arg1, arg2){
		body;
	}
	Функция создания 5 однотипных блоков
*/
function show5Blocks(){
	for (i = 1; i<=5; i++){
		document.write("<h2> Header "+i+"</h2>")
	}
}
/* Функции с параметрами*/
document.write("<p id='Log'> </p>");
function incAndLog(x){
	x = x+1
	alert("inc x = "+x);
	Log.innerHTML += "<br> inc x = " + x;
}
x = +prompt("Введите значение для x:")
incAndLog(x);
/*Функции с return */
function bankerRound(x){
		if (Math.round(x)%2 == 0){
			return Math.round(x);
		}
		else{
			if( x< Math.round(x))
				return Math.round(x) -1;
			else
				return Math.round(x) + 1;
		}	
}
alert(bankerRound(x));
/*
1.Создайте функцию sayError(), которая будет выводить 
(при помощи диалогового окна alert) сообщение
с текстом «Some error occurred!».
2. Создайте функцию showError(x), которая будет выводить (при помощи диалогового окна alert) сообщение
с текстом «Error X occurred!», где Х — текст из аргумента функции (например, вызов showError(‘Out of
memory’) должен вывести сообщение «Error Out of
memory occurred!»).
3. Создайте функцию createHeaders(N), которая создаст
на странице N заголовков второго уровня (<h2>)
с надписями Header1, Header2 … HeaderN.
4. Создайте функцию checkPassword(x), которая вернет
значение true, если в качестве аргумента в нее будет
передан допустимый пароль (одно из значений «TOP»,
«Web» или «JavaScript»). Иначе функция должна вернуть false.
5. Создайте функцию определения знака числа sign(x),
которая вернет значение –1, если аргумент «х» — отрицательное число, 1 — если положительное, 0 —
если аргумент «х» равен нулю.
6. Предложите имя (согласно правилам именования)
и создайте функцию, которая будет возвращать названия 
дней недели по их номеру: 0-Sunday, 1-Monday,
2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday. пися
*/