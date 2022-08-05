import {
  Box,
  Flex,
  Text,
  VStack,
  Link,
  Button,
  Select,
  Input,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createRecord } from '../api';

import { convertMass } from '../convertMass';
import { convertLength } from '../convertLength';
import { convertTemperature } from '../convertTemperature';
import { useState } from 'react';

export const Home = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation((data: any) => createRecord(data), {
    onError: (error: any) => {
      alert(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['records']);
    },
  });

  const [massToConvert, setMassToConvert] = useState();
  const [massInitialUnity, setMassInitialUnity] = useState();
  const [massFinalUnity, setMassFinalUnity] = useState();
  const [massResult, setMassResult] = useState<number>();

  const [lengthToConvert, setLengthToConvert] = useState();
  const [lengthInitialUnity, setLengthInitialUnity] = useState();
  const [lengthFinalUnity, setLengthFinalUnity] = useState();
  const [lengthResult, setLengthResult] = useState<number>();

  const [temperatureToConvert, setTemperatureToConvert] = useState();
  const [temperatureInitialUnity, setTemperatureInitialUnity] = useState();
  const [temperatureFinalUnity, setTemperatureFinalUnity] = useState();
  const [temperatureResult, setTemperatureResult] = useState<number>();

  function handleSelectChange(event: any, setter: any) {
    setter(event.target.value);
  }

  function handleRun(
    setter: any,
    converterFunction: any,
    initialUnity: any,
    finalUnity: any,
    valueToConvert: any
  ) {
    setter(converterFunction(initialUnity, finalUnity, valueToConvert));
  }

  function handleSaveResult(
    convertionType: any,
    initialUnity: any,
    finalUnity: any,
    valueToConvert: any,
    finalResult: any
  ) {
    mutate({
      convertionType,
      valueToBeConverted: valueToConvert,
      fromUnity: initialUnity,
      convertedValue: finalResult,
      toUnity: finalUnity,
    });
  }

  return (
    <Flex flexDir="column" alignItems="center">
      <Text my={8} fontSize="5xl">
        Unit Converter
      </Text>
      <Box>
        <Text fontSize="3xl" my={8}>
          Weight converter
        </Text>

        <Flex>
          <Input
            onChange={(e) => handleSelectChange(e, setMassToConvert)}
            value={massToConvert}
            placeholder="Value to convert"
          />
          <Select
            placeholder="Select your unity"
            onChange={(e) => handleSelectChange(e, setMassInitialUnity)}
            value={massInitialUnity}>
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="t">t</option>
            <option value="lbs">lbs</option>
          </Select>
        </Flex>

        <Box>
          <Select
            placeholder="Select the new unity"
            onChange={(e) => handleSelectChange(e, setMassFinalUnity)}
            value={massFinalUnity}>
            <option value="mg">mg</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="t">t</option>
            <option value="lbs">lbs</option>
          </Select>

          <Button
            onClick={() =>
              handleRun(
                setMassResult,
                convertMass,
                massInitialUnity,
                massFinalUnity,
                massToConvert
              )
            }
            my={4}
            w="100%"
            colorScheme="blue">
            Run
          </Button>
          <Text my={8}>Result: {massResult}</Text>
          <Button
            onClick={() =>
              handleSaveResult(
                'Mass',
                massToConvert,
                massInitialUnity,
                massResult,
                massFinalUnity
              )
            }
            isLoading={isLoading}
            w="100%"
            colorScheme="blue">
            Save result
          </Button>
        </Box>
      </Box>

      <Box>
        <Text fontSize="3xl" my={8}>
          Length converter
        </Text>

        <Flex>
          <Input
            onChange={(e) => handleSelectChange(e, setLengthToConvert)}
            value={lengthToConvert}
            placeholder="Value to convert"
          />
          <Select
            placeholder="Select your unity"
            onChange={(e) => handleSelectChange(e, setLengthInitialUnity)}
            value={lengthInitialUnity}>
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="dm">dm</option>
            <option value="m">m</option>
            <option value="mi">mi</option>
            <option value="yd">yd</option>
            <option value="ft">ft</option>
            <option value="in">in</option>
          </Select>
        </Flex>

        <Box>
          <Select
            placeholder="Select the new unity"
            onChange={(e) => handleSelectChange(e, setLengthFinalUnity)}
            value={lengthFinalUnity}>
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="dm">dm</option>
            <option value="m">m</option>
            <option value="mi">mi</option>
            <option value="yd">yd</option>
            <option value="ft">ft</option>
            <option value="in">in</option>
          </Select>

          <Button
            onClick={() =>
              handleRun(
                setLengthResult,
                convertLength,
                lengthInitialUnity,
                lengthFinalUnity,
                lengthToConvert
              )
            }
            my={4}
            w="100%"
            colorScheme="blue">
            Run
          </Button>
          <Text my={8}>Result: {lengthResult}</Text>
          <Button
            onClick={() =>
              handleSaveResult(
                'Length',
                lengthToConvert,
                lengthInitialUnity,
                lengthResult,
                lengthFinalUnity
              )
            }
            isLoading={isLoading}
            w="100%"
            colorScheme="blue">
            Save result
          </Button>
        </Box>
      </Box>

      <Box>
        <Text fontSize="3xl" my={8}>
          Temperature converter
        </Text>

        <Flex>
          <Input
            onChange={(e) => handleSelectChange(e, setTemperatureToConvert)}
            value={temperatureToConvert}
            placeholder="Value to convert"
          />
          <Select
            placeholder="Select your unity"
            onChange={(e) => handleSelectChange(e, setTemperatureInitialUnity)}
            value={temperatureInitialUnity}>
            <option value="kelvin">kelvin</option>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </Select>
        </Flex>

        <Box>
          <Select
            placeholder="Select the new unity"
            onChange={(e) => handleSelectChange(e, setTemperatureFinalUnity)}
            value={temperatureFinalUnity}>
            <option value="kelvin">kelvin</option>
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </Select>

          <Button
            onClick={() =>
              handleRun(
                setTemperatureResult,
                convertTemperature,
                temperatureInitialUnity,
                temperatureFinalUnity,
                temperatureToConvert
              )
            }
            my={4}
            w="100%"
            colorScheme="blue">
            Run
          </Button>
          <Text my={8}>Result: {temperatureResult}</Text>
          <Button
            onClick={() =>
              handleSaveResult(
                'Temperature',
                temperatureToConvert,
                temperatureInitialUnity,
                temperatureResult,
                temperatureFinalUnity
              )
            }
            isLoading={isLoading}
            w="100%"
            colorScheme="blue">
            Save result
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
