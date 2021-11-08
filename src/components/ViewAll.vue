<template>
<div class = "topdiv" >
<div>
        <div class="header">
          <h1>Featured Developers</h1>
        </div>
        <div class="Home">
      <a href="#/Home" id="Home">Home</a>
      <br>
      </div>
    <div class="container mt-3">
      <div class="col mb-4">
        <div class="card auto">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <div class="m-b-25">
                      <img
                        :src= this.data.data[0].image
                        class="img-radius"
                        alt="User-Profile-Image"
                        height="100"
                        width="100"
                      />
                    </div>
                    <br>
            <div class="f-w-600"><span style="font-weight:bold;">{{this.data.data[0].fullName}}</span></div>
            <br>
            <table  align="center">
                  <tr>
                    <td><span style="font-weight:bold;" class="names">DeveloperID:</span></td>
                    <td>{{this.data.data[0].developerId}}</td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">Skills:</span></td>
                    <td>{{this.data.data[0].skills}}</td>
                  </tr>
                  <br>
                  <tr>
                      <td><span style="font-weight:bold;" class="names">Goal:</span></td>
                    <td>{{this.data.data[0].goals}}</td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">LinkedIn:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[0].linkedinurl}}</a></td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">GithubUrl:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[0].githuburl}}</a></td>
                  </tr>
                </table>
          </div>
        </div>
      </div>

      <div class="col mb-4">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <div class="m-b-25">
                      <img
                        :src= this.data.data[3].image
                        class="img-radius"
                        alt="User-Profile-Image"
                        height="100"
                        width="100"
                      />
                    </div>
                    <br>
            <div class="f-w-600"><span style="font-weight:bold;">{{this.data.data[3].fullName}}</span></div>
            <br>
            <table  align="center">
                  <tr>
                    <td><span style="font-weight:bold;" class="names">DeveloperID:</span></td>
                    <td>{{this.data.data[3].developerId}}</td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">Skills:</span></td>
                    <td>{{this.data.data[3].skills}}</td>
                  </tr>
                  <br>
                  <tr>
                      <td><span style="font-weight:bold;" class="names">Goal:</span></td>
                    <td>{{this.data.data[3].goals}}</td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">LinkedIn:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[3].linkedinurl}}</a></td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">GithubUrl:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[3].githuburl}}</a></td>
                  </tr>
                </table>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <div class="m-b-25">
                      <img
                        :src= this.data.data[2].image
                        class="img-radius"
                        alt="User-Profile-Image"
                        height="100"
                        width="100"
                      />
                    </div>
                    <br>
            <div class="f-w-600"><span style="font-weight:bold;">{{this.data.data[2].fullName}}</span></div>
            <br>
            <table  align="center">
                  <tr>
                    <td><span style="font-weight:bold;" class="names">DeveloperID:</span></td>
                    <td>{{this.data.data[2].developerId}}</td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">Skills:</span></td>
                    <td>{{this.data.data[2].skills}}</td>
                  </tr>
                  <br>
                  <tr>
                      <td><span style="font-weight:bold;" class="names">Goal:</span></td>
                    <td>{{this.data.data[2].goals}}</td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">LinkedIn:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[2].linkedinurl}}</a></td>
                  </tr>
                  <br>
                  <tr>
                    <td><span style="font-weight:bold;" class="names">GithubUrl:</span></td>
                    <td><a class="flex-child green" slt="link to git" src="link to git"> {{this.data.data[2].githuburl}}</a></td>
                  </tr>
                </table>
          </div>
        </div>
      </div>
    <br>
  </div>
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
</div>


</template>
<script>
export default {
  name: "ViewAll",
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
      //    await this.$axios.get(`http://localhost:8080/developers/getall`).then((res) => {
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
<style>
.h1 {
  text-align: center;
  color: black;
  top: 10px;
  padding-left: 20px;
  margin-bottom: 10px;
}

#Home{
   float:left;
   padding-left: 2% ;
   color: rgb(231, 142, 25);
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

.card-body{
 background-color: antiquewhite;
 border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 5px; 
  margin-top: 5px; 
  margin-left: 5px;
  margin-right: 5px;
}
.names{
  text-decoration-color: black;
}

.topdiv {
  margin-top: -5%;
  margin-left: -1%;
  margin-right: -1%;
}
p { text-align: initial;}
</style>