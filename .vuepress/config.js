module.exports = {
  	title: 'feathers-nuxt',
  	description: 'frontend first framework',
  	serviceWorker: true,
  	themeConfig: {
	    nav: [
	        { text: 'CLI', link: '/cli/' },
	        { text: 'UI', link: '/ui/' },
	        { text: 'API', link: '/api/' },
	    ],
	    sidebar: [
	        {
	          title: 'CLI Guide',
	          collapsable: false,
	          // children: [
	          //   'cli/'
	          // ]
	        },
	        {
	          title: 'UI Guide',
	          collapsable: false,
	          // children: [
	          //     '/ui'
	          // ]
	        },
	        {
	          title: 'API Guide',
	          collapsable: false,
	          // children: [
	          //     '/api'
	          // ]
	        }
	      ]
	}
}