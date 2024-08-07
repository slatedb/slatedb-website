export default function tailwindPlugin(context, options) {
    return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
                require('postcss-preset-env')({
                    autoprefixer: {
                        flexbox: 'no-2009'
                    },
                    stage: 4
                })
            )

            return postcssOptions;
        },
    };
}