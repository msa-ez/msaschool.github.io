// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
require('dotenv').config()

module.exports = {
    siteName: "msaschool",
    icon: {
        favicon: "./src/assets/msa_school_logo.png",
        touchicon: "./src/assets/msa_school_logo.png"
    },

    runtimeCompiler: true,
    siteUrl: "https://example.com",
    settings: {
        web: process.env.URL_WEB || false,
        twitter: process.env.URL_TWITTER || false,
        github: process.env.URL_GITHUB || false,
        nav: {
            links: [
                // { path: "/introduction/", title: "소개" },
                // { path: "/planning/", title: "계획단계" },
                // { path: "/operation/analysis", title: "설계/운영/구현 단계" },
                // { path: "/references/methods", title: "참고자료" },
                // { path: "/community/", title: "커뮤니티 및 교육" }
            ]
        },
        sidebar: [
            {
                name: "docs",
                sections: [
                    {
                        title: "최종수립!!!",
                        items: [
                            "/docs/",
                            "/docs/installation/",
                            "/docs/writing-content/",
                            "/docs/deploying/"
                        ]
                    },
                    {
                        title: "Configuration",
                        items: ["/docs/settings/", "/docs/sidebar/"]
                    }
                ]
            }
        ]
    },
    chainWebpack: config => config.mode('development'),
    // chainWebpack: config => {
    //     config
    //         .plugin('env')
    //         .use(require.resolve('webpack/lib/EnvironmentPlugin'), ['MEANING_OF_LIFE'])
    // },
    plugins: [
        // {
        //   use: "@gridsome/source-filesystem",
        //   options: {
        //     baseDir: "./content",
        //     path: "**/*.md",
        //     typeName: "MarkdownPage"
        //   }
        // },
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "VuePage",
                baseDir: "./content/msaschool",
                path: "**/*.vue",
                plugins: ["@gridsome/remark-prismjs"]
                // remark: {
                //   externalLinksTarget: '_blank',
                //   externalLinksRel: ['noopener', 'noreferrer'],
                //   plugins: [
                //     '@gridsome/remark-prismjs'
                //   ]
                // }
            }
        },
        {
            use: "gridsome-plugin-tailwindcss",
            options: {
                tailwindConfig: "./tailwind.config.js",
                purgeConfig: {
                    // Prevent purging of prism classes.
                    whitelistPatternsChildren: [/token$/]
                }
            }
        },
        {
            use: "@gridsome/plugin-sitemap",
            options: {}
        },
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
            id: 'UA-153107610-2'
            }
        },
    ],
    // transformers: {
    //   remark: {
    //     plugins: [
    //       '@gridsome/remark-prismjs',
    //         'remark-attr'
    //     ]
    //   }
    // }
};
