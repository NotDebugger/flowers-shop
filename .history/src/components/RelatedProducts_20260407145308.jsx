import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RelatedProducts({ product }) {
  const products = useContext(ProductsContext);
  const navigate = useNavigate();
  const relatedProducts = products.filter(
    (p) => Math.abs(product.price - p.price) <= 1000 && product.id !== p.id,
  );
  console.log(relatedProducts);
  return (
    <div className="mt-10 px-10 pb-8">
      <h2 className="text-2xl mb-4">Related Products</h2>

      <Swiper
        className="p-10"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          350: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {relatedProducts.map((p) => (
          <SwiperSlide key={p.id}>
            <div
              className="p-2 rounded cursor-pointer flex flex-col justify-center items-center"
              onClick={() => navigate(`/products/${p.id}`)}
            >
              <img src={p.image} className="w-auto h-56 " />
              <h3>{p.name}</h3>
              <p>{p.price}$</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
