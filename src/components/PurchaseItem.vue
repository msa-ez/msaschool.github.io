<template>
    <v-dialog
            v-model="dialog"
            class="fixed overflow-auto object-top "
            width="500"
    >
        <template v-slot:activator="{ attrs }">
            <!-- free or paid-->
            <div v-if=" (getItemPrice == 0 || isPaid)" v-on="attrs">
                <div>
                    <slot></slot>
                </div>
            </div>

            <!-- not paid-->
            <div v-else v-on="attrs" class="paid-border" @click="showPaidDialog()">
                <div class="text-blur" :style="blurStyleByOpenRange" >
                    <div justify="end" style="align-items:center; margin-right: 10px; margin-top: 5px;">
                        <lock-icon size="1.5x"></lock-icon>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </template>


        <v-card style="background-color:white;">
            <v-card-title class="headline blue mt-9 " style="background-color: #6ec6ff; font-size: large;">
                <div class="ml-3">
                    내용을 보기위해 코인을 사용합니다.
                </div>
            </v-card-title>
            <v-card-text>
                <v-col class="ml-3">
                    사용 기간 : {{ periodDate }}
                    <v-row style="margin-top: auto;" class="paid-border">
                        <v-img v-if="showThumbnailImg"
                               class="thumbnail-img"
                               :src="showThumbnailImg"
                               style="align-items:center; width: 50%;"
                        ></v-img>

                        <div v-if="thumbnailText">
                            설명
                            <div>
                                <div v-if="getThumbnailMark">
                                    <v-runtime-template :template="getThumbnailMark"/>
                                </div>
                                <div v-else> {{thumbnailText}}</div>
                            </div>

                        </div>
                    </v-row>
                </v-col>
                <div class="grid-rows-none grid-flow-col gap-4 mt-9 ml-5">
                    <div style="font-size: large;">
                        보유 코인 &nbsp; : &nbsp; {{ userSavedCoin }}&nbsp; Coin
                    </div>
                    <div style="font-size: large;">
                        차감 코인 &nbsp; : &nbsp; {{ getItemPrice }}&nbsp; Coin
                    </div>
                    <div style="font-size: large;">
                        잔여 코인 &nbsp; : &nbsp; {{ userSavedCoin + getItemPrice }}&nbsp; Coin
                    </div>
                </div>

            </v-card-text>

            <div class="pa-2"></div>
            <v-card-actions>
                <v-spacer></v-spacer>
                <div class="grid grid-rows-1 grid-flow-col ">
                    <button
                            class="p-3 text-black rounded-full row-end-4 col-span-1"
                            color="primary"
                            text
                            @click="paidItem()">
                        코인으로 구매
                    </button>
                    <button
                            class="p-3 text-black rounded-full align-content-end row-end-4 col-span-1"
                            color="primary"
                            text
                            @click="cancelPaidDialog()">
                        닫기
                    </button>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
    import StorageBase from "./stroage/StorageBase";
    import {LockIcon} from 'vue-feather-icons'

    export default {
        name: 'purchase-item',
        components: {LockIcon},
        mixins: [StorageBase],
        props: {
            itemId: {
                type: String,
                default: function () {
                    return null;
                }
            },
            itemPrice: {
                type: String,
                default: function () {
                    return 0;
                }
            },
            thumbnailImg: {
                type: String,
                default: function () {
                    return null;
                }
            },
            thumbnailText: {
                type: String,
                default: function () {
                    return null
                }
            },
            itemPeriod: {
                type: String,
                default: function () {
                    return null
                }
            },
            itemOpenRange: {
                type: String,
                default: function () {
                    return '30'
                }
            },

        },
        data() {
            return {
                dialog: false,
                paid: false,
                login: false,
                loginUser: {
                    img: '',
                    userName: null,
                    userEmail: null,
                    uid: null,
                    savedCoin: 0,
                },
                expiredDate: null,
            }
        },
        computed: {
            isPaid() {
                return this.paid
            },
            openRange() {
                var me = this
                var range = me.itemOpenRange ? me.itemOpenRange : 0
                if (typeof range == 'string') range = Number(range)

                return range
            },
            blurStyleByOpenRange() {
                var me = this
                return {
                    // 'filter': 'blur(3px)',
                    '-webkit-mask-image': `linear-gradient(to top,hsla(360,100%,100%,0.0)${100 - me.openRange}% , hsla(120,100%,100%,1.0))`,
                }
            },
            periodDate() {
                var me = this
                if (!me.itemPeriod || me.getExpiredTimeStamp == 0) {
                    return '무제한'
                }
                var now = me.convertTimeStampToDate(me.getNowTimeStamp)
                var periodDate = me.convertTimeStampToDate(me.getExpiredTimeStamp)
                return `${now} ~ ${periodDate} `
            },
            showThumbnailImg() {
                var me = this
                if (me.thumbnailImg) {
                    if (me.thumbnailImg.includes('//youtu.be')) {
                        var getKey = me.thumbnailImg.split('/')[me.thumbnailImg.split('/').length - 1]
                        return `http://img.youtube.com/vi/${getKey}/hqdefault.jpg`
                    } else {
                        return me.thumbnailImg
                    }
                } else {
                    return null
                }

            },
            getThumbnailMark() {
                var me = this
                if (me.thumbnailText && me.thumbnailText.includes("</mark-down>")) {
                    return me.thumbnailText
                } else {
                    return false
                }
            },
            userId() {
                if (typeof window != 'undefined') {
                    if (localStorage.getItem('email')) {
                        return localStorage.getItem('email')
                    }
                }
                return null
            },
            getItemPeriod() {
                var me = this
                var period = me.itemPeriod ? me.itemPeriod : 0
                if (typeof period == 'string') period = Number(period)
                return period
            },
            getNowTimeStamp() {
                return new Date().getTime()
            },
            getExpiredTimeStamp() {
                var me = this
                if (me.getItemPeriod > 0) {
                    return me.getNowTimeStamp + (me.getItemPeriod * 24 * 60 * 60 * 1000)
                }
                return 0

            },
            getItemPrice() {
                var me = this
                var price = me.itemPrice ? me.itemPrice : 0
                if (typeof price == 'string') price = Number(price)
                return price
            },
            getResourceId() {
                var me = this
                return me.itemId
            },

            userSavedCoin() {
                var me = this
                if (me.loginUser) {
                    return me.loginUser.savedCoin
                }
                return 0
            },
        },
        async created() {
            var me = this
            //check auth
            me.checkAuth()
            //itemId set
            if (!me.itemId) {
                me.itemId = 'contents__null'
            }
            me.paid = await me.paidPurchaseItem()


        },
        mounted() {
            var me = this

            me.$EventBus.$on('login', async function () {
                me.checkAuth()
                me.paid = await me.paidPurchaseItem()
            })

            if (me.login) {
                var userEmail = me.loginUser.userEmail.replaceAll('.', '_')

                me.watch(`firebase://enrolledUsers/${userEmail}/savedCoin`, function (callback) {
                    if (callback) {
                        me.loginUser.savedCoin = callback
                    } else {
                        me.loginUser.savedCoin = 1000
                    }
                })
                me.watch(`firebase://enrolledUsers/${userEmail}/purchaseItems/${me.getResourceId}`, function (callback) {

                        if (callback) {
                            var checkExpired = callback.expiredDate

                            if (checkExpired || checkExpired >= 0) {
                                if (typeof checkExpired == 'string') checkExpired = Number(checkExpired)
                                if (checkExpired == 0 || me.getNowTimeStamp < checkExpired) {
                                    me.paid = true
                                } else {
                                    me.paid = false
                                }
                            } else {
                                me.paid = false
                            }
                        } else {
                            me.paid = false
                        }
                    }
                )
            }

        },
        methods: {
            // getHtml() {
            //     var me = this
            //     if (me.getItemPrice == 0 || me.isPaid) {
            //
            //         return '<div v-on="attrs">\n' +
            //             '                <div>\n' +
            //             '                    <slot></slot>\n' +
            //             '                </div>\n' +
            //             '            </div>\n'
            //     } else {
            //
            //         return '<div v-on="attrs" @click="showPaidDialog()" class="paid-border">\n' +
            //             '                <div class="text-blur" :style="blurStyleByOpenRange">\n' +
            //             '                    <div justify="end" style="align-items:center; margin-right: 10px; margin-top: 5px;">\n' +
            //             '                        <LockIcon size="1.5x"></LockIcon>\n' +
            //             '                    </div>\n' +
            //             '                    <slot></slot>\n' +
            //             '                </div>\n' +
            //             '            </div>'
            //     }
            // },

            async paidPurchaseItem() {
                var me = this
                if (me.login) {
                    var userEmail = me.loginUser.userEmail.replaceAll('.', '_')
                    var callback = await me.getString(`firebase://enrolledUsers/${userEmail}/purchaseItems/${me.getResourceId}`)

                    if (callback) {
                        var checkExpired = callback.expiredDate
                        if (checkExpired || checkExpired >= 0) {
                            if (typeof checkExpired == 'string') checkExpired = Number(checkExpired)
                            if (checkExpired == 0 || me.getNowTimeStamp < checkExpired) {
                                return true
                            }
                        }
                    }
                }
                return false
            },
            checkAuth() {
                var me = this

                if (typeof window != 'undefined') {
                    if (localStorage.getItem('accessToken')) {
                        me.login = true
                        me.loginUser.img = localStorage.getItem('picture')
                        me.loginUser.userName = localStorage.getItem('userName')
                        me.loginUser.userEmail = localStorage.getItem('email')
                        me.loginUser.uid = localStorage.getItem('uid')

                        return true
                    }
                    me.login = false
                    return false
                }
            },
            paidItem() {
                var me = this
                var putObj = {}

                try {
                    if (me.userSavedCoin > me.getItemPrice) {
                        if (me.getResourceId) {
                            var convertEmail = me.userId.replaceAll('.', '_')

                            putObj = {
                                userId: me.userId,
                                itemId: me.itemId,
                                price: me.getItemPrice,
                                resourceId: me.getResourceId,
                                when: me.getNowTimeStamp,
                                expiredDate: me.getExpiredTimeStamp,
                            }

                            me.pushString(`firebase://enrolledUsers/${convertEmail}/purchaseHistory`, putObj)
                        } else {
                            alert('purchaseID is undefined. please contact us ( help@uening.org ) ')
                        }

                    } else {
                        alert('코인이 부족합니다. 충전해 주세요. ')
                    }
                } catch (e) {
                    alert('Error: ' + e)
                }

                me.cancelPaidDialog()
            },
            showPaidDialog() {
                var me = this

                if (me.checkAuth()) {
                    if (this.dialog) this.dialog = false
                    this.dialog = true
                } else {
                    this.$EventBus.$emit('showLoginDialog')
                }

            },
            cancelPaidDialog() {
                if (!this.dialog) this.dialog = true
                this.dialog = false
            },
            convertTimeStampToDate(timeStamp) {
                if (typeof timeStamp == 'string')
                    timeStamp = Number(timeStamp)
                var date = new Date(timeStamp);
                return date.getFullYear() + "년 " + (date.getMonth() + 1) + "월 " + date.getDate() + "일 " + date.getHours() + "시 "
            },
        }
        ,
    }
</script>

<style>
    .v-dialog__container {
        position: absolute;
        display: inline-table;
        overflow: auto;
    }

    .paid-border {
        border-style: solid;
        border-color: gainsboro;
        margin-bottom: 3px;
        border-radius: 10px;
        border-width: thin;
    }
    .thumbnail-img {
        border-radius: 10px;
    }
    .text-blur {
        -ms-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        z-index: 1;
        pointer-events: none;
    }


</style>