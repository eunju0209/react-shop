import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

export type CartType = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const CartsContext = createContext<CartType[] | null>(null);
const AddCartsContext = createContext<((cart: CartType) => void) | null>(null);
const QuantityPlusContext = createContext<((cartId: number) => void) | null>(
  null
);
const QuantityMinusContext = createContext<((item: CartType) => void) | null>(
  null
);
const RemoveAllContext = createContext<(() => void) | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [carts, setCarts] = useState<CartType[]>(readCartsFromLocalStorage);

  const handleAdd = (cart: CartType) => setCarts((carts) => [...carts, cart]);

  const handlePlus = (cartId: number) =>
    setCarts((carts) =>
      carts.map((cart) => {
        if (cart.id === cartId) {
          return { ...cart, quantity: cart.quantity + 1 };
        }
        return cart;
      })
    );

  const handleMinus = (item: CartType) => {
    if (item.quantity === 1) {
      setCarts((carts) => carts.filter((cart) => cart.id !== item.id));
      return;
    }
    setCarts((carts) =>
      carts.map((cart) => {
        if (cart.id === item.id) {
          const quantity = cart.quantity < 1 ? 0 : cart.quantity - 1;
          return { ...cart, quantity };
        }
        return cart;
      })
    );
  };

  const handleRemoveAll = () => {
    setCarts([]);
  };

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);

  return (
    <CartsContext.Provider value={carts}>
      <AddCartsContext.Provider value={handleAdd}>
        <QuantityPlusContext.Provider value={handlePlus}>
          <QuantityMinusContext.Provider value={handleMinus}>
            <RemoveAllContext.Provider value={handleRemoveAll}>
              {children}
            </RemoveAllContext.Provider>
          </QuantityMinusContext.Provider>
        </QuantityPlusContext.Provider>
      </AddCartsContext.Provider>
    </CartsContext.Provider>
  );
}

export const useCarts = () => {
  const value = useContext(CartsContext);
  if (!value) {
    throw new Error('cannot find carts');
  }
  return value;
};

export const useAddCarts = () => {
  const value = useContext(AddCartsContext);
  if (!value) {
    throw new Error('cannot find addCarts');
  }
  return value;
};

export const useQuantityPlus = () => {
  const value = useContext(QuantityPlusContext);
  if (!value) {
    throw new Error('cannot find quantityPlus');
  }
  return value;
};

export const useQuantityMinus = () => {
  const value = useContext(QuantityMinusContext);
  if (!value) {
    throw new Error('cannot find quantityMinus');
  }
  return value;
};

export const useRemoveAll = () => {
  const value = useContext(RemoveAllContext);
  if (!value) {
    throw new Error('cannot find removeAll');
  }
  return value;
};

function readCartsFromLocalStorage() {
  const carts = localStorage.getItem('carts');
  return carts ? JSON.parse(carts) : [];
}
