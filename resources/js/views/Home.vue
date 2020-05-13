<template>
    <div id="wrapper">
        <Topbar />
        <Sidebar />
    </div>
</template>

<script>
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'

export default {
    components: { Topbar, Sidebar },
    mounted() {
        window.$.MainApp.init()
    }
}
</script>