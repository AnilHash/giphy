import React from "react";

const Pagination = ({ pageInfo, paginationHandle }) => {
  const { total_count, offset, count } = pageInfo;
  return (
    <div className="pagination">
      <div>
        {offset > 0 && (
          <button onClick={(e) => paginationHandle(-count)}>Prev</button>
        )}
        <button onClick={(e) => paginationHandle(count)}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
