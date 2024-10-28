import { Console, MissionUtils } from '@woowacourse/mission-utils';

function Forward_Judgment() {  // 랜덤 돌리고 결과값 boolean 값으로 반환
  let randNum = MissionUtils.Random.pickNumberInRange(0, 9);
  
  if (randNum >= 4)
    return true;
  else
    return false;
}

function IncreaseCount(decision, cnt) {  // boolean 값으로 cnt 증가시킴
  if (decision === true)
    cnt += 1
  return cnt
}

function DrawForward(car, cnt) {  // 출력 형식 맞추기
  Console.print(car + ' : ' + '-'.repeat(cnt));
  return 0;
}

class App {
  async run() {
    let input_name = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    let input_times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    let forward_cnt = Array.from({ length: input_times }, () => 0);
    
    let car_name = input_name.split(',');

    Console.print("실행 결과");

    for (let i=0; i<input_times; i++) {

      for (let j=0; j<car_name.length; j++) {
        let forward_decision = Forward_Judgment();
        forward_cnt[j] = await IncreaseCount(forward_decision, forward_cnt[j]);
        let tmp = DrawForward(car_name[j], forward_cnt[j]);
      }
      Console.print('');
    }
  }
}

export default App;
