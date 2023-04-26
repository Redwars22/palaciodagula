import { useEffect, useState } from "react";
import { defaultOrange } from "../../data/colors";
import Typography from "../AndrewKit/typography/typography.component";
import Title from "../Layout/Title";
import Input from "../AndrewKit/input/input.component";
import { getAddressFromCEP } from "../../modules/cepAPI";
import FlexV from "../Layout/FlexV";
import Banner from "../AndrewKit/banner/banner.component";
import StepChanger from "../Layout/StepChanger";
import { useGlobalStore } from "../../modules/store";

export default function Address() {
  const [address, setAddress] = useState<any>({});
  const [cep, setCEP] = useState("");
  const [number, setNumber] = useState("");
  const store = useGlobalStore();

  useEffect(() => {
    async function getCEP() {
      const data = await getAddressFromCEP(cep);
      setAddress(data);
    }

    getCEP();

    if(cep.length === 8 || cep.length === 9){
      store.setState("zipCode", cep)
    }
  }, [cep]);

  return (
    <FlexV>
      <Title title={"Endereço para a Entrega"}></Title>
      <Typography variant="paragraph" color={defaultOrange}>
        <em>Informe seu CEP e o número da sua residência</em>
      </Typography>
      <Input
        type={"text"}
        label={"Informe seu CEP"}
        showLabel
        value={cep}
        onChange={(e) => setCEP(e.target.value)}
      ></Input>
      {!address?.cep && (
        <Banner type={"danger"} title={"Endereço Inválido"}>
          Por favor informe um CEP válido no formato 12345-678!
        </Banner>
      )}
      {address?.cep && (
        <>
          <Banner type={"info"} title={"Seu Endereço"}>
            {`${address?.logradouro}, ${address?.localidade} - ${address?.uf}`}
          </Banner>
          <Input
            type={"text"}
            label={"Informe o número da residência"}
            showLabel
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></Input>
        </>
      )}
      <StepChanger
        canGoToNextStep={address?.cep && number !== "" ? true : false}
      />
    </FlexV>
  );
}
