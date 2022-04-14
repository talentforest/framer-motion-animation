import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "#333", transition: { duration: 2 } },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null); // typescript에게 이 ref는 div요소라고 알려줌
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          variants={boxVariants}
          whileHover="hover" // 마우스가 위에 있는 동안
          whileTap="tap" // 마우스를 클릭하고(누르고) 있는 동안
          drag // x: 가로선만 움직이도록 락 y: 세로선만 움직이도록 락
          dragSnapToOrigin //다른 위치로 끌었더라도 마우스를 놓으면 다시 원위치로 오게 됨.
          dragElastic={0.5} // 1은 그냥 밖으로 마우스 포인터를 따라감. 내려갈수록 마우스 포인터에 맞지 않게 끌려감. 0은 원래대로 부모요소 밖을 벗어나지 않음.
          dragConstraints={biggerBoxRef} // 최대 어디까지 움직일 수 있는지 거리 조정해줌. 만약 부모요소 안에서만 움직여야 한다면 ref를 이용해 지정해준 다음 이 ref를 넣어주면 된다.
          whileDrag="drag" // 마우스로 드래그하는 동안
          // ✅ 색상값을 string이 아니라 숫자형으로 적어줘야 애니메이션이 잘 변화됨.
          // "black" (x) "#000" (o)
        />
      </BiggerBox>
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

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
