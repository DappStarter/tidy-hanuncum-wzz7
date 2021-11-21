require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food maid rescue stick small install hat army gate'; 
let testAccounts = [
"0x99de244f4f810a2d58144778283d0f7c8ed63de6c302405b58477986e9daa9dc",
"0x60cc145eb119f7d573ed2bb6797d49052dc5d9a49b1f0764d3eddf4e16e93080",
"0xf81a1776baeb0efef61deed6220d7fd065f2f76da4e272fefb817c9242b88036",
"0x7f93179c6cbf8dd0868816b9c7026f45bba088de424a356c474bf81cef903ca0",
"0xf3b0079e385450ff191b483839014952e8871de41734fd8bb07c3b7f829495c6",
"0x71df385f54b10f854dae123a7a228442190374609565097bddac47cbe41328f5",
"0xdf0a16bc2c1e612fe6c576d5aeeb83e2fe64f7636f8f7174f76cef190373e473",
"0x3de5961b25e5aa375df82c0e04944d1628ee6424e101a6978a057e35476fb10b",
"0x3ecab220112171e04fcb5f01dad999bc8b3e79a51dc600f36863c2fbb8e46101",
"0x739d59254acb5783c0ce27a4e68b0807f0e6399d2cfa7e2f2d5d24a2cda96fb4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

