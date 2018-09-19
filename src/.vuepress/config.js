module.exports = {
  	title: 'feathers-nuxt',
  	description: 'flexible fullstack framework',
  	serviceWorker: true,
  	themeConfig: {
	    nav: [
	        { text: 'Overview', link: '/overview/' },
	        { text: 'Guide', link: '/guide/' },
	    ],
	    sidebar: [
	        {
	          title: 'Overview',
	          collapsable: false,
	          children: [
	            '/overview/',
	            '/overview/architecture.md',
	            '/overview/disambiguation.md'
	          ]
	        },
	        {
	          title: 'Guide',
	          collapsable: false,
	          children: [
	            '/guide/',
	            '/guide/scripts.md', 
	            '/guide/configuration.md',
	            '/guide/routing.md', 
	            '/guide/services.md', 
	            '/guide/logging.md', 
	            '/guide/caching.md', 
	          ]
	        },
	      ]
	}
}