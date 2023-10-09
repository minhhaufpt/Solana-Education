import { useRouter } from 'next/navigation';
import type { NextPage } from 'next';
import styles from '../../styles/payment.module.css';
import { useState } from 'react';
const Index: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const createSession = async () => {
    setIsLoading(true);
    const endpoint = '/api/create-session';
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify([
        {
          name: 'Avatar',
          price: 0.5,
          quantity: 1,
          image:
            'https://bafkreidwrwquefmvof2c2rjwpt3gg2thtxcdh52fy7zg65lqki3hcivbwe.ipfs.nftstorage.link',
          size: 'PNG',
        },
      ]),
    };
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data);
    if (data.payment_url) {
      // console.log(data.payment_url);
      router.push(data.payment_url);
    }
    setIsLoading(false);
  };
  return (
    <main className={styles.main}>
      <button
        className={styles.button}
        onClick={createSession}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Checkout'}
      </button>
    </main>
  );
};

export default Index;
