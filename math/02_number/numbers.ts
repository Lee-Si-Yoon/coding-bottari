// natural number
const 자연수 = [1, 2, 3, 4, 5];

// integer
const 정수 = [-1, 0, 1];

// rational number
// 분수, 끝이 없는 유한소수, 무한소수 중에서 규칙이 있는 소수인 순환소수 -> 어쨋거나 분수로 표현가능
const 유리수 = [1 / 4, 0.1, 2.34, 0.3333333];

// irrational number
// 무한소수 중에서 규칙이 없는 소수인 비순환 소수, 존재하지만 반복도 끝도 없는 수
const 무리수 = [Math.sqrt(2), Math.PI];

// float
// 유리수 + 무리수
const 실수 = [1 / 4, 0.1, Math.sqrt(2), Math.PI];

// complex number
// x ** 2 = -1, x = +-i, x ** 2 = i ** 2, i = Math.sqrt(-1)
// 실수와 제곱하면 -1이 되는 허수 단위 i를 조합해 a+bi(a, b는 실수)형태로 표현하는 수의 집합
// 참고로 Math.sqrt(-1)은 NaN
// TODO
const 복소수 = [];

// quaternion
// 실수와 제곱하면 -1이 되는 세 허수 단위 i, j, k를 조합해 a + bi + cj + dk 형태로 표현하는 수의 집합
// TODO
const 사원수 = [];