let INITIAL_STATE = {
  sections: [
    {
      title: "Sharp",
      imageUrl: "https://i.ibb.co/1nXTYmY/FP-Q2-MW-Sharp-hp-4-5-1.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/mens",
      category: "MEN'S",
      description: "Sharp styling inspired by the British subcultural uniform",
    },
    {
      title: "New Releases",
      imageUrl: "https://i.ibb.co/QKGJKnP/FP-Q2-HP-Womens-4-5-1.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/womens",
      category: "WOMEN'S",
      description: "This just in – shop our latest arrivals",
    },
    {
      title: "Caps",
      imageUrl: "https://i.ibb.co/NNtYbgf/ezgif-2-d2ebdb4aac.jpg",
      id: 1,
      linkUrl: "shop/caps",

      description: "We trace the legacy of classic tennis",
    },
    {
      title: "Shoes",
      imageUrl: "https://i.ibb.co/z5R9hTg/EGlfi-Xt-W4-AA2-K4j.jpg",
      id: 2,
      linkUrl: "shop/shoes",

      description: "Served in a range of colours and fabrics",
    },
    {
      title: "Bags",
      imageUrl:
        "https://i.ibb.co/0mKt3fm/FP-Q1-Collection-Page-Accessories-155.jpg",
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
