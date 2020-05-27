/*
## 요구사항 ##

매일 다른 옷을 조합하여 입어 자신을 위장
의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를  return


## 제한사항 ##
- clothes 의 각 행은 [이름, 종류] 로 이루어져 있음
- 의상의 수는 1 ~ 30개
- 중복이름의 의상 존재 X
- 모든 문자열의 길이는 1 ~ 20, 자연수 또는 알파벳 소문자, '_' 으로 이루어져 있음
- 하루에 최소 한개의 의상을 입음


clothes	                                                                            return
[[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]   	5
[[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]]              	3

*/

function solution(clothes = []) {
  var answer = 1;
  let clothMap = {};

  for (let i = 0; i < clothes.length; i++) {
    const item = clothes[i];
    if (clothMap.hasOwnProperty(item[1])) {
      clothMap[item[1]] = clothMap[item[1]] + 1;
    } else {
      clothMap[item[1]] = 1;
    }
  }

  for (let a in clothMap) {
    answer = answer * (clothMap[a] + 1);
  }

  return answer - 1;
}

function solution2(clothes) {
  let answer = 1;
  const obj = {};
  for (let arr of clothes) {
    obj[arr[1]] = (obj[arr[1]] || 0) + 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}

const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
solution(clothes);

const clothes2 = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
];

console.log(solution(clothes2));
console.log(solution2(clothes2));
