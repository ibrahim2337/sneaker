import { Link } from "react-router-dom";
import errorImg from "../../assets/error/error.png";

const ErrorPage = () => {
  return (
    <div>
      <section className="lg:py-20 py-5 lg:px-60 px-5">
        <div className="container grid lg:grid-cols-2 grid-cols-1 items-center justify-center  mx-auto">
          <div>
            <img className="w-[500px]" src={errorImg} alt="" />
          </div>
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn&apos;t find this page.
            </p>
            <p className="mt-4 mb-8 ">
              But don&lsquo;t worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 bg-gradient-to-r from-[#48B4BB] to-[#63d8e0] font-bold border text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:from-[#63d8e0] hover:to-[#48B4BB] hover:shadow-lg"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
