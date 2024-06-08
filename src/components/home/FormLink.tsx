import iconDragAndDrop from '@assets/shared/icon/icon-drag-and-drop.svg';
import { ChangeEvent } from 'react';

type FormLinkProps = {
  ranking: number;
  link: string;
  placeholderLink: string;
  updateLink: (newLink: string) => void;
  removeLink: () => void;
};

const FormLink = ({ ranking, link, placeholderLink, updateLink, removeLink }: FormLinkProps) => {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateLink(e.target.value);
  };

  return (
    <div className="w-full bg-light-grey rounded-lg p-5 mb-6">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <img src={iconDragAndDrop} alt="drag and drop" />
          <p className="ml-2 font-medium">Link #{(ranking + 1).toString()}</p>
        </div>
        <p onClick={removeLink}>Remove</p>
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          value={link}
          onChange={handleChangeInput}
          className="p-2 border rounded"
          placeholder={`e.g. https://www.${placeholderLink}.com/johnappleseed`}
        />
      </div>
    </div>
  );
};

export default FormLink;
