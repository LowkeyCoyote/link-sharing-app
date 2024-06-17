import Button from '@components/shared/ui/Button';
import EmptyLinks from './EmptyLinks';
import FormLink from './FormLink';
import FooterHome from './FooterHome';
import { DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import { toast } from 'react-toastify';
import useCustomSensors from '@hooks/useCustomSensor';
import useLinkManagement from '@hooks/useLinkManagement';


const GestionLinks = () => {
  const sensors = useCustomSensors();
  const {
    links,
    isDemo,
    addNewLink,
    removeLink,
    updateLink,
    updatePlatform,
    handleDragEnd,
    updateCurrentUser
  } = useLinkManagement();
  
  const onSubmit = () => {
    const formData = new FormData();
    formData.append('link', JSON.stringify(links));
    updateCurrentUser(formData);
    toast.success('Your links have been modified');
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
                {links.map(({id, url, platform}, i) => (
                  <FormLink
                    id={id}
                    ranking={i}
                    key={id}
                    url={url}
                    updateLink={(newLink) => updateLink(i, newLink)}
                    updatePlatform={(newPlatform) => updatePlatform(i, newPlatform)}
                    removeLink={() => removeLink(i)}
                    placeholderLink={platform}
                    platform={platform}
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
