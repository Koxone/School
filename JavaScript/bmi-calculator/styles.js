const buttonMetric = document.getElementById('button-metric') // Sin #
const buttonImperial = document.getElementById('button-imperial') // Sin #
const imperial = document.querySelectorAll('.imperial') // NodeList
const metric = document.querySelectorAll('.metric') // NodeList
const input = document.querySelector('.input-general-container') // Un solo elemento
let inputValue = document.querySelectorAll('input:not([type="radio"])')
let heightValue = 0
let weightValue = 0
let ftValue = 0
let inchValue = 0
let stValue = 0
let lbsValue = 0
let bmiResult = 0
let bmiHTML = document.getElementById('result-bmi')

const bmiReference = {
  underweight: { min: 0, max: 18.5 },
  healthyweight: { min: 18.5, max: 24.9 }, //22
  overweight: { min: 25, max: 29.9 }, //22-29
  obese: { min: 30, max: 100 },
}

const idealWeight = {
  underweight: { min: 'Menos de 50kg', max: 'Depende de la altura' },
  healthyweight: { min: '50kg', max: '85kg' },
  overweight: { min: '85kg', max: '100kg' },
  obese: { min: 'Más de 100kg', max: 'Depende de la altura' },
}

document
  .getElementById('height')
  .addEventListener('input', function (eventHeight) {
    heightValue = parseFloat(eventHeight.target.value) || 0
    calcular()
  })
document
  .getElementById('weight')
  .addEventListener('input', function (eventWeight) {
    weightValue = parseFloat(eventWeight.target.value) || 0
    calcular()
  })

document.getElementById('ft').addEventListener('input', function (eventFt) {
  ftValue = parseFloat(eventFt.target.value) || 0
  calcular()
})
document.getElementById('inch').addEventListener('input', function (eventInch) {
  inchValue = parseFloat(eventInch.target.value) || 0
  calcular()
})
document.getElementById('st').addEventListener('input', function (eventSt) {
  stValue = parseFloat(eventSt.target.value) || 0
  calcular()
})
document.getElementById('lbs').addEventListener('input', function (eventLbs) {
  lbsValue = parseFloat(eventLbs.target.value) || 0
  calcular()
})

function calcular() {
  let bmiResult = 0 // Asegura que siempre inicie en 0
  let z = ''

  if (buttonMetric.checked) {
    // Cálculo para el sistema MÉTRICO (kg / m^2)
    let heightInMeters = heightValue / 100 // Convierte CM a Metros
    if (heightInMeters > 0 && weightValue > 0) {
      bmiResult = weightValue / heightInMeters ** 2
    }
    // Proceso para calcular Z
    if (heightValue >= 100 && heightValue <= 999) {
      // Asegurar que tiene 3 dígitos
      let x = heightValue - 100 // Restar 100
      let minWeight = x - 5
      let maxWeight = x + 5
      z = `${minWeight}kgs - ${maxWeight}kgs` // Sirve para meter una variable como string (texto)
    }
  } else if (buttonImperial.checked) {
    // Cálculo para el sistema IMPERIAL (lbs / in^2) * 703
    let weightInLbs = stValue * 14 + lbsValue // Convierte Stones y Libras a Libras
    let heightInInches = ftValue * 12 + inchValue // Convierte Pies y Pulgadas a Pulgadas

    if (heightInInches > 0 && weightInLbs > 0) {
      bmiResult = (weightInLbs / heightInInches ** 2) * 703
    }
  }
  // Actualizar el resultado en la interfaz
  document.getElementById('result-bmi').textContent = bmiResult.toFixed(1)
  let suggestWeight = document.getElementById('suggest')
  let idealWeight = document.getElementById('ideal-weight')

  if (bmiResult < 18.5) {
    suggestWeight.textContent = 'underweight'
    idealWeight.textContent = z
  } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
    suggestWeight.textContent = 'in a healthy weight'
    idealWeight.textContent = z
  } else if (bmiResult >= 25 && bmiResult <= 29.9) {
    suggestWeight.textContent = 'overweight'
    idealWeight.textContent = z
  } else if (bmiResult >= 30 && bmiResult <= 100) {
    suggestWeight.textContent = 'obese'
    idealWeight.textContent = z
  }
}
//Funcion para borrar el 0 en Input
inputValue.forEach(function (value) {
  value.addEventListener('focus', function () {
    let welcomeContainer = document.querySelector('.welcome-container')
    let bmiContainer = document.querySelector('.bmi-container')
    if (window.matchMedia('(min-width: 1440px').matches) {
      welcomeContainer.style.display = 'none'
      bmiContainer.style.display = 'flex'
    } else {
      bmiContainer.style.display = 'block'
      welcomeContainer.style.display = 'none'
    }
    if (value.value === '0') {
      value.value = ''
    }
  })
})
//Funcion para regresar el 0 al Input si se quita focus
inputValue.forEach(function (value) {
  value.addEventListener('blur', function () {
    let pruebaBmi = bmiHTML
    if (value.value === '0') {
      pruebaBmi.textContent = '00.0'
    }
    let welcomeContainer = document.querySelector('.welcome-container')
    let bmiContainer = document.querySelector('.bmi-container')
    welcomeContainer.style.display = 'block'
    bmiContainer.style.display = 'none'
    if (value.value === '') {
      value.value = '0'
    }
  })
})
//Funcion para cambiar el sistema de medicion
document.querySelectorAll('input[name="calculator"]').forEach(function (radio) {
  radio.addEventListener('change', function () {
    if (buttonMetric.checked) {
      imperial.forEach(function (el) {
        el.style.display = 'none'
      })
      metric.forEach(function (el) {
        el.style.display = 'block'
      })
      // Restablecer los valores de los inputs de Imperial a "0"
      document.getElementById('ft').value = '0'
      document.getElementById('inch').value = '0'
      document.getElementById('st').value = '0'
      document.getElementById('lbs').value = '0'
      // Restablecer también las variables globales
      ftValue = 0
      inchValue = 0
      stValue = 0
      lbsValue = 0
      if (window.matchMedia('(min-width: 1440px').matches) {
        input.style.flexDirection = 'row'
      } else {
        input.style.flexDirection = 'column'
      }
    } else {
      imperial.forEach(function (el) {
        el.style.display = 'block'
      })
      metric.forEach(function (el) {
        el.style.display = 'none'
      })
      // Restablecer los valores de los inputs de Metric a "0"
      document.getElementById('height').value = '0'
      document.getElementById('weight').value = '0'
      // Restablecer también las variables globales
      heightValue = 0
      weightValue = 0
      input.style.flexDirection = 'column'
    }
    // Reiniciar el resultado del BMI para reflejar el cambio
    bmiHTML.textContent = '00.0'
    bmiResult = 0 // También reinicia la variable global de BMI
  })
})
