---
title: Stack & Que 활용 문제들
date: 2024-04-17T15:37:19.788Z
---

# Stack & Que 활용 문제들

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Valid parantheses](#valid-parantheses)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Que는 단독으로 문제에 잘 안나옴. 만약 문제를 Stack을 써서 풀 수 있다면 LIFO의 특성을 활용한 것

## Valid parantheses

[link](https://leetcode.com/problems/valid-parentheses/description/)

제약조건

$$
\begin{matrix}
1 <= s.length <= 10^4 \\
\end{matrix}
$$

$O(n \log_2 n)$까지는 가능함.

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const p of s) {
    if (p === '(') {
      stack.push(')');
    } else if (p === '{') {
      stack.push('}');
    } else if (p === '[') {
      stack.push(']');
    } else if (stack.pop() !== p) {
      return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};
```
