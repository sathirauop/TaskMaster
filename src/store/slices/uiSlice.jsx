// src/store/slices/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  sidebarCollapsed: localStorage.getItem('sidebarCollapsed') === 'true',
  currentView: 'board', // 'board' or 'list' view for tasks
  activeFilters: {
    status: 'all',
    priority: 'all',
  },
  sortBy: 'newest',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('darkMode', state.darkMode);
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      localStorage.setItem('sidebarCollapsed', state.sidebarCollapsed);
    },
    setCurrentView: (state, action) => {
      state.currentView = action.payload;
    },
    setActiveFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.activeFilters[filterType] = value;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  toggleSidebar,
  setCurrentView,
  setActiveFilter,
  setSortBy,
} = uiSlice.actions;

export default uiSlice