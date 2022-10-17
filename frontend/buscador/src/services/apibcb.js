import axios from "axios";


const apibcb = axios.create({
    baseURL: "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='"
});


export default apibcb;