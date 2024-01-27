/* eslint-disable no-unused-vars */

import React from "react";
import SelectColors from "./selectmenus";

interface MemoFormProps {
  onInputChange: (field: "title" | "content", value: string) => void;
  onColorChange: (color: string) => void;
  initialValues: {
    id: string;
    title: string;
    content: string;
    colorId: string;
  };
}

const MemoForm: React.FC<MemoFormProps> = ({ onInputChange, onColorChange, initialValues }) => {
  const colors = ["#3498db", "#e74c3c", "#27ae60", "#f39c12", "#8e44ad", "#ffffff"];

  return (
    <div>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={initialValues.title || ""}
          onChange={(e) => onInputChange("title", e.target.value)}
          className="text-black text-2xl font-bold border-0 py-2 px-4 w-2/3 focus:outline-none"
        />

        <label className="flex items-center">
          Color:
          <SelectColors
            selectedColor={initialValues.colorId} // Use the color from initialValues
            onChange={onColorChange}
            colorOptions={colors}
          />
        </label>
      </div>

      <textarea
        placeholder="Content"
        value={initialValues.content}
        onChange={(e) => onInputChange("content", e.target.value)}
        className="text-black border border-gray-300 py-2 px-4 w-full rounded-md focus:outline-none"
        style={{ minHeight: "100px" }}
      />
    </div>
  );
};

export default MemoForm;
