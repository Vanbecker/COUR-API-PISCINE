const btn = document.querySelector('button')
const dataset = 'bot_frequentation_piscine_tr'
const errorMsg = document.querySelector("errorMsg")


btn.addEventListener('click', onBtnClick)

async function fetchData() {
    try {
        const response = await fetch(`https://opendata.bordeaux-metropole.fr/api/records/1.0/search/?dataset=${dataset}`)

        if (!response.ok) {
            changeColorBtn('blue')
            throw new Error(`Erreur: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        // btnChange()
        // displayData(data);
    }
    catch (error) {
        changeColorBtn('red')
        // btnChange()
        errorMsg.textContent = `${error}`
    }

    function btnChange(type) {
        if (type === 'fetching') {



        }
    }
    function onBtnClick() {
        changeColorBtn('blue')
        fetchData()
    }

    function changeColorBtn(couleur) {
        btn.style.backgroundColor = couleur
    }

}






// let min = 0
// let middle = 40
// let max = 100
// let random = Math.random(max || middle || min);
// // alert(random);
// console.log(random)



