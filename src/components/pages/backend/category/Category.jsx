import { Plus } from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import ModalError from "../partials/modals/ModalError";

import SearchBar from "../partials/SearchBar";
import SideNavigation from "../partials/SideNavigation";

import CategoryTable from "./CategoryTable";
import ModalAddCategory from "./ModalAddCategory";
import { StoreContext } from "../store/storeContext";
import { setIsAdd } from "../store/storeAction";
import ModalValidation from "../partials/modals/ModalValidation";
import ToastSuccess from "../partials/ToastSuccess";

const Category = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [isCategoryEdit, setIsCategoryEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setIsCategoryEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="category" />
          <main>
            <Header title="Category" subtitle="Manage Clothing Category" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <CategoryTable
                setIsCategoryEdit={setIsCategoryEdit}
                isCategoryEdit={isCategoryEdit}
              />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {/* <SpinnerWindow /> */}

      {store.isAdd && (
        <ModalAddCategory
          setIsCategoryEdit={setIsCategoryEdit}
          isCategoryEdit={isCategoryEdit}
        />
      )}
    </>
  );
};

export default Category;
