# NOSTRA HIRING ASSIGNMENT:

## TECH/ TOOLS:
* React.js
* Redux
* any CSS pre-processor

### Please check the 'nostra-assignment' folder in this repo for design specifications, assets and visual understanding of the task

1. The assignment consists of designing 2 responsive screens - a home screen and a wallet transaction screen
2. The data for these screens can be fetched from the following API endpoints:
  * http://localhost:3000/home
  * http://localhost:3000/wallet
   respectively
3. To run the back-end server
  * clone this repo
  * npm install
  * npm run start
  * make sure you have a node version of 12.x installed

### HOME SCREEN:
* The home screen is vertically scrollable and consists of 4 sections
* The top section of the Home screen is a header with a title. The header should be sticky
* The second section of the screen consists of a list of banners (check the API response of http://localhost:3000/home for the banners data list)
  * The banners should auto-scroll to the right every 5 seconds.
  * Banners should also be scrollable on manual drag.
  * Some of the banners are clickable(check the boolean key 'redirect' in the response)
  * On click of the banner(whereever applicable), navigate to Wallet screen based on the 'route' key of the API response
* Just below the banner section is a Tab-bar section which consits of multiple sports tabs, scrollable to the right. (check the 'sports' key in the response for the list of tab items )
  * This section is to be made sticky w.r.t the vertical scroll of the page (Please refer to s1.1 and s1.2 images in the specification sheet)
  * Each tab is a clickable which filters the data to be shown in the third section of the screen
* The fourth section of the the screen is a list of challenge cards.
  * Each of these challenge cards display:
    * match info and teams info
    * prize amount to be won (bottom-left) and
    * a timer(bottom-right) which counts down to the time left for the match to start
  * The information regarding the team names and their flags can be found against the 'match_parties' key inside the challenges array of the API response
  * The data displayed in this section depends on the sports tab selected (e.g, show only football challenges when 'Football' tab is clicked, show all challenges when 'ALL' is clicked)

### WALLET TRANSACTION SCREEN:
* This screen consists of 3 sections
* The top section is a sticky header with a title and a back arrow, on click of which the user should navigate back to the Home screen
* The second section is a card which displays the total wallet balance of the user along with the total no. of withdrawals in progress (check for the 'status' key in the response)
* The final section consists of tiles which can be of 3 types
  * add_to_wallet
  * remove_from_wallet
  * join_contest
* All the tiles are to be grouped together based on this type
* Each row can fit a maximum of 3 tiles (all of same type)

### IMPORTANT
1. Submit the github link to the repo consisting of your front-end code with the steps to be followed in the README.md file
2. Only github links are considered as valid submissions
3. Along with the submission, please list the steps(including the packages installed) to be followed in order to successfully run and build the project

### Bonus points for:
* using React Hooks
* writing clean, re-usable and optimized code
* using linting rules
* maintaing good code structure
* using SASS
