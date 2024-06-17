// src/hooks/useLinkForm.ts

import { useState, useEffect, ChangeEvent } from 'react';
import { SingleValue } from 'react-select';
import { OptionsType } from '@datas/dataSocials';
import { isValidUrl } from '@utils/isValidUrl';

type UseLinkFormProps = {
  initialUrl: string;
  initialPlatform: string;
  updateLink: (newLink: string) => void;
  updatePlatform: (platform: string) => void;
};

export const useLinkForm = ({ initialUrl, initialPlatform, updateLink, updatePlatform }: UseLinkFormProps) => {
  const [linkValue, setLinkValue] = useState(initialUrl);
  const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
  const [validURL, setValidURL] = useState(true);

  useEffect(() => setSelectedPlatform(initialPlatform), [initialPlatform]);
  useEffect(() => {setLinkValue(initialUrl);}, [initialUrl]);

  const handleChangePlatform = (e: SingleValue<OptionsType>) => {
    if (e) {
      const newPlatform = e.value;
      setSelectedPlatform(newPlatform);
      updatePlatform(newPlatform);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLinkValue(newValue);
    updateLink(newValue);
    setValidURL(isValidUrl(newValue, selectedPlatform));
  };

  const handleTouchedInput = () => {
    setValidURL(isValidUrl(linkValue, selectedPlatform));
  };

  return {
    linkValue,
    selectedPlatform,
    validURL,
    handleChangePlatform,
    handleChangeInput,
    handleTouchedInput,
  };
};
