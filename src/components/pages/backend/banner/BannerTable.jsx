import useQueryData from "@/components/custom-hook/useQueryData";
import Status from "@/components/partials/Status";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import LoadMore from "../partials/LoadMore";
import ModalArchive from "../partials/modals/ModalArchive";
import ModalDelete from "../partials/modals/ModalDelete";
import ModalRestore from "../partials/modals/ModalRestore";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../store/storeAction";
import { StoreContext } from "../store/storeContext";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "@/components/helpers/queryDataInfinite";
import { FaArchive, FaEdit, FaTrash, FaTrashRestoreAlt } from "react-icons/fa";
import Loadmore from "@/components/partials/LoadMore";
import { useInView } from "react-intersection-observer";
import SearchBarWithFilterStatus from "@/components/partials/SearchBarWithFilterStatus";
import TableLoader from "@/components/partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";

const BannerTable = ({ setItemEdit }) => {
  const [id, setIsId] = React.useState("");
  const { store, dispatch } = React.useContext(StoreContext);
  const [isFilter, setIsFilter] = React.useState(false);
  const [onSearch, setOnSearch] = React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState("");
  const search = React.useRef({ value: "" });
  const [page, setPage] = React.useState(1);
  const { ref, inView } = useInView(); // need installation

  let counter = 1;

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["banner", onSearch, isFilter, statusFilter],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        "/v2/banner/search",
        `/v2/banner/page/${pageParam}`,
        isFilter || store.isSearch,
        {
          isFilter,
          statusFilter,
          searchValue: search?.current.value,
          id: "",
        } // payload
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

  // handle

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.banner_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.banner_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.banner_aid);
  };

  return (
    <>
      <div className="mt-5">
        <SearchBarWithFilterStatus
          search={search}
          dispatch={dispatch}
          store={store}
          result={result}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          setIsFilter={setIsFilter}
          setPage={setPage}
        />
      </div>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {/* {isFetchings && !isLoading && <FetchingSpinner />} */}
        <div className="table-wrapper custom-scroll">
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
              {/* LOADING */}
              {(status === "pending" || result?.pages[0].data.length === 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? (
                      <TableLoader cols={2} count={20} />
                    ) : (
                      <IconNoData />
                    )}
                  </td>
                </tr>
              )}
              {/* ERROR */}
              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}
              <></>
              {/* RESULT */}
              {result?.pages.map((page, pagekey) => (
                <React.Fragment key={pagekey}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key} className="group relative cursor-pointer">
                        <td className="text-center">{counter++}.</td>
                        <td>
                          {item.banner_is_active ? (
                            <Status text={"Active"} />
                          ) : (
                            <Status text={"Inactive"} />
                          )}
                        </td>
                        <td>{item.banner_title}</td>
                        <td>{item.banner_excerpt}</td>
                        <td
                          colSpan="100%"
                          className="opacity-0 group-hover:opacity-100"
                        >
                          <div className="flex items-center justify-end gap-3 mr-4">
                            {item.banner_is_active == 1 ? (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Edit"
                                  disabled={isFetching}
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Archive"
                                  disabled={isFetching}
                                  onClick={() => handleArchive(item)}
                                >
                                  <FaArchive />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Restore"
                                  disabled={isFetching}
                                  onClick={() => handleRestore(item)}
                                >
                                  <FaTrashRestoreAlt />
                                </button>
                                <button
                                  type="button"
                                  className="tooltip"
                                  data-tooltip="Delete"
                                  disabled={isFetching}
                                  onClick={() => handleDelete(item)}
                                >
                                  <FaTrash />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <div className="pb-10 text-center flex items-center ">
            <Loadmore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
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
