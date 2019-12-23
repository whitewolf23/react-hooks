import React, {useReducer} from 'react';


// 불변성을 지키면서 업데이트한 새로운 상태를 반환합니다
function reducer (state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    default: 
      return state;
  }
}



// useState 1개만
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value : 0})

  return(
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
    </div>
  )
  
};

export default Counter;