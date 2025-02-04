import { Plus } from "lucide-react";
import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/Header";
import ModalError from "../partials/modals/ModalError";
import ModalValidation from "../partials/modals/ModalValidation";
import SideNavigation from "../partials/SideNavigation";
import { setIsAdd } from "../store/storeAction";
import { StoreContext } from "../store/storeContext";
import ClothesTable from "./ClothesTable";
import ModalAddClothes from "./ModalAddClothes";
import ToastSuccess from "../partials/ToastSuccess";

const Clothes = () => {
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
          <SideNavigation menu="clothes" />
          <main>
            <Header title="Clothes" subtitle="Manage Clothing" />
            <div className="p-8">
              <div className="flex justify-between items-center ">
                <div></div>
                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} />
                  Add New
                </button>
              </div>
              <ClothesTable setItemEdit={setItemEdit} itemEdit={itemEdit} />
            </div>
            <Footer />
          </main>
        </div>
      </section>

      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && (
        <ModalAddClothes itemEdit={itemEdit} setItemEdit={setItemEdit} />
      )}
    </>
  );
};

export default Clothes;
