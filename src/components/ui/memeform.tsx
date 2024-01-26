// MemoForm.tsx
import React, { useState } from "react";
import SelectColors from "./selectmenus";

interface MemoFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (title: string, content: string, colorId: string) => void;
}

const MemoForm: React.FC<MemoFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [colorId, setColorId] = useState("#3498db"); // Default color

  // Define an array of color strings
  const colors = ["#3498db", "#e74c3c", "#27ae60", "#f39c12", "#8e44ad", "#ffffff"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content, colorId);
    setTitle("");
    setContent("");
    setColorId("#3498db"); // Reset to default color
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black text-2xl font-bold border-0 py-2 px-4 w-2/3 focus:outline-none"
        />

        <label className="flex items-center">
          Color:
          <SelectColors
            selectedColor={colorId}
            onChange={(selectedColor: string) => setColorId(selectedColor)}
            colorOptions={colors}
          />
        </label>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="text-black border border-gray-300 py-2 px-4 w-full rounded-md focus:outline-none"
        style={{ minHeight: "100px" }}
      />
    </form>
  );
};

export default MemoForm;
