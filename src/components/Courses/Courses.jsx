import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleSelect }) => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const getDataFetch = async () => {
      const res = await fetch("./course.json");
      const data = await res.json();
      setCourse(data);
    };
    getDataFetch();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-3 lg:w-3/4">
      {course.map((course, index) => (
        <Course
          handleSelect={handleSelect}
          key={index}
          course={course}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
