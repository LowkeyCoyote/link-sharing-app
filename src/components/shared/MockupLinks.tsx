import { useSelector } from 'react-redux';
import placeholderImg from '@assets/shared/placeholder-img.png';
import LinkTab from '@components/shared/LinkTab';
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import useLinkManagement from '@hooks/useLinkManagement';

const MockupLinks = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const { links, isDemo, handleDragEnd } = useLinkManagement();

  if (!userInfo) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="relative my-[101px] flex h-[631px] w-[307px] flex-col items-center bg-illustration-mockup-links bg-no-repeat">
      <div
        className="mt-16 h-24 w-24 rounded-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${isDemo ? placeholderImg : userInfo.url})` }}
      ></div>
      <p className="mt-5 w-[240px] bg-white text-center text-[18px] text-dark-grey">
        {userInfo.firstname} {userInfo.lastname}
      </p>
      <p className="mx-auto w-[240px] bg-white text-center text-[14px]">{userInfo.email}</p>
      <div className="absolute top-[277.5px]">
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
          <SortableContext items={links}>
            {links.map((link) => (
              <LinkTab platform={link.platform} key={link.id} id={link.id} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default MockupLinks;
