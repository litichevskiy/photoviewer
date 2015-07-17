
(function ( linkToPhoto ) { 

	var k = 10;
	var j = 290;
	var l = 0;
	var countLeft = 0;
	var countRight = 5;

 	var linkToPhoto = linkToPhoto;

	var viewerFoto   = document.querySelector('[data-name="viewerFoto"]');
	var mainFoto     = document.querySelector('[data-foto="main-foto"]');
	var previewRight = document.querySelector('[data-name="previewRight"]');
	var previewLeft  = document.querySelector('[data-name="previewLeft"]');
	

	function addborder ( elem ) {

		( elem ===  mainFoto ) ?  null : elem.classList.add('backlightFoto');
	 
	};


	function removeborder(  ) {
				
		( document.getElementsByClassName('backlightFoto')[0] ) ? document.getElementsByClassName('backlightFoto')[0].classList.remove('backlightFoto') : ""
		 
	};

	
	viewerFoto.onclick = function( event ) {
	
		var hiddenMainFoto = document.querySelectorAll('[data-foto="hiddenMainFoto"] img');
		var visiblePreview = document.querySelectorAll('[data-name="2"] img');
		var target = event.target;

		if ( target.dataset.num ) { return mainFoto.src = hiddenMainFoto[ parseInt(target.dataset.num) ].src, addborder( target, removeborder( ) )  };
		if ( target.dataset.mainleftName && l === 0 ) { return previewLeft.onclick( removeborder(  ) ) };
		if ( target.dataset.mainrightName && l === 4 ) { return previewRight.onclick( removeborder( ) ) };
		if ( target.dataset.mainleftName ) { return replaceMainFoto( hiddenMainFoto[--l].src ) , addborder( visiblePreview[ l ], removeborder() ) };
		if ( target.dataset.mainrightName ) { return replaceMainFoto( hiddenMainFoto[++l].src )  , addborder( visiblePreview[ l ], removeborder() ) };
	
	};

	

	function replaceMainFoto ( newsrc ) {

		mainFoto.src = newsrc;
	};



	previewLeft.onclick = function(  ) {

		var hiddenMainFoto     = document.querySelectorAll('[data-foto="hiddenMainFoto"] img');
		var visiblePreview	   = document.querySelectorAll('[data-name="2"]');
		var hiddenPreviewRight = document.querySelectorAll('[data-name="1"]');
		var hiddenPreviewLeft  = document.querySelectorAll('[data-name="3"]');

		hiddenMainFoto.forEach = [].forEach;
		hiddenMainFoto.forEach( function( item, i ){

			( countLeft === 0 ) ? countLeft = 299 : countLeft = countLeft;
			hiddenMainFoto[i].src = linkToPhoto[countLeft].orig;
			countLeft--;
		
			});
		mainFoto.src = hiddenMainFoto[ hiddenMainFoto.length -1 ].src; 

		visiblePreview.forEach = [].forEach;
		visiblePreview.forEach( function( item, i ) {
		
			visiblePreview[i].dataset.name = 3;
		});

		hiddenPreviewRight.forEach = [].forEach;
		hiddenPreviewRight.forEach( function( item, i ) {
		
			hiddenPreviewRight[i].dataset.name = 2;

		});

		addborder( hiddenPreviewRight[0].children[0] );

		hiddenPreviewLeft.forEach = [].forEach;
		hiddenPreviewLeft.forEach( function( item, i ) {

			hiddenPreviewLeft[i].dataset.name = 1;

			item.children[0].src = linkToPhoto[j].thumb;
			( j === 0 ) ? j = 299 : j = j;
			j--;
		});

		l = 0;
	};


	previewRight.onclick = function(  ) {
	
		var hiddenMainFoto     = document.querySelectorAll('[data-foto="hiddenMainFoto"] img');
		var hiddenPreviewRight = document.querySelectorAll('[data-name="3"]');
		var hiddenPreviewLeft  = document.querySelectorAll('[data-name="1"]');
		var visiblePreview     = document.querySelectorAll('[data-name="2"]');

		hiddenMainFoto.forEach = [].forEach;
		hiddenMainFoto.forEach( function( item, i ) {

			hiddenMainFoto[i].src = linkToPhoto[countRight].orig;
			countRight++;
			( countRight === 300 ) ? countRight = 0 : countRight = countRight ;
		
		});
		mainFoto.src = hiddenMainFoto[0].src; 

		visiblePreview.forEach = [].forEach;
		visiblePreview.forEach( function( item, i ) {
			visiblePreview[i].dataset.name = 1;
		});

		hiddenPreviewRight.forEach = [].forEach;
		hiddenPreviewRight.forEach( function( item, i ) {
			hiddenPreviewRight[i].dataset.name = 2;
			
		});
		addborder( hiddenPreviewRight[0].children[0] );

		hiddenPreviewLeft.forEach = [].forEach;
		hiddenPreviewLeft.forEach( function( item, i ) {
			hiddenPreviewLeft[i].dataset.name = 3;
			item.children[0].src = linkToPhoto[k].thumb;
			k++;
			( k === 300 ) ? k = 0 : k = k;
		});

		l = 0;	
	
	};


	function newStyleMainFoto ( ) {

		mainFoto.style.width  = '100%';
	 	mainFoto.style.height = '100%';
	 	mainFoto.style.left   = '0%';
	 	mainFoto.style.top    = '0%';
	 	mainFoto.style.transition = '0.3s';

	};

	function styleMainFoto ( ) {

		mainFoto.style.width  = '70%';
	 	mainFoto.style.height = '76%';
	 	mainFoto.style.left   = '11.5em';
	 	mainFoto.style.top    = '1em';
	}  

	var counterTime = 0;

    
	id = setInterval( function( ) {

    	counterTime++;

    	if ( counterTime === 2 ) {
    		counterTime = 0;
    		newStyleMainFoto();
    	};
    		
    }, 5000 );

    
	viewerFoto.onmousemove = function( ) {
		
		counterTime = 0;
		styleMainFoto();
	 	
    };
	

})( window.linkToPhoto );

