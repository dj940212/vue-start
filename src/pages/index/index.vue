<template lang="pug">
    .box
        el-button(type="danger") element-ui
        p.content {{text}}
        count
</template>
<script>
import Count from '@/components/count'

export default {
    data() {
        return {
            text: 'hello vue'
        }
    },
    components: {
        Count
    }
}
</script>
<style lang="sass" scoped>
    .box
        .content
            font-size: 30px
            color: #333
</style>