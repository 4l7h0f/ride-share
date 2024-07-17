<script setup>
    import {useRouter} from 'vue-router'

    const router = useRouter()
    const findRide = () => {
        router.push({
            name: 'location'
        })
    }
</script>
<template>
    <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
       
        <div class="p-4 sm:p-7">
            <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Althof Ride And Share</h1>
            </div>
            <div class="mt-5">
                <div class="grid grid-rows-1 grid-flow-col gap-4">
                    <div>
                        <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" @submit.prevent="handleVerification">Start Driving</button>
                    </div>
                    <div>
                        <button @click="findRide" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" @submit.prevent="handleVerification">Find a Ride</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>