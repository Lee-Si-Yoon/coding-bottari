// 첫번째 집합의 모든 원소가 빠짐없이 두번째 집합의 어떤 원소에 대응되는 관계

// 1. 첫번째 집합의 모든 원소에 대한 대응관계가 존재해야 함
// 2. 첫번째 집합의 원소는 두번째 집합의 한 원소에만 대응해야 함

// TODO 사원수 때 보충

// 원래 함수 f(x) = x^2
function originalFunction(x: number) {
  return x ** 2;
}

// 합성함수 g(x) = f(f(x))
function compositeFunction(x: number) {
  return originalFunction(originalFunction(x));
}

// 역함수
function inverseFunction(y: number) {
  return Math.sqrt(Math.sqrt(y));
}

// 테스트
console.log(originalFunction(2), 4);
// originalFunction(originalFunction(2)) = originalFunction(4) = 16;
console.log(compositeFunction(2), 16);
console.log(inverseFunction(16), 2);
// (compositeFunction(inverseFunction(16)) = compositeFunction(2) = 16)
console.log(compositeFunction(inverseFunction(16)), 16);