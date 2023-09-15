import "./Bookmark.css";
const Bookmark = ({ courseNames, prices, creditHour, remainingTime }) => {
  return (
    <div className="lg:w-1/4 h-5/6 bg-sky-200  p-5 rounded-lg space-y-3">
      <h2 className="header text-blue-700">
        Credit Hour Remaining : {remainingTime} hr
      </h2>
      <hr />
      <h2 className="header">Course Name</h2>

      {courseNames.map((courseName, index) => (
        
        <p
          key={index}
          className="p-3 bg-sky-950 text-gray-50 text-justify text-xs font-semibold rounded-sm mb-3"
        >
         {index + 1}. {courseName.title}
        </p>
      ))}
      <hr />
      <h2 className="header">Total Credit Hour : {creditHour}</h2>
      <hr />
      <h2 className="header">Total Price : {prices} USD</h2>
    </div>
  );
};

export default Bookmark;
