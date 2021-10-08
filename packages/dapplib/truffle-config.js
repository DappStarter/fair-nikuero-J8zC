require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food track remember stereo purity hundred light army gauge'; 
let testAccounts = [
"0x25a08dd963fa2cb494b85f5a0845948ec57840b12a724a76d225b072e24f3e87",
"0x9a79d4af19670bd000a602c534b315841be0292bd14f33c79b35f1e41b1d4d2d",
"0x86f15b94f8405bab32b4defbd40c6018ef6d03a5127af881fdda0b13e87c714f",
"0x1c1110aba861d6ef51f78caff8b928434b3d8188c4d9e7cfdf2d3766fba2f348",
"0x6a54ef9a14a8fdf2da86b65cc07845eeac467d0da6063baed0b1e28328e2c863",
"0x74751e21bdba9c877d7fd5abc78810dd474875b96487a82d8c8416192b28dac6",
"0x89fdae0593700b498bd312e8f16ab921f955a900a6444bc37fc601db4dd1648f",
"0x84230ede440a262384e2d53557155b4175402bb63dc5a92657c5122e60c56365",
"0xff1ffad7f3379a8c661e7c1b02f94e6470b91d2ce2ca83bccd3dad2dd726b6df",
"0xcc6c7eb66e2b1e279466769024e13a2b14db032fa0875a258f49571b83ca8154"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

