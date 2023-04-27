import { useEffect, useState } from "react";
import Button from "../AndrewKit/button/button.component";
import FlexH from "../Layout/FlexH";
import FlexV from "../Layout/FlexV";
import StepChanger from "../Layout/StepChanger";
import Title from "../Layout/Title";
import { IPaymentData, IPaymentType } from "../../types/types";
import Input from "../AndrewKit/input/input.component";
import { validateCreditCardData } from "../../modules/validateCC";

export default function PaymentAndCheckout() {
  const [paymentType, setPaymentType] = useState<IPaymentType>(null);
  const [isPaymentDataOK, setIsPaymentDataOK] = useState<boolean>(false);
  const [creditCardData, setCreditCardData] = useState<IPaymentData>({
    CCNumber: null,
    CCCPF: null,
    CCOwner: null,
    CCValidity: null
  });

  useEffect(() => {
    if (paymentType === "after-delivery") {
      setIsPaymentDataOK(true);
    }

    if (paymentType === "credit-card")
      setIsPaymentDataOK(validateCreditCardData(creditCardData));
  }, [paymentType]);

  return (
    <FlexV>
      <Title title="Pagamento" />
      <FlexV>
      <Button
        title={"Pagamento na Entrega(Maquininha)"}
        appearance={paymentType === "after-delivery" ? "danger" : "info"}
        action={() => setPaymentType("after-delivery")}
      />
      <Button
        title={"Pagamento com Cartão de Crédito"}
        appearance={paymentType === "credit-card" ? "danger" : "info"}
        action={() => setPaymentType("credit-card")}
      />
      </FlexV>
      {paymentType === "credit-card" && (
        <>
          <Input type={"text"} label={"Cartão de Crédito"} showLabel onChange={(e) => {
            setCreditCardData((s) => ({
              ...s,
              CCNumber: e.target.value
            }))
          }} />
          <Input type={"date"} label={"Vencimento do Cartão"} showLabel onChange={(e) => {
            setCreditCardData((s) => ({
              ...s,
              CCValidity: e.target.value
            }))
          }} />
          <Input type={"text"} label={"Nome do Titular do Cartão"} showLabel onChange={(e) => {
            setCreditCardData((s) => ({
              ...s,
              CCOwner: e.target.value
            }))
          }} />
          <Input type={"text"} label={"CPF (sem pontuação)"} showLabel onChange={(e) => {
            setCreditCardData((s) => ({
              ...s,
              CCCPF: e.target.value
            }))
          }} />
        </>
      )}
      <StepChanger canGoToNextStep={isPaymentDataOK} />
    </FlexV>
  );
}
