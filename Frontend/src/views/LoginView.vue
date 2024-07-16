<script setup>
    import { vMaska } from "maska/vue"
    import { ref, reactive, onMounted } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    
    const router = useRouter()
    
    const authorized = reactive({
        phone: null,
        login_code: null
    })

    const waitingOnVerification = ref(false)

    onMounted(() => {
        if(localStorage.getItem('token')){
            router.push({
                name: 'landing'
            })
        }
    })

    const formattedAuthentication = () => {
        return {
            phone: authorized.phone.replace('(', '').replace(')', '').replace('-', ''),
            login_code: authorized.login_code.replace(' ', '')
        }
    }

    const handleLogin = () => {
        axios.post('http://localhost/api/login',{
            phone: authorized.phone.replaceAll(' ', '').replace('(', '').replace(')', '').replaceAll('-', '')
        })
        .then((response) => {
            console.log(response.data)
            waitingOnVerification.value = true
        })
        .catch((error) => {
            console.error(error)
            alert(error.response.data.message)
        })
    };

    const handleVerification = () => {
        axios.post('http://localhost/api/login/verify', {
            phone: authorized.phone.replaceAll(' ', '').replace('(', '').replace(')', '').replaceAll('-', ''),
            login_code: authorized.login_code.replaceAll(' ', '')
        })
        .then((response) => {
            console.log(response.data)
            localStorage.setItem('token', response.data)
            router.push({
                name: 'landing'
            })
        })
        .catch((error) => {
            console.error(error)
            alert(error.response.data.message)
        })
    }
</script>
<template>
    <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
            <div v-if="!waitingOnVerification" class="p-4 sm:p-7">
                <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Enter your phone number</h1>
                </div>

                <div class="mt-5">
                <form action="#" @submit.prevent="handleLogin">
                    <div class="grid gap-y-4">
                    <div>
                        <div class="relative">
                            <input type="text" v-maska="'(##) ###-####-####'" v-model="authorized.phone" name="phone" id="phone" placeholder="(12) 345-6789-1011" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="phone-error">
                        </div>
                    </div>
                    <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" @submit.prevent="handleLogin">Continue</button>
                    </div>
                </form>
                </div>
            </div>
            <div v-else class="p-4 sm:p-7">
                <div class="text-center">
                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Enter Your Login Code</h1>
                </div>

                <div class="mt-5">
                    <form action="#" @submit.prevent="handleVerification">
                        <div class="grid gap-y-4">
                        <div>
                            <div class="relative">
                                <input type="text" v-maska="'### ###'" name="login_code" id="login_code" placeholder="123 456" v-model="authorized.login_code" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="login_code-error">
                            </div>
                        </div>
                        <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" @submit.prevent="handleVerification">Verify</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>