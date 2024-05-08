/*
    수열과 구간 쿼리 4
    정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
    각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

    위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
*/
function mySolution(arr, queries) {
	queries.forEach(function ([s, e, k]) {
		for (let i = s; i <= e; i++) {
			if (i % k === 0) {
				arr.splice(i, 1, arr[i] + 1);
			}
		}
	});
	return arr;
}

function othersSolution(arr, queries) {
	for (let [s, e, k] of queries) {
		for (let i = s; i <= e; i++) {
			if (i % k === 0) arr[i]++;
		}
	}
	return arr;
}
