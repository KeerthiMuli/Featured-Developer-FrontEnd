<template >
  <div class = "topdiv" >
        <div class="header">
          <h1>Featured Developers</h1>
        </div>
    <b-container fluid class="bgTheme">
      <div class="Padding">
      <div>
      <a href="#/Signup" id="Signup">Signup</a>
      <div class="Login">
      <a href="#/Login" id="login">Login</a>
      <br>
      </div>
      </div>
      </div>
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-9">
            <div class="card">
              <div class="row">
                <div class="col-sm-12 bg-c-lite-pink user-profile">
                  <div class="card-block text-center text-Black">
                    <div class="m-b-25">
                      <img
                        :src= this.data.data[0].image
                        class="img-radius"
                        alt="User-Profile-Image"
                        height="100"
                        width="100"
                      />
                    </div>
                    <div class="f-w-600"><span style="font-weight:bold;">{{this.data.data[0].fullName}}</span></div>
                    <i class="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                  </div>

                  <h6 class="m-b-20 p-b-5 b-b-default f-w-600"><span style="font-weight:bold;">Details:</span></h6>
                <table  align="center">
                  <tr>
                    <td><span class="names">Email:</span></td>
                    <td>{{this.data.data[0].emailaddress}}</td>
                  </tr>
                  <tr>
                    <td><span class="names">Skills:</span></td>
                    <td>{{this.data.data[0].skills}}</td>
                  </tr>
                  <tr>
                      <td><span class="names">Goal:</span></td>
                    <td>{{this.data.data[0].goals}}</td>
                  </tr>
                  <tr>
                    <td><span class="names">LinkedIn:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[0].linkedinurl}}</a></td>
                  </tr>
                  <tr>
                    <td><span class="names">GithubUrl:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[0].githuburl}}</a></td>
                  </tr>
                </table>
                </div>
              </div>
          </div>
        </div>
        <a href="#/ViewAll">View all</a>
      </div>
    </b-container>
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
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.getDeveloper();
  },
  data (){
    return {
      data: null
    }
  },
  methods: {
    async getDeveloper() {
      // await this.$axios.get(`http://localhost:8080/developers/getall`).then((res) => {
      await this.$axios.get(`https://featured-developers-threeb.herokuapp.com/developers/getall`).then((res) => {
        console.log(res)  
        if (res.status == 200) {
          this.data = res
          console.log("data=",this.data)
          
        }
      });
    },
  },
};
</script>

<style scoped>
.side-nav {
  background-color: rgb(207, 44, 44);
  min-height: 90vh;
  padding: 0px;
}

.bg-gray {
  background-color: rgb(24, 23, 23);
  color: #333;
}

.col-xl-9{
  background-color: bisque;

}

.header {
  padding: 20px;
  text-align: center;
  background: rgb(231, 142, 25);
  color: white;
  font-size: 30px;
}
.topdiv {
  margin-top: -5%;
  margin-left: -1%;
  margin-right: -1%;
}
.footer{
  padding: 20px;
  text-align: center;
  background: rgb(231, 142, 25);
  color: white;
  font-size: 15px;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

 .bgTheme { 
   background-color: antiquewhite;
  /* background-image : url("../assets/b.jpg"); */
 } 

.h3-dispaly {
  display: flex;
  /* width: 15%; */
}

.Padding {
  padding:  3rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  flex: center;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 30px;
  background-color: antiquewhite;
}

.link{
  color:white;
}

.link:hover{
  color:black;
}

.bg-c-lite-green {
  background: -webkit-gradient(linear, left top, right top);
  background: linear-gradient(to right, #f7f5f5, #f8f7f7);
}
.card-block {
  -ms-flex-align: center;
  /* padding: 1.25rem; */
}
.user-card-full .social-link li {
  display: inline-block;
}

.user-card-full .social-link li a {
  font-size: 20px;
  margin: 0 10px 0 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

table td{
  border: 1px #333;
  padding: 6px 10px 4px 8px;
}
.names { font-weight: bold; }

#login{
  float: right;
  padding-right: 5%;
}
#Signup{
  float: right;
}
</style>
