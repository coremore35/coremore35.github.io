# Project Name

> Quote Loft

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## General info

The purpose of this first project is construct meaning of my learning of different languages through a viable web application. The application begins working upon loading displaying a random quote, from an API hosted by FavQs. Each quote has keywords associated with it, which I utilize to run through another API hosted by Unsplash. This enables the application to target images with a similar tag. The application also allows for the user to search for a quote based on a keyword.

## Screenshots

![Example layout](/images/screenshot1.png)
![Example keyword entry](/images/screenshot2.png)

## Technologies

- HTML5
- CSS3
- Javascript ES6
- JQuery 3.4.1
- FavQs API (https://favqs.com/api/)
- Unsplash API (https://unsplash.com/developers)

## Setup

Describe how to install / setup your local environement / add link to demo version.

## Code Examples

`

    const handleImg = imgData => {

        let i = 1;
        const $addImage = $('<img>').addClass('currentImg');
        $addImage.attr('src', `${imgData.results[0].urls.regular}`);
        const $addPhotographer = $('<h6>').addClass('currentPhotographer');
        $addPhotographer.text(`Photo credit ${imgData.results[0].user.name}`);

        setInterval(() => {
        if (i < 10) {
         $addImage.attr('src', `${imgData.results[i].urls.regular}`);
            $addPhotographer.text(`Photo Credit: ${imgData.results[i].user.name}`);

            i++;
        } else if (i == 10) {
         i = 0;
        }
        }, 5000);

        $('.images').prepend($addImage);
        $('.images').append($addPhotographer);

    };

`

## Features

List of features ready and TODOs for future development

- Utilizes two APIs
- Responsive web-design
- Takes user input to display images/quotes

To-do list:

- I would like to clean up the functions so that they are not so lengthy. This will also help to more easily make needed changes in the future.

## Status

Project is: _finished_, but there is room for growth as I gain more skills that can be applied.

## Contact

Created by Corey Morrison (https://coremore35.github.io) corey.neil.morrison@gmail.com

- feel free to contact me!

```

```
