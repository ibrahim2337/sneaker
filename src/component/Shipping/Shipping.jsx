import { IoAirplaneOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";

const Shipping = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 px-20  justify-center gap-8 py-10">
      <div className="flex items-center gap-8 bg-white shadow-lg p-5 rounded-lg">
        <div className="bg-[#48B4BB] text-white flex justify-center items-center w-16 h-16 rounded-lg -rotate-45">
          <IoAirplaneOutline className="w-8 h-8 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:rotate-40 rotate-45" />
        </div>

        <div>
          <h3 className="text-lg font-bold">Free Shipping</h3>
          <p className="text-gray-600">On orders over 2000+</p>
        </div>
      </div>

      <div className="flex items-center gap-8 bg-white shadow-lg p-5 rounded-lg">
        <div className="bg-[#48B4BB] text-white flex justify-center items-center w-16 h-16 rounded-lg -rotate-45">
          <TbTruckDelivery className="w-8 h-8 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:rotate-40 rotate-45" />
        </div>

        <div>
          <h3 className="text-lg font-bold">Cash On Delivery</h3>
          <p className="text-gray-600"> 100% guarantee</p>
        </div>
      </div>

      <div className="flex items-center gap-8 bg-white shadow-lg p-5 rounded-lg">
        <div className="bg-[#48B4BB] text-white flex justify-center items-center w-16 h-16 rounded-lg -rotate-45">
          <RiCustomerService2Line className="w-8 h-8 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:rotate-40 rotate-45" />
        </div>

        <div>
          <h3 className="text-lg font-bold">Customer Service</h3>
          <p className="text-gray-600">24/7 at 017XX-XXXXXX</p>
        </div>
      </div>

      <div className="flex items-center gap-8 bg-white shadow-lg p-5 rounded-lg">
        <div className="bg-[#48B4BB] text-white flex justify-center items-center w-16 h-16 rounded-lg -rotate-45">
          <GiReturnArrow className="w-8 h-8 transition-transform duration-300 ease-in-out transform hover:scale-150 hover:rotate-40 rotate-45" />
        </div>

        <div>
          <h3 className="text-lg font-bold">Return Policy</h3>
          <p className="text-gray-600">Within 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
