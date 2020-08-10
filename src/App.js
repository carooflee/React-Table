import React, { useState } from "react";
import { useTable, useSortBy, useFilters } from "react-table";
import { columns, data } from "./table";
import styled from "styled-components";
// import 'react-table/react-table.css'
import "./App.css";
// import TableFilter from 'react-table-filter';
// import react-table-filter/lib/styles.css;

//How do I import CSS in react, not working
//How to add search functionality without breaking sort
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(even) {
        background-color: #FFB6C1;
      }
      :nth-child(odd) {
        background-color: #add8e6;
      }
      :nth-child(3n+3){
        background-color: #ffffff;
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function App() {
  const {
    //function to resolve any props needed by the table wrapper
    getTableProps,
    //function to resolve any props needed by the table body wrapper
    getTableBodyProps,
    //internal data structures derived from columns and data
    headerGroups,
    footerGroups,
    rows,
    //function that must be called on any rows to be displayed
    prepareRow,
    setFilter,
    // setFilter
  } = useTable(
    {
      columns,
      data,
      initialState: {
        filters: [
          {
            id: "firstName",
            value: "",
          },
        ],
      },
    },
    useFilters,
    useSortBy
  );

  // Create a state
  let [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    console.log(value);    // setFilter("", value);
    setFilter("firstName", value);
    setFilterInput(value);
  };

  return (
    <div>
      <Styles>
        {
          <form className="form">
            <input
              value={filterInput}
              name="firstName"
              onChange={handleFilterChange}
              type="text"
              placeholder="Search first name"
            />
          </form>
        }


        <table {...getTableProps()}>
        {/* <TableFilter
  rows={data}
  onFilterUpdate={this._filterUpdated}> */}
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? " " : " ") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
       
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {footerGroups.map((group) => (
              <tr {...group.getFooterGroupProps()}>
                {group.headers.map((column) => (
                  <td {...column.getFooterProps()}>
                    {column.Footer && column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </Styles>
    </div>
  );
}

export default App;
