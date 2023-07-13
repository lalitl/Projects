import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem}) => {
  return (
    <div className="items">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="single-item">
            <p>{title}</p>
            <button type="button" className="edit-btn" onClick={() => editItem(id)}>
              <FaEdit />
            </button>
            <button type="button" onClick={()=>removeItem(id)}>
              <FaTrash />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
