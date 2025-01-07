import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { imgPath } from "@/components/helpers/functions-general";
import { Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { newArrivalArray } from "../home/new-arrival-data";
import useQueryData from "@/components/custom-hook/useQueryData";

const ProductInfo = () => {
  const { slug } = useParams();

  const { error, data: result } = useQueryData(
    `/v2/clothes`, // end point
    "get",
    "clothes"
  );

  const getProductInfo = () =>
    result?.data.filter(
      (item) => item.clothes_title === slug.replaceAll("-", " ")
    );

  return (
    <>
      <Header />

      <section className="h-[50vh] bg-black bg-[url(http://localhost/viter-zenorobe/public/img/slider-1.jpg)]"></section>
      <section className="product-info !text-black ">
        <div className="grid grid-cols-[1fr,400px] gap-5 mt-10">
          <main>
            <div className="flex gap-5">
              <img
                src={`${imgPath}/${
                  getProductInfo() !== undefined &&
                  getProductInfo()[0].clothes_image1
                }`}
                alt=""
                className="w-1/2"
              />
              <img
                src={`${imgPath}/${
                  getProductInfo() !== undefined &&
                  getProductInfo()[0].clothes_image2
                }`}
                alt=""
                className="w-1/2"
              />
            </div>
          </main>
          <aside>
            <div className="mt-24 p-5">
              <h3>
                {getProductInfo() !== undefined &&
                  getProductInfo()[0].clothes_title}
              </h3>
              <div className="flex gap-5 items-center">
                <ul className="flex gap-1 my-2 pb-4 items-center">
                  {/* {Array.from(Array(getProductInfo()[0].rating).keys()).map(
                    () => (
                  <li>
                    <Star fill={"black"} size={16} />
                  </li>
                  )
                  )} */}

                  {/* STATIC STARS */}
                  {Array.from(Array(5).keys()).map((i) => (
                    <li>
                      <Star fill={"black"} size={16} />
                    </li>
                  ))}

                  <p className="mb-0">
                    <small>reviews(100)</small>
                  </p>
                </ul>
              </div>
              <h5 className="text-base font-semibold mb-4">
                PHP <span></span>
                {getProductInfo() !== undefined &&
                  getProductInfo()[0].clothes_price}
                .00
              </h5>
              <p className="mb-2">SKU-123456</p>
              <div className="thumbnails flex gap-2 mb-6 flex-wrap">
                {/* {getProductInfo() !== undefined &&
                  getProductInfo()[0].data.map((item, key) => (
                    <img
                      src={`${imgPath}/${item.clothes_image1}`}
                      alt=""
                      className="size-[100px] rounded-md"
                      key={key}
                    />
                  ))} */}
                {/* {Array.from(Array(5).keys()).map((i) => (
                  <img
                    src={`${imgPath}/clothing-5.jpg`}
                    alt=""
                    className="size-[100px] rounded-md"
                  />
                ))} */}

                {result?.count > 0 &&
                  result.data.map((item, key) => (
                    <div>
                      <img
                        src={`${imgPath}/${item.clothes_image1}`}
                        alt=""
                        className="size-[100px] rounded-md cursor-pointer border hover:border-black"
                      />
                      <img
                        src={`${imgPath}/${item.clothes_image2}`}
                        alt=""
                        className="size-[100px] rounded-md cursor-pointer border hover:border-black"
                      />
                    </div>
                  ))}
              </div>
              <h6 className="mb-2">Select Your Size</h6>
              <ul className="sizes flex gap-2">
                {/* {getProductInfo() !== undefined &&
                  getProductInfo()[0].sizes.map((item, key) => (
                    <li
                      className="w-[50px] h-[30px] border border-black flex justify-center items-center hover:bg-black hover:text-white text-black transition-colors cursor-pointer"
                      key={key}
                    >
                      {item}
                    </li>
                  ))} */}
                {Array.from(Array(5).keys()).map((i) => (
                  <li className="w-[50px] h-[30px] border border-black flex justify-center items-center hover:bg-black hover:text-white text-black transition-colors cursor-pointer">
                    <small>SIZE</small>
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
