import React,{useState} from 'react';
import { ethers } from 'ethers';

function connect_wallet() {

    const [walletAddress,setWalletAddress]=useState('');

  async function requestAccount(){
    console.log('Requesting account...');

    if(window.ethereum){
      console.log('detected');

      try{
        const accounts=await window.ethereum.request({
          method:"eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);

      }
      catch(error){
        console.log('Error Connecting');
      }

    }
    else{
      alert('MetaMask not detected');
    }

  }

  async function connectWallet(){
    if(typeof window.ethereum !== 'undefined'){
      await requestAccount();

      const provider=new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  return (
    <div>
      <button
          onClick={requestAccount}
        >
          {connectWallet}
        </button>
        <h3>Wallet Address : {walletAddress}</h3>
    </div>
  )
}

export default connect_wallet
