/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./public/**/*.{html,js}", "./public/fonts/**/*"],
    theme: {
        extend: {
            // colors: {
            // },
            backgroundImage: {
                // Tambahkan gradient radial sesuai dengan yang Anda inginkan
                "mesh-gradient": [
                    "radial-gradient(at 95% 5%, hsla(266,100%,56%,0.5) 0px, transparent 50%)",
                    "radial-gradient(at 89% 27%, hsla(175,100%,77%,0.8) 0px, transparent 50%)",
                    "radial-gradient(at 90% 8%, hsla(156,100%,68%,1) 0px, transparent 50%)",
                    "radial-gradient(at 31% 21%, hsla(248,100%,76%,0.9) 0px, transparent 50%)",
                    "radial-gradient(at 50% 31%, hsla(129,100%,78%,1) 0px, transparent 50%)",
                    "radial-gradient(at 14% 60%, hsla(243,100%,79%,0.7) 0px, transparent 50%)",
                ],
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
