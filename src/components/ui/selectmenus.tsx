import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface SelectColorsProps {
  selectedColor: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (selectedColor: string) => void;
  colorOptions: string[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SelectColors: React.FC<SelectColorsProps> = ({ selectedColor, onChange, colorOptions }) => {
  const handleColorChange = (color: string) => {
    onChange(color);
  };

  return (
    <Listbox value={selectedColor} onChange={handleColorChange}>
      {({ open }) => (
        <>
          <div className="relative w-full mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <div
                  className="border p-4 rounded-full"
                  style={{ backgroundColor: selectedColor }}
                />
              </span>
              <input
                type="text"
                value={selectedColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className="absolute inset-y-0 right-0 ml-3 w-10 hidden px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-100 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {colorOptions.map((colorOption) => (
                  <Listbox.Option
                    key={colorOption}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                      )
                    }
                    value={colorOption}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate",
                            )}
                          >
                            {colorOption}
                          </span>
                        </div>
                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default SelectColors;
