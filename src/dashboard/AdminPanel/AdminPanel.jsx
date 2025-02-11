import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-md">
        <h2 className="text-2xl font-bold text-blue-600">Domiex</h2>
        <nav className="mt-5">
          <ul>
            <li className="mb-3">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Dashboard
              </a>
            </li>
            <li className="mb-3">
              <Link
                to="/product-list"
                className="text-gray-700 hover:text-blue-500"
              >
                Products
              </Link>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Orders
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Welcome Back Danny Carroll</h3>
          <p className="text-gray-500">
            You have earned{" "}
            <span className="text-green-500 font-bold">49%</span> more than last
            month.
          </p>
          <div className="mt-4 flex space-x-10">
            <div>
              <p className="text-2xl font-bold">$4878</p>
              <p className="text-gray-500">Today's Sales</p>
            </div>
            <div>
              <p className="text-2xl font-bold">49%</p>
              <p className="text-gray-500">Overall Performance</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-500">Expense</p>
            <p className="text-2xl font-bold">$18,725</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-500">Sales Profit</p>
            <p className="text-2xl font-bold">$25,874</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-500">Net Profit</p>
            <p className="text-2xl font-bold">$245M</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
