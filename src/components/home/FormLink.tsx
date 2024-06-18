import iconDragAndDrop from '@assets/shared/icon/icon-drag-and-drop.svg';
import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import Select from 'react-select';
import { SelectSocialValues, OptionsType } from '@datas/dataSocials';
import { useLinkForm } from '@hooks/useLinkForm';

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
  const { linkValue, selectedPlatform, validURL, handleChangePlatform, handleChangeInput } = useLinkForm({
    initialUrl: url,
    initialPlatform: platform,
    updateLink,
    updatePlatform,
  });

  const [isDraggingDisabled, setIsDraggingDisabled] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
    disabled: isDraggingDisabled,
  });
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
      className="mb-6 w-full !cursor-pointer rounded-lg bg-light-grey p-5"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={iconDragAndDrop} alt="drag and drop" />
          <p className="ml-2 font-medium text-grey">Link #{(ranking + 1).toString()}</p>
        </div>
        <p className="cursor-pointer" onClick={removeLink}>
          Remove
        </p>
      </div>
      <p className="mb-1 text-p-small font-medium text-dark-grey">Platform</p>
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
      <div className="flex justify-between">
        <label
          htmlFor={platform}
          className={`mb-1 text-p-small font-medium text-dark-grey ${!validURL ? 'text-red' : ''}`}
        >
          Link
        </label>
        {!validURL ? (
          <p className="text-p-small text-red">
            Please enter a <span className="capitalize">{platform.toLowerCase()}</span> correct URL
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          value={linkValue}
          onBlur={() => setIsDraggingDisabled(false)}
          onFocus={() => setIsDraggingDisabled(true)}
          onChange={handleChangeInput}
          className={`select-none rounded-lg border p-2 py-3 ${!validURL ? 'border-red' : ''}`}
          placeholder={`e.g. https://www.${platform === 'Twitter' ? 'x' : placeholderLink.toLowerCase()}.com/johnappleseed`}
        />
      </div>
    </div>
  );
};

export default FormLink;
