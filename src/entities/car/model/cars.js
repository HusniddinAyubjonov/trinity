import lamboUrus from '../../../shared/assets/img/car_lambo_urus.png'
import ferrariRoma from '../../../shared/assets/img/car_ferrari_roma.png'
import rollsGhost from '../../../shared/assets/img/car_rolls_ghost.png'
import porsche911 from '../../../shared/assets/img/car_porsche_911.png'

// Single source of truth for cars, used both by the popular-car list
// (brand/model/price, image swaps on select) and the car-catalog grid
// (name/image).
export const CARS = [
  { brand: 'Lamborghini', model: 'Urus', name: 'Lamborghini Urus', img: lamboUrus, price: '2 400$' },
  { brand: 'Ferrari', model: 'Roma', name: 'Ferrari Roma', img: ferrariRoma, price: '1 800$' },
  { brand: 'Rolls-Royce', model: 'Ghost', name: 'Rolls-Royce Ghost', img: rollsGhost, price: '3 200$' },
  { brand: 'Porsche', model: '911 Turbo S', name: 'Porsche 911 Turbo S', img: porsche911, price: '2 100$' },
]
