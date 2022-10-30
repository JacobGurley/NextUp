<template>
  <body>  
  <!-- The navigation menu -->
  <div class="logo">
  <!--Linking to Homepage-->
    <a href="Basketball.html">
      <img src="logoNextUp.png" alt="logoNextUp">
    </a>
  </div>
  
  <!-- The navigation menu -->
  <div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>>
    <a href="#notifications">Notifications</a>
    <a href="#messages">Messages</a>
    <a href="http://localhost:8080/friends">Friends</a>
  
    <div class="subnav">
      <button class="subnavbtn">Tutorials <i class="fa fa-caret-down"></i></button>
      <div class="subnav-content">
        <a href="http://localhost:8080/basketball">Basketball</a>
        <a href="http://localhost:8080/football">Football</a>
        <a href="http://localhost:8080/soccer">Soccer</a>
      </div>
    </div>
    <a href="http://localhost:8080/createteam">Create Team</a>
    <a href="#contact">Contact Us</a>
  </div>

  <!--Calls the TeamForm-->
  <div class="createteam">
    <TeamForm />
  </div>
  
  </body>
  
  </template>

  <!--Needed for the TeamForm to link-->
  <script scope>
    import TeamForm from "./TeamForm.vue";

    export default{
      components: {
        TeamForm,
      },
    };
  </script>
  
  <style scoped>
      *{
      margin: 0;
      padding: 0;
  }
  
  /*Background image*/
  body{
      background: url("https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg");
      height: 100vh;
      background-size: cover;
      background-position: center center;
      position: relative;
      background-repeat: no-repeat;
  }
  
  /*Logo positioning*/
  .logo img{
    z-index: 100;
    position: fixed;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    left: 50px;
    top: 20px;
  }
  
  /* The navigation menu */
  .navbar {
    overflow: hidden;
    background-color: #333;
    padding-top: 80px;
    padding-left: 170px;
  }
  
  /* Navigation links - All the tabs*/
  .navbar a {
    float: left;
    font-family: "Montserrat";
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  /* The subnavigation menu */
  .subnav {
    float: left;
    overflow: hidden;
  }
  
  /* Subnav button */
  .subnav .subnavbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
  
  /* Add black background color to navigation links on hover */
  .navbar a:hover, .subnav:hover .subnavbtn {
    background-color: black;
  }
  
  /* Style the subnav content - Under Tutorials */
  .subnav-content {
    display: none;
    position: absolute;
    background-color: black;
    width: 23.4%;
    z-index: 1;
  }
  
  /* Style the subnav links */
  .subnav-content a {
    float: left;
    color: white;
    text-decoration: none;
  }
  
  /* Add a black background color on hover */
  .subnav-content a:hover {
    background-color: #eee;
    color: black;
  }
  
  /* When you move the mouse over the subnav container, open the subnav content */
  .subnav:hover .subnav-content {
    display: block;
  }
   
  /*Moves the create team form*/
  .createteam{
  font-family: "Montserrat";
  display: flex;
  justify-content: center;
  padding-top: 15px;
  }
  </style>
  