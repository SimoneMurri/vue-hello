
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao a tutti!',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&usqp=CAU'
        }
    }
}).mount('#app')    