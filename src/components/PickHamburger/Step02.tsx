import { useCallback, useEffect, useState } from "react";
import { burgers } from "../../data/burgers";
import Input from "../AndrewKit/input/input.component";
import FlexV from "../Layout/FlexV";
import StepChanger from "../Layout/StepChanger";
import Title from "../Layout/Title";
import Burger from "../Layout/Burger";
import { useGlobalStore } from "../../modules/store";
import { Steps } from "../../types/types";

export default function PickHamburger() {
  const store = useGlobalStore();

  const renderStepChanger = useCallback(
    () => (
      <StepChanger
        canGoToNextStep={
          store.selectedBurger !== "" && store.selectedBurger !== null
            ? true
            : false
        }
      />
    ),
    [store.selectedBurger]
  );

  return (
    <FlexV>
      <Title title={"Escolha o Tamanho do Hambúrguer"}></Title>
      <Burger />
      <select
        name=""
        id=""
        onChange={(e) => {
          store.setState("selectedBurger", e.target.value);
        }}
      >
        <option value=""></option>
        {burgers.map((burger) => (
          <option
            value={burger.value}
          >{`${burger.text} - R$${burger.price}`}</option>
        ))}
      </select>
      {renderStepChanger()}
    </FlexV>
  );
}
