<template>
    <div>
        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
            :src="`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`"></iframe>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        url: {
            type: String,
            required: true
        }
    }
});

</script>