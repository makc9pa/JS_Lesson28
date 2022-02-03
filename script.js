const selectOption = document.getElementById('type')
const carPrice = document.getElementById('carPrice')
const car = document.getElementById('car')
car.textContent = 'Выбери тачку'

const chooseCars = () => {
    return fetch('cars.json')
    .then(res => res.json())
}

const showCars = function(data) {

    data.cars.forEach(element => {
        let opt = document.createElement('option')
        opt.innerHTML = element.brand;
        selectOption.appendChild(opt)
    })

    selectOption.addEventListener('change', () => {
        chooseCars()
        let index = selectOption.options.selectedIndex
        let carModel = data.cars[index - 1]
        car.textContent = `Тачка ${carModel.brand} ${carModel.model}`
        carPrice.textContent = `Цена: ${carModel.price}$`
    })
}

chooseCars()
    .then(data => showCars(data))
    .catch(e => {
        console.log(e)
    })