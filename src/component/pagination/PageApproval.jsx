import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const PageApproval = ({ pages, setPage, dataApproval, currentPage }) => {
  const numberOfPages = [];
  //setNumber pages
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  //set active
  const [currentButtons, setCurrenButtons] = useState(1);

  useEffect(() => {
    setPage(currentButtons);
  }, [currentButtons, setPage]);

  // console.log(currentButtons);
  return (
    <Pagination>
      <Pagination.Prev
        className={`${currentButtons === 1 ? "disabled" : ""}`}
        onClick={() =>
          setCurrenButtons((prev) => (prev === 1 ? prev : prev - 1))
        }
      />
      {numberOfPages.map((i, key) => {
        return (
          <Pagination.Item
            key={key}
            className={`${currentButtons === i ? "active" : ""}`}
            onClick={() => setCurrenButtons(i)}
          >
            {i}
          </Pagination.Item>
        )
      })}
      <Pagination.Next
        className={`${
          currentButtons === numberOfPages.length ? "disabled" : ""
        }`}
        onClick={() =>
          setCurrenButtons((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }
      />
    </Pagination>
  );
};

export default PageApproval;
