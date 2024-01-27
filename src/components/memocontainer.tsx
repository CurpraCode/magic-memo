"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "./ui/button";
import Memo from "./memo";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";

interface MemoTypeProp {
  id: string;
  title: string;
  content: string;
  colorId: string;
  isLoading?: boolean;
}

interface MemoContainerProps {
  memoViewData: MemoTypeProp[];
}

export default function MemoContainer({ memoViewData }: MemoContainerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<MemoTypeProp[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<MemoTypeProp | null>(null);
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const glowProps = useSpring({
    boxShadow: isHovered
      ? `0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px ${memoViewData[0].colorId}`
      : `0 0 0px rgba(255, 255, 255, 0), 0 0 0px ${memoViewData[0].colorId}`,
  });

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
      setFilteredProducts(memoViewData); // Initially, display all products
    };

    fetchData();
  }, [memoViewData]);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = memoViewData.filter((memoD) =>
      memoD.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }, [memoViewData, searchTerm]);

  const LoadingSkeleton = () => <div className="animate-pulse bg-gray-300 h-80 rounded-md" />;

  const handleClick = (memo: MemoTypeProp) => {
    setSelectedProduct(memo);
  };

  return (
    <div className="bg-white py-36">
      <div className="mx-auto max-w-2xl px-4 py-16 rounded-3xl shadow-lg ring-1 ring-gray-900/5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center mb-5 justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">My memos</h2>
          <Button
            href="/create"
            className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            icon={<PlusIcon color="white" className="h-6 w-6" />}
          >
            Create memo
          </Button>
        </div>
        {/* <Memo /> */}
        <div className="flex my-8 m-auto items-center justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pr-8 border rounded-xl m-auto text-black focus:outline-none focus:border-red-500"
            />
            <svg
              className="absolute right-2 top-3 w-4 h-4 text-gray-500 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-5-5m-1.535-1.536a10 10 0 111.536-1.535"
              ></path>
            </svg>
          </div>
        </div>
        {selectedProduct && (
          <Memo
            open={!!selectedProduct}
            setOpen={(open: any) => setSelectedProduct(open ? selectedProduct : null)}
            memo={selectedProduct}
          />
        )}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((memo) => (
            <div
              key={memo.id}
              className="group relative cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(memo)}
            >
              {isLoading ? (
                <LoadingSkeleton />
              ) : (
                <>
                  <animated.div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden backdrop-filter backdrop-blur-16 backdrop-saturate-180 bg-[rgba(248, 248, 248, 0.75)] border-1 border-[rgba(255,255,255,0.125)] rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                    style={{ opacity: isHovered ? 0.75 : 1, ...glowProps }}
                  >
                    <p className="text-white text-4xl font-bold absolute inset-0 flex items-center justify-center">
                      {memo.title}
                    </p>
                  </animated.div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
