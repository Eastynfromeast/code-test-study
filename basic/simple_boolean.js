/*
    boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
    (x1 ∨ x2) ∧ (x3 ∨ x4)

    예시
    x1	x2	x3	x4	result
    false	true	true	true	true
    true	false	false	false	false

    ∨과 ∧의 진리표
    x	y	x ∨ y	x ∧ y
    T	T	T	T
    T	F	T	F
    F	T	T	F
    F	F	F	F
*/

// 꼼꼼하게 읽지 않고 구글링해버리지 말자 ㅠㅠ
function mySolution(x1, x2, x3, x4) {
	return (x1 || x2) && (x3 || x4);
}
