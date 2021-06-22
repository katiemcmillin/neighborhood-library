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

_**Neighborhood Library** is for friends and neighbors to post books they have finished reading and would like to make availble to others. It is like a street library box. It is free to use as long as users follow the guidelines. Users are able to create a post their book, edit, and delete a book after they check it out.


<br>

## MVP

_The **Neighborhood Library** MVP includes full-CRUD (index, show, create, update, delete) on back-end and front-end, three PostgreSQL tables, and responsive design, styled with CSS. It also includes at least eight separate, rendered components, utilizes React Router on the client end._

<br>

### Goals

- MVP by Friday, 6/25
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

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


https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Computer%20screen%20-%20Create.png

- Desktop Landing

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Computer%20screen%20-%20ShowPage.png

- Desktop Show

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Computer%20screen%20-%20Edit.png

- Desktop Edit

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Computer%20screen%20-%20Create.png

- Desktop Create

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Computer%20screen%20-%20Register.png

- Desktop Register

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Computer%20screen%20-%20LogIn.png

- Desktop Login

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Tablet%20-%20Homepage.png

- Tablet Landing

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Tablet%20-%20Showpage.png

- Tablet Show

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Tablet%20-%20Edit.png

- Tablet Edit

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Tablet%20-%20Create.png

- Tablet Create

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Tablet%20-%20Register.png

- Tablet Register

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/Tablet%20-%20Login.png

- Tablet Login

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Homepage.png

- Mobile Landing

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Showpage.png

- Mobile Show

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Edit.png

- Mobile Edit

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Create.png

- Mobile Create

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Register.png

- Mobile Register

https://github.com/katiemcmillin/neighborhood_library/blob/main/wireframes/iPhone%206%2C%207%2C%208%20Plus%20%E2%80%93%20Login.png

- Mobile Login



#### Component Tree

https://github.com/katiemcmillin/neighborhood_library/blob/main/component_hierarchy/Component%20hierarchy.png

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
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
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