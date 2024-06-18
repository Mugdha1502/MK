import { createSlice } from '@reduxjs/toolkit';


const loadCountFromLocalStorage = () => {
  const storedCount = localStorage.getItem('visitorCount');
  return storedCount ? parseInt(storedCount, 10) : 0;
};

const saveCountToLocalStorage = (count) => {
  localStorage.setItem('visitorCount', count);
};

export const visitorSlice = createSlice({
  name: 'visitor',
  initialState: {
    count: loadCountFromLocalStorage(),
  },
  reducers: {
    incrementVisitorCount: (state) => {
      state.count += 1;
      saveCountToLocalStorage(state.count); 
    },
  },
});

export const { incrementVisitorCount } = visitorSlice.actions;

export default visitorSlice.reducer;
