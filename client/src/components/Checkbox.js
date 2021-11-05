import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Checkbox({ checked, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="checkbox-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <input
        type="checkbox"
        className="hidden-checkbox"
        checked={checked}
        {...props}
      />
      <div
        className="checkbox"
        style={{
          border: !checked ? "2px solid gray" : "",
          backgroundColor: checked ? "#fcbf49" : "",
        }}
      >
        {!checked && isHovered && (
          <FaCheck style={{ color: "gray", height: 12, width: 12 }} />
        )}
        {checked && (
          <FaCheck style={{ color: "white", height: 12, width: 12 }} />
        )}
      </div>
    </div>
  );
}
