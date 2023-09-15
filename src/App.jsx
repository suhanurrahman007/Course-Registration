import { useState } from "react";
import "./App.css";
import Bookmark from "./components/Bookmark/Bookmark";
import Courses from "./components/Courses/Courses";
import swal from "sweetalert";

function App() {
  const [courseNames, setCourseName] = useState([]);
  const [prices, setPrices] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingTime, setRemainingTime] = useState(20);

  const handleSelect = (course) => {
    const isExist = courseNames.find((name) => name.id === course.id);
    const newCourse = [...courseNames, course];

    const totalPrices = prices + course.price;
    const tatalCreditHour = creditHour + course.creditHour;
    const totalRemainingTime = remainingTime - course.creditHour;

    if (isExist) {

      return swal("Oops!", "This course is already added!", "error");

    } else if (tatalCreditHour > 20 || totalRemainingTime < 0) {

      return swal(
        "Sorry!",
        "You've exceeded the credit hour limit or don't have enough remaining time!",
        "error"
      );

    } else if (totalPrices >= 3000) {

      return swal(
        "Hold on!",
        "You've reached the maximum allowable course price!",
        "error"
      );

    } else {

      setCourseName(newCourse);
      setPrices(totalPrices);
      setCreditHour(tatalCreditHour);
      setRemainingTime(totalRemainingTime);
    }
  };

  return (
    <>
      <div className="p-7 lg:px-14 py-5 space-y-5">
        <h2 className="text-3xl font-extrabold text-center">
          Course Registration
        </h2>
        <div className="lg:flex justify-center space-y-5 lg:space-y-0 lg:space-x-5">
          <Courses handleSelect={handleSelect}></Courses>
          <Bookmark
            courseNames={courseNames}
            prices={prices}
            creditHour={creditHour}
            remainingTime={remainingTime}
          ></Bookmark>
        </div>
      </div>
    </>
  );
}

export default App;
