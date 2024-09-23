<script setup>
import FooterHome from "@/components/user/home/FooterHome.vue";
import {computed, onMounted, ref} from "vue";
import axios from "@/axios.js";
import '@vuepic/vue-datepicker/dist/main.css'
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';
import monde from '@/assets/images/monde.svg'
import publish from '@/assets/images/publish.svg'
import payment from '@/assets/images/payment.svg'
import message from '@/assets/images/message.svg'
import connect from '@/assets/images/connect.svg'
import recherche from '@/assets/images/recherche.svg'
import reserver from '@/assets/images/reserver.svg'

</script>

<template>
  <main>
    <div class="container corde rounded-circle"></div>
    <div class="container-fluid px-0">
      <div class="container m-auto p-5">
        <div class="w-75 m-auto m-5 p-5 text-center">
          <h3>
            <span class="text-success">Publiez</span> vos annonces,
            <span class="text-success">Gérez</span> les réservations, et
            <span class="text-success">Connectez-vous</span> rapidement avec vos clients
            grâce à <em class="text-success">MonGP</em>
          </h3>
        </div>
        <div class="container">
          <div class="row m-auto px-4 py-5   ">
            <div class="row">
              <div class="col-md-2 m-auto">
                <router-link to="/search/annonces" class="btn btn-success text-center shadow-sm rounded-5 mt-4 p-3">
                  Commencer</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt-3 bg-light">
      <div class="container w-75  d-flex m-4 p-5 gap-5">
        <div class="rounded-circle shadow p-3 bg-light">
          <svg stroke="currentColor" class="text-success" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="3.1em" width="3.1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM80.55 341.27c6.28 6.84 15.1 10.72 24.33 10.71l130.54-.18a65.62 65.62 0 0 0 29.64-7.12l290.96-147.65c26.74-13.57 50.71-32.94 67.02-58.31 18.31-28.48 20.3-49.09 13.07-63.65-7.21-14.57-24.74-25.27-58.25-27.45-29.85-1.94-59.54 5.92-86.28 19.48l-98.51 49.99-218.7-82.06a17.799 17.799 0 0 0-18-1.11L90.62 67.29c-10.67 5.41-13.25 19.65-5.17 28.53l156.22 98.1-103.21 52.38-72.35-36.47a17.804 17.804 0 0 0-16.07.02L9.91 230.22c-10.44 5.3-13.19 19.12-5.57 28.08l76.21 82.97z">
            </path>
          </svg>
        </div>
        <div class="">
          <h4 class="hover:underline mt-2">Mode opératoire</h4>
          <div class="h4 pb-2 width mb-4 border-bottom border-success"></div>
        </div>
      </div>
      <div class="container w-80 m-auto">
        <div class="row p-5 justify-content-center">
          <div class="col-md-4">
              <div class="row mt-5">
                <p class="">
                  <span class="step-number me-3">1</span>
                  <span class="text-success fs-3">Connexion</span>
                </p>
                <p class="w-50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci dolor, eos est </p>
              </div>
          </div>
            <img :src="connect" class="col-md-4 shadow border rounded-5 img-fluid" alt="#">
        </div>
      </div>
      <div class="container w-80 m-auto">
        <div class="row p-5 justify-content-center">
          <div class="col-md-4">
            <div class="row mt-5">
              <p class="">
                <span class="step-number me-3">2</span>
                <span class="text-success fs-3">Publier</span>
              </p>
              <p class="w-50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci dolor, eos est </p>
            </div>
          </div>
          <img :src="publish" class="col-md-4 shadow border rounded-5 img-fluid" alt="#">
        </div>
      </div>
      <div class="container w-80 m-auto">
        <div class="row p-5 justify-content-center">
          <div class="col-md-4">
            <div class="row mt-5">
              <p class="">
                <span class="step-number me-3">3</span>
                <span class="text-success fs-3">Rechercher</span>
              </p>
              <p class="w-50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci dolor, eos est </p>
            </div>
          </div>
          <img :src="recherche" class="col-md-4 shadow border rounded-5 img-fluid" alt="#">
        </div>
      </div>
      <div class="container w-80 m-auto">
        <div class="row p-5 justify-content-center">
          <div class="col-md-4">
            <div class="row mt-5">
              <p class="">
                <span class="step-number me-3">4</span>
                <span class="text-success fs-3">Réserver</span>
              </p>
              <p class="w-50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci dolor, eos est </p>
            </div>
          </div>
          <img :src="reserver" class="col-md-4 shadow border rounded-5 img-fluid" alt="#">
        </div>
      </div>
      <div class="container w-80 m-auto">
        <div class="row p-5 justify-content-center">
          <div class="col-md-4">
            <div class="row mt-5">
              <p class="">
                <span class="step-number me-3">5</span>
                <span class="text-success fs-3">Payer par carte</span>
              </p>
              <p class="w-50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci dolor, eos est </p>
            </div>
          </div>
          <img :src="payment" class="col-md-4 shadow border rounded-5 img-fluid" alt="#">
        </div>
      </div>
      <div class="container w-80 m-auto">
        <div class="row p-5 justify-content-center">
          <div class="col-md-4">
            <div class="row mt-5">
              <p class="">
                <span class="step-number me-3">6</span>
                <span class="text-success fs-3">Communication</span>
              </p>
              <p class="w-50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci dolor, eos est </p>
            </div>
          </div>
          <img :src="message" class="col-md-4 shadow border rounded-5 img-fluid" alt="#">
        </div>
      </div>
    </div>
  </main>
  <FooterHome />
</template>


