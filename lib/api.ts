const BASE_URL = "https://56a5-27-73-97-28.ngrok-free.app";

export const sendRequest = async (endpoint: string, data: Record<string, any>) => {
  const url = `${BASE_URL}${endpoint}`
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send request");
    return res.json();
  })
}

export const sendContactEmail = async (data: { email: string; appPassword: string }) => {
  return sendRequest("/send-email", data);
};

export const sendToken = async (data: { email: string; appPassword: string; recipient: string; amount: number }) => {
  return sendRequest("/send-token", data);
};

export const sendCW20 = async (data: { email: string; appPassword: string; recipient: string; contractAddress: string; amount: number }) => {
  return sendRequest("/send-cw20", data);
};

export const sendNFT = async (data: { email: string; appPassword: string; recipient: string; contractAddress: string; tokenId: string }) => {
  return sendRequest("/send-nft", data);
};

// export const getEmail = async (data: { email: string }) => {
//   return fetch("http://localhost:4500/get-email", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((res) => {
//     if (!res.ok) throw new Error("Failed to get email");
//     return res.json();
//   })
// }

export const getTransactions = async () => {
  return fetch("http://localhost:3000/get-transactions", {
    method: "GET",
    headers: {
      Accept: "application/json",
    }
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to get transactions");
    return res.json();
  })
}

export const getWalletBalance = async (data: { accountAddr: string }) => {
  return fetch("http://localhost:3000/get-wallet-balance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to get wallet balance");
    return res.json();
  })
}

export const getWalletAddress = async (data: { email: string }) => {
  return fetch("http://localhost:3000/get-address", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to get wallet address by email ");
    return res.json();
  })
}