<template>
    <div
            @keydown.down="increment"
            @keydown.up="decrement"
            @keydown.enter="go"
            class="relative is-search-box"
    >
        <label class="relative block">
            <span class="sr-only">Search Documentation</span>
            <div class="absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50">
                <SearchIcon size="1.25x" class="text-ui-typo"/>
            </div>
            <input
                ref="input"
                type="search"
                :value="query"
                class="block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background"
                :class="{'rounded-b-none': showResult,}"
                placeholder="Search"
                @focus="focused = true"
                @blur="focused = false"
                @input="focusIndex = -1; query = $event.target.value"
                @change="query = $event.target.value"
            />
        </label>
        <div
                v-if="showResult"
                class="fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar"
                style="max-height: calc(100vh - 120px)"
        >
            <ul class="px-4 py-2 m-0">
                <li v-if="results.length === 0" class="px-2">
                    No results for <span class="font-bold">{{ query }}</span>.
                </li>

                <li
                        v-else
                        v-for="(result, index) in results"
                        :key="result.path"
                        @mouseenter="focusIndex = index"
                        @mousedown="go"
                        class="border-ui-sidebar"
                        :class="{
            'border-b': index + 1 !== results.length
          }"
                >
                    <g-link
                            :to="result.path"
                            class="block p-2 -mx-2 text-base font-bold rounded-lg"
                            :class="{
              'bg-ui-sidebar text-ui-primary': focusIndex === index,
            }"
                    >

            <span v-if="result.name === result.name">
              {{ result.name }}
            </span>

                        <span v-else class="flex items-center">
              {{ result.name }}
              <ChevronRightIcon size="1x" class="mx-1"/>
              <span class="font-normal opacity-75">{{ result.name }}</span>
            </span>

                    </g-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<static-query>
    query Search {
    allVuePage{
    edges{
    node{
    props{
    name
    }
    path
    source
    fileInfo {
    name
    path
    directory
    }
    }
    }
    }
    }
</static-query>

<script>
    import Fuse from 'fuse.js';
    import {ChevronRightIcon, SearchIcon} from 'vue-feather-icons';

    export default {
        components: {
            ChevronRightIcon,
            SearchIcon
        },

        data() {
            return {
                query: '',
                focusIndex: -1,
                focused: false
            };
        },
        computed: {
            results() {

                // var options = {
                //     isCaseSensitive: false,
                //     includeScore: true,
                //     shouldSort: true,
                //     includeMatches: false,
                //     findAllMatches: false,
                //     useExtendedSearch: false,
                //     ignoreLocation: false,
                //     ignoreFieldNorm: false,
                //     keys: [ 'source','name' ],
                //     threshold: 0.7 // 일치 여부 0.0 완벽일치
                // }

                var options = {
                    keys: [ 'name' ],
                    threshold: .6 // 일치 여부 0 완벽일치
                }

                const fuse = new Fuse(this.pages, options);
                return fuse.search(this.query).slice(0, 15);
            },
            pages() {
                let result = [];
                const allPages = this.$static.allVuePage.edges.map(edge => edge.node);

                // 경로가 두 단계로 끝나는 경우 제외
                allPages.forEach(page => {
                    if (!/^\/[^/]+\/[^/]+\/?$/.test(page.path)) {
                        result.push({
                            path: page.path,
                            name: page.props[0].name,
                            source: page.source,
                        });
                    }
                });

                return result;
            },
            showResult() {
                // Show results, if the input is focused and the query is not empty.
                return this.focused && this.query.length > 0;
            }
        },
        methods: {
            increment() {
                if (this.focusIndex < this.results.length - 1) {
                    this.focusIndex++;
                }
            },
            decrement() {
                if (this.focusIndex >= 0) {
                    this.focusIndex--;
                }
            },
            go() {
                // Do nothing if we don't have results.
                if (this.results.length === 0) {
                    return;
                }

                let result;

                // If we don't have focus on a result, just navigate to the first one.
                if (this.focusIndex === -1) {
                    result = this.results[0];
                } else {
                    result = this.results[this.focusIndex];
                }

                this.$router.push(
                    result.path
                );

                // Unfocus the input and reset the query.
                this.$refs.input.blur();
                this.query = '';
            }
        }

    };
</script>

<style>
.is-search-box {
    width:100%; 
    left: 50%; 
    transform: translate(-50%, 0%);
}
@media only screen and (max-width:720px){
    .is-search-box {
        width:100% !important;
        padding:16px 0 !important;
        margin-bottom: 0px !important;
    }
}
</style>