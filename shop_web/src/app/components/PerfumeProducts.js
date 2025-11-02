 "use client";
import React from "react";
import useSWR from "swr";
import ProductCards from "./ProductCards";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PerfumeProducts() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/shop_product/perfume/",
    fetcher
  );

  if (error) return <h2>Error loading products</h2>;

  return (
    <div className="container pt-16">
      <div className="font-medium text-2xl pb-4">
        <div
          className="grid grid-col-1 ml-[120px] place-content-center sm:place-items-start sm:grid-cols-3
            lg:grid-col-3 xl:grid-col-4 gap-10 xl-gap-x-20 xl:gap-y-10"
        >
          {isLoading && <h2>Loading...</h2>}

          {!isLoading &&
            data?.map((item) => (
              <div key={item.id}>
                <Link href={`/Detail/${item.id}`}>
                  <ProductCards
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PerfumeProducts;
