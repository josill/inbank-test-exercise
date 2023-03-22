<template>
  <div class="flex flex-col min-h-screen min-w-screen items-center">
    <header-global />
    <div class="w-10/12 h-1/2 flex gap-x-20 items-center mt-16">
      <picture-card />
      <approved-message
      :loanOffer="'1,700.00'" 
      :loanPeriod="36"
      :monthlyPayment="95.27"
      :interestRate="12.90"
      :margin="8.90"
      />
    </div>
  </div>
</template>

<script>
import HeaderGlobal from './components/HeaderGlobal.vue';
import PictureCard from './components/PictureCard.vue';
import ApprovedMessage from './components/ApprovedMessage.vue';

export default {
  name: 'App',
  components: {
    HeaderGlobal,
    PictureCard,
    ApprovedMessage
  },
}
</script>

