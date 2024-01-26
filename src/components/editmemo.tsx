"use client";

import React from "react";
import MemoForm from "./ui/memeform";
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./ui/button";

const EditMemo = () => {
  const handleSubmit = (title: string, content: string, colorId: string) => {
    // Implement your logic for handling the form submission here
    // eslint-disable-next-line no-console
    console.log("Submitted:", title, content, colorId);
  };
  return (
    <div className="bg-white py-36">
      <div className="mx-auto max-w-2xl px-4 py-16 rounded-3xl shadow-lg ring-1 ring-gray-900/5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center mb-5 justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Edit memo</h2>
          <Button
            // href="/auth"
            // onClick={handleSubmit}
            className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            icon={<PlusIcon color="white" className="h-6 w-6" />}
          >
            Save memo
          </Button>
        </div>

        <MemoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default EditMemo;
