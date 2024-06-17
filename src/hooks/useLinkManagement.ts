
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { LinkUser } from 'src/types/types';
import { socialInfosArray } from '@datas/dataSocials';
import { modifyLinks, updateCurrentUser } from '@redux/userSlice';
import { DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

const useLinkManagement = () => {
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
      dispatch(modifyLinks(updatedLinks));
      setLinks(updatedLinks);
    }
  };

  return {
    links,
    isDemo,
    addNewLink,
    removeLink,
    updateLink,
    updatePlatform,
    handleDragEnd,
    updateCurrentUser: (formData: FormData) => {
      dispatch(updateCurrentUser(formData));
    }
  };
};

export default useLinkManagement;