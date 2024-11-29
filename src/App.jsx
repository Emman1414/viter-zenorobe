import React from "react";

const App = () => {
  return (
    <>
      <section className="min-h-screen bg-blue-950 flex justify-center items-center">
        <div className="max-w-[500px] w-full bg-gray-800 rounded-md p-4">
          <h5 className="text-center mb-5">Expense Tracker</h5>
          <div className="flex justify-center divide-x divide-gray-100">
            <div className="text-center basis-1/2">
              <small>Initial Balance</small>
              <h3>10000</h3>
            </div>

            <div className="text-center basis-1/2">
              <small>Total Balance</small>
              <h3>10000</h3>
            </div>
          </div>

          <div className="text-center mt-8">
            <small>Remaining Balance</small>
            <h1 className="text-5xl">0</h1>
          </div>

          <div className="flex justify-between mb-10 px-5">
            <button>Add Balance</button>
            <button>Add Expense</button>
          </div>

          <div className="form-balance p-4 rounded-md border border-gray-200 w-3/4 mx-auto">
            <form action="">
              <label htmlFor="" className="block">
                Balance
              </label>
              <input
                type="text"
                className="px-2 py-1 rounded-md border border-gray-200 text-black w-full outline-none"
              />

              <ul className="flex gap-2 mt-3">
                <li className="basis-1/2">
                  <button className="px-3  py-2 rounded-md bg-red-700 text-white w-full">
                    Set Balance
                  </button>
                </li>
                <li className="basis-1/2">
                  <button className="px-3  py-2 rounded-md bg-gray-500 text-gray-800 w-full">
                    Cancel
                  </button>
                </li>
              </ul>
            </form>
          </div>

          

          <div className="form-balance p-4 rounded-md border border-gray-200 w-3/4 mx-auto">
            <form action="">
              <label htmlFor="" className="block">
                Description
              </label>
              <input
                type="text"
                className="px-2 py-1 rounded-md border border-gray-200 text-black w-full outline-none"
              />


            </form>

            {/* ---------------------------------------------------- */}
            <form action="">
              <label htmlFor="" className="block">
                Amount
              </label>
              <input
                type="text"
                className="px-2 py-1 rounded-md border border-gray-200 text-black w-full outline-none"
              />

              <ul className="flex gap-2 mt-3">
                <li className="basis-1/2">
                  <button className="px-3  py-2 rounded-md bg-red-700 text-white w-full">
                    Add Expense
                  </button>
                </li>
                <li className="basis-1/2">
                  <button className="px-3  py-2 rounded-md bg-gray-500 text-gray-800 w-full">
                    Cancel
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
