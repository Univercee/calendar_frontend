<template>
  <button class="btn-my" :style="{background: color}">{{text}}</button>
</template>

<script>
export default {
    name: 'ActiveButton',
    props:{
        text: String,
        color: String
    }
}
</script>

<style>
    .btn-my{
        height: max-content;
        padding: 9px 21px 11px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: whitesmoke;;
        box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        border: none;
    }
</style>