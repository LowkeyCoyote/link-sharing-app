import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import Button from '@components/shared/ui/Button';
import { LinkUser } from 'src/types/types';
import EmptyLinks from './EmptyLinks';
import FormLink from './FormLink';
import { socialInfosArray } from '../../datas/dataSocials';
import { DndContext, DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { logout, modifyLinks, updateCurrentUser } from '@redux/userSlice';

const GestionLinks = () => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);
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
    setLinks(updatedLinks);
  };

  const updateLink = (index: number, newLink: string) => {
    const updatedLinks = links.map((link, i) => (i === index ? { ...link, url: newLink } : link));
    dispatch(modifyLinks(updatedLinks));
    setLinks(updatedLinks);
  };

  const updatePlatform = (indexToUpdate: number, newPlatform: string) => {
    const updatedLinks = links.map((link, index) => {
      if (index === indexToUpdate) {
        return { ...link, platform: newPlatform };
      }
      return link;
    });
    dispatch(modifyLinks(updatedLinks));
    setLinks(updatedLinks);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);
      const updatedLinks = arrayMove(links, oldIndex, newIndex);
      setLinks(updatedLinks);
      dispatch(modifyLinks(updatedLinks));
    }
  };

  const onSubmit = (userInfo : any) => {
    const formData = new FormData()
    if (userInfo.links && userInfo.links.length > 0) {
        formData.append(`link`, JSON.stringify(links));
 
    }
    dispatch(updateCurrentUser(formData))
  }

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
          <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
            <SortableContext items={links}>
              <div className="max-h-[510px] min-h-[510px] overflow-y-auto">
                {links.map((link, i) => (
                  <FormLink
                    id={link.id}
                    ranking={i}
                    key={i}
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
          <div className="border-t border-border justify-between flex -px-10 self-end sm:flex-col-reverse">
            <Button variant="logout" className="ml-10 px-6 py-3 mt-6 sm:w-auto sm:mt-10 sm:mx-auto" onClick={() => dispatch(logout())}>
              Logout
            </Button>
            <Button
              variant={isDemo ? 'demo' : 'primary'}
              type="submit"
              className="px-7 mr-10 mt-6 sm:w-full sm:mx-auto align-middle "
              onClick={() => onSubmit(userInfo)}

            >
              Save
              {isDemo && <span className=" font-thin text-[12px] ml-3">( Not available on demo )</span>}
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default GestionLinks;
