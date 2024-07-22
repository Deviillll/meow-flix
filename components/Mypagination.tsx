import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


import React from "react";

const Mypagination = ({ pageNum, setPage }: any) => {
  return (
    <div>
        
      <Pagination className="mt-3 ">
        <PaginationContent className="text-white bg-black">
          {pageNum > 1 && (
            <>
              {" "}
              <button>
                <PaginationPrevious
                  onClick={() => {
                    setPage((pre: number) => pre - 1);
                  }}
                />
              </button>
              <button>
                <PaginationLink
                  onClick={() => {
                    setPage((pre: number) => pre - 1);
                  }}
                >
                  {pageNum - 1}
                </PaginationLink>
              </button>
            </>
          )}
          <button>
            <PaginationLink className="border text-white bg-black">
              {pageNum}
            </PaginationLink>
          </button>
          <button>
            <PaginationLink
              onClick={() => {
                setPage((pre: number) => pre + 1);
              }}
            >
              {pageNum + 1}
            </PaginationLink>
          </button>

          <button>
            <PaginationNext
              onClick={() => {
                setPage((pre: number) => pre + 1);
              }}
            />
          </button>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Mypagination;
