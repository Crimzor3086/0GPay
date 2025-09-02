import { ethers } from "ethers";

const WALLET_KEY = "0gpay_wallet";

export function createWallet() {
  const wallet = ethers.Wallet.createRandom();
  localStorage.setItem(WALLET_KEY, wallet.privateKey);
  return wallet;
}

export function getWallet() {
  const pk = localStorage.getItem(WALLET_KEY);
  if (!pk) return null;
  try {
    return new ethers.Wallet(pk);
  } catch {
    return null;
  }
}

export function restoreWallet(privateKey) {
  try {
    const wallet = new ethers.Wallet(privateKey);
    localStorage.setItem(WALLET_KEY, wallet.privateKey);
    return wallet;
  } catch {
    return null;
  }
}

export function exportWallet() {
  const pk = localStorage.getItem(WALLET_KEY);
  return pk || "";
}

export function clearWallet() {
  localStorage.removeItem(WALLET_KEY);
}
