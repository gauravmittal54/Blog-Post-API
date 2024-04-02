## Description
This is a Restful Api built using Express and sequelize npm package for using mysql database , it can perform CRUD operations for blogs/tags created and has a many to many relationship between tags and blogs api. I have also added authentication for admin previllages here for the user created

## API Endpoints

| HTTP Verb | Endpoint                                   | Action                                             |
| --------- | ------------------------------------------ | ---------------------------------------------------|
| POST      | /api/v1/user                               | Create a new user                                  |
| POST      | /api/v1/blog                               | Create a new post/blog                             |
| PUT       | /api/v1/blog/:id                           | Update a blog by its id                            |
| DELETE    | /api/v1/blog/:id                           | Delete a blog                                      |
| GET       | /api/v1/blogs                              | Fetch all blogs/posts                              |
| GET       | /api/v1/tags                               | Fetch all tags                                     |
| POST      | /api/v1/tag                                | Create a new tag                                   |
| PUT       | /api/v1/tag/:id                            | Update a tag by its id                             |
| DELETE    | /api/v1/tag/:id                            | Delete a tag                                       |
| GET       | /api/v1/search                             | Perform a dynamic search based on criteria         |
| POST      | /api/v1/addtagtoblog                       | Add a tag to a blog                                |
| DELETE    | /api/v1/removetagfromblog/:blog_id/:tag_id | Remove a tag from a blog                           |
| PUT       | /api/v1/updateTagForBlog/:blog_id/:tag_id  | Update a tag for a specific blog post              |

## Postman Test Results

[Click here to view Postman results](./PostmanResults.md)

## Setup Instructions
- Clone the repository.
- Install the dependencies using npm install.
- Start the server using npm start or npm run dev (for development with nodemon).
