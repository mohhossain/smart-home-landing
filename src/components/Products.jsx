import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      name: "Robot Vacuum",
      image: "https://pngimg.com/d/robot_vacuum_PNG12.png",
    },
    {
      name: "Smart Thermostat",
      image:
        "https://cdn11.bigcommerce.com/s-ih6ina3dd8/images/stencil/1280x1280/products/201/867/ecobee-premium-cooling-1000px__73243.1711656323.png?c=2",
    },
    {
      name: "Smart Speaker",
      image:
        "https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-smart-speaker-3d-illustration-png-image_11476817.png",
    },
    {
      name: "Smart Lamp",
      image:
        "https://purepng.com/public/uploads/thumbnail//black-golden-interior-lamp-light-enm.png",
    },
    {
      name: "Smart Tree Cam",
      image:
        "https://ae01.alicdn.com/kf/Hb1a976d014a24df1ac5546a696ca326cS/Mboss-5inch-Lullabies-Mboss-Video-Baby-Monitor-with-Remote-Pan-Tilt-Zoom-Camera-and-Audio-Two.png",
    },
    {
      name: "Robot Vacuum",
      image: "https://pngimg.com/d/robot_vacuum_PNG12.png",
    },
    {
      name: "Smart Thermostat",
      image:
        "https://cdn11.bigcommerce.com/s-ih6ina3dd8/images/stencil/1280x1280/products/201/867/ecobee-premium-cooling-1000px__73243.1711656323.png?c=2",
    },
    {
      name: "Smart Speaker",
      image:
        "https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-smart-speaker-3d-illustration-png-image_11476817.png",
    },
    {
      name: "Smart Lamp",
      image:
        "https://purepng.com/public/uploads/thumbnail//black-golden-interior-lamp-light-enm.png",
    },
    {
      name: "Smart Tree Cam",
      image:
        "https://ae01.alicdn.com/kf/Hb1a976d014a24df1ac5546a696ca326cS/Mboss-5inch-Lullabies-Mboss-Video-Baby-Monitor-with-Remote-Pan-Tilt-Zoom-Camera-and-Audio-Two.png",
    },
  ];

  return (
    <div className="products">
      <div className="product-title">
        <h1>Combine a perfect ecosystem for your home</h1>
      </div>

      <div className="product-cards">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
