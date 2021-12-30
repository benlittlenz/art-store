import Image from 'next/image';
import Link from 'next/link'
import { AboutSection } from '../components/AboutSection';
import { Button } from "../components/Button";
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Navbar } from '../components/Navbar'
import { Spacer } from '../components/Spacer';

const IndexPage = () => (
  <>
    <Navbar />
    <AboutSection />
    <FeaturedProducts />

  </>
);

export default IndexPage
