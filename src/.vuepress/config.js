module.exports = {
  	title: 'feathers-nuxt',
  	description: 'flexible fullstack framework',
  	serviceWorker: true,
  	themeConfig: {
	    nav: [
	        { text: 'Guide', link: '/guide/' },
	        { text: 'Scripts', link: '/scripts/' },
	    ],
	    sidebar: [
	        {
	          title: 'Guide',
	          collapsable: false,
	          children: [
	            '/guide/',
	            '/guide/architecture.md',
	            '/guide/disambiguation.md'
	          ]
	        },
	        {
	          title: 'Scripts',
	          collapsable: false,
	          children: [
	            '/scripts/',
	            // '/scripts/architecture.md',
	            // '/scripts/disambiguation.md'
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