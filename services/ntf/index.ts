import axios from 'axios';
import { signAndConfirmTransactionFe } from './utilityfunc';
export const NFTService = {
  getAll: async (address_get: string) => {
    return (
      await axios.get(
        'https://api.shyft.to/sol/v1/nft/read_all?network=devnet&address=' +
          address_get,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': '3rqYpDYWmSPMnc5r',
          },
        }
      )
    ).data;
  },
  getMetadata: async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  },
  transfer: async (token_address: string, to_address: string) => {
    const callback = (signature: any, result: any) => {
      console.log('Signature ', signature);
      console.log('result ', result);
    };
    var raw = {
      network: 'devnet',
      token_address: token_address,
      from_address: 'HmWXFySFf9nN5yCYaatZZceJTH4Wd3FdwvhBkiXBHVea',
      to_address: to_address,
      transfer_authority: false,
      fee_payer: 'HmWXFySFf9nN5yCYaatZZceJTH4Wd3FdwvhBkiXBHVea',
    };
    return axios
      .post('https://api.shyft.to/sol/v1/nft/transfer_detach', raw, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '3rqYpDYWmSPMnc5r',
        },
      })
      .then(async (res) => {
        console.log(res);
        if (res.data.success === true) {
          const transaction = res.data.result.encoded_transaction;
          const ret_result = await signAndConfirmTransactionFe(
            'devnet',
            transaction,
            callback
          );
          console.log(ret_result);
          return ret_result;
        }
      })
      .catch((err) => {
        console.warn(err);
        return null;
      });
  },
  
};
