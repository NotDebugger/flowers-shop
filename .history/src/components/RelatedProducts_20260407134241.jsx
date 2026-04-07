import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";

export default function RelatedProducts({ product }) {
  const products = useContext(ProductsContext);
  const relatedProducts = products.filter(
    (p) => Math.abs(product.price - p.price) <= 1000 && product.id !== p.id,
  );
  console.log(relatedProducts);
}
