- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Neighborhood Library** is for friends and neighbors to post books they have finished reading and would like to make available to others. It is just like a street library box. It is free to use as long as users follow the guidelines. Users are able to post a book, edit, and delete a book. They may also add ratings._


<br>

## MVP

_The **Neighborhood Library** MVP uses full-CRUD (index, show, create, update, delete) on the back-end and front-end. It includes three PostgreSQL tables, and responsive design, styled with CSS. The site also includes at least eight separate, rendered components, and utilizes React Router on the client end._

<br>

### Goals

- _Back-end complete by end of Wednesday, 6/23._
- _MVP by Friday, 6/25_

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Base for front-end development._ |
|   React Router   | _Used for front-end navigation between pages._ |
|     Ruby on Rails      | _Creates back-end framework._ |
|    CORS     | _Allows resource sharing with Heroku ._ |
|  Axios  | _Handles HTTP requests to the server on front-end._ |

<br>

### Client (Front End)

#### Wireframes


https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Computer%20screen%20-%20Create.png

- Desktop Landing

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Computer%20screen%20-%20ShowPage.png

- Desktop Show

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Computer%20screen%20-%20Edit.png

- Desktop Edit

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Computer%20screen%20-%20Create.png

- Desktop Create

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Computer%20screen%20-%20Register.png

- Desktop Register

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Computer%20screen%20-%20LogIn.png

- Desktop Login

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Tablet%20-%20Homepage.png

- Tablet Landing

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Tablet%20-%20Showpage.png

- Tablet Show

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Tablet%20-%20Edit.png

- Tablet Edit

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Tablet%20-%20Create.png

- Tablet Create

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Tablet%20-%20Register.png

- Tablet Register

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/Tablet%20-%20Login.png

- Tablet Login

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Homepage.png

- Mobile Landing

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Showpage.png

- Mobile Show

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Edit.png

- Mobile Edit

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Create.png

- Mobile Create

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Register.png

- Mobile Register

https://github.com/katiemcmillin/neighborhood-library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Login.png

- Mobile Login



#### Component Tree

https://github.com/katiemcmillin/neighborhood-library/blob/main/component-hierarchy/Component%20hierarchy.png

#### Component Architecture

``` structure

src
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Nav.jsx
|__ screens/
      |__ Books.jsx
      |__ BookCreate.jsx
      |__ BookDetail.jsx
      |__ BookEdit.jsx
      |__ Login.jsx
      |__ Register.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ books.js
      |__ ratings.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Prompt/Project approval    |    H     |     5 hrs      |     6 hrs     |    6 hrs    |
| Set up database & models    |    H     |     1 hr      |     0 hrs     |    0 hrs    |
| User authorization    |    L     |     2 hrs      |     0 hrs     |    0 hrs    |
| Finish routes and controllers   |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
| Setting up front-end file structure | H | 2hrs| 0hrs | 0hrs |
| Set up initial CSS | H | 1hr| 0hrs | 0hrs |
| Navbar | H | 1hr| 0hrs | 0hrs |
| MainContainer.jsx | H | 2hrs| 0hrs | 0hrs |
| Login | L | 1hr| 0hrs | 0hrs |
| Register | L | 1hr| 0hrs | 0hrs |
| BooksScreen.jsx  | H | 2hrs| 0hrs | 0hrs |
| BookDetail.jsx | H | 2hrs| 0hrs | 0hrs |
| BookCreate.jsx | H | 2hrs| 0hrs | 0hrs |
| BookEdit.jsx | H | 2hrs| 0hrs | 0hrs |
| Advanced Styling/CSS | L | 6 hrs| 0hrs | 0hrs |
| Post MVP | L | 8hrs| 0hrs | 0hrs |
| Total | H | 41 hrs| 0hrs | 6hrs |


<br>

### Server (Back End)

#### ERD Model

https://github.com/katiemcmillin/neighborhood-library/blob/dev/erd/ERD.png
<br>

***

## Post-MVP

Authorization for Users
Book reviews

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.