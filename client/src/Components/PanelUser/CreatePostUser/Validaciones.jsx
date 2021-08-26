export default function validateForm(input) {
  let errors = {}
  if (!input.name) {
    errors.name = 'Name is required'
  } else {
    errors.name = ''
  }
  if (!input.weight) {
    errors.weight = 'Weight is required'
  } else {
    errors.weight = ''
  }

  if (!input.height) {
    errors.height = 'Height is required'
  } else {
    errors.height = ''
  }
  if (!input.life_span) {
    errors.life_span = 'Lifespan is required'
  } else {
    errors.life_span = ''
  }
  return errors
}