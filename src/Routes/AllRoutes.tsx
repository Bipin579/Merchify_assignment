import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import QuizAttempt from "../Pages/QuizAttempt";
import Result from "../Pages/Result";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attempt" element={<QuizAttempt />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
