import React from "react";

export const ImportanceSelect = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="중요도 ⭐️">중요도 ⭐️</option>
      <option value="중요도 🌟">중요도 🌟</option>
      <option value="중요도 ✨">중요도 ✨</option>
      <option value="중요도 💫">중요도 💫</option>
    </select>
  );
};
