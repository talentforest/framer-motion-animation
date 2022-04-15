import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  // ✅ useTransform
  // 위와 같은 x값이 첫번째 인자,
  // 적용할 x값의 제한 범위(input)를 두번째 인자,
  // 그 각각의 제한 범위에서 받고 싶은 출력값(output)이 세번째 인자.
  // 당연히 input과 output의 아이템 개수는 같아야 한다.

  useEffect(() => {
    scale.onChange(() => console.log(scale.get()));
  }, [scale]);

  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click Me!</button>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
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
