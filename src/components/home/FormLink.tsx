import iconDragAndDrop from '@assets/shared/icon/icon-drag-and-drop.svg';
import { ChangeEvent } from 'react';
import { useSortable,  } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type FormLinkProps = {
  ranking: number;
  link: string;
  placeholderLink: string;
  updateLink: (newLink: string) => void;
  removeLink: () => void;
  id : number;
};


const FormLink = ({ ranking, link, placeholderLink, updateLink, removeLink, id }: FormLinkProps) => {

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateLink(e.target.value);
  };

  const handleRemoveClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation(); 
    removeLink();
  };


  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor : 'default'
  };


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
          <p className="ml-2 font-medium">Link #{(ranking + 1).toString()}</p>
        </div>
        <p className='cursor-pointer' onClick={handleRemoveClick}>Remove</p>
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
