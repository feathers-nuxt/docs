module.exports = {
  	title: 'feathers-nuxt',
  	description: 'flexible fullstack framework',
  	serviceWorker: true,
  	themeConfig: {
	    nav: [
	        { text: 'Guide', link: '/guide/' },
	    ],
	    sidebar: [
	        {
	          title: 'Usage Guide',
	          collapsable: false,
	          children: [
	            '/guide/',
	            '/guide/architecture.md'
	          ]
	        },
	        // {
	        //   title: 'UI Guide',
	        //   collapsable: false,
	        //   // children: [
	        //   //     '/ui'
	        //   // ]
	        // },
	        // {
	        //   title: 'API Guide',
	        //   collapsable: false,
	        //   // children: [
	        //   //     '/api'
	        //   // ]
	        // }
	      ]
	}
}