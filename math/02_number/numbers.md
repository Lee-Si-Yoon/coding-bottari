# 수의 종류

## 자연수 natural number

```js
const 자연수 = [1, 2, 3, 4, 5];
```

## 정수 integer

```js
const 정수 = [-1, 0, 1];
```

## 분수 rational number

분수, 끝이 없는 유한소수, 무한소수 중에서 규칙이 있는 소수인 순환소수 -> 어쨋거나 분수로 표현가능

```js
const 유리수 = [1 / 4, 0.1, 2.34, 0.3333333];
```

## 무리수 irrational number

무한소수 중에서 규칙이 없는 소수인 비순환 소수, 존재하지만 반복도 끝도 없는 수

```js
const 무리수 = [Math.sqrt(2), Math.PI];
```

## 실수 float

유리수 + 무리수

```js
const 실수 = [1 / 4, 0.1, Math.sqrt(2), Math.PI];
```

## 복소수 complex number

```plain
x * x = -1
x = +-i
x * x = i * i
i = Math.sqrt(-1)
```

실수와 제곱하면 -1이 되는 허수 단위 i를 조합해 a+bi(a, b는 실수)형태로 표현하는 수의 집합

참고로 Math.sqrt(-1)은 NaN

```js
// TODO
const 복소수 = [];
```

## 사원수 quaternion

실수와 제곱하면 -1이 되는 세 허수 단위 i, j, k를 조합해 a + bi + cj + dk 형태로 표현하는 수의 집합

```js
// TODO
const 사원수 = [];
```
