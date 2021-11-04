import React, { useState } from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { slides } from './slides';



export const App = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ display: 'block', width: 800, margin: 'auto', paddingTop: 150 }}>
      <h4>React-Bootstrap Carousel Component</h4>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: 560 }}>
        {
          slides.map((item, i) => (
            <Carousel.Item interval={3000}>
              <img
                className="d-inline-block w-100"
                src={item.url}
                alt={item.alt}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}



// return (
//   <div>
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   </div>
// )