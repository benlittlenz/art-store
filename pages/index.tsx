import Link from 'next/link'
import { Button } from '../components/Button';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Navbar } from '../components/Navbar'

const IndexPage = () => (
  <>
    <Navbar />
    <FeaturedProducts />
    <Button fontSize="1.25rem">
      <span>Facebook</span>
    </Button>
  </>

  //
);

export default IndexPage
