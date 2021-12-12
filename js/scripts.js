const Year = document.getElementById('Year')
const Month = document.getElementById('Month')
const Day = document.getElementById('Day')
const gender = document.getElementById('gender')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  let messages = []
  if (Month.value <= 0 || Month.value > 12 || month.value == null){
      messages.push( 'Valid month is required')
  }

  if (day.value <= 0 || day.value > 31 || day.value == null){
    messages.push( 'Valid day is required')
}
}) 