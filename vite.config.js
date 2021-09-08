var path = require("path");

export default {
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
				about: path.resolve(__dirname, "about.html"),
				projects: path.resolve(__dirname, "projects.html"),
				contact: path.resolve(__dirname, "contact.html"),
				// nested: resolve(__dirname, 'nested/index.html')
			},
		},
	},
};
