/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                "accent-1": "#FAFAFA",
                "accent-2": "#EAEAEA",
                "accent-7": "#333",
                success: "#0070f3",
                cyan: "#79FFE1",
                black: "#383838",
                primary: {
                    700: "#0C666E",
                    600: "#1C7A88",
                    500: "#208da0",
                    400: "#25A1BA",
                    300: "#2DC2E0",
                    200: "#3ACCE6",
                    100: "#86E2F2",
                    50: "#E1F8FC"
                }
            },
            spacing: {
                28: "7rem"
            },
            letterSpacing: {
                tighter: "-.04em"
            },
            lineHeight: {
                tight: 1.2
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem"
            },
            boxShadow: {
                sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
                md: "0 8px 30px rgba(0, 0, 0, 0.12)"
            },
            animation: {
                slideIn: "slideIn 1s ease-in forwards",
                scrollEffect: "pathmove 1.4s ease-in-out infinite"
            },
            keyframes: {
                slideIn: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(60px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                },
                pathmove: {
                    "0%": {
                        height: 0,
                        top: 0,
                        opacity: 0
                    },
                    "30%": {
                        height: 30,
                        opacity: 1
                    },
                    "100%": {
                        height: 0,
                        top: 50,
                        opacity: 0
                    }
                }
            }
        }
    },
    plugins: [
        require("@tailwindcss/line-clamp")
    ]
}
