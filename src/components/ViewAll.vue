<template>
<div>
        <div class="header">
          <h1>Featured Developers</h1>
        </div>
        <div class="Home">
        <a href="#/home">Home</a>
        </div>
        <br>
    <div class="container mt-3">
      <div class="col mb-4">
        <div class="card auto">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <img src="../assets/image.png" alt="Avatar" class="avatar">
            <h5 class="card-title">Person1</h5>
            <p class="card-text">Role: </p>
            <p class="card-text">Skills: </p>
            <p class="card-text">link: </p>
            <p class="card-text">Goal: </p>
            <p class="card-text">Attainment: </p>
          </div>
        </div>
      </div>

      <div class="col mb-4">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <img src="../assets/image.png" alt="Avatar" class="avatar">
            <h5 class="card-title">Person2</h5>
            <p class="card-text">Role: </p>
            <p class="card-text">Skills: </p>
            <p class="card-text">link: </p>
            <p class="card-text">Goal: </p>
            <p class="card-text">Attainment: </p>
          </div>
        </div>
      </div>
      <div class="col mb-4">
        <div class="card h-100">
          <!-- <img src="..." class="card-img-top" alt="..."> -->
          <div class="card-body">
            <img src="../assets/image.png" alt="Avatar" class="avatar">
            <h5 class="card-title">Person3</h5>
            <p class="card-text">Role: </p>
            <p class="card-text">Skills: </p>
            <p class="card-text">link: </p>
            <p class="card-text">Goal: </p>
            <p class="card-text">Attainment: </p>
          </div>
        </div>
      </div>
    
    <br>
    <br>
    <div class="footer"> 
      <a>Featured Developer</a>
      <br>
      <a>CopyRight@2021</a>
      <br>
      <a>Proposal 3B</a>
      <br>
      <a href="https://github.com/KeerthiMuli/Featured-Developer-Proposal/blob/main/Proposal.md">Proposal ||</a>
      <a href="https://github.com/KeerthiMuli/Featured-Developer-ThreeB-frontend"> Frontend Repo ||</a>
      <a href="https://github.com/KeerthiMuli/Featured-Developer-ThreeB-backend"> Backend Repo ||</a>
      <a href="https://github.com/KeerthiMuli/Featured-Developer-Proposal/projects/1"> Work planning</a>
    </div>
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

.Home{
  float: right;
}

.header {
  padding: 20px;
  text-align: center;
  background: green;
  color: white;
  font-size: 30px;
}
/* footer code */

.footer{
  padding: 10px;
  text-align: center;
  background: green;
  color: white;
  font-size: 15px;
}


p { text-align: initial;}
</style>