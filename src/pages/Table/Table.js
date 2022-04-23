import React, { useEffect, useState } from 'react';
import './Table.css';


const Table = ({items}) => {


  console.log(items)
  return (
    <div className="table">
      {!items.length  ?  <h2>No urls Created</h2> : ( <table>
        <thead>
          <tr>
            <th>Long URL </th>
            <th>Short URL </th>
            <th>Clicks </th>
          </tr>
        </thead>
        <tbody>
          {items.map((elem, i) => (
            <tr className="table__body" key={i}>
              {console.log(elem.clicks, elem.longURL, elem.shortURL)}
              <td>
                <a href={elem.longURL}>{elem.longURL}</a>
              </td>
              <td>
                {' '}
                <a href={process.env.REACT_APP_BASE_URL+"/redirect/"+elem.shortURL}>{elem.shortURL}</a>
              </td>
              <td>{elem.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
     
    </div>
  );
};

export default Table;
