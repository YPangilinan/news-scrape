# NPR SCRAPER

## Project Description
The goal for NPR Scraper is to allow users to view, save and leave comments on the latest news. The trick is that these articles are not written personally but actually was scraped from the NPR website using Mongoose and Cheerio. Hope you enjoy and get updated on the latest!

### See it in Action
*NPR Scraper* is deployed to heroku, please check it out [here](https://calm-sierra-67900.herokuapp.com/) or refer to the below gifs for a summary!

### How does this app work?

When the user lands on our page, they will first see that the "scraped articles" section is empty. <br><br>
![empty](https://user-images.githubusercontent.com/61812035/90061346-ded81980-dc9a-11ea-9877-3892c0709aa6.gif)
<br><br>

**Scrape Button**<br>
At the top navigation bar, there is a button to "scrape", that will load any of the articles that are on the NPR webiste and their corresponding links <br><br>
![scrape function (1)](https://user-images.githubusercontent.com/61812035/90061146-94ef3380-dc9a-11ea-982c-98ee24eaa273.gif)
<br><br>

**Save Article Button**<br>
After completing the scrape, the user has the option to save the articles to a different tab so they can reference it later. <br><br>
![save (1)](https://user-images.githubusercontent.com/61812035/90060594-d206f600-dc99-11ea-8dc9-500e169b341b.gif)
<br><br>

**Add Note Button**<br>
On the saved article page, the user has the option of creating a note on that article for their thoughts on that particular article. That can also be referenced later. <br><br>
![note (1)](https://user-images.githubusercontent.com/61812035/90060009-e4ccfb00-dc98-11ea-98e3-ba42a3c8a452.gif)
<br><br>

**Delete Button**<br>
If the user decides that they no longer want that article in their saved section, they can delete the article from saved! But it will still save the notes that the user created. <br><br>
![delete (1)](https://user-images.githubusercontent.com/61812035/90059423-ff52a480-dc97-11ea-9db1-f66e0b2f191f.gif)
<br><br>

**Clear Articles Button**<br>
As an added option, on the home page top navigation, if the user does not care for any of the articles, or if the page is already populated with things, they have the option to clear the articles, which would also clear it from their saved articles tab as well! They could start fresh!<br><br>
![clear](https://user-images.githubusercontent.com/61812035/90061603-35455800-dc9b-11ea-872e-d352acd78334.gif)
<br><br>


### How was this app created?
The technologies used to create this app are:
- HTML
- Bootstrap
- JavaScript
- jQuery
- node.js
- Express.js
- Express-Handlbars
- Axios
- Cheerio
- Mongoose
- Materialize.css

## Want to run it locally?
To install the application follow the instructions below:

	git clone git@github.com:ypangilinan/news-scrape
	cd GitFit
	npm install
This should install the necessary packages from the Package.JSON needed for this application. 

In the terminal,run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`. The server.js file will automatically create the Mongo DB collection for you. 

*If you do not have mongo installed, visit [this website](https://www.mongodb.com/try#community) for more information*

### Future Improvements
I would like to add the ability to delete notes from the saved articles page and add a sorting function by date.

### Project Instructions
* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

* Beyond these requirements, be creative and have fun with this!

