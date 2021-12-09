const phone_number = '027778888';

function solution(phone_number) {
  let countStar = phone_number.length - 4;
  let secreatNum = phone_number.slice(-4);
  let star = '*';
  return star.repeat(countStar) + secreatNum;
}

solution(phone_number);
