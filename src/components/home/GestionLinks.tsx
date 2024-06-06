import { useState } from 'react';
import Button from '@components/shared/ui/Button';
import { LinksInformation } from 'src/types/types';
import EmptyLinks from './EmptyLinks';
import FormLink from './FormLink';
import { socialInfosArray } from '@datas/dataSocials.ts';


const GestionLinks = () => {

  const [links, setLinks] = useState<LinksInformation[]>([]);
  
  const addNewLink = () => {
     for (let i = 0; i < socialInfosArray.length; i++) {
      const socialPlatform = socialInfosArray[i].platform;
      const exists = links.some(link => link.platform === socialPlatform);
      
      if(!exists){
        let newLink  = { platform : socialPlatform, link : ""}
        setLinks([...links, newLink])
        break;
      }
    }
  }



  return (
    <section>
      <h1 className="mb-2">Customize your links</h1>
      <p className="mb-10">Add/edit/remove links below and then share all your profiles with the world!</p>
      <Button 
      variant={'secondary'} 
      className="w-full mb-6"
      onClick={addNewLink}
      
      >
        + Add new link
      </Button>
      {links.length === 0 ? <EmptyLinks/> : <FormLink /> }
    </section>
  );
};

export default GestionLinks;
