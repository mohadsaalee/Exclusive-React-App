import React,{ useState} from 'react'
import SpotLight from '../-components/SpotLight'
import Categories from '../-components/Categories'
import Grid from '../-components/Grid'
import { Delivery } from '../-components/Delivery';

function Home() {
   const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div>
      <SpotLight />
       <Categories setSelectedCategory={setSelectedCategory} />
      {selectedCategory === null && <Grid />}
      <Delivery/>
    </div>
  );
}

export default Home;