import { socialInfosArray, iconMapping } from '@datas/dataSocials';
import iconArrow from '@assets/shared/icon/icon-arrow-right.svg';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface LinkTabProps {
  platform: string;
  id: number;
  link ?: string;
}

const LinkTab = ({ platform, id, link }: LinkTabProps) => {

  const navigateToUrl = () => {
    console.log('hello')
    if(link){
      window.open(link) 
    }
  }
  
  const tab = socialInfosArray.find((e) => e.platform.toLowerCase() === platform.toLowerCase());
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: tab?.color,
  };

  return (
    <div
      className={`flex items-center justify-between h-[44px] p-4 w-[237px] rounded-lg mb-5  ${tab?.textGrey ? `text-dark-grey` : 'text-white'}`}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={navigateToUrl}
    
    >
      <div className="flex flex-row">
        <img
          src={iconMapping[platform.toLowerCase()]}
          className={`${tab?.textGrey ? `` : 'icon-to-white '} mr-2 w-[20px] h-[20px]`}
          alt=""
        />
        <p className={`${tab?.textGrey ? `` : 'text-white'}`}>{platform}</p>
      </div>
      <img src={iconArrow} alt="" />
    </div>
  );
};

export default LinkTab;
