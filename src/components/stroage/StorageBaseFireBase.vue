<template></template>

<script>
    import StorageBaseFireBase_ from "./StorageBaseFireBase_";
    import StorageBaseAbstract from "./StorageBaseAbstract";

    export default {
        name: "storage-base-firebase",
        mixins: [StorageBaseAbstract, StorageBaseFireBase_],
    };
</script>
