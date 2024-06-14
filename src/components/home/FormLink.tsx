import iconDragAndDrop from '@assets/shared/icon/icon-drag-and-drop.svg';
import { useEffect, useState } from 'react';
import { ChangeEvent } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Select, { SingleValue } from 'react-select';
import { SelectSocialValues, OptionsType } from '@datas/dataSocials';

type FormLinkProps = {
  ranking: number;
  url: string;
  placeholderLink: string;
  updateLink: (newLink: string) => void;
  updatePlatform: (platform: string) => void;
  removeLink: () => void;
  id: number;
  platform: string;
};

const FormLink = ({
  ranking,
  url,
  placeholderLink,
  updateLink,
  updatePlatform,
  removeLink,
  id,
  platform,
}: FormLinkProps) => {
  const [linkValue, setLinkValue] = useState(url);
  const [selectedPlatform, setSelectedPlatform] = useState(platform);
  const [touched, setIsTouched] = useState(false);
  const [validURL, setValidURL] = useState(true);

  useEffect(() => setSelectedPlatform(platform), [platform]);

  const regexURL =
    /  (https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?g;/;

  const handleChangePlatform = (e: SingleValue<OptionsType>) => {
    if (e) {
      const newPlaform = e.value;
      setSelectedPlatform(newPlaform);
      updatePlatform(newPlaform);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLinkValue(newValue);
    updateLink(newValue);
    handleWrongURL(newValue);
  };

  const handleTouchedInput = () => {
    setIsTouched(true);
  };

  const handleWrongURL = (url: string) => {
    let isValid = regexURL.test(url) && url.includes(platform.split('-').join().toLowerCase()) && touched;
    setValidURL(isValid);
  };

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'default',
  };

  const formatOptionLabel = (option: OptionsType) => (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 0' }}>
      <img src={option.icon} alt="" />
      <span style={{ marginLeft: 5 }}>{option.value}</span>
    </div>
  );

  return (
    <div
      className="w-full bg-light-grey rounded-lg p-5 mb-6"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <img src={iconDragAndDrop} alt="drag and drop" />
          <p className="ml-2 font-medium text-grey">Link #{(ranking + 1).toString()}</p>
        </div>
        <p className="cursor-pointer" onClick={removeLink}>
          Remove
        </p>
      </div>
      <p className="text-p-small text-dark-grey mb-1 font-medium">Platform</p>
      <Select
        className="mb-3"
        placeholder="Select option"
        options={SelectSocialValues}
        value={
          SelectSocialValues.find((option) => option.value.toLowerCase() === selectedPlatform.toLowerCase()) || null
        }
        onChange={handleChangePlatform}
        formatOptionLabel={formatOptionLabel}
      />
      <p className="text-p-small text-dark-grey mb-1 font-medium">Link</p>
      <div className="flex flex-col">
        <input
          type="text"
          value={linkValue}
          onChange={handleChangeInput}
          onBlur={handleTouchedInput}
          className={`p-2 py-3 border rounded-lg ${!validURL ? 'border-red' : ''}`}
          placeholder={`e.g. https://www.${placeholderLink}.com/johnappleseed`}
        />
      </div>
    </div>
  );
};

export default FormLink;
