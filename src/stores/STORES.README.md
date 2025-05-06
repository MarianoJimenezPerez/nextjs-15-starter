# STORES

### HOW IT WORKS?

The stores are organized into separate folders, each representing a specific application state. Each store follows these guidelines:

1. **Structure:**

   - Every store resides in its own subfolder.
   - The folder contains:
     - `constants.ts`: Defines the initial state of the store.
     - `types.ts`: Defines the data types and store interface.
     - `useStore.ts`: Implements the store logic using Zustand.

2. **Store Definition:**

   - Each store is implemented as a custom hook using Zustand.
   - The store contains the state and actions to modify it.
   - Types are defined using TypeScript to ensure type safety.

3. **Typical Structure:**

   ```typescript
   // constants.ts
   export const initialState = {
     isOpen: false,
     data: null,
     // ... more initial state
   };

   // types.ts
   export interface StoreState {
     isOpen: boolean;
     setIsOpen: (isOpen: boolean) => void;
     data: Data | null;
     setData: (data: Data | null) => void;
     // ... more properties and actions
   }

   // useStore.ts
   import { create } from 'zustand';
   import { StoreState } from './types';
   import { initialState } from './constants';

   export const useStore = create<StoreState>((set) => ({
     ...initialState,
     setIsOpen: (isOpen) => set({ isOpen }),
     setData: (data) => set({ data }),
     // ... more implementations
   }));
   ```

4. **Using the Store:**

   Stores can be used in any React component:

   ```typescript
   import { useStore } from "@/stores/example-store";

   function Component() {
     const { isOpen, setIsOpen, data } = useStore();

     return (
       <div>
         <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
         {data && <div>{data.name}</div>}
       </div>
     );
   }
   ```

5. **Complete Store Example:**

   Here's an example of how a typical store is structured:

   ```typescript
   // types.ts
   export type SortDirection = 'asc' | 'desc';

   export interface LayoutState {
     isModalOpen: boolean;
     setIsModalOpen: (isOpen: boolean) => void;
     activeItem: Item | null;
     setActiveItem: (item: Item | null) => void;
     searchTerm: string;
     setSearchTerm: (term: string) => void;
     sortDirection: SortDirection;
     setSortDirection: (direction: SortDirection) => void;
   }

   // constants.ts
   export const initialLayoutState = {
     isModalOpen: false,
     activeItem: null,
     searchTerm: '',
     sortDirection: 'asc' as SortDirection,
   };

   // useStore.ts
   import { create } from 'zustand';
   import { LayoutState } from './types';
   import { initialLayoutState } from './constants';

   export const useLayoutStore = create<LayoutState>((set) => ({
     ...initialLayoutState,
     setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
     setActiveItem: (item) => set({ activeItem: item }),
     setSearchTerm: (term) => set({ searchTerm: term }),
     setSortDirection: (direction) => set({ sortDirection: direction }),
   }));
   ```

By following this approach, the project maintains consistency and scalability in application state management.
