import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import LoadMore from "../partials/LoadMore";
import ModalConfirm from "../partials/modals/ModalConfirm";
import ModalDelete from "../partials/modals/ModalDelete";
import Pills from "../partials/Pills";
import { clothes } from "../clothes-data";
import { StoreContext } from "../store/storeContext";
import { setIsAdd, setIsArchive, setIsConfirm, setIsDelete, setIsRestore } from "../store/storeAction";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalArchive from "../partials/modals/ModalArchive";
import ModalRestore from "../partials/modals/ModalRestore";
import Status from "@/components/partials/Status";

const ClothesTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: cloth,
  } = useQueryData(
    `/v2/clothes`, // endpoint
    "get", // method
    "clothes"
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.clothes_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.clothes_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.clothes_aid);
  };

  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={10} cols={4} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {cloth?.count > 0 &&
                cloth.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      {item.clothes_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td>{item.clothes_title}</td>
                    <td>{item.clothes_price}</td>
                    <td>{item.category_title}</td>
                    <td>
                      <ul className="table-action">
                        {item.clothes_is_active ? (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FilePenLine />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <Archive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                className="tooltip"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore />
                              </button>
                            </li>
                            <li>
                              <button
                                className="tool-tip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          mysqlApiDelete={`/v2/clothes/${id}`}
          queryKey={"clothes"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/clothes/active/${id}`}
          queryKey={"clothes"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/clothes/active/${id}`}
          queryKey={"clothes"}
        />
      )}
    </>
  );
};

export default ClothesTable;
