import images from "src/Assets/images";
import { Product } from "src/Utils/DataHandler";

const products = [
  {
    id: 1,
    name: "Apple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 1.1,
        name: "1 Kg",
        costPrice: 50,
        sellingPrice: 45,
        images: [
          "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
          "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
      {
        id: 1.2,
        name: "500 g",
        costPrice: 30,
        sellingPrice: 35,
        images: [
          "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
          "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 2,
    name: "Banana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 2.1,
        name: "1 Dozen",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 5,
    name: "Tomato",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 5.1,
        name: "1 Kg",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 6,
    name: "Brocolli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 6.1,
        name: "1 Kg",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 9,
    name: "Eggs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 9.1,
        name: "1 Dozen",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/6420/metal-easter-eggs-basket.jpg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 10,
    name: "Milk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 10.1,
        name: "1 Lt",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/5946720/pexels-photo-5946720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 13,
    name: "Bread",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 13.1,
        name: "500 g",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/1448665/pexels-photo-1448665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 14,
    name: "Cake",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 14.1,
        name: "1 Kg",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/1889651/pexels-photo-1889651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 17,
    name: "Strawberry Cone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 17.1,
        name: "100 g",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/1309583/pexels-photo-1309583.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
  {
    id: 18,
    name: "Vanilla Cone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    favourite: false,
    variants: [
      {
        id: 17.1,
        name: "100 g",
        costPrice: 36,
        sellingPrice: 40,
        images: [
          "https://images.pexels.com/photos/1979749/pexels-photo-1979749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
        ],
        stock: true,
      },
    ],
  },
];

const filterProductsByIds = (productIds: Array<string | number>) => {
  return products.filter(
    (product: Product) => productIds.indexOf(product.id) !== -1
  );
};

const Data = {
  products,
  categories: [
    {
      id: 10,
      name: "Fruits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([1, 2]),
      image:
        "https://images.pexels.com/photos/68525/soap-colorful-color-fruit-68525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
    },
    {
      id: 11,
      name: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([5, 6]),
      image:
        "https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
    },
    {
      id: 12,
      name: "Dairy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([9, 10]),
      image:
        "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
    },
    {
      id: 13,
      name: "Bakery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([13, 14]),
      image:
        "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
    },
    {
      id: 14,
      name: "Ice Cream",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([17, 18]),
      image:
        "https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
    },
  ],
  collections: [
    {
      id: 100,
      name: "Top Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([9, 10, 13, 14]),
    },
    {
      id: 101,
      name: "Farm Fresh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([1, 2, 5, 6]),
    },
  ],
  banners: [
    {
      id: 100,
      name: "Best Seller",
      image: images.banner1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([9, 10, 13, 14]),
    },
    {
      id: 101,
      name: "Farm Fresh",
      image: images.banner2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([1, 2, 5, 6]),
    },
    {
      id: 101,
      name: "Exotic",
      image: images.banner3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([1, 2, 5, 6]),
    },
    {
      id: 101,
      name: "20% off",
      image: images.banner4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([9, 10, 13, 14]),
    },
    {
      id: 101,
      name: "Grocery",
      image: images.banner5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      products: filterProductsByIds([1, 2, 5, 6]),
    },
  ],
  addresses: [
    {
      id: 1,
      name: "Home",
      houseNo: "711-2880",
      street: "Nulla St.",
      city: "Mankato",
      state: "Indiana",
      pincode: "96522",
      landmark: "",
      phoneNumber: "(257) 563-7401",
      isWork: false,
      primary: false,
    },
    {
      id: 2,
      name: "Work",
      houseNo: "111-2880",
      street: "Fusce Rd.",
      city: "Frederick",
      state: "Nebraska",
      pincode: "20620",
      landmark: "",
      phoneNumber: "(357) 563-7509",
      isWork: true,
      primary: true,
    },
  ],
  orders: [
    {
      id: Date.now() + 1000,
      transactionId: Date.now(),
      purchasedItems: [
        {
          id: 1607855645061,
          productId: 1,
          name: "Apple",
          variant: {
            id: 1.1,
            name: "1 Kg",
            costPrice: 50,
            sellingPrice: 45,
            images: [
              "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
              "https://images.pexels.com/photos/347926/pexels-photo-347926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
            ],
            stock: true,
          },
          count: 2,
        },
        {
          id: 1607855646339,
          productId: 2,
          name: "Banana",
          variant: {
            id: 2.1,
            name: "1 Dozen",
            costPrice: 36,
            sellingPrice: 40,
            images: [
              "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400",
            ],
            stock: true,
          },
          count: 3,
        },
      ],
      address: {
        id: 1,
        name: "Home",
        houseNo: "711-2880",
        street: "Nulla St.",
        city: "Mankato",
        state: "Mississippi",
        pincode: "96522",
        landmark: "",
        phoneNumber: "(257) 563-7401",
        isWork: false,
        primary: false,
      },
      status: "DELIVERED",
    },
  ],
};

export default Data;
