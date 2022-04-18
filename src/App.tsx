import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const toggledClicked = () => setClicked((prev) => !prev);

  return (
    <>
      <Wrapper onClick={toggledClicked}>
        <Box>
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: "50px" }} />
          ) : null}
        </Box>
        <Box>
          {clicked ? (
            <Circle layoutId="circle" style={{ scale: "1.2" }} />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: 20px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #00a5ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default App;
