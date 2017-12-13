<template lang="pug">
    .hello
        h1 {{count}}
        el-button(@click.native="addCount") add
        el-button(@click.native="removeCount") remove
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'count'
        ])
    },
    methods: {
        ...mapMutations({
            addCount: 'ADD_COUNT',
            removeCount: 'REMOVE_COUNT'
        })
    }
}
</script>

<style scoped lang="sass">
h1, h2
    font-weight: normal
    ul
        list-style-type: none
        padding: 0
</style>
