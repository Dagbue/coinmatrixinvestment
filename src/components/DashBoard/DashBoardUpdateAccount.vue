<template>
  <div>
    <update-account-modal @close="hideDialog" v-if="dialogIsVisible"/>
    <form class="update-account" @submit.prevent="showDialog">
      <div>
        <i class='bx bxs-user-rectangle'></i>
        <p>{{this.contacts.firstName}} {{this.contacts.lastName}}</p>
      </div>
      <div>
        <i class='bx bxs-home'></i>
        <p>{{this.contacts.address}}</p>
      </div>
      <div>
        <i class='bx bx-info-circle' ></i>
        <p>{{this.contacts.bio}}</p>
      </div>
      <div>
        <i class='bx bx-phone-call'></i>
        <p>{{this.contacts.phoneNumber}}</p>
      </div>
      <div >
        <i class='bx bxs-calendar' ></i>
        <p>{{this.contacts.dateOfBirth}}</p>
      </div>

      <button class="bank-trans-btn">Update Account</button>
    </form>

  </div>
</template>

<script>
import UpdateAccountModal from "@/components/BaseComponents/modal/UpdateAccountModal.vue";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "@/firebase/config";


export default {
  name: "DashBoardUpdateAccount",
  components: {UpdateAccountModal},
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
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },

  async created() {
    const querySnapshot = await getDocs(collection(db, auth.currentUser.email));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'email': doc.data().email,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'address': doc.data().address,
        'bio': doc.data().bio,
        'phoneNumber': doc.data().phoneNumber,
        'dateOfBirth': doc.data().dateOfBirth,
      }
      this.contacts = data
    })

  },
}
</script>

<style scoped>
textarea{
  padding-left: 20px;
}
.update-account{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #697582;
  color: #FFFFFF;
  margin: 5% 25% 1.5% 20%;
  padding: 4% 5% 4% 6%;
  border-radius: 5px;
}
i{
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
}
.bank-trans-btn{
  padding: 11px 65px;
  color: white;
  background-color: #191C1F;
  border: 1px solid #191C1F;
  border-radius: 5px;
  font-size: 13px;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
/*.bank-trans-btn:hover{*/
/*  color: white;*/
/*  background-color: #697582;*/
/*  border: 1px solid #697582;*/
/*  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);*/
/*  -webkit-transition: all 0.35s ease;*/
/*  transition: all 0.35s ease;*/
/*}*/

div{
  display: flex;
  justify-content: center;
}
p{
  font-size: 20px;
}
@media (max-width: 550px) {
  .update-account{
    margin-top: 30px;
    margin-left: unset;
    margin-right: unset;
  }

  label{
    margin-left: 12px;
  }
  p{
    font-size: 18px;
    padding-left: 5px;
  }
}
</style>