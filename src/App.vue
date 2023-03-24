<template>
  <div class="flex flex-col min-h-screen h-full min-w-screen items-center justify-center">
    <header-global />
    <div class="w-10/12 h-1/2 flex flex-col md:flex md:flex-row lg:w-3/4 gap-x-20 m-auto items-center justify-center">
      <picture-card />
      <approved-message
      :loanOffer="'1,700.00'" 
      :loanPeriod="36"
      :monthlyPayment="95.27"
      :interestRate="12.90"
      :margin="8.90"
      :handlePopup="togglePopup"
      />
    </div>
    <help-us-improve-popup
    :feedbackOptions="feedbackList"
    :handlePopup="togglePopup" 
    v-if="popupState" />
    <div class="m-auto"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import HeaderGlobal from './components/HeaderGlobal.vue';
import PictureCard from './components/PictureCard.vue';
import ApprovedMessage from './components/ApprovedMessage.vue';
import HelpUsImprovePopup from './components/HelpUsImprovePopup.vue';

export default {
  name: 'App',
  components: {
    HeaderGlobal,
    PictureCard,
    ApprovedMessage,
    HelpUsImprovePopup
  },
  setup () {
    const popupState = ref(false)
    const feedbackList = ["Loan amount is too small", "Interest is too high", "Contract fee is too high", "Not sure if I should take a loan", "I prefer another bank", "Timing is not right", "Other"]

    function togglePopup() {
      popupState.value = !popupState.value
        }

        return {
          popupState,
          feedbackList,
          togglePopup
        }
  }
}
</script>

