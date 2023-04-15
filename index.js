import CONTRACT_ABI from C:\Users\vince\123tokyo\grteachertokyo\abis\quiz.json

let provider;
let signer;
let contract;

async function connectWallet() {
  // ... (code to connect wallet)

  // Initialize the contract object after setting the provider
  const contractAddress = '0x61a495F74E49768ADE3DAE4569A9775f169a4DF1'; // Replace this with the actual contract address
  contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());
}

async function loadQuestion() {
  try {
    const question = await contract.getQuestion();
    document.getElementById("question").innerText = question;
  } catch (error) {
    console.error("Error loading question:", error);
  }
}

document.getElementById("submit").addEventListener("click", submitAnswer);

async function submitAnswer() {
  const answer = document.getElementById("answer").value;
  if (!answer) return;

  try {
    const tx = await contract.submitAnswer(answer);
    console.log("Transaction submitted:", tx);
    alert("Answer submitted!");
  } catch (error) {
    console.error("Error submitting answer:", error);
  }
}
