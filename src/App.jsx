import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Question from "./Question";
import Answer from "./Answer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="m-0 p-0">
          <NavBar />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:QuestionId" element={<Question />} />
              <Route path="/:QuestionId/:AnswerId" element={<Answer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
