<template>
  <div>
    <div class="backdrop"></div>
    <dialog open>
      <div class="alpha">

        <div class="first-part">
          <img src="@/assets/withdraw-icon.svg" alt="withdraw-icon"/>
          <i class='bx bx-x' @click="$emit('close')"></i>
        </div>

        <div class="second-part">
          <p class="second-text-1">Update Account</p>
          <form @submit.prevent="sendDeposit">

            <div class="input-form-2">
              <input type="text"  placeholder="Address:" class="input-form-1" required="required" v-model="address" />
            </div>

            <div class="input-form-2">
              <textarea type="text" placeholder="Bio:"  class="input-form-1" rows="2" required="required" v-model="bio" />
            </div>

            <div class="input-form-2">
              <input type="number"  placeholder="Phone Number:" class="input-form-1" required="required" v-model="phoneNumber" />
            </div>

            <div class="input-form-2">
              <input type="date"  placeholder="Date Of Birth:" class="input-form-1" required="required" v-model="dateOfBirth" />
            </div>

            <br/>
            <div class="separate">
              <button class="btn" @click="$emit('close')">Back</button>
              <button class="btn">Save Changes</button>
            </div>
          </form>
        </div>


      </div>

    </dialog>
  </div>
</template>

<script>
import {doc, updateDoc} from "firebase/firestore";
import {auth, db} from "@/firebase/config";
import router from "@/router";
import Swal from "sweetalert2";
export default {
  name: "UpdateAccountModal",
  emits: ['close'],
  data () {
    return {
      contacts: [],
      dialogIsVisible: false,
      firstName: "",
      lastName: "",
      address: "",
      bio:"",
      phoneNumber: "",
      dateOfBirth: "",
    }
  },
  methods: {
    async sendDeposit() {
      await updateDoc(doc(db, auth.currentUser.email, "UserDemo"), {
        address: this.address,
        bio: this.bio,
        phoneNumber: this.phoneNumber,
        dateOfBirth: this.dateOfBirth,
      })
          .then(() => {
          })
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        // text: 'Something went wrong!',
      });
      await router.push('/over-view-demo')
    },
  },
}
</script>

<style scoped >

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
}


dialog {
  position: fixed;
  top: 18vh;
  width: 32rem;
  height: 20rem;
  left: calc(50% - 9rem);
  margin: 0;
  background-color: transparent;
  z-index: 100;
  border: none;
  animation: modal 0.3s ease-out forwards;
}

.alpha{
  position: relative;
  display: block;
  overflow: hidden;
  width: 420px;
  height: 510px;
  /*height: auto;*/
  padding: 24px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(3, 28, 67, 0.1);
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 34px 0 rgba(3, 28, 67, 0.13);
}

.first-part{
  display: flex;
  justify-content: space-between;
}

.bx-x{
  font-size: 25px;
  padding-top: 2px;
}

.separate{
  display: flex;
  justify-content: space-between;
}

.btn{
  padding: 8px 55px;
  color: white;
  background-color: #124DA8;
  border: 1px solid #124DA8;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}
.btn:hover{
  color: white;
  background-color: #2e8cec;
  border: 1px solid #2e8cec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.second-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  margin-top: 2%;
  margin-bottom: 4%;
}

.input-form-2{
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
}

.input-form-1{
  order: 1;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 2%;
}

input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

input:focus {
  border: 1px solid #24405A;
}

textarea {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 12px;
  padding-bottom: 12px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
}

textarea:focus {
  border: 1px solid #24405A;
}


@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 500px) {
  dialog {
    top: 13.5vh;
    width: 27rem;
    height: 20rem;
    left: calc(50% - 11.5rem);
    right: 30px;
  }
  .alpha{
    width: 360px;
    border-radius: 5px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: unset;
  }
  .btn{
    padding: 8px 45px;
    font-size: 12px;
  }
}
</style>