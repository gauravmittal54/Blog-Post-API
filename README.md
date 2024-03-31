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

[Click here to view Postman results](./PostmanResults.md)
