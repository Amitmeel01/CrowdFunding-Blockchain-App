"use client";
import { ethers } from 'ethers';
import { CrowdFundingAbi, CrowdFundingAddress } from './contant';
import React, { useEffect, useState } from 'react';

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contracts";

    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const fetchContract = async () => {
            try {
                if (!window.ethereum) {
                    console.log("MetaMask not detected");
                    return;
                }

                const provider = new ethers.BrowserProvider(window.ethereum);
                await provider.send('eth_requestAccounts', []);

                const signer = await provider.getSigner();
                const address = await signer.getAddress();
                console.log("Address:", address);

                const contract = new ethers.Contract(
                    CrowdFundingAddress,
                    CrowdFundingAbi,
                    signer
                );

                setAccount(address);
                setProvider(provider);
                setContract(contract);
            } catch (err) {
                console.error("Error initializing contract:", err);
            }
        };

        fetchContract();
    }, []);

    const createCampaign = async (campaign) => {
        const { title, desc, amount, deadline } = campaign;

        try {
            if (!contract) {
                console.error("Contract not initialized");
                return;
            }

            const transaction = await contract.createCampigen(
                account,
                desc,
                title,
                ethers.parseEther(amount),
                new Date(deadline).getTime()
            );
            await transaction.wait();
            console.log("Campaign created:", transaction);
        } catch (err) {
            console.error("Error creating campaign:", err);
        }
    };

    const getCampaigns = async () => {
        try {
            if (!contract) return [];
            const campaigns = await contract.getCampignes();
           

            return campaigns.map((item, i) => ({
                owner: item.owner,
                title: item.title,
                description: item.desc,
                target: item.target,
                deadline: Number(item.deadline),
                amountCollected: item.collectAmount.toString(),
                pid: i,
            }));
        } catch (err) {
            console.error("Error fetching campaigns:", err);
            return [];
        }
    };
 

    const getUserCampaigns = async () => {
        try {
            const allCampaigns = await getCampaigns();
            return allCampaigns.filter((campaign) => campaign.owner === account);
        } catch (err) {
            console.error("Error fetching user campaigns:", err);
            return [];
        }
    };

    const donate = async (pid, amount) => {
        try {
            if (!contract) return;
            const transaction = await contract.donateToCampigen(pid, {
                value: ethers.parseEther(amount),
            });
            await transaction.wait();
            window.location.reload();
            return transaction;
        } catch (err) {
            console.error("Error donating:", err);
        }
    };

    const getDonators = async (pid) => {
        try {
            if (!contract) return [];
            const [donators, donations] = await contract.getDonaers(pid);

            return donators.map((donator, i) => ({
                donator,
                donation: ethers.formatEther(donations[i]),
            }));
        } catch (err) {
            console.error("Error fetching donators:", err);
            return [];
        }
    };

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                alert("MetaMask not detected. Please install MetaMask!");
                return;
            }

            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccount(accounts[0]);
        } catch (err) {
            console.error("Error connecting wallet:", err);
        }
    };
    const contextValue = {
        account,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonators,
        connectWallet,
      };
    
      console.log("Context Value in Provider:", contextValue);
    return (
        <CrowdFundingContext.Provider
            value={{
                titleData,
                account,
                createCampaign,
                getCampaigns,
                getUserCampaigns,
                donate,
                getDonators,
                connectWallet,
            }}
        >
            {children}
        </CrowdFundingContext.Provider>
    );
};
