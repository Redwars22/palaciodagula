import { useEffect, useState } from "react";
import Button from "../AndrewKit/button/button.component";
import FlexH from "../Layout/FlexH";
import FlexV from "../Layout/FlexV";
import StepChanger from "../Layout/StepChanger";
import Title from "../Layout/Title";
import { IPaymentType } from "../../types/types";
import Input from "../AndrewKit/input/input.component";

export default function PaymentAndCheckout() {
  const [paymentType, setPaymentType] = useState<IPaymentType>(null);
  const [isPaymentDataOK, setIsPaymentDataOK] = useState<boolean>(false);

  useEffect(() => {
    if (paymentType === "after-delivery") {
      setIsPaymentDataOK(true);
    }
  }, [paymentType]);

  return (
    <FlexV>
      <Title title="Pagamento" />
      <FlexH>
        <Button
          title={"Pagamento na Entrega(Maquininha)"}
          appearance={paymentType === "after-delivery" ? "danger" : "info"}
          action={() => setPaymentType("after-delivery")}
        />
        <Button
          title={"Pagamento com Cartão de Crédito(indisponível)"}
          appearance={paymentType === "credit-card" ? "danger" : "info"}
          action={() => setPaymentType("credit-card")}
          disabled
        />
      </FlexH>
      {paymentType === "credit-card" && (
        <>
          <Input type={"text"} label={"Cartão de Crédito"} showLabel />
          <Input type={"date"} label={"Vencimento do Cartão"} showLabel />
          <Input type={"text"} label={"Nome do Titular do Cartão"} showLabel />
          <Input type={"text"} label={"CPF"} showLabel />
        </>
      )}
      <StepChanger canGoToNextStep={isPaymentDataOK} />
    </FlexV>
  );
}
