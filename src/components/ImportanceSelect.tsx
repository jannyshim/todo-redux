import React, { ChangeEvent } from "react";

interface ImportanceSelectProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const ImportanceSelect: React.FC<ImportanceSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="중요도 ⭐️">중요도 ⭐️</option>
      <option value="중요도 🌟">중요도 🌟</option>
      <option value="중요도 ✨">중요도 ✨</option>
      <option value="중요도 💫">중요도 💫</option>
    </select>
  );
};
