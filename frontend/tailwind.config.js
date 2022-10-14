
const tailwindConfig = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    safelist: [{
        pattern: /hljs+/,
    }],
    theme: {
        hljs: {
            theme: 'night-owl',
        },
        extend: {
            pulse: (theme) => ({
                colors: theme('colors'),
            }),
            animation: {
                fadeIn: "fadeIn 2s ease-in forwards",
                wiggle: "wiggle 300ms ease-in-out"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-6deg)" },
                    "50%": { transform: "rotate(6deg)" }
                }
            },
            variants: {
                animation: ["motion-safe"]
            },
            boxShadow: {
                DEFAULT:
                    '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
                md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
                lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
                xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
                pink: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(228, 42, 172, 0.01)',

            },
            outline: {
                blue: '2px solid rgba(0, 112, 244, 0.5)',
            },

            fontFamily: {
                ProDisplay: ['SF Pro Display'],
            },
            colors: {
                pink: '#E42AAC',
                purple: '#AD63F5',
                black: '#131419',
                headerColor: '#5F5F6E',
                'bg-gray-800': '#1C1C24',
            },
            typography: {
                DEFAULT: {
                    css: {
                      
                        'p': {
                            'width': '100%'
                        },
                        'color': 'white',
                        'a': {
                            color: '#3182ce',
                            '&:hover': {
                                color: '#2c5282',
                            },
                        },
                        "h1,h2,h3,h4": {
                            color: 'white'
                        },
                        "blockquote": {
                            color: 'white'
                        }
                    }
                }
            },
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.5' }],
                sm: ['0.875rem', { lineHeight: '1.5715' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
                lg: [
                    '1.125rem',
                    { lineHeight: '1.5', letterSpacing: '-0.01em' },
                ],
                xl: [
                    '1.25rem',
                    { lineHeight: '1.5', letterSpacing: '-0.01em' },
                ],
                '2xl': [
                    '1.5rem',
                    { lineHeight: '1.33', letterSpacing: '-0.01em' },
                ],
                '3xl': [
                    '1.88rem',
                    { lineHeight: '1.33', letterSpacing: '-0.01em' },
                ],
                '4xl': [
                    '2.25rem',
                    { lineHeight: '1.25', letterSpacing: '-0.02em' },
                ],
                '5xl': [
                    '3rem',
                    { lineHeight: '1.25', letterSpacing: '-0.02em' },
                ],
                '6xl': [
                    '3.75rem',
                    { lineHeight: '1.2', letterSpacing: '-0.02em' },
                ],
            },
            screens: {
                xs: '480px',
            },
            borderWidth: {
                3: '3px',
            },
            minWidth: {
                36: '9rem',
                44: '11rem',
                56: '14rem',
                60: '15rem',
                72: '18rem',
                80: '20rem',
            },
            maxWidth: {
                '6xl': '66rem',
                '8xl': '88rem',
                '9xl': '96rem',
            }
        },
    },
    plugins: [
        require('tailwindcss-pulse'),
        //needed to display MX correctly
        require('@tailwindcss/typography'),

        require('tailwind-highlightjs')
    ],
};
module.exports = tailwindConfig;
