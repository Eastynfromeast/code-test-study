/*
    카운트 업
    정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/
// 아주 전형적인 나의 답
function mySolution(start_num, end_num) {
	let answer = [];
	for (let i = start_num; i <= end_num; i++) {
		answer.push(i);
	}
	return answer;
}

function othersSolution(start, end) {
	return Array(end - start + 1)
		.fill(start)
		.map((x, idx) => x + idx);
}
