import React, { Children } from "react";

export default function MenuMultiLevelDropDown({
  items,
  selectedMenus,
  setSelectedMenus,
}) {
  const handleInputChange = (item) => {
    if (!selectedMenus.includes(item)) {
      setSelectedMenus((prev) => [...prev, item]);
    } else {
      setSelectedMenus((prev) => [...prev.filter((elemet) => elemet !== item)]);
    }
  };

  const handleMainInputChange = (item) => {
    let { label, children } = item;
    let selectedIds = children.map((element) => element.label);
    selectedIds.push(label);

    selectedIds.forEach((element) => {
      if (!selectedMenus.includes(element)) {
        setSelectedMenus((prev) => [...prev, element]);
      } else {
        setSelectedMenus((prev) => [
          ...prev.filter((item) => item !== element),
        ]);
      }
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-pills">
              {items.map((item) => (
                <li className="nav-item me-1 btn-group" key={item.id}>
                  <button
                    className={
                      selectedMenus.includes(item.label)
                        ? "btn btn-sm btn-primary btn-active"
                        : "btn btn-sm"
                    }
                    type="button"
                    onClick={() => handleMainInputChange(item)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.label}
                  </button>
                  {item.children && (
                    <button
                      type="button"
                      className={
                        selectedMenus.includes(item.label)
                          ? "btn btn-sm btn-primary btn-active dropdown-toggle dropdown-toggle-split"
                          : "btn btn-sm dropdown-toggle dropdown-toggle-split"
                      }
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                  )}

                  {item.children && (
                    <ul className="dropdown-menu">
                      {item.children.map((children) => (
                        <li key={children.id}>
                          <a
                            className={
                              selectedMenus.includes(children.label)
                                ? "dropdown-item active"
                                : "dropdown-item"
                            }
                            onClick={() => handleInputChange(children.label)}
                          >
                            {children.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
