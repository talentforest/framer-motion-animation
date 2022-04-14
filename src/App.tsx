import styled from "styled-components";
import { motion } from "framer-motion";

const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      damping: 10,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box
        variants={myVars}
        initial="start"
        animate="end"
        //variant는 일종의 애니메이션 스테이지,
        //initial 초기상태부터 finish 종료상태까지 모든 속성을 넣을 수 있다.
        //initial, animate(finish)에 객체 키값을 적어주면 된다.
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
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
