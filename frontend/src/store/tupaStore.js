import { create } from "zustand";
import { insertTupaFile, searchTupa, updateTupaDescrip, updateTupaPrecisa } from "../services/tupaService";

export const useTupaStore = create((set) => ({
  tupa: [],
  currentTupa: {},
  isLoading: false,
  filterSearch: {},

  setTupa: (tupa) => set({ tupa }),
  addTupa: (tupa) => set((state) => ({ tupa: [...state.tupa, tupa] })),
  removeTupa: (tupa) =>
    set((state) => ({ tupa: state.tupa.filter((t) => t.id !== tupa.id) })),
  clearTupa: () => set({ tupa: [] }),
  fetchTupa: async (option, search) => {
    try {
      console.log("Se inicia fetchTupa store");
      set({ filterSearch: { option, search } });
      set({ isLoading: true });
      const data = await searchTupa({ option, search });
      set({ tupa: data });
      console.log("Se finaliza fetchTupa store");
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  setCurrentTupa: (tupa) => set({ currentTupa: tupa }),
  updateDescrip: async (tupaId, descrip) => {
    try {
      console.log("Se inicia updateDescrip store");
      set({ isLoading: true });
      const data = await updateTupaDescrip(tupaId, descrip);      
      console.log("Se finaliza updateDescrip store");
      return data;
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  updateTraining: async (tupaId, training) => {
    try {
      console.log("Se inicia updateTraining store");
      set({ isLoading: true });
      const data = await updateTupaPrecisa(tupaId, training);
      console.log("Se finaliza updateTraining store");
      return data;
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  addTupaFile: async(params) => {
    try {
      console.log("Se inicia addTupaFile store");
      set({ isLoading: true });
      const data = await insertTupaFile(params);
      console.log("Se finaliza addTupaFile store");
      return data;
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  }
}));
