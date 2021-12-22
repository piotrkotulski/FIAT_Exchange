const currency1 = document.querySelector('#currency1');
const currency2 = document.querySelector('#currency2');
const amount1 = document.querySelector('.amount1');
const amount2 = document.querySelector('.amount2');
//const inforate = document.querySelector('#infoRate')
const bttExchanche = document.querySelector('#exchange');

const exchanger = () => {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency1.value}/`)
    .then(res => res.json())
    .then(data => {
        const currency1Val =currency1.value;
        const currency2Val =currency2.value;
        const exRate = data.rates[0].mid;
        
        amount2.value = (amount1.value * exRate).toFixed(2);
         
        console.log(exRate)
    })
}
bttExchanche.addEventListener('click', exchanger);

