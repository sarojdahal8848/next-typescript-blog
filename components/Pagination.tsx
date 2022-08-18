import { useRouter } from "next/router";
import qs from "qs";
import React from "react";
import { TDirection } from "../types";

interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {
  const router = useRouter();
  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };
  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) {
      return;
    }
    if (direction === -1 && isPrevDisabled()) {
      return;
    }
    const queryString = qs.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };
  return (
    <div className="flex justify-center mt-24">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${"bg-primary text-white rounded py-2 px-4 w-24"} ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${"bg-primary text-white rounded py-2 px-4 w-24 ml-2"} ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
