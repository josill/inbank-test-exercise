<template>
    <div class="md:w-1/2 min-h-full items-center justify-center relative">
        <div class="flex flex-col font-open-sans">
            <div class="flex flex-col items-center justify-center pb-4">
                <h2 class="text-lg text-tundora font-normal">Good news!</h2>
                <h3 class="text-base text-tundora font-light mt-2 mb-2">Your loan has been approved.</h3>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="grid grid-rows-3 grid-cols-2 gap-x-6 gap-y-6 py-6">
                <p class="row-start-1 row-end-1 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Personal loan offer</p>
                <p class="row-start-2 row-end-2 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Loan period</p>
                <p class="row-start-3 row-end-3 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Monthly payment</p>
                
                <p class="row-start-1 row-end-1 col-span-2 flex flex-row text-lg text-tundora font-normal">
                    {{ loanOffer }}
                    <span><img class="pt-1.5" :src="require('@/assets/images/euro-sign.svg')" alt="euro-sign" /></span>
                </p>
                <p class="row-start-2 row-end-2 col-span-2 text-lg text-tundora font-normal">
                    {{ loanPeriod }}
                    <span class="text-xs">months</span>
                </p>
                <p class="row-start-3 row-end-3 col-span-2 flex flex-row text-lg text-tundora font-normal">
                    {{ monthlyPayment }}
                    <span><img class="pt-1.5" :src="require('@/assets/images/euro-sign.svg')" alt="euro-sign" /></span>
                </p>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="grid grid-rows-2 grid-cols-2 gap-x-6 gap-y-6 py-6">
                <p class="row-start-1 row-end-1 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Personal loan offer</p>
                <p class="row-start-2 row-end-2 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Loan period</p>
                
                <p class="row-start-1 row-end-1 col-span-2 flex flex-row text-lg text-tundora font-normal">
                    {{ interestRate }}
                    <span><img class="pt-1.5" :src="require('@/assets/images/percent-sign.svg')" alt="percent-sign" /></span>
                </p>
                <p class="row-start-2 row-end-2 col-span-2 flex flex-row text-lg text-tundora font-normal">
                    {{ margin }}
                    <span><img class="pt-1.5" :src="require('@/assets/images/percent-sign.svg')" alt="percent-sign" /></span>
                    <span class="text-sm pt-1.5 pl-1">+ 6 months EURIBOR (0</span>
                    <img class="pt-0.5" :src="require('@/assets/images/percent-sign.svg')" alt="percent-sign" />
                    <span class="text-sm pt-1.5">)</span>
                </p>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="flex flex-row items-center justify-center gap-x-4 py-4">
                <img :src="require('@/assets/images/check-circle.svg')" alt="check-circle" />
                <p class="text-sm text-tundora font-light">Promo code applied</p>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="flex flex-col items-center justify-center pt-8 gap-y-4 mb-12">
                <button class="bg-royal-purple text-pale-white text-base font-normal rounded-lg h-[48px] w-3/4">View offer details</button>
                <button @click="() => {handlePopup()}" class="text-royal-purple text-base font-normal">Not interested</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      loanOffer: {
        type: String,
        required: true
      },
      loanPeriod: {
        type: Number,
        required: true
      },
      monthlyPayment: {
        type: Number,
        required: true
      },
      interestRate: {
        type: Number,
        required: true
      },
      margin: {
        type: Number,
        required: true
      },
      handlePopup: {
        type: Function,
        required: true
      }
    },
  }
  </script>

