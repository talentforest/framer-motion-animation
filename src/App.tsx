import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

function App() {
  const x = useMotionValue(0);
  // ✅ MotionValue는 애니메이션 내 수치를 트래킹할 때 필요하다. 디폴트값은 0
  // 왜 트래킹하냐면 유저가 왼쪽으로 드래깅하는지 오른쪽으로 드래깅하는지 그 방향을 알고 싶을 때 쓴다.
  // 예를 들어 왼쪽, 오른쪽이냐에 따라 배경색이 바뀐다던가 하는 효과를 줄 수 있다.
  console.log(x);
  // ✅ x를 살펴보면 요소를 아무리 움직여 x값을 변하게 해도 콘솔에는 한번만 찍힌다.
  // 왜냐하면 motionValue는 값이 업데이트 되더라도 렌더링 사이클을 발동시키지 않기 때문이다.
  // motionValue는 리액트JS 상태값이 아니다. 그렇기 때문에 컴포넌트가 다시 렌더링되지는 않을 것이다.
  // 값을 계속 추적하지만 react세계에는 존재하지 않는 것이다.
  // 요소를 조금이라도 움직여서 값이 바뀌면 화면렌더링이 발생하는 것은 굉장히 비효율적인 일이기 때문에 현명한 것이다.
  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);
  //이렇게 하면 값이 변하는 것을 살펴볼 수 있따.

  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click Me!</button>
      <Box
        style={{ x }} // 여기서 useMotionValue를 연결한 것이다. 움직일 때마다 x값이 업데이트될 것이다.
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
