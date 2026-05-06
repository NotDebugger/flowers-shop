import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useMemo } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RelatedProducts({ product }) {
  const products = useContext(ProductsContext);
  const navigate = useNavigate();
  const relatedProducts = useMemo(() => {
    const price = Number(product.price);

    return products
      ?.filter(
        (p) => Math.abs(price - Number(p.price)) <= 1000 && product.id !== p.id,
      )
      .slice(0, 8);
  }, [product.id, product.price, products]);

  if (!relatedProducts?.length) {
    return null;
  }

  return (
    <section className="section-wrap pb-20">
      <div className="mb-6">
        <span className="section-kicker">You may also love</span>
        <h2 className="h1-title mt-5 text-3xl text-slate-900 md:text-4xl">
          More flowers in the same gifting mood
        </h2>
      </div>

      <Swiper
        className="px-3! pb-10!"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={18}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {relatedProducts.map((p) => (
          <SwiperSlide key={p.id}>
            <article
              className="soft-card mx-1 flex cursor-pointer flex-col overflow-hidden rounded-[1.8rem] p-3 transition duration-300 hover:-translate-y-1.5"
              onClick={() => navigate(`/products/${p.id}`)}
            >
              <div className="overflow-hidden rounded-[1.4rem] bg-(--surface-muted)">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-xl font-semibold text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  EGP {Number(p.price).toLocaleString()}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
