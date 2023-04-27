import { IPaymentData } from "../types/types";

export function validateCreditCardData(creditCardData: IPaymentData): boolean {
    if(creditCardData.CCNumber){
        if (!(creditCardData.CCNumber!.length >= 16)) return false;
    } else return false;

    if(creditCardData.CCCPF){
        if (!(creditCardData.CCCPF!.length == 11)) return false;
    } else return false;

    if (creditCardData.CCValidity === null) return false;

    if (creditCardData.CCOwner === null) return false;

    return true;
}