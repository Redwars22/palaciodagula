import {create} from "zustand";
import { IStore, Steps } from "../types/types";

export const useGlobalStore = create<IStore>((set, get)=>({
    step: "1",
    selectedBurger: "",
    additions: null,
    price: null,
    zipCode: null,
    number: null,
    paymentMethod: null,
    changeStep: (value: Steps) => set({step: value}),
    setState: (key: string, value: any) => set((s) => ({
        ...s,
        [key] : value
    })),
    eraseState: () => set((s)=>({
        step: "1",
        selectedBurger: "",
        additions: null,
        price: null,
        zipCode: null,
        number: null,
        paymentMethod: null,
    }))
}));