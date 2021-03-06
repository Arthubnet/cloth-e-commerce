import sweatshirtsPreview from "../../assets/MiConv.com__M7535_184_2.jpg";
import dressesPreview from "../../assets/Dresses/Boxy Pique Shirt/G4139_102_1.jpg";

import manHero from "../../assets/3470843287.jpg";
import womenHero from "../../assets/AnyConv.com__D3169_102_2.jpg";
import heroImage from "../../assets/sweatshirt.jpg";

let INITIAL_STATE = {
  sections: [
    {
      title: "Sweatshirts",
      imageUrl: sweatshirtsPreview,
      size: "large",
      id: 4,
      linkUrl: "shop/sweatshirts",
      /*   category: "Sweatshirts", */
      description: "Sharp styling inspired by the British subcultural uniform",
    },
    {
      title: "Dresses",
      imageUrl: womenHero,
      size: "large",
      id: 5,
      linkUrl: "shop/dresses",
      /*    category: "Dresses", */
      description: "This just in – shop our latest arrivals",
    },
    {
      title: "Caps",
      imageUrl:
        "https://i.ibb.co/ZYxpBwy/fred-perry-white-Tonal-Tennis-Cap-In-White.png",
      id: 1,
      linkUrl: "shop/caps",

      description: "We trace the legacy of classic tennis",
    },
    {
      title: "Shoes",
      imageUrl: "https://i.ibb.co/R2FjyxG/EGlfi-Xt-W4-AA2-K4j.png",
      id: 2,
      linkUrl: "shop/shoes",

      description: "Served in a range of colours and fabrics",
    },
    {
      title: "Bags",
      imageUrl:
        "https://i.ibb.co/dGrS7PX/FP-Q1-Collection-Page-Accessories-155.png",
      id: 3,
      linkUrl: "shop/bags",

      description: "It’s all in the details",
    },
  ],
};

let directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
