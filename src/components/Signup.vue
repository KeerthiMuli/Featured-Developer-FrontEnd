<template>
<div class = "topdiv" >
<form action="action_page.php" method="post">
    <div class="header">
      <h1>Featured Developers</h1>
    </div>
  <div class="signuplogo">
        <a>Signup</a>
  </div>
<div class="Home">
      <a href="#/Home" id="Home">Home</a>

      <a href="#/ViewAll" id="ViewAll">ViewAll</a>
      </div>
<br>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <br>
    <input type="text" placeholder="Enter Username" name="uname" required>
  </div>

<div class="container">
    <label for="psw"><b>Password</b></label>
    <br>
    <input type="password" placeholder="Enter Password" name="psw" required>
   </div>

   <div class="container">
    <label for="psw"><b>Confirm Password</b></label>
    <br>
    <input type="password" placeholder="Enter Password" name="psw" required>
   </div>

<div class="container"> 
    <button type="submit">Signup</button>
   
  </div>

<div class="footer"> 
      <a>Featured Developer || CopyRight@2021 </a>
      <br>
      <a>Proposal 3B</a>
      <br>
      <a class="link" href="https://github.com/KeerthiMuli/Featured-Developer-Proposal/blob/main/Proposal.md">Proposal ||</a>
      <a class="link" href="https://github.com/KeerthiMuli/Featured-Developer-ThreeB-frontend"> Frontend Repo ||</a>
      <a class="link" href="https://github.com/KeerthiMuli/Featured-Developer-ThreeB-backend"> Backend Repo ||</a>
      <a class="link" href="https://github.com/KeerthiMuli/Featured-Developer-Proposal/projects/1"> Work planning</a>
    </div>
</form>
</div>
</template>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>


<style scoped>
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 20%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: rgb(231, 142, 25);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
  text-align: left;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cansignupbutton (red) */


.Signupbutton {
  width: 20%;
  padding: 10px 18px;
  text-align: left;
;
}

/* Center the avatar image inside this container */
.signuplogo {
  text-align: center;
  margin: 24px 0 12px 0;
  color: rgb(231, 142, 25);
  font-size: 30px;
  display: block
}

/* Avatar image */
img.avatar {
  width: 10%;
  border-radius: 30%;
}

/* Add padding to containers */
.container{
  padding: 16px;
  text-align: left;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and signupbutton on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .Signupbutton {
    width: 40%;
    text-align: left;
    
  }

  .header {
  padding: 20px;
  text-align: center;
  background: rgb(231, 142, 25);
  color: white;
  font-size: 30px;
}


/* footer code */

.footer{
  padding: 20px;
  text-align: center;
  background: rgb(231, 142, 25);
  color: white;
  font-size: 15px;
}

.link{
  color:white;
}

.link:hover{
  color:black;
}

.topdiv {
  margin-top: -5%;
  margin-left: -1%;
  margin-right: -1%;
}

#Home{
  flex: left;
   padding-left: 2% ;
   color: rgb(231, 142, 25);
}

}

#ViewAll{
  float: right;
   padding-right: 2% ;
   color: rgb(231, 142, 25);
}
</style>
