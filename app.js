async function connect() {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    document.getElementById("result").innerText =
      "Connected: " + accounts[0];

  } catch (e) {
    console.error(e);

    document.getElementById("result").innerText =
      "REJECTED BY WALLET";
  }
}
