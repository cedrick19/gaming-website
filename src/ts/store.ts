import { createStore } from "framework7/lite";

// Define user structure
interface User {
  id: number;
  name: string;
  email: string;
}

// Define store state
interface State {
  users: User[];
}

// Create the store
const store = createStore({
  state: {
    users: [] as User[], // Holds user data
  },

  actions: {
    // Fetch users from API and update state
    getUsers({ state }: { state: State }) {
      fetch("some-url")
        .then((res) => res.json())
        .then((users: User[]) => {
          state.users = users;
        })
        .catch((error) => console.error("Error fetching users:", error));
    },
  },

  getters: {
    // Retrieve users from state
    users({ state }: { state: State }) {
      return state.users;
    },
  },
});

export default store;
