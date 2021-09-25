var num1 = 5430
var num2 = 1
var P = 7

while (num2<=num1){

    if (num2 % P == 0){
    console.log('PI')
	}
    else if ((num2-P)%10 == 0){
    console.log('PI')
	}
    else{
    console.log(num2)
	}
    num2++}  