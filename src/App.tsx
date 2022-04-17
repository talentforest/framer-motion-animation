import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const boxVariants = {
  initial: (back: boolean) => {
    return {
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  leaving: (back: boolean) => {
    return {
      x: back ? 500 : -500,
      opacity: 0,
      scale: 0,
    };
  },
};

function App() {
  // ✅ AnimatePresence는
  // App에서 사라지는 컴포넌트에게 애니메이션 효과를 줄 수 있다.
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const showNext = () => {
    setBack(false);
    setVisible((i) => (i === 10 ? 10 : i + 1));
  };
  const showPrev = () => {
    setBack(true);
    setVisible((i) => (i === 1 ? 1 : i - 1));
  };
  return (
    <Wrapper>
      <button onClick={showNext}>Next</button>
      <button onClick={showPrev}>Prev</button>
      <AnimatePresence exitBeforeEnter custom={back}>
        {/* ✅ exitBeforeEnter 
          엘리먼트 하나의 애니메이션이 완전히 종료된 후에야 다음 요소의 애니메이션이 나오는 속성
          ------
          꼭 배열을 적어주지 않아도 key 속성을 적어주면 
          고유의 성질을 갖게 되기 때문에 키값이 변하면 
          리액트가 새로운 엘리멘트를 생성했다고 인식하고 재랜더링한다. 
          다시 애니메이션이 발동하는 것!. */}
        <Box
          custom={back}
          // ✅ custom
          // custom은 variants에 데이터를 보낼 수 있게 해주는 property다.
          // 데이터를 보내고자 한다면 variant 객체를 리턴하는 함수로 바꿔주어야 한다.
          // 바로 이 함수의 파라미터에 JSX에 쓴 데이터를 전달한다.
          variants={boxVariants}
          initial="initial"
          animate="visible"
          exit="leaving"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
