<template>
    <div class="px-3 py-2">
        <div class="mb-2">
            <label for="quantity" class="mr-2 font-bold text-base">Sort by:</label>
            <select id="quantity" v-model="quantity"
                class="border border-gray-300 rounded px-2 py-1 focus:outline-none w-full">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
        </div>
        <hr>
        <div class="mb-2">
            <h3 class="font-bold text-base">
                Categories
            </h3>
            <div class="">
                <ul>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mb-2">

            <h3 class="font-bold text-base">
                Categories
            </h3>
            <div class="">
                <ul>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mb-2">
            <h3 class="font-bold text-base">
                Categories
            </h3>
            <div class="">
                <ul>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mb-2">
            <h3 class="font-bold text-base">
                Categories
            </h3>
            <div class="">
                <ul>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                    <li class="mb-0">
                        <input type="checkbox">
                        <label for="" class="mx-2">Mens</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SearchFilter",
}
</script>