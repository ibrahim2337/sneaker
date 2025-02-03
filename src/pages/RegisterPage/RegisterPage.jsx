import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <div className="lg:my-10 my-5">
        <div className="container mx-auto w-11/12 md:w-7/12 lg:w-5/12 p-8 rounded-md sm:p-10 bg-secondary text-neutral bg-gray-100">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
          </div>
          <form
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm" required>
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-3 py-2  rounded-md  text-neutral"
                />
              </div>
              <div>
                <label htmlFor="photo" className="block mb-2 text-sm">
                  Photo Link
                </label>
                <input
                  type="photo"
                  name="photo"
                  id="photo"
                  placeholder="Photo Link"
                  className="w-full px-3 py-2 rounded-md text-neutral"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com  "
                  className="w-full px-3 py-2 rounded-md  text-neutral"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 rounded-md  text-neutral"
                  required
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="confirm" className="text-sm">
                    Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  name="confirm"
                  id="confirm"
                  placeholder="*****"
                  className="w-full px-3 py-2  rounded-md  text-neutral"
                  required
                />
              </div>
            </div>
            <small>
              <p className="text-error mt-2"></p>
            </small>
            <div className="space-y-2 mt-0">
              <div className="flex items-center -mt-8">
                <input
                  type="checkbox"
                  className="checkbox checkbox-neutral rounded cursor-pointer h-4 w-4 mr-2"
                />
                <span className="label-text pb-px">
                  Accept our{" "}
                  <Link className="text-primary hover:underline">
                    terms and conditions
                  </Link>
                </span>
              </div>

              <div className="-mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#48B4BB] to-[#63d8e0] font-bold uppercase border text-white px-8  py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:from-[#63d8e0] hover:to-[#48B4BB] hover:shadow-lg  disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Register
                </button>
              </div>
              <p className="px-6 text-sm text-center text-neutral">
                Already have an account? <br />
                <Link
                  rel="noopener noreferrer"
                  to="/login"
                  className="underline text-sm text-blue-700"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
