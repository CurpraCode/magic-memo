"use client";

import React, { useState } from "react";
import MemoForm from "./ui/memeform";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface MemoData {
  title: string;
  content: string;
  colorId: string;
}
const EditMemo = (memoData: any) => {
  const [formData, setFormData] = useState<MemoData>(memoData);
  const router = useRouter();
  const params = useParams();

  const handleInputChange = (field: "title" | "content", value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleColorChange = (color: string) => {
    setFormData((prevData) => ({ ...prevData, colorId: color }));
  };

  const handleSubmit = async () => {
    try {
      await axios.patch(`/api/memo/${params.id}`, formData);
      router.refresh();
      toast.success("Memo updated");
      router.push("/memo");
    } catch (error) {
      toast.error("Failed to update memo");
    }
  };

  return (
    <div className="bg-white py-36">
      <div className="mx-auto max-w-2xl px-4 py-16 rounded-3xl shadow-lg ring-1 ring-gray-900/5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center mb-5 justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Edit memo</h2>
          <Button
            onClick={handleSubmit}
            className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            icon={<PlusIcon color="white" className="h-6 w-6" />}
          >
            Save memo
          </Button>
        </div>

        <MemoForm onInputChange={handleInputChange} onColorChange={handleColorChange} />
      </div>
    </div>
  );
};

export default EditMemo;
