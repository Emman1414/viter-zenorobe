import useQueryData from "@/components/custom-hook/useQueryData";
import Status from "@/components/partials/Status";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import LoadMore from "../partials/LoadMore";
import ModalArchive from "../partials/modals/ModalArchive";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalRestore from "../partials/modals/ModalRestore";
import { setIsAdd, setIsArchive, setIsDelete, setIsRestore } from "../store/storeAction";
import { StoreContext } from "../store/storeContext";

const BannerTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setId] = React.useState(null);

  const {
    isLoading,
    isFetching,
    error,
    data: banner,
  } = useQueryData(
    `/v2/banner`, // endpoint
    "get", // method
    "banner"
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setId(item.banner_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setId(item.banner_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setId(item.banner_aid);
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
                <th>Subtitle</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {banner?.count > 0 &&
                banner.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      {item.banner_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td>{item.banner_title}</td>
                    <td>{item.banner_excerpt}</td>
                    <td>
                      <ul className="table-action">
                        {item.banner_is_active ? (
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
          mysqlApiDelete={`/v2/banner/${id}`}
          queryKey={"banner"}
        />
      )}
      {store.isArchive && (
        <ModalArchive
          setIsArchive={setIsArchive}
          mysqlEndpoint={`/v2/banner/active/${id}`}
          queryKey={"banner"}
        />
      )}
      {store.isRestore && (
        <ModalRestore
          setIsRestore={setIsRestore}
          mysqlEndpoint={`/v2/banner/active/${id}`}
          queryKey={"banner"}
        />
      )}
    </>
  );
};

export default BannerTable;
