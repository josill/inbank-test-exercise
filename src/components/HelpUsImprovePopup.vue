<template>
    <div class="fixed flex flex-col items-center justify-center z-99 inset-0 md:h-full md:w-full lg:h-full lg:w-full m-auto backdrop-blur-md font-open-sans">
        <div class="flex flex-col items-center justify-center w-10/12 md:w-1/2 lg:w-3/12 bg-pale-white rounded-3xl relative px-8 py-16">
            <img @click="() => handlePopup()" class="absolute top-8 left-8 hover:cursor-pointer" :src="require('@/assets/images/cross-sign.svg')" alt="cross-sign" />
            <div class="flex flex-col items-start justify-center mt-8">
                <h2 class="text-2xl text-tundora font-normal">Help us improve</h2>
                <h3 class="text-base text-tundora font-light mt-4">We want to offer our clients the best experience. Your feedback will help us get better. You can select multiple answers.</h3>
            </div>
            <div class="grid grid-cols-4 grid-rows-7 mt-8">
                <div v-for="(feedback, index) in feedbackOptions" :key="index" :class=" `flex items-center row-start-${index} col-span-4 row-end-${index} text-base text-tundora font-normal mb-4` ">
                    <input id="default-checkbox" type="checkbox" value="" class="w-5 h-5 text-tundora bg-gray-100 border-tundora rounded focus:tundora">
                    <label for="default-checkbox" class="ml-6 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                    {{ feedback }}
                </div>
            </div>
            <div class="flex items-center justify-center w-full">
                <button @click="() => handlePopup()" class=" col-span-4 bg-royal-purple text-pale-white text-base font-normal rounded-lg h-[48px] w-7/12 mt-4">Cancel loan application</button> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      handlePopup: {
        type: Function,
        required: true
      },
      feedbackOptions: {
        type: Array,
        required: true
      }
    }
}

</script>
