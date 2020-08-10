import React from "react";
import "./App.css"

// const Gender = ({ values }) => {
//   // Loop through the array and create a badge-like component instead of a comma-separated string
//   return (
//     <>
//       {values.map((gender, idx) => {
//         return (
//           <span key={idx} className="badge">
//             {gender}
//           </span>
//         );
//       })}
//     </>
//   );
// };


export const columns = [
  {
    Header: 'Name',
    Footer: info => {
      const count = React.useMemo(
        () => info.rows.length,
        [info.rows]
      )

      return `Count: ${count}`
    },
    columns: [
      {
        Header: 'First',
        Footer: <hr />,
        accessor: 'firstName',
        filter: (rows, id, filterType) => rows.filter(row => row.values[id].toLowerCase().startsWith(filterType.toLowerCase())),
      },
      {
        Header: 'Last',
        accessor: 'lastName',
      },
    ],
  },
  {
    Header: 'Information',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
        // Cell: ({ cell: { value } }) => <Gender values={value} />
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
    ],
  },
];
  
  export const data = [
    {
      firstName: 'Ian',
      lastName: 'Harvie',
      age: 31,
      gender: 'M',
      role: 'Comedian',
    },
    {
      firstName: 'Laura',
      lastName: 'Grace',
      age: 36,
      gender: 'M',
      role: 'Musician',
    },
    {
      firstName: 'Angel',
      lastName: 'Haze',
      age: 32,
      gender: 'NB',
      role: 'Musician',
    },
    {
      firstName: 'Laverne',
      lastName: 'Cox',
      age: 33,
      gender: 'F',
      role: 'Actress',
    },
    {
      firstName: 'Indya',
      lastName: 'Moore',
      age: 28,
      gender: 'NB',
      role: 'Actor',
    },
    {
      firstName: 'MJ',
      lastName: 'Rodriguez',
      age: 29,
      gender: 'F',
      role: 'Actress',
    },
    {
      firstName: 'Chaz',
      lastName: 'Bono',
      age: 37,
      gender: 'M',
      role: 'Activist',
    },
    {
      firstName: 'Marsha',
      lastName: 'Johnson',
      age: 41,
      gender: 'F',
      role: 'Activist',
    },
    {
      firstName: 'Kye',
      lastName: 'Allums',
      age: 26,
      gender: 'M',
      role: 'Athlete',
    },
    {
      firstName: 'Janet',
      lastName: 'Mock',
      age: 36,
      gender: 'F',
      role: 'Writer',
    },
  ];
