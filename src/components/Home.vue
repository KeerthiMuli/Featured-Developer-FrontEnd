<template>
  <div>
    <b-row>
      <h1>FEATURED DEVELOPER</h1>
    </b-row>
    <b-container fluid class="bgTheme">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-xl-9">
            <div class="card">
              <div class="row">
                <div class="col-sm-12 bg-c-lite-green user-profile">
                  <div class="card-block text-center text-Black">
                    <div class="m-b-25">
                      <img
                        src="../assets/a.jpg"
                        class="img-radius"
                        alt="User-Profile-Image"
                        height="100"
                        width="100"
                      />
                    </div>
                    <div class="f-w-600">{{this.data.data[0].fullName}}</div>

                    
                    <i
                      class="
                        mdi mdi-square-edit-outline
                        feather
                        icon-edit
                        m-t-10
                        f-16
                      "
                    ></i>
                  </div>

                  <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Details</h6>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="m-b-10 f-w-600">Email</div>
                      <div class="text-muted f-w-400">{{this.data.data[0].emailaddress}}</div>
                    </div>
                    <div class="col-sm-6">
                      <div class="m-b-10 f-w-600">LinkedIn</div>
                      <div class="text-muted f-w-400">{{this.data.data[0].linkedinurl}}</div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="m-b-10 f-w-600">Skills</div>
                      <div class="text-muted f-w-400">{{this.data.data[0].skills}}</div>
                    </div>
                    <div class="col-sm-6">
                      <div class="m-b-10 f-w-600">Goal</div>
                      <div class="text-muted f-w-400">{{this.data.data[0].goals}}</div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div>GithubUrl</div>
                      <a slt="link to git" src="link to git"> {{this.data.data[0].githuburl}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#/developersList">View all</a>
      </div>
    </b-container>
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
      await this.$axios.get(`http://localhost:8080/developers`).then((res) => {
        
        if (res.status == 200) {
          this.data = res
          
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

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.bgTheme {
  background-image: url("../assets/bgcolor2.jpg");
}

.h3-dispaly {
  display: flex;
  /* width: 15%; */
}

.padding {
  padding: 3rem !important;
}

.user-card-full {
  overflow: hidden;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
  border: none;
  margin-bottom: 30px;
}

.bg-c-lite-green {
  background: -webkit-gradient(linear, left top, right top);
  background: linear-gradient(to right, #f7f5f5, #f8f7f7);
}
.card-block {
  padding: 1.25rem;
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
</style>
