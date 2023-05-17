import Button from "../AndrewKit/button/button.component";
import FlexH from "./FlexH";
import { useGlobalStore } from "../../modules/store";
import { useCallback } from "react";
import { Steps } from "../../types/types";

export default function StepChanger({
  canGoToNextStep,
}: {
  canGoToNextStep: boolean;
}) {
  const step = Number(useGlobalStore().step);
  const store = useGlobalStore();

  return (
    <>
      {step === 1 && (
        <Button
          appearance="warning"
          action={() => store.changeStep("2")}
          icon={"cart-plus"}
          title={"Peça já o seu!"}
        />
      )}
      {step >= 2 && step < 7 && (
        <FlexH>
          <Button
            title={"Voltar"}
            appearance={"danger"}
            icon={"caret-left-square"}
            action={() => {
              if (step > 1) store.changeStep(String(step - 1) as Steps);
            }}
          />
          <Button
            title={"Prosseguir"}
            disabled={!canGoToNextStep}
            appearance={"warning"}
            icon={"caret-right-square"}
            action={() => {
              if (step <= 7) store.changeStep(String(step + 1) as Steps);
            }}
          />
        </FlexH>
      )}
      {step === 7 && (
        <Button
          title={"Fazer Outro Pedido"}
          appearance={"warning"}
          icon={"cart-plus"}
          action={() => {
            store.eraseState();
          }}
        />
      )}
    </>
  );
}
