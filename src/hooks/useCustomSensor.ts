import { useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';
import useIsTablet from '@hooks/useIsTablet';

const useCustomSensors = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 10,
    },
  });

  const sensors = useIsTablet() ? useSensors(touchSensor) : useSensors(mouseSensor);

  return sensors;
};

export default useCustomSensors;