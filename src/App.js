import './App.css';
import { motion } from 'framer-motion';

import image1  from '../src/images/img1.jpg';
import image2  from '../src/images/img2.jpg';
import image3  from '../src/images/img3.jpg';
import image4  from '../src/images/img4.jpg';

let images = [image1, image2, image3, image4  ]

function App() {
  return (
    <div className="App">
     
    <motion.div className="carousel" whileTap={{ cursor: "grabbing" }} >
      <motion.div className="inner"
      drag="x"
      >

        {images.map( image =>(
          <motion.div className='item' key={image}>
            <img src={image} alt="Texto alt" /> 
          </motion.div>
        ))}

      </motion.div>
    </motion.div>


    </div>
  );
}

export default App;
