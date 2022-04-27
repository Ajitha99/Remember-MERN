### REMEMBER TO CODE
    Why remember when you have Remeber to code!? 
    Did some stack-over flow code worked- write a blog when and how you used it.
    You wrote a custom code.. create a code snippets!
    So you don't have to remember all these! Just remember "<REMEMBER/> TO CODE".

    REMEMBER is a coding blog website, where user can have access to all the blogs and code snippets posted by different users. It allows to create own blog posts and code snipppets.

### Getting Started
    1. It is a full stack (MERN) project with authentication and authorization.
    2. Performs all CRUD operations.


### Deployed Links

#### Netlify Link:
https://famous-dusk-8b3741.netlify.app/
#### Heroku Links:
https://remember-mern.herokuapp.com/api/blogs
https://remember-mern.herokuapp.com/api/codes

### Database Models:

    1. USER
    2. Blog
    2. Code

### API End Points:

##### User

    POST: https://remember-mern.herokuapp.com/api/users/login
    POST: https://remember-mern.herokuapp.com/api/users/signup

##### Blog

    GET: https://remember-mern.herokuapp.com/api/blogs
    GET: https://remember-mern.herokuapp.com/api/blogs/:id  -- GET blog by blog id
    GET: https://remember-mern.herokuapp.com/api/blogs/user/:id -- get blog by user id
    POST: https://remember-mern.herokuapp.com/api/blogs/add -- adds new blog
    PUT: https://remember-mern.herokuapp.com/api/blogs/update/:id -- update blog by blog id
    DELETE: https://remember-mern.herokuapp.com/api/blogs/:id --deletes blog by blog id

##### Code

    GET: https://remember-mern.herokuapp.com/api/codes
    GET: https://remember-mern.herokuapp.com/api/codes/:id  -- GET code snippet by code snippet id
    GET: https://remember-mern.herokuapp.com/api/codes/user/:id -- get code snippet by user id
    POST: https://remember-mern.herokuapp.com/api/codes/add -- adds new code snippet
    PUT: https://remember-mern.herokuapp.com/api/codes/update/:id -- update code snippet by code snippet id
    DELETE: https://remember-mern.herokuapp.com/api/codes/:id --deletes code snippet by code snippet id
    
### Wireframes
    [](C:\Ajitha\Per_Scholas\Module_3\final_project\Project_Blog\gitImg\picture-1.jpg)
    <img src = "gitImg\picture-1.jpg"/>

    <img src = "gitImg\picture-2.jpg"/>

    <img src = "gitImg\picture-3.jpg"/>

    <img src = "gitImg\picture-4.jpg"/>

### ERD-Diagram:

    <img src ="gitImg\erd-diagram.jpg"/>

### React Component diagram:

    <img src = "gitImg\react-component-tree.jpg"/>

### Feature List
    <ul>
        <li>Athentication and Authorization</li>
        <li>Blogs</li>
        <li>Code Snippets</li>
        <li>User can read, create, edit, delete own blogs and code snippets</li>
    </ul>

### Dependencies

#### Front-End:
    <ul>
        <li>react router</li>
        <li>react redux</li>
        <li>axios</li>
        <li>material ui <br/>
            <p>npm install @mui/material @emotion/react @emotion/styled</p></li>
        <li>prismjs</li>
    </ul>

#### Back-End:
    <ul>
        <li>express</li>
        <li>mongoDB/mongoose</li>
        <li>morgan</li>
        <li>nodemon</li>
        <li>dotenv</li>
        <li>cors</li>
        <li>bcryptjs</li>
        <li>jsonwebtoken</li>
        <li>cookie-parser</li>

    </ul>






