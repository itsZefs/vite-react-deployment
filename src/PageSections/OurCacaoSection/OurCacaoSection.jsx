import styles from './OurCacaoSection.module.css';
import TextButton from '../../TextButton/TextButton';
import ProductCard from '../../ProductCard/ProductCard.jsx'
import ProductCard2 from '../../ProductCard2/ProductCard2.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

function OurCacaoSection() {
  return (
    <div className={styles.ourCacaoSection}>

      <div className={styles.ourCacaoSectionTitle}>
        <div className={styles.ourCacaoMainText}>
          Our Best.
        </div>

        <div className={styles.ourCacaoSubText}>
          Distinctly Davao
        </div>
      </div>
      
      <div className={styles.ourCacaoProducts}>
        <ProductCard2 /> 
        <ProductCard2 /> 
        <ProductCard2 /> 
      </div>

    </div>
  );
}

export default OurCacaoSection;
