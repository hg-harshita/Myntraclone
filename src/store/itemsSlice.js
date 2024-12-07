import {createSlice} from "@reduxjs/toolkit"
import { DEFAULT_ITEMS } from "../Data/items";

const itemsSlice = createSlice({
    name: 'items',
    initialState: DEFAULT_ITEMS,
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
    }
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;