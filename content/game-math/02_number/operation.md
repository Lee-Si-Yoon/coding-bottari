# 이항연산 binary operation

아래 3가지 성질을 만족하면 닫혀있다 closure

## 1. 교환법칙 communtative law

임의의 두수 a와b를 연산할 때 순서에 관계없이 동일한 결과

```js
const a1 = 2
const b1 = 3

// a + b 와 b + a 의 결과가 같은지 비교
const result1_1 = a1 + b1
const result2_1 = b1 + a1

console.log(result1_1 === result2_1) // true
```

## 2. 결합법칙 associative law

세 원소의 연산 순서를 바꿔도 결과가 같다

```js
const a2 = 2
const b2 = 3
const c2 = 4

// (a + b) + c 와 a + (b + c) 의 결과가 같은지 비교
const result1_2 = a2 + b2 + c2
const result2_2 = a2 + (b2 + c2)

console.log(result1_2 === result2_2) // true
```

## 3. 분배법칙 distributive law

```js
const a3 = 2
const b3 = 3
const c3 = 4

// a * (b + c) 와 (a * b) + (a * c) 의 결과가 같은지 비교 - 좌분배
const result1_3 = a3 * (b3 + c3)
const result2_3 = a3 * b3 + a3 * c3
// a * (b + c) 와 (a * b) + (a * c) 의 결과가 같은지 비교 - 우분배
const result3_3 = (b3 + c3) * a3

console.log(result1_3 === result2_3 && result2_3 === result3_3)
```

## 4. 항등원 Identity

임의의 수와의 연산 결과를 항상 동일한 수로 만들어주는 특별한 수

```js
const r1 = 10
const plusIdentity = 0
const multipleIdentity = 1

console.log(r1 + plusIdentity === r1)
console.log(r1 * multipleIdentity === r1)
```

## 5. 역원 Inverse

임의의 수와 연산결과를 항상 항등원으로 만들어주는 특별한 수

```js
const r2 = 10
const plusInverse = -r2
const multipleInverse = 1 / r2

console.log(r2 + plusInverse === plusIdentity)
console.log(r2 * multipleInverse === multipleIdentity)
```

공리적 집합론에서 두 연산에 대해 11가지 공리를 모두 만족하는 수 집합은 체Field의 구조를 가진다

유리수와 실수와 같이 체의 구조를 가지는 수 집합은 덧셈 곱셈에 안전하고 뺄셈과 나눗셈은 체의 구조를 못지닌다

그렇기에 뺄셈 대신 덧셈의 역원을 사용하고, 나눗셈 대신 곱셈의 역원 사용하게 된다

```js
const r3 = 5
const r4 = 3

console.log(r3 - r4 == r4 - r3) // false
console.log(r3 + -r4 == -r4 + r3) // true

console.log(r3 / r3 == r4 / r3) // false
console.log(r3 * (1 / r4) == (1 / r4) * r3) // true
```
