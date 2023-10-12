/* global localStorage, */

import Vue from 'vue'
import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
    id: 'UA-153107610-2',
})

require('./global.css');


import DefaultLayout from "~/layouts/Default.vue";
import VueLayout from "./layouts/VueLayout";
// import PurchaseItem from "./components/PurchaseItem";
import VRuntimeTemplate from "v-runtime-template";
import VueMarkdown from 'vue-markdown'
import HtmlMarkDown from "./components/HtmlMarkDown";
import VueDialog from "./components/VueDialog";
import VueSearch from "./components/VueSearch";
import 'prismjs/themes/prism.css'
import Login from "./components/Login";
import firebase from "firebase/compat/app";
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueSubLayoutCard from "./components/VueSubLayoutCard";
import SideMarkDown from "./components/SideMarkDown"
import MobileMarkDown from "./components/MobileMarkDown"
if (typeof window != 'undefined') {
    window.$ = window.jQuery = require('jquery')
}

export default function (Vue, {appOptions, head}) {
    head.link.push({
        rel: "stylesheet",
        href:
            "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
    });

    head.link.push({
        rel: "stylesheet",
        href:
            "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
    });

    head.script.push({
        src: 'https://www.googletagmanager.com/gtag/jsid=GTM-M9V65LQ5',
        async: true
      })
    if (process.isClient) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'GTM-M9V65LQ5');
      window.gtag = gtag; // expose gtag function to global scope
    }



    var firebaseConfig = {
        apiKey: process.env.GRIDSOME_FIREBASE_apiKey,
        authDomain: process.env.GRIDSOME_FIREBASE_authDomain,
        databaseURL: process.env.GRIDSOME_FIREBASE_databaseURL,
        projectId: process.env.GRIDSOME_FIREBASE_projectId,
        storageBucket: process.env.GRIDSOME_FIREBASE_storageBucket,
        messagingSenderId: process.env.GRIDSOME_FIREBASE_messagingSenderId,
        appId: process.env.GRIDSOME_FIREBASE_appId,
        measurementId: process.env.GRIDSOME_FIREBASE_measurementId
    };
    firebase.initializeApp(firebaseConfig);



    Vue.use(VueYouTubeEmbed, {global: true, componentId: "youtube-media"})

    const opts = {}; // opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(opts);

    Vue.prototype.$EventBus = new Vue();

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
    Vue.component("VueLayout", VueLayout);
    Vue.component("VueSearch", VueSearch);
    // Vue.component("purchase-item", PurchaseItem);
    Vue.component("v-runtime-template", VRuntimeTemplate);
    Vue.component("mark-down", VueMarkdown);
    Vue.component('VueMarkdown', VueMarkdown)
    Vue.component("html-mark-down", HtmlMarkDown);
    Vue.component("vue-dialog", VueDialog);
    Vue.component("login", Login);
    Vue.component("VueSubLayoutCard", VueSubLayoutCard);
    Vue.component("SideMarkDown", SideMarkDown);
    Vue.component("MobileMarkDown", MobileMarkDown);

    //content
    const files = require.context("../src/content", true, /\.vue$/i);
    files.keys().map(key => {

        if (files(key).default.name == "index") {
            if (files(key).default.directory) {
                Vue.component(files(key).default.directory + "_" + files(key).default.name, files(key).default);
            } else {
                Vue.component(files(key).default.name, files(key).default);
            }

        }
        Vue.component(files(key).default.name, files(key).default);
    });
}
