import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { imgPath } from "@/components/helpers/functions-general";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { newArrivalArray } from "../home/new-arrival-data";

const ProductInfo = () => {
  const { slug } = useParams();

  const getProductInfo = newArrivalArray.filter((item) => item.slug === slug);

  return (
    <>
      <Header />
      <section className="product-info !text-black">
        <div className="grid grid-cols-[1fr,400px] gap-5 mt-10">
          <main>
            <div className="flex gap-5">
              <img
                src={`${imgPath}/${getProductInfo[0].img1}`}
                alt=""
                className="w-1/2"
              />
              <img
                src={`${imgPath}/${getProductInfo[0].img2}`}
                alt=""
                className="w-1/2"
              />
            </div>
          </main>
          <aside>
            <div className="mt-24">
              <h3>{getProductInfo[0].title}</h3>
              <div className="flex gap-5 items-center">
                <ul className="flex gap-1 my-2">
                  {Array.from(Array(getProductInfo[0].rating).keys()).map(
                    () => ( 
                      <li>
                        <Star fill={"black"} size={16} />
                      </li>
                    )
                  )}
                </ul>
                <p className="mb-0">
                  <small>reviews(100)</small>
                </p>
              </div>
              <h5 className="text-base font-semibold mb-4">
                {getProductInfo[0].price}
              </h5>
              <p className="mb-2">SKU-123456</p>
              <div className="thumbnails flex gap-2 mb-6 flex-wrap">
                {getProductInfo[0].thumbnails.map((item, key) => (
                  <img
                    src={`${imgPath}/${item}`}
                    alt=""
                    className="size-[100px] rounded-md"
                    key={key}
                  />
                ))}
              </div>
              <h6 className="mb-2">Select Your Size</h6>
              <ul className="sizes flex gap-2">
                {getProductInfo[0].sizes.map((item, key) => (
                  <li
                    className="w-[50px] h-[30px] border border-black flex justify-center items-center hover:bg-black hover:text-white text-black transition-colors cursor-pointer"
                    key={key}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductInfo;
