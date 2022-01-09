import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice'
import themeReducer from '../Features/Theme/ThemeSlice';

export const store = configureStore({
    reducer: {
      counter:counterReducer,
      theme:themeReducer,
    },
  })
