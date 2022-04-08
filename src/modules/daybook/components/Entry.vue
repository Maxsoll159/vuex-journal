<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry', params:{id:10, valor: 'fa-save'}})"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">19</span>
            <span class="mx-1 fs-5">Mayo</span>
            <span class="mx-2 fw-light">2022</span>
        </div>
        <div class="entry-descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id voluptate placeat perferendis in esse quis optio delectus libero! Nobis ut velit ullam perspiciatis. Quibusdam nam eligendi architecto nisi exercitationem.
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        &:hover{
            background-color: lighten($color: grey, $amount: 45);
            transition: 0.2s all ease-in;
        }
        .entry-descripcion{
            font-size: 12px;
        }
    }
</style>