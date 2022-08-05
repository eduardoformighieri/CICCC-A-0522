function milimmiterCoefficient(unity: any) {
  let coefficient = 0;

  switch (unity) {
    case 'mm': //mm
      coefficient = 1;
      break;
    case 'cm': //cm
      coefficient = 10;
      break;
    case 'dm': //dm
      coefficient = 100;
      break;
    case 'm': //m
      coefficient = 1000;
      break;
    case 'mi': //mi
      coefficient = 1609344;
      break;
    case 'yd': //yd
      coefficient = 914.4;
      break;
    case 'ft': //ft
      coefficient = 304.8;
      break;
    case 'in': //in
      coefficient = 25.4;
      break;
  }

  return coefficient;
}

export function convertLength(fromUnity: any, toUnity: any, value: any) {
  return (
    (value * milimmiterCoefficient(fromUnity)) / milimmiterCoefficient(toUnity)
  );
}
