# Link-sharing fullstack application

## Context

Challenge carried out with the frontendmentor website.   
The objective was to integrate as precisely as possible the Figma model of the application that I had available.   

This application is fullstack, the backend is created with express and hosted on an EC2 instance of AWS.  
this repository contains only the frontend of the application.   

I decided to add features compared to the initial project.  
Additionally, the project contains a demo version with user datasets and logout functionality.  

## Main technologies and packages

- React
- Typescript
- Tailwind CSS
- Redux Toolkit
- React Hook Form
- React DnD
- React Select
- Axios

## Download and run the Frontend of the application

Clone this repo in a new folder
```console
git clone https://github.com/LowkeyCoyote/link-sharing-app.git
```
Move to designo directory
```console
cd link-sharing-app
```
Install dependencies  
```console
npm i
```
Run the app
```console
npm run dev
```

## How to use it

- Create an account in the signup page

![image](https://i.imgur.com/TNU7Jwo.png)

- Log into your account on the login page

![image](https://i.imgur.com/sj9hpyB.png)

- You will be redirected to your links page. On this page you can add, delete and modify your links
- You can also drag and drop your links to change their order
- The app checks that your links are correct

![image](https://i.imgur.com/Jb75R9V.png)

- Then, you can modify your profile informations in the profile page  
- You can upload a profile picture, this image must have a height and width less than 1024 pixels
- You can also modify your firstname, lastname and email address.
-  However, you must be careful, changing the email address changes your identifiers

![image](https://i.imgur.com/k9Y18d9.png)

- Finally, you can go to the preview page, this will give you a preview of the page you are going to share
- You can click that share link button. A link will be saved to the clipboard and you can share it

![image](https://i.imgur.com/vXBeLUp.png)

## Live Site 

https://lowkey-coyote-link-sharing-app.netlify.app/
