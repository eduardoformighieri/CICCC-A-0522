function milligramCoefficient(unity: any) {
  let coefficient = 0;

  switch (unity) {
    case 'mg': //mg
      coefficient = 1;
      break;
    case 'g': //g
      coefficient = 1000;
      break;
    case 'kg': //kg
      coefficient = 1000000;
      break;
    case 't': //t
      coefficient = 1000000000;
      break;
    case 'lbs': //lbs
      coefficient = 453600;
      break;
  }

  return coefficient;
}

export function convertMass(fromUnity: any, toUnity: any, value: any) {
  return (
    (value * milligramCoefficient(fromUnity)) / milligramCoefficient(toUnity)
  );
}
