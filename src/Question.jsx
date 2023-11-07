import { Link, useParams } from "react-router-dom";
import bridge from "/bridge.jpg";
import entrance from "/entrance.jpg";
import fish from "/fish.jpg";
import flowers from "/flowers.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Question = () => {
  const [data, setData] = useState([]);
  const [ispending, setIsPending] = useState(true);
  const [ispendingData, setIsPendingData] = useState(true);
  const [ispendingQuestion, setIsPendingQuestion] = useState(true);
  const { QuestionId } = useParams();
  const [question, setQuestion] = useState();
  const [questionName, setQuestionName] = useState();
  const [questionDesp , setQuestionDesp] = useState();

  console.log(QuestionId);
  useEffect(() => {
    axios
      .get("https://pick-a-pile-v1.onrender.com/api/v1/" + QuestionId)
      .then((response) => {
        setData(response.data);
        setIsPendingData(false);
        setQuestion(response.data.Question);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    axios
      .get("https://pick-a-pile-v1.onrender.com/api/v1/question/" + QuestionId)
      .then((response) => {
        setQuestionName(response.data.QuestionName);
        setQuestionDesp(response.data.QuestionDesp)
        setIsPendingQuestion(false);
      })
      .catch((err) => console.log(err));

    if (ispendingData && ispendingQuestion) {
      setIsPending(false);
    }
  }, []);
  const photo = [];
  photo[0] = bridge;
  photo[1] = entrance;
  photo[2] = fish;
  photo[3] = flowers;

  const answerPhoto =
    data &&
    data.map((d, index) => (
      <Link to={"/"+d.QuestionId+'/'+d.AnswerId} key={index}>
        <img src={photo[index]} alt="oo" className="question-img" />
      </Link>
    ));

  return (
    <div className="flex justify-center items-center m-0 p-0 overflow-y-auto">
      <div className="p-4">
        
        {!ispending && (
          <>
            <div className="flex justify-center items-center mt-3 mb-2">
              {ispendingQuestion && (
                <h1 className="text-5xl flex items-center justify-center">
                  <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                </h1>
              )}
              {questionName && (
                <>
                <h2 className="text-xl font-medium">{questionName}</h2>
                </>
              )}
            </div>
            <div className="flex justify-center items-center mb-5">
              
              {questionDesp && (
                <>
                <h2 className="text-md font-medium text-center">{questionDesp}</h2>
                </>
              )}
            </div>
            <div className="flex justify-center items-center my-5">
              <h5 className="text-sm font-thin">
                သင်ကြိုက်နှစ်သက်သော ပုံကိုရွေးချယ်ပြီး ကြည့်ရှုပါ။
              </h5>
            </div>

            <div className="flex justify-center items-center mt-3">
              {answerPhoto}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
