import React, {useState} from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중....');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  }

  const onInsert = e => {
    const nextList = list.concat(parseInt(number))
    setList(nextList);
    setNumber('')
  }

  // 상태에서는 수정할때마다 해당 메소드를 요청 -> 비효율적 -> 최적화 필요
  return (
    <div>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값 :</b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;