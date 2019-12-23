import React, {useState, useEffect} from 'react';

// useState 다중 
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방합니다.
  useEffect(() => {
    console.log('렌더링이 완료되었습니다. !!!');
    console.log({
      name, nickname
    })
  })

  // 2.1 마운트 될 때만 실행하고 싶을 때
  // 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다.
  useEffect(() => {
    console.log('마운트 될대만 실행한다. ')
  },[]);

  // 특정 값이 업데이트 될 때만 실행하고 싶을 때
  // useEffect 를 사용 할 때 특정 값이 변경이 될 때만 호출하게 하고 싶을 경우도 있을 것입니다.
  useEffect(() => {
    console.log('update name', name)
  }, [name])
  
  
  
  // useEffect 는 기본적으로 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라집니다.

  // 만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 합니다.
  
  // ** 언마운트 직전, 업데이트 되기 직전에 작업 수행 -> 마치 미들웨어 같은 
  // Info 컴포넌트의 useEffect 부분을 다음과 같이 수정해보세요.


  // 렌더링이 될 때마다 뒷정리 함수가 계속 보여지고 있는 것을 확인 할 수 있습니다. 그리고, 뒷정리 함수가 호출 될 때에는 업데이트 되기 직전의 값을 보여주고 있습니다.

  // 컴포넌트가 나타날 때 콘솔에 effect 가 보이고, 사라질 때 cleanup 이 보여지게 됩니다.


  useEffect(() => {
    console.log('effect');
    console.log(name)
    // console.log('effect name', name);
    return () => {
      console.log('cleanUp');
      console.log(name)
      // console.log('cleanUp name', name);
    }
  },[name])


  const onChangeName = e => {
    // useState 두번째 인자와 연동
    setName(e.target.value)
  }

  const onChangeNickname = e => {
    // useState 두번째 인자와 연동
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        {/* useState 첫번째 인자와 연결 */}
        <input value={name} onChange={onChangeName} /> 
        <input value={nickname} onChange={onChangeNickname} /> 
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;