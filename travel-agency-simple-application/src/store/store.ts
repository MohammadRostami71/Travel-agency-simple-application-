import {configureStore} from '@reduxjs/toolkit'
import resortsReducer from './resortSlice';

export const store = configureStore({
    reducer: {
        resort: resortsReducer
    }
});