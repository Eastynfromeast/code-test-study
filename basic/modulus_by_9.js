/*
    # 9로 나눈 나머지
    음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
    이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
*/

// 그냥 숫자를 비구조화 할당으로 배열에 담을 수 없음을 배웠다^^
function mySolution(number) {
	let numberArr = [...number.toString()];
	let answer = 0;
	for (let i = 0; i < numberArr.length; i++) {
		answer += parseInt(numberArr[i]);
	}
	return answer % 9;
}

function otehrsSolution(number) {
	var answer = 0;
	for (let i of number) {
		answer += Number(i);
	}
	return answer % 9;
}
