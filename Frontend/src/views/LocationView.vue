<script setup>
    const handleLocationChanged = (e) => {


    }
</script>
<template>
    <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
        <div class="p-4 sm:p-7">
            <div class="text-center">
            <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Where are we going</h1>
            </div>

            <div class="mt-5">
            <form action="#">
                <div class="grid gap-y-4">
                <div>
                    <div class="relative">
                        <GMapAutocomplete 
                            placeholder="Enter Location Name" 
                            @place_changed="handleLocationChanged"
                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" 
                            required>
                        </GMapAutocomplete>
                        <!-- <GMapAutocomplete
                            placeholder="This is a placeholder"
                            @place_changed="handleLocationChanged"
                        >
                        </GMapAutocomplete> -->
                    </div>
                </div>
                <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Find A Ride</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>