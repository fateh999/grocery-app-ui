import { useCallback } from "react";
import { getAddressValue, setAddressValue } from "src/HookState/addressState";
import {
  getCartValue,
  setCartValue,
  useCartValue,
} from "src/HookState/cartState";
import {
  getCategoryValue,
  setCategoryValue,
} from "src/HookState/categoryState";
import {
  getCollectionValue,
  setCollectionValue,
} from "src/HookState/collectionState";
import { getProductValue, setProductValue } from "src/HookState/productState";

const deepCopy = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

class DataModel {
  constructor() {}

  getProductById = async (id: number | string) => {
    const products: Array<Product> = getProductValue();
    return products.find((product: Product) => product.id === id);
  };

  searchProductsByName = async (text: string) => {
    const products: Array<Product> = getProductValue();
    return products.filter(
      (product: Product) =>
        product.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
  };

  getCollectionById = async (id: number | string) => {
    const collections: Array<Collection> = getCollectionValue();
    return collections.find((collection: Collection) => collection.id === id);
  };

  getCategoryById = async (id: number | string) => {
    const categories: Array<Category> = getCategoryValue();
    return categories.find((category: Category) => category.id === id);
  };

  getCartItemIndexById = async (id: number | string) => {
    const cartItems: Array<CartItem> = getCartValue();
    return cartItems.findIndex((cartItem: CartItem) => cartItem.id === id);
  };

  getAddressIndexById = async (id: number | string) => {
    const addresses: Array<Address> = getAddressValue();
    return addresses.findIndex((address: Address) => address.id === id);
  };

  getCartItemCountByVariantId = async (
    productId: number | string,
    variantId: number | string
  ) => {
    const cartItems: Array<CartItem> = getCartValue();
    return cartItems.find(
      (cartItem: CartItem) =>
        cartItem.productId === productId && cartItem.variant.id === variantId
    );
  };

  getCartItemIndexByVariantId = async (
    productId: number | string,
    variantId: number | string
  ) => {
    const cartItems: Array<CartItem> = getCartValue();
    return cartItems.findIndex(
      (cartItem: CartItem) =>
        cartItem.productId === productId && cartItem.variant.id === variantId
    );
  };

  toggleFavourite = (productId: string | number) => {
    const products: Array<Product> = deepCopy(getProductValue());
    const collections: Array<Collection> = deepCopy(getCollectionValue());
    const categories: Array<Category> = deepCopy(getCategoryValue());

    setCollectionValue(
      collections.map((collection) => ({
        ...collection,
        products: collection.products.map((product) => ({
          ...product,
          favourite:
            product.id === productId ? !product.favourite : product.favourite,
        })),
      }))
    );
    setCategoryValue(
      categories.map((category) => ({
        ...category,
        products: category.products.map((product) => ({
          ...product,
          favourite:
            product.id === productId ? !product.favourite : product.favourite,
        })),
      }))
    );
    setProductValue(
      products.map((product) => ({
        ...product,
        favourite:
          product.id === productId ? !product.favourite : product.favourite,
      }))
    );
  };

  addToCart = async (
    productId: number | string,
    variantId: number | string
  ) => {
    const cartItemIndex = await this.getCartItemIndexByVariantId(
      productId,
      variantId
    );
    if (cartItemIndex !== -1) {
      const tempItems: Array<CartItem> = deepCopy(getCartValue());
      tempItems[cartItemIndex].count++;
      setCartValue(tempItems);
    } else {
      const product = await this.getProductById(productId);
      if (product) {
        const { id: productId, name, variants } = product;
        const variant = variants.find((variant) => variant.id === variantId);
        if (variant) {
          const tempItems: Array<CartItem> = deepCopy(getCartValue());
          tempItems.push({
            id: Date.now(),
            productId,
            name,
            variant,
            count: 1,
          });
          setCartValue(tempItems);
        }
      }
    }
  };

  removeFromCart = async (
    productId: number | string,
    variantId: number | string
  ) => {
    const cartItemIndex = await this.getCartItemIndexByVariantId(
      productId,
      variantId
    );
    if (cartItemIndex !== -1) {
      const tempItems: Array<CartItem> = deepCopy(getCartValue());
      tempItems[cartItemIndex].count--;
      if (tempItems[cartItemIndex].count === 0) {
        tempItems.splice(cartItemIndex, 1);
      }
      setCartValue(tempItems);
    }
  };

  deleteFromCart = async (id: number | string) => {
    const cartItemIndex = await this.getCartItemIndexById(id);
    if (cartItemIndex !== -1) {
      const tempItems: Array<CartItem> = deepCopy(getCartValue());
      tempItems.splice(cartItemIndex, 1);
      setCartValue(tempItems);
    }
  };

  setPrimaryAddress = async (id: number | string) => {
    const addressIndex = await this.getAddressIndexById(id);
    if (addressIndex !== -1) {
      const tempItems = deepCopy(getAddressValue());
      const addressItems: Array<Address> = tempItems.map(
        (_: Address, _i: number) => ({
          ..._,
          primary: _i === addressIndex ? true : false,
        })
      );
      setAddressValue(addressItems);
    }
  };
}

const DataHandler = new DataModel();

export default DataHandler;

export function useDataHandler() {
  const setPrimaryAddress = useCallback(DataHandler.setPrimaryAddress, []);

  const addToCart = useCallback(DataHandler.addToCart, []);

  const removeFromCart = useCallback(DataHandler.removeFromCart, []);

  const deleteFromCart = useCallback(DataHandler.deleteFromCart, []);

  const toggleFavourite = useCallback(DataHandler.toggleFavourite, []);

  const getProductById = useCallback(DataHandler.getProductById, []);

  return {
    setPrimaryAddress,
    addToCart,
    removeFromCart,
    deleteFromCart,
    toggleFavourite,
    getProductById,
  };
}

export function useCount(itemId: number | string, variantId: number | string) {
  const cartItems = useCartValue();
  const cartItem = cartItems.find(
    (cartItem: CartItem) =>
      cartItem.productId === itemId && cartItem.variant.id === variantId
  );

  return cartItem ? cartItem?.count : 0;
}

export type Variant = {
  id: number | string;
  name: string;
  costPrice: number;
  sellingPrice: number;
  images: Array<string | number>;
  stock: boolean;
};

export type Product = {
  id: number | string;
  name: string;
  description: string;
  variants: Array<Variant>;
  favourite: boolean;
};

export type CartItem = {
  id: number;
  productId: number | string;
  name: string;
  variant: Variant;
  count: number;
};

export type PurchasedItem = {
  id: number;
  productId: number | string;
  name: string;
  variant: Variant;
  count: number;
};

export type Order = {
  id: number;
  transactionId: number | string;
  purchasedItems: Array<PurchasedItem>;
  address: Address;
  status:
    | "PENDING"
    | "CONFIRMED"
    | "REJECTED"
    | "REFUNDED"
    | "TRANSIT"
    | "DELIVERED";
};

export type Category = {
  id: number | string;
  name: string;
  description: string;
  image: string | number;
  products: Array<Product>;
};

export type Collection = {
  id: number | string;
  name: string;
  description: string;
  products: Array<Product>;
};

export type Banner = {
  id: number | string;
  name: string;
  image: string | number;
  description: string;
  products: Array<Product>;
};

export type Address = {
  id: number | string;
  name: string;
  houseNo: string;
  street: string;
  city: string;
  state: string;
  pincode: number;
  landmark?: string;
  phoneNumber: string;
  isWork: boolean;
  primary: boolean;
};
