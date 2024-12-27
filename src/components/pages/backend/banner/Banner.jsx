import { Plus } from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import ModalError from "../partials/modals/ModalError";
import SearchBar from "../partials/SearchBar";
import SideNavigation from "../partials/SideNavigation";
import { setIsAdd } from "../store/storeAction";
import { StoreContext } from "../store/storeContext";
import FoodTable from "./BannerTable";
import ModalAddBanner from "./ModalAddBanner";
import ModalValidation from "../partials/modals/ModalValidation";

const Banner = () => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="banner" />
          <main>
            <Header title="Banner" subtitle="Manage Clothing Banner" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <FoodTable setItemEdit={setItemEdit} itemEdit={itemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.setSuccess && <ToastSuccess />}
      {store.isAdd && (
        <ModalAddBanner itemEdit={itemEdit} setItemEdit={setItemEdit} />
      )}
    </>
  );
};

export default Banner;
