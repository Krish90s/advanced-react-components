import React, { useState } from "react";
import HierarchyList from "../components/HierarchyList";
import { getIds } from "../utils/HierarchyList";

export default function Question1() {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSubmit() {
    let ids = getIds(selectedItems);
    console.log(ids);
  }
  return (
    <div className="p-2">
      <section>
        <h4>Hierarchy List</h4>
      </section>
      <section className="my-2">
        <HierarchyList
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </section>
      <section>
        <button className="btn btn-light btn-sm border" onClick={handleSubmit}>
          Submit
        </button>
      </section>
    </div>
  );
}
