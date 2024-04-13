## Questions

### Please provide instructions on how to run your project in a bulleted list below.

- Install Docker Desktop(This is very important)
- Cd into this repo main directory
- Run npm install
- Run the command docker compose up
- Open another terminal from same path
- Run npx prisma migrate dev --name init
- Run npx prisma db seed
- Run npm run dev

### Were there any pieces of this project that you were not able to complete that you'd like to mention?

I had limited time with this project and therefore, i didn't spend too much time on styling and code refactoring. The goal was to pretty much keep design as minimal and make the project functional, by meeting all the A/C.

### If you were to continue building this out, what would you like to add next?

First off, I would like to refactor the code to make it more modular, Along with that I would like to add the following considering this is an MVP at launch.

- Improve the UI/UX part of it to make it more interesting
- Add the following feature at least for the MVP
  - Will add some more tables to also store transaction history and most likely allow the users to view their all transaction history.
  - Would be nice to have them resister a new account, with email, password/pin for more security. This way we could also allow them to login using their email and password/pin just in case they don't remember their account number.
  - Must be able to notify the user via text or email after each transactions they have completed(Important)

### If you have any other comments or info you'd like the reviewers to know, please add them below.

I would like to mention that, I ran into some laptop issue on my old laptop where i initially started this project, I had to get a new laptop and set-up all my tools and stuff all over again, which delayed the completion time for this project.
