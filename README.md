# habit-mapper-app 
Simple application to map habits based in [Judson Brewer's research](https://drjud.com/wp-content/uploads/2021/03/Unwinding-Anxiety-Habit-Mapper-from-DrJud-1-1.pdf).

You can check it in the url https://knowyourhabit.com

<p align="center">
  <img src="https://github.com/Daymannovaes/habit-mapper-app/blob/main/packages/interfaces/resources/icon.png" alt="Know Your Habit icon" width="240">
</p>

## Run
```bash
# install all dependencies
yarn install

# setup database
cd infrastructures

yarn database:start:dev
yarn database:migrate:create
yarn database:migrate up

# setup aws amplify (for authentication flow)
yarn amplify:pull # choose aws as src dir

cd ../

# serve api and frotend in localhost
yarn start
```

## Build
```bash
# construct a docker file
yarn build:api
#run the dockerized api in port 5000 and env file .env.production
yarn run:api:prod
```

## User Stories

- As an **User**, I want to understand my habits, so I can change them for a better one
    - **User** can map a **habit** and input the trigger, the behavior and the reward
- As an **User**, I want to understand many habits, so I can focus on the worse one to change
    - User is somehow incentivized to map a lot of habits
- As an **User**, I want to view my previous mapped habits, so I can recall what I did
    - authentication and persistence
- #todo As an **User**, I want to create a strategy to change a bad habit, so I can have a better life

## Data Model

- User
    - can authenticate
    - has many Habits
    - has many Habit Strategies

- Habit
    - trigger
    - behavior
    - reward
    - createdAt
    - updatedAt

#todo Habit Strategy

- Habit To Be Changed
- ... trigger, behavior, reward strategies etc.

## Technology Stack

- [x]  Ionic
- [x]  Angular
- [x]  NestJS
- [x]  Postgres
- [x]  Docker
- [x]  AWS
  - ECS for dockerized server (service atacched with an app load balancer)
  - App Load Balancer, targeted to EC2 instances deployed by ECS
  - AWS Amplify pipeline to build and host frontend
  - Route 53 knowyourhabit.com -> Amplify, api.knowyourhabit.com -> Load Balancer
  - RDS for postgres

## Layout

- First screen
    - Onboarding: do you know habits work? Yes or No
    - Onboarding: if no, do you want to learn?
- Second screen
    - Map a habit
- Third screen
    - Login so you can track you new mapped habit
- Fourth screen (tabs)
    - Tab 1: list of habits
    - Tab 2: create a new habit
    - Tab 3: account and preferences

## URLs

- /onboarding
- /onboarding/learn
- /onboarding/do
- /login
- /habits
- /habits/create
- /habits/:id
- /habits/:id/edit

## App Skeleton Steps

- [x]  Navigation
- [x]  Business rules implementation (without persistence, raw HTML, without CSS)
- [x]  Business rules with persistence
- [x]  Design & UX implementation
