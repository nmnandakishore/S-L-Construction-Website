module.exports = {
	server: {
		host: true,
	},
	purge: [
		"./*.html",
		"./*.js",
		"./*.css",
		"./public/css/*.css",
		"./public/js/*.js",
		"./css/*.css",
		"./js/*.js",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				height: "height",
			},
			colors: {
				primary: {
					450: "#a80",
					// 450: '#735c01',
					// dark: '#5d4a00'
					lightdark: "#1B273D",
					dark: "#142030",
				},
			},
		},
	},
	variants: {
		extend: {
			textColor: ["last"],
		},
	},
	plugins: [],
};
