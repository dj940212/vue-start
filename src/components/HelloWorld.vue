<template lang="pug">
    .hello
        h1 {{ msg }}
        h2 Essential Links
        ul
            i-button 123
</template>

<script>
import { Button, Table } from 'iview'

export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        'IButton': Button,
        'ITable': Table
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
