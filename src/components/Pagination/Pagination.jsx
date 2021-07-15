import React from 'react'
import "./Pagination.css"

// Creates number Row that allows you to change item pages 

function Pagination({ itemsPerPage, totalItems, paginate }) {
  // create empty array 


  let pageNum = []
  // loop through totalItems divided by itemsPerPage *round up
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    //push i into pageNum
    pageNum.push(i)
  }

  return (
    <nav className="pagination">
      {pageNum.map(number => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="/store" className="numbers">
            {number}
          </a>
        </li>
  ))}
    </nav>
  )
}

export default Pagination
