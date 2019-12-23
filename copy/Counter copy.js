import React, {useState} from 'react';

// useState 1개만
const Counter = () => {
  
  // init
  // 첫번째 인자는 상태값, 두번째 인자는 상태 설정 함수
  const [value, setValue] = useState(0)

  return (
    <div>
      <p> 
        현재 카운터 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value +1)}> +1 </button>
      <button onClick={() => setValue(value -1)}> -1 </button>

    </div>
  );
};

export default Counter;