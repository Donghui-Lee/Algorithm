/*
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