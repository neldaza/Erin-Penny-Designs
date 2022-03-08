# Penny Designs

A full stack application built for an interior designer to showcase her work, as well as communicate with her clients

A loved one of mine works within the Interior Design field, and had a need for a website to set up as their home base and reference for clients and employers, so I figured I could use what knowledge I had to fill that niche!

This would be my primary motivator for building and continuing to work on this project; but also the fact that web developers are very often hired in the Interior Design field to custom build websites for large and even small scale firms to showcase their work to clientele.  I figured having my loved one as a "client", and building the site to their liking, would be excellent practice for future employment opportunities, and also very mutually beneficial.

## Technologies Used 

- React.js 
- Express.js
- PostgreSQL
- pgweb
_ Babel
- Argon
- React Bootstrap
- Webpack
- CSS3
- HTML5
- jquery
- Node.js
- Docker


## Live Demo 

Try the application live at https://penny-designs.herokuapp.com/

## Features

- User can view all projects 
- User can view specific projects 
- User can use homepage carousel
- User can use drawer
- User can create an account 
- User can log in
- User can log out
- User can sign in as admin

## Preview 

![Screen Recording 2022-03-07 at 7 07 15 PM](https://user-images.githubusercontent.com/88061673/157139977-361503a5-9890-4573-872d-2fcbfc585bce.gif)


![Screen Recording 2022-03-07 at 7 15 30 PM](https://user-images.githubusercontent.com/88061673/157140399-99ff054f-6376-4dc8-a839-88c58bc300ff.gif)


## Future Features

- User can send inquiry emails 
- User can view About and Contact sections 
- User (if registered) can leave reviews and view Reviews section
- User (if Admin) can review and approve reviews
- User (if Admin) can remove or add photographs to the showcase

## Development 

### System Requirements

- Node.js 10 or higher
- NPM 6 or higher

### Instructions 

1.  Clone the repository

    ```shell
    git clone https://github.com/neldaza/Penny-Designs.git
    cd Penny-Designs
    ```



2.  Install all dependencies with NPM
    ```shell
    npm install
    ```




2.  Ensure that PostgreSQL is running
    ```shell
    
    sudo service postgresql start
    ```

3.  Create a database for the project using PostgreSQL
    ```
    createdb pennyDesigns
    ```

4.  cd into the project's folder
    ```
    cd Penny-Designs
    ```

5.  Import the database schema
    ```
    psql -d pennyDesigns -f schema.sql
    ```

6.  Import the database's data
    ```
    psql -d pennyDesigns -f data.sql
    ```
##### **Once your created db is synced with the project, future schema/data.sql changes can be quickly updated using npm run db:import**

7.  Open a separate terminal and run pgweb
    ```
    pgweb
    ```
##### **This will be the terminal you use to operate on localhost:8081 to access the pgweb client to see any changes to your database**


8. Open a seperate terminal and cd into the project again
   ```
   cd Penny Designs
   ```

9. run the dev script using NPM
   ```
   npm run dev 
   ```

##### **This will be the terminal you use to operate on localhost:3000 to access your project's client, and watch any changes you make to the project live**

