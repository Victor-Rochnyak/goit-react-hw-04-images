import React from "react";

export default function ButtonLoadMore({ onClick }) {
  return (
    <div>
      <button className="Button" type="submit" onClick={onClick}>
        load more
      </button>
    </div>
  );
}
