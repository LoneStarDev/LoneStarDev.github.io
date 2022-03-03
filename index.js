
   const isPhantomInstalled = window.solana && window.solana.isPhantom
   const getProvider = () => {
       if ("solana" in window) {
         const provider = window.solana;
         if (provider.isPhantom) {
           return provider;
         }
       }
       window.open("https://phantom.app/", "_blank");
     };


function getAccount() {
    window.solana.connect
    window.solana.request({method:"connect"})
    window.solana.on("connect", () => console.log("connected!"))


}

function disconnectAccount() {
    window.solana.disconnect()
    window.solana.on('disconnect'),
    () => 
    console.log("disconnected!")
}
