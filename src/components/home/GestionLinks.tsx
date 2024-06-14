import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import Button from '@components/shared/ui/Button';
import { LinkUser } from 'src/types/types';
import EmptyLinks from './EmptyLinks';
import FormLink from './FormLink';
import FooterHome from './FooterHome';
import { socialInfosArray } from '../../datas/dataSocials';
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { modifyLinks, updateCurrentUser } from '@redux/userSlice';
import { toast } from 'react-toastify';
import useIsTablet from '@hooks/useIsTablet';

const GestionLinks = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 100,
      tolerance: 10,
    },
  });

  const sensors = useIsTablet() ? useSensors(touchSensor) : useSensors(mouseSensor);
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);
  const dispatch = useDispatch<AppDispatch>();
  const [links, setLinks] = useState<LinkUser[]>([]);

  useEffect(() => {
    if (userInfo && userInfo.links) {
      setLinks(userInfo.links);
    }
  }, [userInfo]);

  const addNewLink = () => {
    if (links.length < 5) {
      for (let i = 0; i < socialInfosArray.length; i++) {
        const socialPlatform = socialInfosArray[i].platform;
        const exists = links.some((link) => link.platform === socialPlatform);
        if (!exists) {
          let newLink = { platform: socialPlatform, url: '', id: links.length + 1 };
          dispatch(modifyLinks([...links, newLink]));
          setLinks([...links, newLink]);
          break;
        }
      }
    }
  };

  const removeLink = (indexToRemove: number) => {
    const updatedLinks = links
      .filter((_, index) => index !== indexToRemove)
      .map((link, index) => {
        return { ...link, id: index + 1 };
      });
    dispatch(modifyLinks(updatedLinks));
  };

  const updateLink = (index: number, newLink: string) => {
    const updatedLinks = links.map((link, i) => (i === index ? { ...link, url: newLink } : link));
    dispatch(modifyLinks(updatedLinks));
  };

  const updatePlatform = (indexToUpdate: number, newPlatform: string) => {
    const updatedLinks = links.map((link, index) => {
      if (index === indexToUpdate) {
        return { ...link, platform: newPlatform };
      }
      return link;
    });
    dispatch(modifyLinks(updatedLinks));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);
      const updatedLinks = arrayMove(links, oldIndex, newIndex);
      dispatch(modifyLinks(updatedLinks));
    }
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append(`link`, JSON.stringify(links));
    dispatch(updateCurrentUser(formData));
    toast.success('Your links has been modified');
  };

  return (
    <section>
      <h1 className="mb-2">Customize your links</h1>
      <p className="mb-10">Add/edit/remove links below and then share all your profiles with the world!</p>
      <Button variant={'secondary'} className="w-full mb-6" onClick={addNewLink}>
        + Add new link
      </Button>
      {links.length === 0 ? (
        <EmptyLinks />
      ) : (
        <>
          {' '}
          <DndContext
            sensors={sensors}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={links}>
              <div className="max-h-[510px] min-h-[510px] overflow-y-auto"
              >
                {links.map((link, i) => (
                  <FormLink
                    id={link.id}
                    ranking={i}
                    key={link.id}
                    url={link.url}
                    updateLink={(newLink) => updateLink(i, newLink)}
                    updatePlatform={(newPlatform) => updatePlatform(i, newPlatform)}
                    removeLink={() => removeLink(i)}
                    placeholderLink={link.platform.split(' ').join('-').toLocaleLowerCase()}
                    platform={link.platform}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
          <FooterHome onSubmit={onSubmit} isDemo={isDemo} />
        </>
      )}
    </section>
  );
};

export default GestionLinks;
