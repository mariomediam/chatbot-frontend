import { create } from 'zustand';
import { searchTupa } from '../services/tupaService';

export const useTupaStore = create((set) => ({
    tupa: [],
    currentTupa: {},
    isLoading: false,


    setTupa: (tupa) => set({ tupa }),
    addTupa: (tupa) => set((state) => ({ tupa: [...state.tupa, tupa] })),
    removeTupa: (tupa) => set((state) => ({ tupa: state.tupa.filter((t) => t.id !== tupa.id) })),
    clearTupa: () => set({ tupa: [] }),
    fetchTupa: async (option, search) => {
        try {
            console.log("Se inicia fetchTupa store");
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
    }));

