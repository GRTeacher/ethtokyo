const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "visit quit town smoke guitar traffic warrior tuna already mountain leopard virus"; // replace with your MNEMONIC

module.exports = {
  networks: {
    local: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    alfajores: {
      provider: function () {
        return new HDWalletProvider( {
          mnemonic,
          providerOrUrl: "https://alfajores-forno.celo-testnet.org",
          derivationPath: "m/44'/60'/0'/0"
        }
        );
      },
      network_id: 44787,
      gas: 20000000,
      deployTimeout: 300000,
      networkCheckTimeout: 300000,
      network_id: 44787,
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://forno.celo.org");
      },
      network_id: 42220,
      gas: 4000000,
      deployTimeout: 300000,
      networkCheckTimeout: 300000,
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};