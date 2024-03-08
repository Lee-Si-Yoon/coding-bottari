# List

Set과 다른 것은 Set은 순서를 저장하지 않음. List는 순서도 저장함. `[1,2,3]`와 `[3,2,1]`은 서로 다른 리스트. Set은 `set([1,2,3])`과 `set([3,2,1])`은 같은 Set.

## Array list

`[1][2][3]`이 연속되게 저장되어 있는 경우. Array와 Dynamic array 두 종류가 있음.

### Static array

선언시에 size를 정해서 size만큼의 연속된 메모리를 할당받아 데이터를 연속/순차적으로 저장하는 자료구조

```c
int arr[5] =  {1, 2, 3, 4, 5}
```

int형 데이터(4byte) 5개를 저장할 20byte를 미리 할당받음.

## Linked list

`[1] -> [2] -> [3]`이 연속되지 않게 저장되어 있음