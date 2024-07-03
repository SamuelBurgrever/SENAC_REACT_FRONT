import axios from "axios";
<<<<<<< HEAD

const baseURL='https://jq8d6sq2-7029.brs.devtunnels.ms'

const apiClient = axios.create({
    baseURL: baseURL,
=======
const baseUrl = 'https://jq8d6sq2-7029.brs.devtunnels.ms';
const apiClient = axios.create({
    baseURL: baseUrl,
>>>>>>> 0b51c1b2a553e7fff73d8e0403d7550b43e6e478
    headers: {
        'Content-Type': 'application/json'
    }
})

<<<<<<< HEAD

export const consultaAcaoPorCodigo = (codigoAcao: string)  => {
   return apiClient.get<any>(`${baseURL}/Share/${codigoAcao}`);
}
=======
export const consultaAcaoPorCodigo = (codigoAcao: string)  => {
    return apiClient.get<any>(`${baseUrl}/Share/${codigoAcao}`);
 }
>>>>>>> 0b51c1b2a553e7fff73d8e0403d7550b43e6e478
