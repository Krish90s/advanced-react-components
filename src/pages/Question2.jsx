import React, { useState } from "react";
import MenuMultiLevelDropDown from "../components/MenuMultiLevelDropDown";

const items = [
  { id: 1, label: "google", parent_id: null },
  { id: 2, label: "facebook", parent_id: null },
  { id: 3, label: "gmail", parent_id: 1 },
  { id: 4, label: "gdrive", parent_id: 1 },
  { id: 5, label: "whatsapp", parent_id: 2 },
  { id: 6, label: "instagaram", parent_id: 2 },
];

const buildTree = (items, parentId = null) => {
  const result = [];
  for (const item of items.filter((item) => item.parent_id === parentId)) {
    const children = buildTree(items, item.id);
    if (children.length > 0) {
      item.children = children;
    }
    result.push(item);
  }
  return result;
};

const nestedItems = buildTree(items);

console.log("nestedItems", nestedItems);

export default function () {
  const [selectedMenus, setSelectedMenus] = useState([]);

  return (
    <div>
      <MenuMultiLevelDropDown
        items={nestedItems}
        selectedMenus={selectedMenus}
        setSelectedMenus={setSelectedMenus}
      />
      <section className="p-2">
        {selectedMenus.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </section>
    </div>
  );
}
