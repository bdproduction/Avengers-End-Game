
# Goal

You will build a turn-based RPG game built on The Avengers universe. The game must run on any modern browser.

# Object

The player create a team of 3 Avengers. A team of 3 Supervillain is then randomly created. The AI then makes both team one against the other on a turn based flow. The winning team is the one with last man standing.

# The play

During a turn, one team attacks the other, and the other will attack during the next turn, and so on.

For each turn, the AI chooses for each team player, which opponent it has to attack, so the AI makes all decisions, no player input is required. Each player has 3 properties: Attack (atq), Defense (def), and Health Point (hp).

A player loses points of life after an opponent attack, and dies when there is no life point left.

The damage calculus is: opponent_hp = opponent_hp - (attacker_hp - opponent_defense). If attacker_hp < opponent_defense, then we consider the attack as with no effect.


## Pre-reqs
To build and run this app locally you will need a few things:

Install Node.js
Install MongoDB
Install VS Code

### Install Dependencies
cd <project_name>/client
yarn
cd <project_name>/client/backend
yarn

## Available Scripts

In the client directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

In the backend directory, you can run:

### `yarn build`

Builds the server

### `yarn start`

Starts the server
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


