### REMEMBER TO CODE
<hr/>


Why remember when you have 'Remeber to code!'? 


Did some stack overflow code worked - write a blog on how and where you used it.


You wrote a custom code... create a code snippet!


So you don't have to remember all these! Just remember "REMEMBER TO CODE".



<b>REMEMBER TO CODE is a coding blog website, where user can access all the blogs and code snippets posted by different users. This application allows user to create, update, delete blog posts and code snipppets.</b>

### Getting Started
<hr/>


1. It is a full stack (MERN) project with authentication and authorization.
2. Performs all CRUD operations.


### Deployed Links
<hr/>

#### Netlify Link:
https://famous-dusk-8b3741.netlify.app/
#### Heroku Links:
https://remember-mern.herokuapp.com/api/blogs
https://remember-mern.herokuapp.com/api/codes
### Technologies Used

![technologies](https://user-images.githubusercontent.com/97922836/165500070-cd0c316c-6f03-44cd-9285-ecf33db0bd90.png)

### Database Models
<hr/>

1. USER
2. Blog
3. Code

### API End Points
<hr/>

##### User:

    POST: https://remember-mern.herokuapp.com/api/users/login
    POST: https://remember-mern.herokuapp.com/api/users/signup

##### Blog:
    GET: https://remember-mern.herokuapp.com/api/blogs
    GET: https://remember-mern.herokuapp.com/api/blogs/:id  -- GET blog by blog id
    GET: https://remember-mern.herokuapp.com/api/blogs/user/:id -- get blog by user id
    POST: https://remember-mern.herokuapp.com/api/blogs/add -- adds new blog
    PUT: https://remember-mern.herokuapp.com/api/blogs/update/:id -- update blog by blog id
    DELETE: https://remember-mern.herokuapp.com/api/blogs/:id --deletes blog by blog id

##### Code:

    GET: https://remember-mern.herokuapp.com/api/codes
    GET: https://remember-mern.herokuapp.com/api/codes/:id  -- GET code snippet by code snippet id
    GET: https://remember-mern.herokuapp.com/api/codes/user/:id -- get code snippet by user id
    POST: https://remember-mern.herokuapp.com/api/codes/add -- adds new code snippet
    PUT: https://remember-mern.herokuapp.com/api/codes/update/:id -- update code snippet by code snippet id
    DELETE: https://remember-mern.herokuapp.com/api/codes/:id --deletes code snippet by code snippet id
    
### Wireframes
<hr/>





![picture](https://user-images.githubusercontent.com/97922836/165430971-0c5b5aa5-408c-4f8d-a721-443e2ddde577.jpg)

![picture-2](https://user-images.githubusercontent.com/97922836/165431619-3e86a900-d80c-4436-8a1a-a5579d38dcbc.jpg)

![picture-3](https://user-images.githubusercontent.com/97922836/165431651-c3335f6d-d158-4778-9c10-3373f8ab6e95.jpg)

![picture-4](https://user-images.githubusercontent.com/97922836/165431685-b9b6f929-44cf-4817-8438-65c295ccb6a7.jpg)
    
    

### ERD-Diagram:
<hr/>


![erd-diagram](https://user-images.githubusercontent.com/97922836/165431741-1e8b2691-02a6-448e-98b6-da9483bb767a.jpg)

### React Component diagram:
<hr/>

![react-component-tree](https://user-images.githubusercontent.com/97922836/165431701-709ae767-f948-4540-b3f7-acd15b47ae33.jpg)

### Feature List
<hr/>



1. Athentication and Authorization
2. Blogs
3. Code Snippets
4. User can read, create, edit, delete own blogs and code snippets


### Dependencies
<hr/>



#### Front-End:



1. react router
2. react redux
3. axios
4. material ui
   (npm install @mui/material @emotion/react @emotion/styled)
5. prismjs


#### Back-End:




1. express
2. mongoDB/mongoose
3. morgan
4. nodemon
5. dotenv
6. cors
7. bcryptjs
8. jsonwebtoken
9. cookie-parser


### Plans:
<hr/>

1. Implement refresh tokens
2. Adding categories to blogs and code snippets
3. Adding like, comment features
4. displaying code blocks vertically with line numbers
5. Add blog and Add code form validations







