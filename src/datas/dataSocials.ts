

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


type socialInfosType = {
    platform : string;
    color : string;
    textBlack ?: boolean;
}

export const socialInfosArray : socialInfosType[] = [
    {platform : "GitHub", color : "#1A1A1A"},
    {platform : "Frontend Mentor", color : "#FFFFFF", textBlack : true},
    {platform : "Twitter", color : "#43B7E9"},
    {platform : "Linkedin", color : "#2D68FF"},
    {platform : "Youtube", color : "#EE3939"},
    {platform : "Facebook", color : "#2442AC"},
    {platform : "Twitch", color : "#EE3FC8"},
    {platform : "DevTo", color : "#333333", textBlack : true},
    {platform : "CodeWars", color : "#8A1A50"},
    {platform : "freeCodeCamp", color : "#302267"},
    {platform : "Gitlab", color : "#EB4925"},
    {platform : "Hashnode", color : "#0330D1"},
    {platform : "Stack Overflow", color : "#EC7100"},
]

export const iconMapping : any  = {
    GitHub: iconGitHub,
    CodePen: iconCodePen,
    CodeWars: iconCodeWars,
    DevTo: iconDevTo,
    FreeCodeCamp: iconFreeCodeCamp,
    FrontEndMentor: iconFrontEndMentor,
    GitLab: iconGitLab,
    Hashnode: iconHashnode,
    Linkedin: iconLinkedin,
    StackOverflow: iconStackOverflow,
    Twitch: iconTwitch,
    Twitter: iconTwitter,
    Youtube: iconYoutube,
  };
  
