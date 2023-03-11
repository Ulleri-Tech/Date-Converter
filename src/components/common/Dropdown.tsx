import React, { useEffect, useRef } from "react";
import { useState } from "react";

interface DropdownProps {
  options: string[];
  selected?: string;
  onSelect: (option: string) => void;
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selected,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedOptionRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (isOpen && selectedOptionRef.current) {
      selectedOptionRef.current.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }, [isOpen, selectedOptionRef]);

  return (
    <div className="relative" ref={ref}>
      <button
        data-dropdown-toggle="dropdown"
        className="relative z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-24 p-2.5"
        type="button"
        onClick={toggleDropdown}
      >
        {selected ? selected : placeholder}
        <svg
          className="absolute w-4 h-4 transform -translate-y-1/2 right-1 top-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
      </button>

      {isOpen && (
        <div
          id={`dropdown-${placeholder}`}
          className={`z-10 ${
            isOpen ? "" : "hidden"
          } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-24 max-h-36 overflow-y-scroll top-0`}
        >
          <ul
            className="text-sm text-gray-700 "
            aria-labelledby="dropdown-button"
          >
            {options.map((option) => (
              <li
                key={option}
                ref={selected === option ? selectedOptionRef : null}
                className={selected === option ? "bg-blue-100" : ""}
              >
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 focus:outline-none"
                  onClick={() => {
                    handleOptionSelect(String(option));
                    setIsOpen(false);
                  }}
                >
                  <div className="inline-flex items-center">{option}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
