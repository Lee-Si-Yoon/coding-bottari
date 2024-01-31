# 11 ~ 20

## 11. 배열 두배 만들기

```bash
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
```

| numbers                   | result                     |
| ------------------------- | -------------------------- |
| [1, 2, 3, 4, 5]           | [2, 4, 6, 8, 10]           |
| [1, 2, 100, -99, 1, 2, 3] | [2, 4, 200, -198, 2, 4, 6] |

```js
function solution(numbers) {
  return numbers.map(number => number * 2);
}
```

---

## 12. 문자열 뒤집기

```bash
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
```

| my_string | return  |
| --------- | ------- |
| "jaron"   | "noraj" |
| "bread"   | "daerb" |

```js
function solution(my_string) {
  return Array.from(my_string).reverse().join('');
}
```

---

## 13. 특정 문자 제거하기

```bash
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
```

| my_string | letter | result  |
| --------- | ------ | ------- |
| "abcdef"  | "f"    | "abcde" |
| "BCBdbe"  | "B"    | "Cdbe"  |

```js
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}
function solution2(my_string, letter) {
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
}
```

### [정규 표현식 regex](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---

## 14. 배열의 유사도

```bash
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
```

| s1              | s2                          | result |
| --------------- | --------------------------- | ------ |
| ["a", "b", "c"] | ["com", "b", "d", "p", "c"] | 2      |
| ["n", "omg"]    | ["m", "dot"]                | 0      |

```js
function solution(s1, s2) {
  return s1.filter(v => s2.includes(v)).length;
}
function solutio2(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
} // 교집합 + set은 중복이 없는 점을 이용
```

---

## 15. 가위 바위 보

```bash
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
```

| rsp   | result |
| ----- | ------ |
| "2"   | "0"    |
| "205" | "052"  |

```js
function solution(rsp) {
  let answer = { 0: '5', 2: '0', 5: '2' };
  return Array.from(rsp)
    .map(v => answer[v])
    .join('');
}
```

---

## 16. 배열 회전시키기

```bash
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
```

| numbers                   | direction | result                    |
| ------------------------- | --------- | ------------------------- |
| [1, 2, 3]                 | "right"   | [3, 1, 2]                 |
| [4, 455, 6, 4, -1, 45, 6] | "left"    | [455, 6, 4, -1, 45, 6, 4] |

```js
function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}
```

---

## 17. 외계행성의 나이

```bash
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
```

| age | result |
| --- | ------ |
| 23  | "cd"   |
| 51  | "fb"   |
| 100 | "baa"  |

```js
function solution(age) {
  return (
    Array.from(age.toString())
      // 문자열도 index로 접근 가능
      .map(v => 'abcdefghij'[v])
      .join('')
  );
}
```

---

## 18. 369게임

```bash
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
```

| order | result |
| ----- | ------ |
| 3     | 1      |
| 29423 | 2      |

```js
function solution(order) {
  // order에 3,6,9가 하나도 없을 경우 null 이기에
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}

function solution2(order) {
  const s = new Set('369');
  return order
    .toString()
    .split('')
    .filter(v => s.has(v)).length;
}
```

---

## 19. 중복된 문자 제거

```bash
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
```

| my_string          | result        |
| ------------------ | ------------- |
| "people"           | "peol"        |
| "We are the world" | "We arthwold" |

```js
function solution(my_string) {
  return [...new Set(my_string)].join('');
}
```

### python은 어렵지만 js는 쉬운문제, set의 순서를 보장하는지가 관건

---

## 20. A로 B만들기

```bash
문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
```

| before  | after   | result |
| ------- | ------- | ------ |
| "olleh" | "hello" | 1      |
| "allpe" | "apple" | 0      |

```js
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0;
}
```

### [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)는 [stable sort](https://velog.io/@cookncoding/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B0%9C%EB%85%90-Stable-Sort-Inplace)가 아닐 수 있지만 유니코드 코드 포인트를 따름
