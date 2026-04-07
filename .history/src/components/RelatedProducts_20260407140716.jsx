import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RelatedProducts({ product }) {
  const products = useContext(ProductsContext);
  const relatedProducts = products.filter(
    (p) => Math.abs(product.price - p.price) <= 1000 && product.id !== p.id,
  );
  console.log(relatedProducts);
  return (
    <div className="mt-10 p-5">
      <h2 className="text-2xl mb-4">Related Products</h2>

      <div className="p-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {relatedProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="border p-2 rounded">
                <h3>{p.name}</h3>
                <p>{p.price}$</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
