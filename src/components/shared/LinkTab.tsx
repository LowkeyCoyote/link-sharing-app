import { socialInfosArray, iconMapping } from '@datas/dataSocials';
import iconArrow from '@assets/shared/icon/icon-arrow-right.svg';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface LinkTabProps {
  platform: string;
  id: number;
  link?: string;
}

const LinkTab = ({ platform, id, link }: LinkTabProps) => {
  const navigateToUrl = () => {
    if (link) {
      window.open(link);
    }
  };

  const tab = socialInfosArray.find((e) => e.platform.toLowerCase() === platform.toLowerCase());
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: tab?.color,
  };

  return (
    <div
      className={`mb-5 flex h-[44px] w-[237px] items-center justify-between rounded-lg p-4 ${tab?.textGrey ? `text-dark-grey` : 'text-white'}`}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={navigateToUrl}
    >
      <div className="flex flex-row">
        <img
          src={iconMapping[platform.toLowerCase()]}
          className={`${tab?.textGrey ? `` : 'icon-to-white'} mr-2 h-[20px] w-[20px]`}
          alt=""
        />
        <p className={`${tab?.textGrey ? `` : 'text-white'}`}>{platform}</p>
      </div>
      <img src={iconArrow} alt="" />
    </div>
  );
};

export default LinkTab;
