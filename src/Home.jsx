import { useEffect, useState } from "react";
import wave from "/wave.jpg";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [ispending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get("https://pick-a-pile-v1.onrender.com/api/v1/all-questions")
      .then((response) => {
        setData(response.data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const cardPerPage = 4;
  const [pageNumber, setPageNumber] = useState(0);

  const pagesVisited = pageNumber * cardPerPage;

  const displayCard =
    data && Array.isArray(data)
      ? data.slice(pagesVisited, pagesVisited + cardPerPage).map((q) => (
          <Link to={"/" + q.QuestionId}>
            <div
              title={q.QuestionName}
              key={q.QuestionId}
              className="2xl:flex-1 xl:flex-1 md:flex-1 lg:flex-1 card p-0"
            >
              <img
                src={wave}
                alt="wave img"
                className="rounded 2xl:h-96 xl:h-96 lg:h-80 md:h-72 object-cover"
              />
              <h5 className="flex items-center justify-center">
                {q.QuestionName.slice(0, 16)} . . .
              </h5>
            </div>
          </Link>
        ))
      : null;

  const pageCount = Math.ceil(data.length / cardPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="home">
      <h2 className="flex justify-center text-xl mb-2 text-center">
        Please Choose what you want to know...
      </h2>
      <h2 className="flex justify-center text-lg text-center px-3">
        ကျေးဇူးပြု၍ သင်သိချင်သော အကြောင်းအရာကို ရွေးချယ်ပါ။
      </h2>
      <div className="2xl:flex xl:flex lg:flex md:flex justify-evenly mt-6">
        {ispending && (
          <h1 className="flex justify-center items-center text-5xl">
            <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          </h1>
        )}
        {data && displayCard}
      </div>
      <div className="flex items-center justify-center mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination-Btn flex space-x-2 justify-center my-4"
          previousLinkClassName="previous-btn bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
          nextLinkClassName="next-btn bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabledClassName="paginationDisable"
          activeClassName="paginationActive"
        />
      </div>
    </div>
  );
};

export default Home;
