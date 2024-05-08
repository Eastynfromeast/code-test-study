/*
    배열 만들기 2
    정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

    만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
    
    예시
    l	r	result
    5	555	[5, 50, 55, 500, 505, 550, 555]
    10	20	[-1]
*/
function mySolution(l, r) {
	let result = [];
	for (i = l; i <= r; i++) {
		if ([...String(i)].every(num => num === "0" || num === "5")) {
			result.push(i);
		}
	}
	return result.length > 0 ? result : [-1];
}

function othersSolutionA(l, r) {
	const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(n => !/[^05]/.test(n));
	return result.length ? result : [-1];
}

// 숫자 5로 현혹시켰지만 사실 이건 이진수 문제임.
// (나) 맞다. 그래서 이진수로 풀고 싶었는데 어떻게 하는지를 몰랐다.
function* gen50() {
	let i = 1;

	while (true) {
		yield Number(Number(i).toString(2)) * 5;
		i++;
	}
}
function otherSsolutionB(l, r) {
	const n = gen50();
	let a = 0;
	const arr = [];

	while (a < l) {
		a = n.next().value;
	}
	while (a <= r) {
		arr.push(a);
		a = n.next().value;
	}

	return arr.length ? arr : [-1];
}

/*
    ChatGPT가 알려준 주어진 범위 내 모든 이진수를 담은 배열을 뱉는 함수
*/
function generateAllBinaryInRange(a, b) {
	// 시작 범위(a)보다 끝 범위(b)가 작으면 a와 b를 스왑합니다.
	if (a > b) {
		let temp = a;
		a = b;
		b = temp;
	}

	// 빈 배열 생성
	let binaryArray = [];

	// 주어진 범위 내의 모든 수에 대해 이진수를 생성하여 배열에 추가
	for (let i = a; i <= b; i++) {
		binaryArray.push(i.toString(2)); // 숫자에 toString(2)를 하면 이진수로 바꿔준다
	}

	return binaryArray;
}

// 예시: 2 이상 5 이하의 모든 이진수 배열 생성
console.log(generateAllBinaryInRange(2, 5));
