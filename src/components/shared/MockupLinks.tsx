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
    <div className="relative h-[631px] w-[307px] bg-illustration-mockup-links bg-no-repeat flex flex-col items-center my-[101px]">
      <div
        className="w-24 h-24 rounded-full bg-center bg-no-repeat bg-cover mt-16"
        style={{ backgroundImage: `url(${isDemo ? placeholderImg : userInfo.url})` }}
      ></div>
      <p className="text-[18px] text-dark-grey mt-5 bg-white w-[240px] text-center">
        {userInfo.firstname} {userInfo.lastname}
      </p>
      <p className="text-[14px] w-[240px] mx-auto text-center bg-white">{userInfo.email}</p>
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
