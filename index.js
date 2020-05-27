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
=======
    마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
    완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
    마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하
    completion의 길이는 participant의 길이보다 1 작음
    참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있음
    참가자 중에는 동명이인이 있을 수 있음.
    participant	                                completion	                        return
    [leo, kiki, eden]	                        [eden, kiki]	                    leo
    [marina, josipa, nikola, vinko, filipa]	    [josipa, filipa, marina, nikola]	vinko
    [mislav, stanko, mislav, ana]	            [stanko, ana, mislav]	            mislav
    예제 #1
    leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
    예제 #2
    vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
    예제 #3
    mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/


const participant1 = ['leo', 'kiki', 'eden'];
const completion1 = ['eden', 'kiki'];

const participant2 = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion2 = ['josipa', 'filipa', 'marina', 'nikola'];

const participant3 = ['mislav', 'stanko', 'mislav', 'ana'];
const completion3 = ['stanko', 'ana', 'mislav'];

function solution(participants = [], completions = []) {
    const sortedParticipants = participants.sort();
    const sortedCompletions = completions.sort();
    let answer = ''

    sortedParticipants.some(participant => {
        const index = sortedCompletions.indexOf(participant);
        if (index > -1) {
            sortedCompletions.splice(index, 1);
        } else {
            answer = participant;
            return;
        }
    });

    return answer;
}

function solution2(participants = [], completions = []) {
    let answer = '';
    participants.sort();
    completions.sort();

    for (let i = 0; i < participants.length; i++) {
        if (participants[i] !== completions[i]) {
            answer = participants[i];
            break;
        }
    }

    return answer;
}

solution(participant2, completion2);
solution2(participant2, completion2);
