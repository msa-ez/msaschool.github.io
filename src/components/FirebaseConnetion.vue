<template></template>

<script>
    import firebase from 'firebase'

    export default {
        name: "fiebase-connetion",
        created(){

        },
        methods: {
            getFirebaseDB(){
                return firebase.database()
            },
            getFirebaseAuth(){
                return firebase.auth()
            }
        }
    };
</script>
