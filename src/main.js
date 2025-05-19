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
    
    // UXLENS 관련 코드 
    head.script.push({
        type: 'text/javascript',
        innerHTML: `
            // IP 확인 및 추적 차단 로직
            async function checkAndInitializeTracking() {
                try {
                    // localhost 확인
                    const isLocalhost = window.location.hostname === 'localhost' || 
                                        window.location.hostname === '127.0.0.1';
                    
                    // 개발 환경이나 localhost인 경우 추적하지 않음
                    if (isLocalhost) {
                        console.log('개발 환경에서는 추적이 비활성화됩니다.');
                        return;
                    }
                    
                    // 프로덕션 환경에서만 추적 초기화
                    // UXLENS 추적 코드 초기화
                    (function(w,d,n,u,o,t,m){w['SrecObject']=o;w[o]=w[o]||function(){
                    (w[o].q=w[o].q||[]).push(arguments)},w[o].l=1*new Date();t=d.createElement(n),
                    m=d.getElementsByTagName(n)[0];t.async=1;t.src=u;m.parentNode.insertBefore(t,m)
                    })(window,document,'script','https://app.uxlens.com/collect/initialize.js','srec');
                    srec('init', '4f6666e0-ff12-11ef-9a88-d5edc5c277ba');
                } catch (error) {
                    console.error('추적 초기화 중 오류가 발생했습니다:', error);
                }
            }
            // 페이지 로드 시 추적 확인 함수 실행
            checkAndInitializeTracking();
        `
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
