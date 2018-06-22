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
	          title: 'Usage',
	          collapsable: false,
	          children: [
	            '/guide/',
	            '/guide/architecture.md'
	          ]
	        },
	        // {
	        //   title: 'Scripts',
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