export async function getAddressFromCEP(cep: string){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const res = response.json();
    return res;
}