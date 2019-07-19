# Project Name

> Here goes your awesome project description!

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
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

- Awesome feature 1
- Awesome feature 2
- Awesome feature 3

To-do list:

- Wow improvement to be done 1
- Wow improvement to be done 2

## Status

Project is: _in progress_, _finished_, _no longer continue_ and why?

## Inspiration

Add here credits. Project inspired by..., based on...

## Contact

Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me!

```

```
