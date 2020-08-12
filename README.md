# This project is a Frontend Assessment by FullThrottle Labs.

## Setup the project

1. Clone the project.
2. Run `npm install` to download the dependencies.
3. Run `npm start` to run the application.(Url http://localhost:3000/)
4. Run `npx json-server --watch src/Test.json --port 3004` to run the Json Mock API server

## About the Project

The project is to showcase a list of users with details like Id, Name, Time Zone, Active Periods.
On clicking on any user, a modal will appear displayes the details of the user and the list of the active periods.
It also consists of a **Calender View** toggle option to view the active period of the use on the calender.

## Libraries used

1. **axios**: To fetch the data from the json mock API server.
2. **react-bootstrap**: For styling of the Navbar, button , modal.
3. **react-calender**: To show the calender view of the active perids dates.
4. **@material-ui/icons**: To add the material icons in the app.

## Note to reviewer:

I have used **react-calender** to show the calender view of the user active dates. I have looked into the docs but didn't get any lead to diplay multiple dates on the calender. So, I ended up diplaying the range of the last 2 active periods.
