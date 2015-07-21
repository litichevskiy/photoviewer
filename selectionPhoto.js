
(function ( InitialLoadingFoto ) {

	var select_photos = document.querySelector('[data-name="select-photos"]');
	var elemfocus_0   =  document.querySelectorAll('[tabindex="1"]')[0];
	var elemfocus_1   =  document.querySelectorAll('[tabindex="1"]')[1];
	var elemfocus_2   =  document.querySelectorAll('[tabindex="1"]')[2];
	var viewerphoto;
	
	select_photos.onclick = function ( event ) {

		var target = event.target || event;

		if ( target.dataset.aircraft ) { viewerphoto = new InitialLoadingFoto(   aircraft  ) };
		if (   target.dataset.photo  ) { viewerphoto = new InitialLoadingFoto( linkToPhoto ) };
		if (   target.dataset.zippo  ) { viewerphoto = new InitialLoadingFoto(    zippo    ) };

	};


	elemfocus_0.onkeydown = function ( event ) {

		if ( event.keyCode === 13  ) { viewerphoto = new InitialLoadingFoto( aircraft ) };
	};

	elemfocus_1.onkeydown = function ( event ) {

		if ( event.keyCode === 13  ) { viewerphoto = new InitialLoadingFoto( linkToPhoto ) };
	};
	
	elemfocus_2.onkeydown = function ( event ) {

		if ( event.keyCode === 13  ) { viewerphoto = new InitialLoadingFoto( zippo ) };
	};


})( InitialLoadingFoto );