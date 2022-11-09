# dom-blog
# Team info generator:

## Description

Here we have a wonderful, wonderful full stack tech blog app [Here is a link to the application](https://dadomblog.herokuapp.com/)
A user may log in and view blogs. They login session is saved for one minute. Normally the user would be able to write blogs in the dashboard and leave comments in the home page, but some time constraints and technical difficulties were had. Future updates will bring that functionality. 

## Technologies

This app was created with node.js packages: express, express sessions, bcrypt, express handlebars, sequelize, nodemon, dotenv and a little bit of jquery.
We connected to heroku using JAWSDB.

## How to use

It is very intuitive on how to use. Just log in and enjoy!

## Screenshot of app result

![screenshot](https://media.discordapp.net/attachments/408481106040717322/1039749963023908895/image.png)

## the Code!
Here we are showcasing one of our routes, it is the '/home' route. In this route, user blogs get populated with their corresponding author, comments and corresponding authors all with dates created. 


```
           router.get('/home', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll(
            {
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                    {
                        model: Comment,
                        attributes: ['content', 'created_at'],
                        include: [
                            {
                                model: User,
                                attributes: ['username'],
                            },]
                    }
                ],
            })
```

## Author Links
[Linkedin](https://www.linkedin.com/in/dominic-conradson-76638b172/)---
[GitHub](https://github.com/theDomConrad/)---
[Portfolio](https://thedomconrad.github.io/Dominic-Conradson-Portfolio/)---
