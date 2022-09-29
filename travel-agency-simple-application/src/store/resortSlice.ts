import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ResortsType {
    resortsFav: { id: number, title: string, description: string, price: string, imageUrl: string }[];
}

const resortInitialState: ResortsType = {
    resortsFav: [],
}

const resortSlice = createSlice({
    name: 'resort',
    initialState: resortInitialState,
    reducers: {
        addItemToFav: function (state, action: PayloadAction<{ id: number, title: string, description: string, price: string, imageUrl: string }>) {
            const newItem = action.payload;
            const existingItem = state.resortsFav.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.resortsFav.push({
                    id: newItem.id,
                    title: newItem.title,
                    description: newItem.description,
                    imageUrl: newItem.imageUrl,
                    price: newItem.price
                });
            }
        },
        removeItemFromFav(state, action: PayloadAction<number>) {
            const id = action.payload;
            state.resortsFav = state.resortsFav.filter(item => item.id !== id)
        }
    }
});

export const resortActions = resortSlice.actions;
export default resortSlice.reducer;