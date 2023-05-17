export interface IStore {
    step: Steps;
    selectedBurger: string;
    additions: null | IItems[];
    price: null | number;
    zipCode: null | string;
    number: null | string;
    paymentMethod: IPaymentType;
    changeStep: (value: Steps) => void;
    setState: (key: string, value: any) => void;
    eraseState: () => void;
}

export type Steps = "1" | "2" | "3" | "4" | "5" | "6" | "7";

export interface IBurger {
    text: string;
    value: string;
    price: number;
}

export interface IItems {
    title: string;
    price: number;
}

export type IPaymentType = "credit-card" | "after-delivery" | null;

export type IPaymentData = {
    CCNumber: string | null;
    CCOwner: string | null;
    CCValidity: string | null;
    CCCPF: string | null;
}