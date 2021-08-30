const CACHE_NAME = 'dctprime-cache-v1';
const urlsToCache = [

];

self.addEventListener( 'install', function( event ) 
{
	event.waitUntil(
		caches.open( CACHE_NAME )
		.then( function( cache ) 
		{
			var x = cache.addAll( urlsToCache );

			return x;
		})
	);
});

self.addEventListener( 'fetch', function( event ) 
{
	event.respondWith(
		caches.match( event.request )
		.then( function( response ) 
		{
			if ( response ) 
			{
				return response;

			}

			return fetch( event.request );
		})
	);
});
