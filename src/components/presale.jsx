import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { bnb, bgstake, logo, discount, line } from '../assets';
import Loader from './Loader';
import Notification from './Notification';



const Presale = () => {
  const [isLoading, setLoading] = useState(false);
  const [amountBNB, setAmountBNB] = useState('');
  const [notification, setNotification] = useState(null);
  const [address, setAddress] = useState(''); // Wallet address placeholder

  // Show notifications
  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Handle BNB Submission
  const handleSubmit = async () => {
    if (!address) {
      showNotification('error', 'Please connect wallet');
      return;
    }

    const amountNumber = parseFloat(amountBNB);

    if (!amountBNB || isNaN(amountNumber) || amountNumber <= 0) {
      showNotification('error', 'Please enter a valid amount to stake.');
      return;
    }

    if (amountNumber < 0.001) {
      showNotification('error', 'Min buy 1 URA');
      return;
    }

    try {
      setLoading(true);
      console.log(address);
      // Simulate buyURA function. Replace with real transaction logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock delay for transaction
      setLoading(false);
      showNotification('success', `Successfully bought ${amountNumber * 1000} URA.`);
    } catch (error) {
      console.error(error);
      showNotification(
        'error',
        'Please ensure you have enough BNB in your wallet to cover the transaction costs.'
      );
      setLoading(false);
    }
  };

  // Shorten wallet address for display
  const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;
  };

  // Start and end dates for the progress bar
  const startDate = '2024-08-15';
  const endDate = '2024-10-20';

  // Opens the token contract on BSCScan
  const openContract = () => {
    window.open(
      '',
      '_blank'
    );
  };

  // Adds URA token to MetaMask
  const addTokenToWallet = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: '',
          options: {
            address: '',
            symbol: 'URA',
            decimals: 18,
            image: '',
          },
        },
      });
    } catch (error) {
      console.error('Error adding token to wallet:', error);
    }
  };

  return (
    <div id='about'>
      <div
        style={{
          backgroundSize: 'contain, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      >
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}

        <div className='flex w-full justify-center items-center'>
          <div className='flex md:flex-row flex-col items-start justify-between md:p-16 md:w-full w-10/12'>
            <div className='m-auto flex justify-start flex-col mt-10 mf:mr-10 md:w-1/2 mb-0'>
              <div className="flex justify-center">
                <img src={logo} alt="Labubu Logo" className="w-64 h-64 object-contain" />
              </div>

              <div className="mt-6 bg-[#F7EEDD] border-2 border-black rounded-xl p-6 md:p-8 w-2/3 m-auto">
                <p className="text-lg md:text-xl text-gray-800 ">
                  LABUBU Coin is more than just a digital currency; it's a celebration of art, creativity, and community. Built on the fast and efficient Solana blockchain, LABUBU Coin empowers holders to engage in exclusive events, collect rare Labubu editions, and even contribute to the future of artistic endeavors.
                </p>
              </div>
            </div>


            <div className='flex flex-col items-center justify-start w-full md:w-1/2 '>
              <div className='mt-8 md:mt-3 p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-black-gradient bg-opacity-75 rounded-xl'>
                <div className='flex flex-row items-center m-auto'>
                  <h2 className='md:text-3xl text-2xl font-bold text-lime-200'>
                    Labubu Presale
                  </h2>
                </div>

                <div className='flex flex-col py-6 pl-0 rounded-lg w-full'>
                  <p className='text-lg text-white mb-1 flex justify-between'>
                    <div className='font-semibold'>Presale Phase 1:</div>{' '}
                    <div>50,000,000 LABU</div>
                  </p>
                  <p className='text-lg text-white mb-1 flex justify-between'>
                    <div className='font-semibold'>Presale Rate:</div>{' '}
                    <div>1 BNB = 1000 LABU</div>
                  </p>
                  <p className='text-lg text-white mb-1 flex justify-between'>
                    <div className='font-semibold'>Min Buy:</div> <div>1 LABU</div>
                  </p>
                  <p className='text-lg text-white mB-1 flex justify-between'>
                    <div className='font-semibold'>Max Buy:</div> <div>10000 LABU</div>
                  </p>
                </div>

                <div className='flex items-center justify-center py-4 pt-0 w-full space-x-4'>
                  <button
                    onClick={openContract}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-xl'
                  >
                    Token Contract
                  </button>
                  <button
                    onClick={addTokenToWallet}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-xl hidden md:block'
                  >
                    Add Token to Wallet
                  </button>
                </div>

                <div className='mb-8 md:mb-3 p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-80 w-full my-3 eth-card white-glassmorphism'>
                  <div className='flex justify-between flex-col w-full h-full'>
                    <div className='flex justify-between items-start'>
                      <div className='flex flex-row items-center justify-between '>
                        <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                          <img src={bnb} alt='BNB logo' className='w-8 h-8' />
                        </div>
                        <span className='ml-2 text-white font-semibold'> Labubu </span>
                      </div>
                      <FaInfoCircle fontSize={17} color='#fff' />
                    </div>
                    <div>
                      {address ? (
                        <p className='text-white font-light text-sm'>
                          {shortenAddress(address)}
                        </p>
                      ) : (
                        <p className='text-white font-light text-sm'>
                          Please Connect Your Wallet
                        </p>
                      )}
                      <p className='text-white font-semibold text-lg mt-1'>
                        Binance Smart Chain
                      </p>
                    </div>
                  </div>
                </div>

                <div className='my-2 w-full flex items-center rounded-xl text-white text-2xl relative'>
                  <div className='absolute inset-y-0 left-0 pl-4 flex items-center'>
                    <img src={bnb} alt='BNB Logo' className='h-6 w-6' />
                  </div>
                  <input
                    placeholder='Amount (BNB)'
                    name='BNB'
                    type='text'
                    className='my-2 pl-14 w-full bg-gradient rounded-sm p-4 outline-none text-white border-none text-sm  text-2xl rounded-xl'
                    onChange={(e) => setAmountBNB(e.target.value)}
                  />
                </div>

                <div className='text-white flex items-center'>
                  <img src={logo} alt='URA Token' className='w-8 h-8 mr-2' />
                  <div>
                    <span className='font-semibold'>Labubu received:</span>{' '}
                    {amountBNB * 1000} LABU
                  </div>
                </div>

                <div className='h-[1px] w-full bg-gray-400 my-2'></div>
                {address ? (
                  isLoading ? (
                    <Loader />
                  ) : (
                    <button
                      type='button'
                      onClick={handleSubmit}
                      className='text-white bg-gradient hover:bg-gradient-hover w-full mt-2 p-2 rounded-full cursor-pointer font-bold'
                    >
                      BUY NOW
                    </button>
                  )
                ) : (
                  <button className='mt-5 font-semibold text-[16px] w-full text-white min-h-[40px] px-4 rounded-3xl bg-gradient-hover transition-all duration-700 ease-in-out cursor-default'>
                    Please Connect Your Wallet
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
