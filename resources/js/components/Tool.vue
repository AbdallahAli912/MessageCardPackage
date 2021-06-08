<template>

    <div class="box" >
        <button @click="show" class="button is-success tb-m-r-10 "  style="margin: 20px;">Show Card</button>
        <modal v-show="showModal">
            <template slot="title">
                <h1>Abdllah Ali Custom Nova Tool Example</h1>
            </template>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            <template slot="footer" >
                <button @click="ok" class="button is-success" style="margin: 20px; width: 100px">Ok</button>
                <button @click="cancel" class="button is-danger " style="margin: 20px ; width: 100px">Cancel</button>

            </template>
        </modal>
    </div>
</template>

<script>
import Modal from "./modal";
export default {
    components: {Modal},
    data(){
        return{
            showModal:false
        };
    },
    metaInfo() {
        return {
            title: 'message',
        }
    },
    methods:{
        show(){
            this.showModal = ! this.showModal ;
        },

        ok(){
            alert("ok Clicked");
            this.showModal = ! this.showModal ;
        },

        cancel(){
            alert("cancel Clicked");
            this.showModal = ! this.showModal ;
        },
    }

}
</script>

<style >
.box {
    background: #2c3e50;
    padding: 10px;
    border: 1px solid cyan;
    margin-top: 10px;
    color: azure;

}
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";
</style>

