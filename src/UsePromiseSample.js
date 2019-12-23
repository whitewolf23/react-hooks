import React from 'react';
import usePromise from './usePromise'

const wait = () => {
  return new Promise(resolve => setTimeout(() => resolve('Hello hooks!'), 1000))
}

const UsePromiseSample = () => {
  const [loading, resolved, error] = usePromise(wait, []);
  if (loading) return <div>로딩중 .....</div>;
  if (error) return <div>에러 발생 !!!</div>
  if (!resolved) return null;
  return (
    <div>
      {resolved}
    </div>
  );
};

export default UsePromiseSample;