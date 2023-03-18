import React, { useState } from "react";

const flatTable = [
  { id: 1, label: "google", parent_id: null },
  { id: 2, label: "gmail", parent_id: 1 },
  { id: 3, label: "maps", parent_id: 1 },
  { id: 4, label: "drive", parent_id: 1 },
  { id: 5, label: "inbox", parent_id: 2 },
  { id: 6, label: "spam", parent_id: 2 },
  { id: 7, label: "trash", parent_id: 2 },
  { id: 8, label: "photos", parent_id: 4 },
  { id: 9, label: "sheets", parent_id: 4 },
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

const nestedItems = buildTree(flatTable);

const TreeNode = ({ item, onItemChange }) => {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  function handleItemChange(e) {
    onItemChange(item, e.target.checked);
  }

  return (
    <li className="list-group-item">
      <span
        style={{
          cursor: "pointer",
          visibility:
            item.children && item.children.length > 0 ? "visible" : "hidden",
        }}
        onClick={toggleExpanded}
      >
        {expanded ? "-" : "+"}&nbsp;
      </span>
      <input
        className="me-2"
        type="checkbox"
        value={item.id}
        checked={item.selected || false}
        onChange={handleItemChange}
      />
      <label>{item.label}</label>
      {item.children && item.children.length > 0 && (
        <ul
          className="list-group"
          style={{ display: expanded ? "block" : "none" }}
        >
          {item.children.map((child) => (
            <TreeNode key={child.id} item={child} onItemChange={onItemChange} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Tree = ({ items, selectedItems, setSelectedItems }) => {
  function handleItemChange(item, checked) {
    const updatedItems = updateItemSelection(item, checked);
    setSelectedItems(updatedItems);
  }

  function updateItemSelection(item, checked) {
    item.selected = checked;
    if (item.children && item.children.length > 0) {
      item.children.forEach((child) => {
        child.selected = checked;
        updateItemSelection(child, checked);
      });
    }
    const updatedItems = [...selectedItems.filter((i) => i.id !== item.id)];
    if (checked) {
      updatedItems.push(item);
    }
    return updatedItems;
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <TreeNode key={item.id} item={item} onItemChange={handleItemChange} />
      ))}
    </ul>
  );
};

export default function HierarchyList({ selectedItems, setSelectedItems }) {
  return (
    <div>
      <button
        className="btn btn-sm btn-primary my-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Hierarchy List
      </button>
      <div className="collapse" id="collapseExample">
        <Tree
          items={nestedItems}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </div>
  );
}
