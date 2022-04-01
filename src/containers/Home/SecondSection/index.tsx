import React from "react";
import styles from './SecondSection.module.css'
import Container from "components/Container";
import PromoCarousel from "./PromoCarousel";
import 'react-multi-carousel/lib/styles.css'
import Packages from "./Packages";

const SecondSection = () => {
  return(
  <section className={styles.section}>
    <Container>
      <PromoCarousel />
      <Packages />
    </Container>
  </section>
  ); 
};

export default SecondSection;
