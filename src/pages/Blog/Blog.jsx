import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <Link
        rel="noopener noreferrer"
        to="/"
        className=" px-8 py-3 bg-gradient-to-r from-[#48B4BB] to-[#63d8e0] font-bold border text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:from-[#63d8e0] hover:to-[#48B4BB] hover:shadow-lg"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default Blog;
