<template>
    <div class="w-1/2 min-h-full items-center justify-center relative">
        <div class="flex flex-col font-open-sans">
            <div class="flex flex-col items-center justify-center pb-4">
                <h2 class="text-2xl text-tundora font-normal">Good news!</h2>
                <h3 class="text-base text-tundora font-light mt-2 mb-2">Your loan has been approved.</h3>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="grid grid-rows-3 grid-cols-2 gap-x-6 gap-y-6 py-6">
                <p class="row-start-1 row-end-1 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Personal loan offer</p>
                <p class="row-start-2 row-end-2 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Loan period</p>
                <p class="row-start-3 row-end-3 col-span-1 justify-self-end text-sm text-grey-3 font-normal">Monthly payment</p>
                
                <p class="row-start-1 row-end-1 col-span-2 flex flex-row text-lg text-tundora font-normal">
                    {{ loanOffer }}
                    <span><img :src="require('@/assets/images/euro-sign.svg')" alt="euro-sign" /></span>
                </p>
                <p class="row-start-2 row-end-2 col-span-2 text-lg text-tundora font-normal">
                    {{ loanPeriod }}
                    <span class="text-xs pl-1">months</span>
                </p>
                <p class="row-start-3 row-end-3 col-span-2 flex flex-row text-lg text-tundora font-normal">
                    {{ monthlyPayment }}
                    <span><img :src="require('@/assets/images/euro-sign.svg')" alt="euro-sign" /></span>
                </p>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="grid grid-rows-2 grid-cols-2 py-6">
                <p class="row-start-1 row-end-1 col-span-1 text-sm justify-self-end text-grey-3 font-normal">Interest rate</p>
                <p class="row-start-2 row-end-2 col-span-1 text-sm justify-self-end text-grey-3 font-normal mt-4">Margin</p>
            
                <p class="row-start-1 row-end-1 col-span-2 text-lg text-tundora font-normal">
                    {{ interestRate }}
                    <span><img :src="require('@/assets/images/percent-sign.svg')" alt="percent-sign" /></span>
                </p>
                <p class="row-start-2 row-end-2 col-span-2 text-lg text-tundora font-normal">
                    {{ margin }}
                    <span class="text-sm"><img :src="require('@/assets/images/percent-sign.svg')" alt="percent-sign" /> + 6 months EURIBOR (0<span><img :src="require('@/assets/images/percent-sign.svg')" alt="percent-sign" /></span>)</span>
                </p>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="flex flex-row items-center justify-center gap-x-4 py-4">
                <img :src="require('@/assets/images/check-circle.svg')" alt="check-circle" />
                <p class="text-sm text-tundora font-light">Promo code applied</p>
            </div>
            <div class="border border-grey rounded-3xl bg-grey-5"></div>
            <div class="flex flex-col items-center justify-center pt-8 gap-y-4">
                <button class="bg-royal-purple text-pale-white text-base font-normal rounded-lg h-[48px] w-3/4">View offer details</button>
                <button class="text-royal-purple text-base font-normal">Not interested</button>
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
        type: String,
        required: true
      },
      monthlyPayment: {
        type: String,
        required: true
      },
      interestRate: {
        type: String,
        required: true
      },
      margin: {
        type: String,
        required: true
      }
    },
  }
  </script>

