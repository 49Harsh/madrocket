import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admissionForms: [],
  deadlines: [
    { id: 1, date: '2024-08-15', description: 'Early Admission Deadline' },
    { id: 2, date: '2024-09-30', description: 'Regular Admission Deadline' },
    { id: 3, date: '2025-01-15', description: 'Late Admission Deadline' },
  ],
};

const admissionsSlice = createSlice({
  name: 'admissions',
  initialState,
  reducers: {
    addAdmissionForm: (state, action) => {
      state.admissionForms.push(action.payload);
    },
    setDeadlines: (state, action) => {
      state.deadlines = action.payload;
    },
  },
});

export const { addAdmissionForm, setDeadlines } = admissionsSlice.actions;
export default admissionsSlice.reducer;