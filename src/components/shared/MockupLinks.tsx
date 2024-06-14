import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import placeholderImg from "@assets/shared/placeholder-img.png"
import LinkTab from '@components/shared/LinkTab';
import { useEffect, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { LinkUser } from 'src/types/types';
import { modifyLinks } from '@redux/userSlice';


const MockupLinks = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);
  const dispatch = useDispatch<AppDispatch>();
  const [links, setLinks] = useState<LinkUser[]>([]);

  useEffect(() => {
    if (userInfo && userInfo.links) {
      setLinks(userInfo.links);
    }    
  }, [userInfo]);


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);
      const newLinks = arrayMove(links, oldIndex, newIndex);
      setLinks(newLinks);
      dispatch(modifyLinks(newLinks.map((link) => ({ ...link, id : link.id }))));
    }
  };

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
