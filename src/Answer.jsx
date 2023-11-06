import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Answer = () => {
  const { QuestionId } = useParams();
  const { AnswerId } = useParams();
  const [answerDesp, setAnswerDesp] = useState();
  const [pileNo, setPileNo] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://pick-a-pile-v1.onrender.com/api/v1/" +
          QuestionId +
          "/" +
          AnswerId
      )
      .then((response) => {
        setAnswerDesp(response.data.AnswerDesp);
        setPileNo(response.data.AnswerName);
        setIsPending(false)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <>
    { isPending && <h1 className="text-4xl flex items-center justify-center mt-32"> <i class="fa-solid fa-spinner fa-spin-pulse"></i>  </h1>}
      {pileNo && (
        <div className="flex items-center justify-center text-3xl mt-14">{pileNo}</div>
      )}

      {answerDesp && (
        <div className="flex items-center justify-center text-xl p-10">{answerDesp}</div>
      )}
    </>

  );
};

export default Answer;
