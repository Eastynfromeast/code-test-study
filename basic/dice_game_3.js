/*
    1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

    네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
    세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
    주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
    어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
    네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
    네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

    예시
    a	b	c	d	result
    2	2	2	2	2222
    4	1	4	4	1681
    6	3	3	6	27
    2	5	2	6	30
    6	4	2	5	2
*/

/*
    모두 같은 값이 나올 경우 a==b && b==c && c==d
    세개가 같은 값일 경우  
        (a==b && b==c) || (b==c && c==d) || (c==d && d==a) || (a==b && b==d) || (a==c && c==d)
    두개가 같은 값인 경우 - 같은 값 두개만 나온 경우
        (a==b && c==d) || (a==c && b==d) || (a==d && b==c) 
    두 개가 같은 값이고 나머지 두 개의 값이 다른 경우
        (a==b && c!==d) || (a==c && b!=d) || (a==d && b!=c) || (b==c && a!=d) || (b==d&& a!=c)
    모든 값이 다른 경우
        (a!=b && b!=c && c!=d && d!=a)

    4 2 5 5

*/

function mySolution(a, b, c, d) {
	if (a == b && b == c && c == d) {
		return 1111 * a;
	}

	if (a == b && b == c && d !== a) return (10 * a + d) ** 2;
	if (a == b && b == d && c !== a) return (10 * a + c) ** 2;
	if (a == c && c == d && b !== a) return (10 * a + b) ** 2;
	if (b == c && c == d && a !== b) return (10 * b + a) ** 2;

	if (a == b && c == d) return (a + c) * Math.abs(a - c);
	if (a == c && b == d) return (a + b) * Math.abs(a - b);
	if (a == d && b == c) return (a + b) * Math.abs(a - b);

	if (a == b && c !== d && d !== a) return c * d;
	if (a == c && b !== d && d !== a) return b * d;
	if (a == d && b != c && c !== a) return b * c;
	if (b == c && a != d && d !== b) return a * d;
	if (b == d && a != c && c !== b) return a * c;
	if (c == d && a !== b && b !== c) return a * b;

	return Math.min(a, b, c, d);
}

// 좀 더 간결하고 명확하다.
function othersSolution(a, b, c, d) {
	if (a === b && a === c && a === d) return 1111 * a;

	if (a === b && a === c) return (10 * a + d) ** 2;
	if (a === b && a === d) return (10 * a + c) ** 2;
	if (a === c && a === d) return (10 * a + b) ** 2;
	if (b === c && b === d) return (10 * b + a) ** 2;

	if (a === b && c === d) return (a + c) * Math.abs(a - c);
	if (a === c && b === d) return (a + b) * Math.abs(a - b);
	if (a === d && b === c) return (a + b) * Math.abs(a - b);

	if (a === b) return c * d;
	if (a === c) return b * d;
	if (a === d) return b * c;
	if (b === c) return a * d;
	if (b === d) return a * c;
	if (c === d) return a * b;

	return Math.min(a, b, c, d);
}
