<template></template>

<script>
    import firebase from "firebase/compat/app";
    import "firebase/compat/auth";
    import "firebase/compat/database";

    export default {
        name: "storage-base-firebase",

        methods: {
            _list(path, metadata) {

                // orderBy: "key", "child://value"
                // size: 1
                // sort: "desc"
                // startAt: null
                // endAt: null

                var reference = firebase.database().ref(path)
                var totalCount = 0

                return new Promise(function (resolve, reject) {

                    if (metadata) {

                        if (typeof metadata == 'string' && metadata == 'snapshots') {
                            reference
                                .once('value', function (snapshots) {
                                    if (snapshots.exists()) {
                                        resolve(snapshots)
                                    } else {
                                        resolve(null)
                                    }
                                });
                        } else {

                            // sort
                            if (metadata.orderBy && metadata.orderBy.includes('child://')) {
                                var orderString = metadata.orderBy.split('://')[1]
                                reference = reference.orderByChild(orderString)
                            } else {
                                reference = reference.orderByKey()
                            }


                            if (metadata.startAt) {
                                if (typeof metadata.startAt == 'string') {
                                    if (!metadata.startAt.includes('equalTo://')) {
                                        reference = reference.startAt(metadata.startAt)
                                    }
                                } else {
                                    reference = reference.startAt(metadata.startAt)
                                }
                            }

                            if (metadata.endAt) {
                                if (typeof metadata.endAt == 'string') {
                                    if (!metadata.endAt.includes('equalTo://')) {
                                        reference = reference.endAt(metadata.endAt)
                                    }
                                } else {
                                    reference = reference.endAt(metadata.endAt)
                                }
                            }


                            //startAt && endAt 모두 세팅시 size 필요 없음
                            if (!(metadata.startAt && metadata.endAt)) {
                                if ((typeof metadata.startAt == 'string' && metadata.startAt.includes('equalTo://')) ||
                                    (typeof metadata.endAt == 'string' && metadata.endAt.includes('equalTo://'))
                                ) {
                                    if (metadata.startAt) {
                                        var equalString = metadata.startAt.split('://')[1]
                                    } else {
                                        var equalString = metadata.endAt.split('://')[1]
                                    }
                                    reference = reference.equalTo(equalString)
                                    if (metadata.size) {
                                        if (metadata.sort && metadata.sort.includes('asc')) {
                                            reference = reference.limitToFirst(metadata.size)
                                        } else {
                                            reference = reference.limitToLast(metadata.size)
                                        }
                                    }
                                } else if (metadata.size) {
                                    if (typeof metadata.size == 'number') {
                                        if (metadata.sort && metadata.sort.includes('asc')) {
                                            // reference = reference.limitToLast(metadata.size)
                                            reference = reference.limitToFirst(metadata.size)
                                        } else {
                                            // reference = reference.limitToFirst(metadata.size)
                                            reference = reference.limitToLast(metadata.size)
                                        }
                                    } else {
                                        if (metadata.size.includes('first://')) {
                                            var getSize = metadata.size.split('://')[1]
                                            reference = reference.limitToFirst(getSize)
                                        } else {
                                            var getSize = metadata.size.split('://')[1]
                                            reference = reference.limitToLast(getSize)
                                        }
                                    }
                                }
                            }

                            reference
                                .once('value', function (snapshots) {
                                    if (snapshots.exists()) {
                                        if (metadata.orderBy && metadata.orderBy.includes('child://')) {
                                            resolve(snapshots)
                                        } else {
                                            resolve(snapshots.val())
                                        }
                                    } else {
                                        resolve(null)
                                    }
                                })
                        }


                    } else {
                        reference
                            .once('value', function (snapshot) {
                                if (snapshot.exists()) {
                                    resolve(snapshot.val())
                                } else {
                                    resolve(null)
                                }
                            });
                    }


                })

            },
            _get(path) {
                var starCountRef = firebase.database().ref(path);
                return new Promise(function (resolve, reject) {
                    starCountRef.once('value', function (snapshot) {
                        if (snapshot.exists()) {
                            resolve(snapshot.val())
                        } else {
                            resolve(null)
                        }

                    });
                })
            },
            _put(path, string) {
                firebase.database().ref(path).update(string)
            },
            _push(path, string) {
                return new Promise(function (resolve, reject) {
                    var ref = firebase.database().ref(path).push(string)
                    resolve(ref.key)
                })

            },
            _delete(path) {
                firebase.database().ref(path).remove()
            },
            watch(path, callback) {
                var starCountRef = firebase.database().ref(path);
                starCountRef.on('value', function (snapshot) {
                    if (snapshot.exists()) {
                        callback(snapshot.val())
                    } else {
                        callback(null)
                    }
                });
            },
            watch_added(path, callback) {
                var starCountRef = firebase.database().ref(path);
                starCountRef.on('child_added', function (snapshot) {
                    if (snapshot.val()) {
                        var queue = snapshot.val()
                        queue.key = snapshot.key
                        callback(queue)
                    } else {
                        callback(null)
                    }
                });
            },

        }
    };
</script>
