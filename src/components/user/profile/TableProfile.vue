<script >
import {onMounted, ref} from "vue";
import axios from "@/axios.js";

export default {
  name: 'TableProfile',
  setup(){
    let token = localStorage.getItem('token')
    const data = JSON.parse(localStorage.getItem('data'))
    const roles = data.user.role
    //console.log(user.id)
    //console.log(roles)
    const profile = ref({ profiles: [] })

    onMounted(async () => {
      try {
        const response = await axios.get(`/profiles`, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
        profile.value = await response.data
        //console.log(profile.value)
      } catch (error) {
        console.error('Erreur lors de la récupération des profils:', error)
      }

    })
    return{
      profile,
      roles
    }
  }
}

</script>

<template>
  <div class="my-5" v-if="profile.profiles" v-for="profile in profile.profiles">
    <h2>IDENTITY</h2>
    <div class="card shadow rounded-1" v-if="roles" v-for="role in roles">
      <div class="card-body table-responsive" v-for="permission in role.permission" >
        <table class="" v-if="permission.name === 'profile-read'">
          <router-link
              :to="`/profile/${profile.id}/edit`"
              :class="{ active: $route.path === `/profile/${profile.id}/edit` }"
          ><i class="fa fa-pen fa-xs edit text-dark"></i>
          </router-link>
          <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{{profile.user.name}}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td> {{profile.user.email}}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>:</td>
            <td>{{ profile.address }}</td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td>:</td>
            <td>{{ profile.hobbies }}</td>
          </tr>
          <tr>
            <td>Job</td>
            <td>:</td>
            <td>{{ profile.job }}</td>
          </tr>
          <tr>
            <td>Skill</td>
            <td>:</td>
            <td>{{ profile.skill }}</td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>

  <div class="row" v-if="profile.profiles" v-for="profile in profile.profiles">
    <div class="col-12 grid-margin">
      <div class="card">
        <div class="position-relative">
          <figure class="overflow-hidden mb-0 d-flex justify-content-center">
            <img :src="profile.user.photo_profile" class="rounded-top" alt="profile cover">
          </figure>
          <div class="d-flex justify-content-between align-items-center position-absolute top-90 w-100 px-2 px-md-4 mt-n4">
            <div>
              <img class="wd-70 rounded-circle" src="#" alt="profile">
              <span class="h4 ms-3 text-dark">Amiah Burton</span>
            </div>
            <div class="d-none d-md-block">
              <button class="btn btn-primary btn-icon-text">
                <i data-feather="edit" class="btn-icon-prepend"></i> Edit profile
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center p-3 rounded-bottom">
          <ul class="d-flex align-items-center m-0 p-0">
            <li class="d-flex align-items-center active">
              <i class="me-1 icon-md text-primary" data-feather="columns"></i>
              <a class="pt-1px d-none d-md-block text-primary" href="#">Timeline</a>
            </li>
            <li class="ms-3 ps-3 border-start d-flex align-items-center">
              <i class="me-1 icon-md" data-feather="user"></i>
              <a class="pt-1px d-none d-md-block text-body" href="#">About</a>
            </li>
            <li class="ms-3 ps-3 border-start d-flex align-items-center">
              <i class="me-1 icon-md" data-feather="users"></i>
              <a class="pt-1px d-none d-md-block text-body" href="#">Friends <span class="text-muted tx-12">3,765</span></a>
            </li>
            <li class="ms-3 ps-3 border-start d-flex align-items-center">
              <i class="me-1 icon-md" data-feather="image"></i>
              <a class="pt-1px d-none d-md-block text-body" href="#">Photos</a>
            </li>
            <li class="ms-3 ps-3 border-start d-flex align-items-center">
              <i class="me-1 icon-md" data-feather="video"></i>
              <a class="pt-1px d-none d-md-block text-body" href="#">Videos</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="row profile-body">
    <!-- left wrapper start -->
    <div class="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
      <div class="card rounded">
        <div class="card-body">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h6 class="card-title mb-0">About</h6>
            <div class="dropdown">
              <button class="btn btn-link p-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="edit-2" class="icon-sm me-2"></i> <span class="">Edit</span></a>
                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="git-branch" class="icon-sm me-2"></i> <span class="">Update</span></a>
                <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="eye" class="icon-sm me-2"></i> <span class="">View all</span></a>
              </div>
            </div>
          </div>
          <p>Hi! I'm Amiah the Senior UI Designer at NobleUI. We hope you enjoy the design and quality of Social.</p>
          <div class="mt-3">
            <label class="tx-11 fw-bolder mb-0 text-uppercase">Joined:</label>
            <p class="text-muted">November 15, 2015</p>
          </div>
          <div class="mt-3">
            <label class="tx-11 fw-bolder mb-0 text-uppercase">Lives:</label>
            <p class="text-muted">New York, USA</p>
          </div>
          <div class="mt-3">
            <label class="tx-11 fw-bolder mb-0 text-uppercase">Email:</label>
            <p class="text-muted">me@nobleui.com</p>
          </div>
          <div class="mt-3">
            <label class="tx-11 fw-bolder mb-0 text-uppercase">Website:</label>
            <p class="text-muted">www.nobleui.com</p>
          </div>
          <div class="mt-3 d-flex social-links">
            <a href="javascript:;" class="btn btn-icon border btn-xs me-2">
              <i data-feather="github"></i>
            </a>
            <a href="javascript:;" class="btn btn-icon border btn-xs me-2">
              <i data-feather="twitter"></i>
            </a>
            <a href="javascript:;" class="btn btn-icon border btn-xs me-2">
              <i data-feather="instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- left wrapper end -->
    <!-- middle wrapper start -->
    <div class="col-md-8 col-xl-6 middle-wrapper">
      <div class="row">
        <div class="col-md-12 grid-margin">
          <div class="card rounded">
            <div class="card-header">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">1 min ago</p>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="btn btn-link p-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="icon-lg pb-3px" data-feather="more-horizontal"></i>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="meh" class="icon-sm me-2"></i> <span class="">Unfollow</span></a>
                    <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="corner-right-up" class="icon-sm me-2"></i> <span class="">Go to post</span></a>
                    <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="share-2" class="icon-sm me-2"></i> <span class="">Share</span></a>
                    <a class="dropdown-item d-flex align-items-center" href="#"><i data-feather="copy" class="icon-sm me-2"></i> <span class="">Copy link</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus minima delectus nemo unde quae recusandae assumenda.</p>
              <img class="img-fluid" src="#" alt="">
            </div>
            <div class="card-footer">
              <div class="d-flex post-actions">
                <a href="javascript:;" class="d-flex align-items-center text-muted me-4">
                  <i class="icon-md" data-feather="heart"></i>
                  <p class="d-none d-md-block ms-2">Like</p>
                </a>
                <a href="javascript:;" class="d-flex align-items-center text-muted me-4">
                  <i class="icon-md" data-feather="message-square"></i>
                  <p class="d-none d-md-block ms-2">Comment</p>
                </a>
                <a href="javascript:;" class="d-flex align-items-center text-muted">
                  <i class="icon-md" data-feather="share"></i>
                  <p class="d-none d-md-block ms-2">Share</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card rounded">
            <div class="card-header">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">5 min ago</p>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="btn btn-link p-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="icon-lg pb-3px" data-feather="more-horizontal"></i>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                    <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="meh" class="icon-sm me-2"></i> <span class="">Unfollow</span></a>
                    <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="corner-right-up" class="icon-sm me-2"></i> <span class="">Go to post</span></a>
                    <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="share-2" class="icon-sm me-2"></i> <span class="">Share</span></a>
                    <a class="dropdown-item d-flex align-items-center" href="javascript:;"><i data-feather="copy" class="icon-sm me-2"></i> <span class="">Copy link</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <p class="mb-3 tx-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <img class="img-fluid" src="#" alt="">
            </div>
            <div class="card-footer">
              <div class="d-flex post-actions">
                <a href="javascript:;" class="d-flex align-items-center text-muted me-4">
                  <i class="icon-md" data-feather="heart"></i>
                  <p class="d-none d-md-block ms-2">Like</p>
                </a>
                <a href="javascript:;" class="d-flex align-items-center text-muted me-4">
                  <i class="icon-md" data-feather="message-square"></i>
                  <p class="d-none d-md-block ms-2">Comment</p>
                </a>
                <a href="javascript:;" class="d-flex align-items-center text-muted">
                  <i class="icon-md" data-feather="share"></i>
                  <p class="d-none d-md-block ms-2">Share</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- middle wrapper end -->
    <!-- right wrapper start -->
    <div class="d-none d-xl-block col-xl-3">
      <div class="row">
        <div class="col-md-12 grid-margin">
          <div class="card rounded">
            <div class="card-body">
              <h6 class="card-title">latest photos</h6>
              <div class="row ms-0 me-0">
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-2">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-2">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-2">
                    <img class="img-fluid rounded" src="##" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-2">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-2">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-2">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-0">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-0">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
                <a href="javascript:;" class="col-md-4 ps-1 pe-1">
                  <figure class="mb-0">
                    <img class="img-fluid rounded" src="#" alt="">
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 grid-margin">
          <div class="card rounded">
            <div class="card-body">
              <h6 class="card-title">suggestions for you</h6>
              <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                <div class="d-flex align-items-center hover-pointer">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                  </div>
                </div>
                <button class="btn btn-icon"><i data-feather="user-plus" class="text-muted"></i></button>
              </div>
              <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                <div class="d-flex align-items-center hover-pointer">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                  </div>
                </div>
                <button class="btn btn-icon"><i data-feather="user-plus" class="text-muted"></i></button>
              </div>
              <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                <div class="d-flex align-items-center hover-pointer">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                  </div>
                </div>
                <button class="btn btn-icon"><i data-feather="user-plus" class="text-muted"></i></button>
              </div>
              <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                <div class="d-flex align-items-center hover-pointer">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                  </div>
                </div>
                <button class="btn btn-icon"><i data-feather="user-plus" class="text-muted"></i></button>
              </div>
              <div class="d-flex justify-content-between mb-2 pb-2 border-bottom">
                <div class="d-flex align-items-center hover-pointer">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                  </div>
                </div>
                <button class="btn btn-icon"><i data-feather="user-plus" class="text-muted"></i></button>
              </div>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center hover-pointer">
                  <img class="img-xs rounded-circle" src="#" alt="">
                  <div class="ms-2">
                    <p>Mike Popescu</p>
                    <p class="tx-11 text-muted">12 Mutual Friends</p>
                  </div>
                </div>
                <button class="btn btn-icon"><i data-feather="user-plus" class="text-muted"></i></button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- right wrapper end -->
  </div>

</template>

<style scoped>
/* Import Font Dancing Script */
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

* {
  margin: 0;
}

body {
  background-color: #e8f5ff;
  font-family: Arial;
  overflow: hidden;
}

/* NavbarTop */
.navbar-top {
  background-color: #fff;
  color: #333;
  box-shadow: 0px 4px 8px 0px grey;
  height: 70px;
}

.title {
  font-family: 'Dancing Script', cursive;
  padding-top: 15px;
  position: absolute;
  left: 45%;
}

.navbar-top ul {
  float: right;
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  padding: 18px 50px 0 40px;
}

.navbar-top ul li {
  float: left;
}

.navbar-top ul li a {
  color: #333;
  padding: 14px 16px;
  text-align: center;
  text-decoration: none;
}

.icon-count {
  background-color: #ff0000;
  color: #fff;
  float: right;
  font-size: 11px;
  left: -25px;
  padding: 2px;
  position: relative;
}

/* End */

/* Sidenav */
.sidenav {
  background-color: #fff;
  color: #333;
  border-bottom-right-radius: 25px;
  height: 86%;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  position: absolute;
  top: 70px;
  width: 250px;
}

.profile {
  margin-bottom: 20px;
  margin-top: -12px;
  text-align: center;
}

.profile img {
  border-radius: 50%;
  box-shadow: 0px 0px 5px 1px grey;
}

.name {
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
}

.job {
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
}

.url, hr {
  text-align: center;
}

.url hr {
  margin-left: 20%;
  width: 60%;
}

.url a {
  color: #818181;
  display: block;
  font-size: 20px;
  margin: 10px 0;
  padding: 6px 8px;
  text-decoration: none;
}

.url a:hover, .url .active {
  background-color: #e8f5ff;
  border-radius: 28px;
  color: #000;
  margin-left: 14%;
  width: 65%;
}

/* End */

/* Main */
.main {
  margin-top: 2%;
  margin-left: 29%;
  font-size: 28px;
  padding: 0 10px;
  width: 58%;
}

.main h2 {
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  margin-bottom: 10px;
}

.main .card {
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 1px 1px 8px 0 grey;
  height: auto;
  margin-bottom: 20px;
  padding: 20px 0 20px 50px;
}

.main .card table {
  border: none;
  font-size: 16px;
  height: 270px;
  width: 80%;
}

.edit {
  position: absolute;
  color: #e7e7e8;
  right: 14%;
}

.social-media {
  text-align: center;
  width: 90%;
}

.social-media span {
  margin: 0 10px;
}

.fa-facebook:hover {
  color: #4267b3 !important;
}

.fa-twitter:hover {
  color: #1da1f2 !important;
}

.fa-instagram:hover {
  color: #ce2b94 !important;
}

.fa-invision:hover {
  color: #f83263 !important;
}

.fa-github:hover {
  color: #161414 !important;
}

.fa-whatsapp:hover {
  color: #25d366 !important;
}

.fa-snapchat:hover {
  color: #fffb01 !important;
}

/* End */
</style>