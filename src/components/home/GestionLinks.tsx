import { useState } from 'react';
import Button from '@components/shared/ui/Button';
import { LinksInformation } from 'src/types/types';
import EmptyLinks from './EmptyLinks';
import FormLink from './FormLink';
import { socialInfosArray } from '../../datas/dataSocials';

const GestionLinks = () => {
  const [links, setLinks] = useState<LinksInformation[]>([]);

  const addNewLink = () => {
    for (let i = 0; i < socialInfosArray.length; i++) {
      const socialPlatform = socialInfosArray[i].platform;
      const exists = links.some((link) => link.platform === socialPlatform);

      if (!exists) {
        let newLink = { platform: socialPlatform, link: '' };
        setLinks([...links, newLink]);
        break;
      }
    }
  };

  const removeLink = (indexToRemove: number) => {
    const updatedLinks = links.filter((_, index) => index !== indexToRemove);
    setLinks(updatedLinks);
  };

  const updateLink = (index: number, newLink: string) => {
    const updatedLinks = links.map((link, i) => (i === index ? { ...link, link: newLink } : link));
    setLinks(updatedLinks);
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
          {links.map((link, i) => (
            <FormLink
              ranking={i}
              key={i}
              link={link.link}
              updateLink={(newLink) => updateLink(i, newLink)}
              removeLink={() => removeLink(i)}
              placeholderLink={link.platform.split(' ').join('-').toLocaleLowerCase()}
            />
          ))}
          <div className="border-t border-border justify-end flex -px-10 self-end">
            <Button type="submit" className="px-7 mr-10 mt-6">
              Save
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default GestionLinks;
