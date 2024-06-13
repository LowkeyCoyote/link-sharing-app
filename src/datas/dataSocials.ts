

import iconCodePen from '@assets/shared/socials/icon-codepen.svg';
import iconCodeWars from '@assets/shared/socials/icon-codewars.svg';
import iconDevTo from '@assets/shared/socials/icon-devto.svg';
import iconFreeCodeCamp from '@assets/shared/socials/icon-freecodecamp.svg';
import iconFrontEndMentor from '@assets/shared/socials/icon-frontend-mentor.svg';
import iconGitHub from '@assets/shared/socials/icon-github.svg';
import iconGitLab from '@assets/shared/socials/icon-gitlab.svg';
import iconHashnode from '@assets/shared/socials/icon-hashnode.svg';
import iconLinkedin from '@assets/shared/socials/icon-linkedin.svg';
import iconStackOverflow from '@assets/shared/socials/icon-stack-overflow.svg';
import iconTwitch from '@assets/shared/socials/icon-twitch.svg';
import iconTwitter from '@assets/shared/socials/icon-twitter.svg';
import iconYoutube from '@assets/shared/socials/icon-youtube.svg';
import iconFaceBook from "@assets/shared/socials/icon-facebook.svg"


type socialInfosType = {
    platform : string;
    color : string;
    textGrey ?: boolean;
    arrowGrey ?: boolean;
}

export const socialInfosArray : socialInfosType[] = [
    {platform : "GitHub", color : "#1A1A1A"},
    {platform : "FrontEndMentor", color : "#FFFFFF", textGrey : true, arrowGrey : true},
    {platform : "Twitter", color : "#43B7E9"},
    {platform : "Linkedin", color : "#2D68FF"},
    {platform : "Youtube", color : "#EE3939"},
    {platform : "FaceBook", color : "#2442AC"},
    {platform : "Twitch", color : "#EE3FC8"},
    {platform : "DevTo", color : "#333333", textGrey : true},
    {platform : "CodeWars", color : "#8A1A50"},
    {platform : "FreeCodeCamp", color : "#302267"},
    {platform : "GitLab", color : "#EB4925"},
    {platform : "Hashnode", color : "#0330D1"},
    {platform : "StackOverflow", color : "#EC7100"},
]

export const iconMapping : any  = {
    github: iconGitHub,
    codepen: iconCodePen,
    codewars: iconCodeWars,
    devto: iconDevTo,
    freecodecamp: iconFreeCodeCamp,
    frontendmentor: iconFrontEndMentor,
    gitlab: iconGitLab,
    hashnode: iconHashnode,
    linkedin: iconLinkedin,
    stackoverflow: iconStackOverflow,
    twitch: iconTwitch,
    twitter: iconTwitter,
    youtube: iconYoutube,
    facebook: iconFaceBook,
  };

  export type OptionsType = {
    value : string;
    text : string;
    icon : string;
  }


  export const SelectSocialValues : OptionsType[] = [
        {
            value : "Github",
            text : 'Github',
            icon : (iconGitHub)
        },
        {
            value : "CodeWars",
            text : 'CodeWars',
            icon : iconCodeWars
        },
        {
            value : "Twitch",
            text : 'Twitch',
            icon : iconTwitch
        },
        {
            value : "Twitter",
            text : 'Twitter',
            icon : iconTwitter
        },
        {
            value : "FrontEndMentor",
            text : 'FrontEndMentor',
            icon : iconFrontEndMentor
        },
        {
            value : "Linkedin",
            text : 'Linkedin',
            icon : iconLinkedin
        },
        {
            value : "Youtube",
            text : 'Youtube',
            icon : iconYoutube
        },
        {
            value : "Facebook",
            text : 'Facebook',
            icon : iconFaceBook
        },
        {
            value : "DevTo",
            text : 'DevTo',
            icon : iconDevTo
        },
             {
            value : "FreeCodeCamp",
            text : 'FreeCodeCamp',
            icon : iconFreeCodeCamp
        },
        {
            value : "GitLab",
            text : 'GitLab',
            icon : iconGitLab
        },
              {
            value : "HashNode",
            text : 'HashNode',
            icon : iconHashnode
        },
        {
            value : "StackOverflow",
            text : 'StackOverflow',
            icon : iconStackOverflow
        },
        
        
  ]
  
