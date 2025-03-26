import { createStore } from "framework7/lite";

interface Product {
  id: string;
  title: string;
  description: string;
}

interface State {
  products: Product[];
}

const store = createStore({
  state: {
    products: [
      {
        id: "1",
        title: "Sample products",
        description: "Sample lang ito",
      },
    ],
  },
  getters: {
    products({ state }: { state: State }): Product[] {
      return state.products;
    },
  },
  actions: {
    addProduct({ state }: { state: State }, product: Product): void {
      state.products = [...state.products, product];
    },
  },
});

export default store;
