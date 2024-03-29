import React, { useMemo } from "react";
import { useSortBy, useTable, usePagination } from "react-table";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useGlobalFilter } from "react-table/dist/react-table.development";
import GlobalFilter from "./GlobalFilter";

const ReactTable = ({ data, cols, arabicCols }) => {
    const columns = useMemo(
        () =>
            data[0]
                ? Object.keys(data[0])
                      .filter((key) => (cols.includes(key) ? key : null))
                      .map((key) => ({
                          Header: arabicCols[key],
                          accessor: key,
                      }))
                : [],
        [data, cols]
    );

    const isAccepted = (index) => {
        return index >= 1 === 0;
    };

    // const tableHooks = (hooks) => {
    //     hooks.visibleColumns.push((columns) => [
    //         ...columns,
    //         {
    //             id: "edit",
    //             Header: "edit",
    //             Cell: ({ row }) => (
    //                 <BiEdit
    //                     className="bg-green-400 hover:bg-green-500 text-slate-200 w-8 h-8 p-1 rounded-md cursor-pointer "
    //                     onClick={() => alert(row.values.id)}
    //                 />
    //             ),
    //         },
    //         {
    //             id: "delete",
    //             Header: "delete",
    //             Cell: ({ row }) => (
    //                 <BiTrash
    //                     className="bg-red-400 hover:bg-red-500 text-slate-200 w-8 h-8 p-1 rounded-md cursor-pointer "
    //                     onClick={() => alert(row.values.id)}
    //                 />
    //             ),
    //         },
    //     ]);
    // };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        setPageSize,
        prepareRow,
        setGlobalFilter,
        state,
    } = useTable(
        { columns: columns, data: data },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { pageIndex, pageSize } = state;

    return (
        <>
            <GlobalFilter
                setGlobalFilter={setGlobalFilter}
                globalFilter={state.globalFilter}
            />
            <table
                {...getTableProps()}
                className="rounded-t-lg overflow-hidden mx-auto w-full text-center"
            >
                <thead className="bg-slate-700 text-slate-100/90 capitalize">
                    {headerGroups.map((headerGroup, i) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={i}
                            className=""
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                    className="p-2"
                                    key={column.id}
                                >
                                    <span className="p-2  flex justify-center items-center gap-x-2">
                                        {column.render("Header")}
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <span className="text-xs p-0">
                                                    &#x25BC;
                                                </span>
                                            ) : (
                                                <span className="text-xs p-0">
                                                    &#x25B2;
                                                </span>
                                            )
                                        ) : (
                                            ""
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                key={i}
                                className={` text-center ${
                                    !isAccepted(row.avg)
                                        ? "bg-green-200"
                                        : "bg-red-200"
                                }  `}
                            >
                                {row.cells.map((cell, index) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="p-3   text-center"
                                            key={index}
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="max-w-2xl mt-8">
                <div className="flex justify-between flex-row-reverse items-center">
                    <span>
                        صفحة{" "}
                        <strong>
                            {pageIndex + 1} من {pageOptions.length}
                        </strong>{" "}
                    </span>
                    <div className="flex gap-x-3">
                        <button
                            className="bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 text-slate-100/90 p-2 rounded-lg"
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                        >
                            {"<<"}
                        </button>{" "}
                        <button
                            className="bg-slate-700 disabled:bg-slate-400 hover:bg-slate-800 text-slate-100 p-2 rounded-lg"
                            onClick={() => {
                                previousPage();
                            }}
                            disabled={!canPreviousPage}
                        >
                            &#x21E8;
                        </button>
                        <button
                            disabled={!canNextPage}
                            className="bg-slate-700 disabled:bg-slate-400 hover:bg-slate-800 text-slate-100 p-2 rounded-lg"
                            onClick={() => {
                                nextPage();
                            }}
                        >
                            &#x21E6;
                        </button>
                        <button
                            className="bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 text-slate-100/90 p-2 rounded-lg"
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                        >
                            {">>"}
                        </button>{" "}
                    </div>
                    <span>
                        انتقل الى الصفحة :{" "}
                        <input
                            className="appearance-none   bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="number"
                            min={1}
                            max={pageOptions.length}
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0;
                                gotoPage(page);
                            }}
                            style={{ width: "50px" }}
                        />
                    </span>{" "}
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                        className="appearance-none block py-3 bg-gray-200 text-gray-700 border border-gray-200 rounded  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                إعرض {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
};

export default ReactTable;
