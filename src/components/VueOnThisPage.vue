<template>
    <div class="mt-8 sm:pl-4 md:pl-6 md:pt-12 lg:pl-8 sm:pb-16 sm:border-l border-ui-border md:mt-0">
        <h3 class="pt-0 mt-0 text-sm tracking-wide uppercase border-none">!!!!!!!!!! On this page</h3>
        <div>
            <ul>
                <li
                        v-for="heading in headings"
                >
                    <g-link
                            :to="`${heading.path}`"
                            class="relative flex items-center py-1 text-sm transition transform hover:translate-x-1"
                    >
            <span

            ></span>
                        {{ heading.name }}
                    </g-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<page-query>
    query {
    allVuePage {
    edges {
    node {
    id
    name
    path
    }
    }
    }
    }
</page-query>

<script>
    export default {
        data() {
            return {
                activeAnchor: '',
                observer: null
            }
        },

        computed: {
            page() {
                return this.$page;
            },
            headings() {
                return this.page
            }
        },

        watch: {
            $route: function () {
                if (process.isClient && window.location.hash) {
                    this.activeAnchor = window.location.hash;
                }

                // Clear the current observer.
                this.observer.disconnect();

                // And create another one for the next page.
                this.$nextTick(this.initObserver);
            }
        },

        methods: {
            observerCallback(entries, observer) {
                // This early return fixes the jumping
                // of the bubble active state when we click on a link.
                // There should be only one intersecting element anyways.
                if (entries.length > 1) {
                    return;
                }

                const id = entries[0].target.id;

                // We want to give the link of the intersecting
                // headline active and add the hash to the url.
                if (id) {
                    this.activeAnchor = '#' + id;

                    if (history.replaceState) {
                        history.replaceState(null, null, '#' + id);
                    }
                }
            },

            initObserver() {
                this.observer = new IntersectionObserver(this.observerCallback, {
                    // This rootMargin should allow intersections at the top of the page.
                    rootMargin: '0px 0px 99999px',
                    threshold: 1
                });

                const elements = document.querySelectorAll(
                    '.content h2, .content h3, .content h4, .content h5, .content h6'
                );

                for (let i = 0; i < elements.length; i++) {
                    this.observer.observe(elements[i]);
                }
            },
        },

        mounted() {
            if (process.isClient) {
                if (window.location.hash) {
                    this.activeAnchor = window.location.hash;
                }
                this.$nextTick(this.initObserver);
            }
        }
    };
</script>
