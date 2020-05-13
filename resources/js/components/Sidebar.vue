<template>
    <div class="left side-menu">
        <div class="slimscroll-menu" id="remove-scroll">

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <!-- Left Menu Start -->
                <ul class="metismenu" id="side-menu">
                    <li class="menu-title">Main</li>
                    <li class="active">
                        <a href="index.html" class="waves-effect active">
                            <i class="mdi mdi-view-dashboard"></i>
                            <span class="badge badge-primary badge-pill float-right">2</span>
                            <span> Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a href="calendar.html" class="waves-effect"><i class="mdi mdi-calendar-check"></i><span> Calendar </span></a>
                    </li>

                    <li>
                        <a href="#" class="waves-effect"><i class="mdi mdi-email-outline"></i><span> Email <span class="float-right menu-arrow"><i class="mdi mdi-chevron-right"></i></span> </span></a>
                        <ul class="submenu">
                            <li><a href="email-inbox.html">Inbox</a></li>
                            <li><a href="email-read.html">Email Read</a></li>
                            <li><a href="email-compose.html">Email Compose</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
            <!-- Sidebar -->
            <div class="clearfix"></div>

        </div>
        <!-- Sidebar -left -->

    </div>
</template>

<script>
export default {
    mounted() {        
        window.$.MainApp.intSlimscrollmenu();
        window.$.MainApp.initSlimscroll();
        window.$.MainApp.initMetisMenu();
    }
}
</script>