const SHOP_DATA = [
  {
    id: 1,
    title: "Men's",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Printed Block Sweatshirt",
        imageUrl:
          "https://i.ibb.co/JvVC7rK/Printed-Colour-Block-Sweatshirt.jpg",
        price: 140,
      },
      {
        id: 31,
        name: "Crew Neck Sweatshirt",
        imageUrl: "https://i.ibb.co/BsCMBPQ/Crew-Neck-Sweatshirt.jpg",
        price: 120,
      },
      {
        id: 32,
        name: "Half Zip Sweatshirt",
        imageUrl:
          "https://i.ibb.co/5xfGSgs/Knitted-Zip-Through-Tennis-Bomber.jpg",
        price: 125,
      },
      {
        id: 33,
        name: "Colour Block Sweatshirt",
        imageUrl:
          "https://i.ibb.co/1dFYYJY/Colour-Block-Half-Zip-Sweatshirt.jpg",
        price: 125,
      },
      {
        id: 34,
        name: "Half Zip Sweatshirt",
        imageUrl: "https://i.ibb.co/YZnWKh9/Embroidered-Sweatshirt.jpg",
        price: 120,
      },
    ],
  },
  {
    id: 2,
    title: "Women's",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/2N3y0pw/Longlin-Cardigan.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/2SRG5XR/One-Shoulder-Knitted-Top.jpg",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/k4zN0JT/Printed-Collar-Piqu-Dress.jpg",
        price: 80,
      },
      /* {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/BGr3Wm9/Printed-Short-Sleeve-Jumper.jpg",
        price: 80,
        
      }, */
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/vjnn5Sm/Ribbed-Polo-Shirt.jpg",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl:
          "https://i.ibb.co/K95S0Zv/Sleeveless-Ringer-T-Shirt-Dress.jpg",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/GnSDJHq/Striped-Polo-Shirt.jpg",
        price: 20,
      },
    ],
  },

  {
    id: 3,
    title: "Shoes",
    routeName: "shoes",
    items: [
      {
        id: 10,
        name: "Exmouth White",
        imageUrl: "https://i.ibb.co/wr1TzSd/Exmouth-White.jpg",
        price: 120,
      },
      {
        id: 11,
        name: "Hawley",
        imageUrl: "https://i.ibb.co/fCCgzf5/Hawley.jpg",
        price: 230,
      },
      {
        id: 12,
        name: "Hawley Ginger",
        imageUrl: "https://i.ibb.co/FxB5VnQ/Hawley-Ginger.jpg",
        price: 160,
      },
      {
        id: 13,
        name: "Hughes Low",
        imageUrl: "https://i.ibb.co/DkCr6tr/Hughes.jpg",
        price: 140,
      },
      {
        id: 14,
        name: "Hughes",
        imageUrl: "https://i.ibb.co/hHr5279/Hughes-Low.jpg",
        price: 120,
      },
      {
        id: 15,
        name: "Leather Monkey Boots",
        imageUrl: "https://i.ibb.co/R7frjPz/Leather-Monkey-Boots.jpg",
        price: 260,
      },
    ],
  },
  {
    id: 4,
    title: "Bags",
    routeName: "bags",
    items: [
      {
        id: 18,
        name: "Contrast Ripstop Side Bag",
        imageUrl: "https://i.ibb.co/fMmQbTW/Contrast-Ripstop-Side-Bag.jpg",
        price: 70,
      },
      {
        id: 19,
        name: "Glitch Graphic Tote Bag",
        imageUrl: "https://i.ibb.co/qgkXNHk/Glitch-Graphic-Tote-Bag.jpg",
        price: 75,
      },
      {
        id: 20,
        name: "Classic Barrel Bag",
        imageUrl: "https://i.ibb.co/C9kPj2q/Laurel-Wreath-Barrel-Bag.jpg",
        price: 100,
      },
      {
        id: 21,
        name: "Piqué Textured Grip Bag",
        imageUrl: "https://i.ibb.co/QmLdm2f/Pique-Textured-Grip-Bag.jpg",
        price: 185,
      },
      {
        id: 22,
        name: "Tonal Tape Tricot Crossbody Bag",
        imageUrl:
          "https://i.ibb.co/4mkZsRq/Tonal-Tape-Tricot-Crossbody-Bag.jpg",
        price: 55,
      },
    ],
  },
  {
    id: 5,
    title: "Caps",
    routeName: "caps",
    items: [
      {
        id: 1,
        name: "Towelling Cap",
        imageUrl:
          "https://i.ibb.co/nPgkhCP/fred-perry-white-Tonal-Tennis-Cap-In-White1.jpg",
        price: 60,
      },
      {
        id: 2,
        name: "Classic Piqué Cap",
        imageUrl: "https://i.ibb.co/D4PrLfy/ezgif-2-5ba236545a1.jpg",
        price: 60,
      },
      {
        id: 3,
        name: "Reversible Bucket Hat",
        imageUrl: "https://i.ibb.co/YPs4wtc/ezgif-2-43b30853f21.jpg",
        price: 70,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/10bF6z2/ezgif-2-490364a0ae1.jpg",
        price: 65,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/GxgNNH4/ezgif-2-f296fd52fd1.jpg",
        price: 50,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/wJ3Hykj/ezgif-2-d2ebdb4aac1.jpg",
        price: 45,
      },
    ],
  },
];

export default SHOP_DATA;
