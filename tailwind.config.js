module.exports = {
    theme: {
        extend: {
            colors: {
                ui: {
                    background: 'var(--color-ui-background)',
                    sidebar: 'var(--color-ui-sidebar)',
                    typo: 'var(--color-ui-typo)',
                    primary: 'var(--color-ui-primary)',
                    border: 'var(--color-ui-border)'
                }
            },
            spacing: {
                sm: '24rem'
            },
            screens: {
                'tablet': '640px',
                'laptop': '1024px',
                'desktop': '1280px',
                xxl: '1400px'
            }
        },
        container: {
            center: true,
            padding: '1rem'
        }
    },
    variants: {},
    plugins: [],
}
