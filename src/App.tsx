import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const gridVars: Variants = {
  hover: (id: string) => ({
    scale: 1.05,
    x: id === "1" || id === "3" ? -6 : 6,
    y: id === "3" || id === "4" ? 5 : -5,
  }),
};

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const buttonVars = {
  tap: { scale: 1.1, color: "#ff815e" },
};

function App() {
  const [id, setId] = useState<string>("");
  const [clickedId, setClickedId] = useState(1);

  const showCircle = () => {
    setClickedId((prev) => prev + 1);
    if (clickedId === 4) return setClickedId(1);
  };

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((boxId) => (
          <Box
            onClick={() => setId(boxId)}
            key={boxId}
            layoutId={boxId}
            custom={boxId}
            variants={gridVars}
            whileHover="hover"
          >
            {+boxId === clickedId ? <Circle layoutId="circle" /> : null}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId("")}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{ width: 350, height: 200, backgroundColor: "#fff" }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button
        onClick={showCircle} //
        variants={buttonVars}
        whileTap="tap"
      >
        Switch!
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Grid = styled.div`
  margin: 0 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 500px;
  gap: 5px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  width: 100px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  color: #8056ff;
  background-color: #fff;
  border-radius: 10px;
  border: none;
`;

export default App;
