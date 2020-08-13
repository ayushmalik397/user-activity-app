## Setup the project

1. Clone the project.
2. Run `npm install` to download the dependencies.
3. Run `npm start` to run the application.(Url http://localhost:3000/)

## About the Project

- The project is to showcase a list of users with details like Id, Name, Time Zone, Active Periods.
- The home page displays the list of users.
- On clicking on any user, a modal will appear which will display the details of the user and the list of the active periods.
- The Modal will consists of a **Calender View** toggle option to view the active period of the use on the calender.

## Libraries used

1. **axios**: To fetch the data from the json mock API server.
2. **react-bootstrap**: For styling of the Navbar, button , modal.
3. **react-calender**: To show the calender view of the active perids dates.
4. **@material-ui/icons**: To add the material icons in the app.

**App Live on** https://user-activity-app.web.app/

## Note to reviewers

1. For the Mock API server, I am using another repo https://github.com/ayushmalik397/user-activity-backend which also I have hosted on firebase. To access the sample jsonData use URL: https://activity-backend-app.web.app/members/
2. For the calender view, I have used the **react-calender**. I was looking for any way to highlight multiple dates but it does't have any supprot for this. So, I ended up highlighting the range of the last 2 active periods dates.
