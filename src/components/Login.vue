<template>
    <v-dialog
            class="v-dialog__container"
            v-model="loginDialog"
            width="400px"
    >

        <template v-slot:activator="{ on, attrs }">

            <div style="text-align:center; width: auto;">

                <v-avatar size="40" v-if="loginState">
                    <img
                            v-if="userImg"
                            :src="userImg"
                            :alt="loginUser.userName"
                            @click="logout()"
                    />
                </v-avatar>

                <v-btn v-if="loginState" text @click="" small style="margin-top: 10px;"> 보유 코인:
                    {{loginUser.savedCoin}}
                </v-btn>

            </div>

            <div>
                <user-icon v-if="!loginState" size="2.0x" class="custom-class" @click="showDialog()"></user-icon>
            </div>

        </template>

        <v-card flat style="background: #ffffff; border-color: lightgrey; " height="100%">
            <v-col style="text-align: -webkit-right">
                <x-icon @click="closeDialog()"></x-icon>
            </v-col>

            <v-col align="center">

                <Logo/>

                <v-col align="center" style="width: 300px; margin-top: 50px;">
                    <v-btn
                            block
                            color="#ffffff"
                            style="width: 200px; font-size: 13px; color: #175FC7; justify-content: center; margin-bottom: 10px; "
                            @click="snsLogin('google')"
                    >
                        <div class="grid grid-rows-1 grid-flow-col">
                            <div class="row-start-1">
                                <img
                                        width="20px"
                                        alt="Google sign-in"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
                            </div>
                            <div class="row-start-1 row-end-1 ml-3">Sign in with Google</div>
                        </div>

                    </v-btn>
                    <div class="pa-2"></div>
                    <v-btn
                            block
                            color="#000000"
                            style="width: 200px;font-size: 13px; color: white; justify-content: center; margin-bottom: 10px;"
                            @click="snsLogin('github')">
                        <div class="grid grid-rows-1 grid-flow-col">
                            <div class="row-start-1">
                                <img width="30px"
                                     alt="Github sign-in"
                                     style="background-color: white;-webkit-filter: invert(100%);filter: invert(100%);"
                                     src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
                            </div>
                            <div class="row-start-1 ml-3">Sign in with Github</div>
                        </div>
                    </v-btn>

                    <div style="font-size: small">
                        로그인이 안될때는 "제3자 쿠키"를 허용해주십시오.
                        Please ensure 3rd party cookies are enabled if login fails.
                    </div>
                </v-col>
            </v-col>
        </v-card>
    </v-dialog>
</template>

<script>
    import Logo from "./Logo";
    import StorageBase from "./stroage/StorageBase";
    import {UserIcon, XIcon} from 'vue-feather-icons'
    import firebase from "firebase/compat/app";
    import "firebase/compat/auth";
    import "firebase/compat/database";

    export default {
        name: 'Login',
        mixins: [StorageBase],
        data() {
            return {
                loginDialog: false,
                login: false,
                loginUser: {
                    img: '',
                    userName: null,
                    userEmail: null,
                    uid: null,
                    savedCoin: 0,
                },
            }
        },
        components: {
            UserIcon,
            Logo,
            XIcon,
        },
        created() {
            var me = this

            me.checkAuth()
        },
        mounted() {
            var me = this

            me.$EventBus.$on('showLoginDialog', function () {
                me.loginDialog = true
            })

        },
        computed: {
            loginState() {
                var me = this
                if (me.login) {
                    var userEmail = me.loginUser.userEmail.replaceAll('.', '_')

                    me.watch(`firebase://enrolledUsers/${userEmail}/savedCoin`, function (callback) {
                        if (callback) {
                            me.loginUser.savedCoin = callback
                        } else {
                            me.loginUser.savedCoin = 1000
                        }
                    })
                }
                return me.login
            },
            userImg() {
                var me = this
                if (me.loginUser.img)
                    return me.loginUser.img

                return null
            }
        },
        methods: {
            checkAuth() {
                var me = this
                if (typeof window != 'undefined') {
                    if (localStorage.getItem('uid')) {
                        me.login = true
                        me.loginUser.img = window.localStorage.getItem('picture')
                        me.loginUser.userName = window.localStorage.getItem('userName')
                        me.loginUser.userEmail = window.localStorage.getItem('email')
                        me.loginUser.uid = window.localStorage.getItem('uid')
                        me.$EventBus.$emit('login', true)
                        return true
                    }
                    return false
                }
            },
            closeDialog() {
                if (!this.loginDialog) this.loginDialog = true
                this.loginDialog = false
            },
            showDialog() {
                this.loginDialog = true
                console.log('show Dialog')
            },
            snsLogin(who) {
                var me = this
                if (who == 'google') {
                    var provider = new firebase.auth.GoogleAuthProvider();
                    provider.addScope('profile');
                    provider.addScope('email')

                    firebase.auth().signInWithPopup(provider).then(function (result) {


                        var token = result.credential.accessToken;
                        var uid = result.user.uid;
                        var user = result.additionalUserInfo.profile;
                        var state = result.operationType;

                        if (typeof window != 'undefined') {
                            localStorage.setItem("author", user.email)
                            localStorage.setItem("userName", user.name)
                            localStorage.setItem("email", user.email)
                            localStorage.setItem("picture", user.picture)
                            localStorage.setItem("accessToken", token)
                            localStorage.setItem("uid", uid)
                            if (user.email.includes('@uengine.org')) {
                                localStorage.setItem("authorized", 'admin');
                            } else {
                                localStorage.setItem("authorized", 'student');
                            }
                        }


                        me.checkAuth()
                        me.loginDialog = false
                        me.$EventBus.$emit('login', true)

                    }).catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        alert("[" + errorCode + "] " + errorMessage)
                    });


                } else if (who == 'github') {

                    var provider = new firebase.auth.GithubAuthProvider();
                    provider.addScope('repo');

                    firebase.auth().signInWithPopup(provider).then(function (result) {

                        var token = result.credential.accessToken;
                        var uid = result.user.uid;
                        var userName = result.additionalUserInfo.username
                        var userEmail = result.user.providerData[0].email
                        var userProfile = result.additionalUserInfo.profile.avatar_url;
                        var state = result.operationType;

                        if (typeof window != 'undefined') {
                            localStorage.setItem("author", userEmail)
                            localStorage.setItem("userName", userName)
                            localStorage.setItem("email", userEmail)
                            localStorage.setItem("picture", userProfile)
                            localStorage.setItem("accessToken", token)
                            localStorage.setItem("gitAccessToken", token)
                            localStorage.setItem("uid", uid)
                            if (userEmail.includes('@uengine.org')) {
                                localStorage.setItem("authorized", 'admin');
                            } else {
                                localStorage.setItem("authorized", 'student');
                            }
                        }


                        me.checkAuth()
                        me.loginDialog = false
                        me.$EventBus.$emit('login', true)

                    }).catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        alert("[" + errorCode + "] " + errorMessage)

                    });
                }
            },
            logout() {
                var me = this
                if (typeof window != 'undefined') {
                    localStorage.removeItem("gitAccessToken");
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("author");
                    localStorage.removeItem("userName");
                    localStorage.removeItem("email");
                    localStorage.removeItem("projectName");
                    localStorage.removeItem("picture");
                    localStorage.removeItem("loadData");
                    localStorage.removeItem("uid");
                    localStorage.removeItem("authorized");
                    localStorage.removeItem("connectionKey");
                }


                me.loginUser.img = null
                me.loginUser.userName = null
                me.loginUser.userEmail = null
                me.loginUser.uid = null
                me.loginUser.savedCoin = 0
                me.$EventBus.$emit('login', false)
                me.login = false
                me.loginDialog = false
                location.reload(true);
            },
        },

    };
</script>