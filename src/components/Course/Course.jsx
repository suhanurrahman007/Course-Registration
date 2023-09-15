import { FaDollarSign } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

const Course = ({ course, handleSelect }) => {
  const { title, image, description, creditHour, price } = course;
  return (
    <div className="">
      <div className="card transition bg-sky-100 delay-150 duration-300 ease-in-out hover:scale-105 card-compact shadow-xl rounded-lg">
        <figure>
          <img className="w-full h-36" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{title}</h2>
          <p className="text-xs text-gray-500 text-justify">{description}</p>
          <div className="flex justify-between items-center">
            <span className="mr-1">
              <FaDollarSign></FaDollarSign>
            </span>
            <p className="font-bold text-sm">
              Price : <span className="text-gray-600 text-xs">{price}</span>
            </p>
            <span className="mr-2">
              <GiOpenBook></GiOpenBook>
            </span>
            <p className="font-bold text-sm">
              Credit :{" "}
              <span className=" text-xs text-gray-600">
                {creditHour + "hr"}
              </span>
            </p>
          </div>
          <button
            onClick={() => handleSelect(course)}
            className="btn mt-3 bg-blue-900 text-white text-xs  hover:bg-blue-950"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
