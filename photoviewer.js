
(function ( exports ) { 

   

    var linkToPhoto;

    var countMainFotoRight = 10;
    var countMainFotoLeft  = 4;
    var countPreviewRight  = 15;
    var countBacklight     = 0;
    var countPreviewLeft;
    var countStyle         = 0;
    var counterTime        = 0;
    var countload          = 4;


    var mainFotoRight = document.querySelector('[data-mainRight-name="right"]');
    var mainFotoLeft  = document.querySelector('[data-mainLeft-name="left"]');
    var previewRight  = document.querySelector('[data-name="previewRight"]');
    var previewLeft   = document.querySelector('[data-name="previewLeft"]');
    var viewerFoto    = document.querySelector('[data-name="viewerFoto"]');
    var mainFoto      = document.querySelector('[data-foto="main-foto"]');
    

    function addborder ( elem ) {

        if ( elem.dataset.num ) {

            elem.classList.add('backlightFoto');
        };
    };


    function removeborder(  ) {
                
        if ( document.getElementsByClassName('backlightFoto')[0] ) {

            document.getElementsByClassName('backlightFoto')[0].classList.remove('backlightFoto');
        }; 
         
    };

    
    viewerFoto.onclick = function( event ) {
        
        var hiddenMainFoto = document.querySelectorAll('[data-foto="hiddenMainFoto"] img');
        var visiblePreview = document.querySelectorAll('[data-name="2"] img');
        var target = event.target || event;
        
        if ( target === mainFotoRight && countBacklight === 4 ) {

            previewRight.onclick( removeborder( ) );
            return; 
        };
        if ( target === mainFotoLeft  && countBacklight === 0 ) {

            previewLeft.onclick(  removeborder( ) );
            return; 
        };
        if ( target === mainFotoRight ) {

            removeborder();
            mainFoto.src = hiddenMainFoto[ ++countBacklight ].src;
            mainFoto.addEventListener( 'error', addClassLoadingMainphoto );
            addborder( visiblePreview[ countBacklight ] );
            return;
        };
        if ( target === mainFotoLeft  ) {

            removeborder();
            mainFoto.src = hiddenMainFoto[ --countBacklight ].src;
            mainFoto.addEventListener( 'error', addClassLoadingMainphoto );
            addborder( visiblePreview[ countBacklight ] );
            return; 
        };
        if ( target.tagName === 'IMG' ) { 

            countBacklight = parseInt( target.dataset.num );
            addborder( target, removeborder( ) );
            mainFoto.src = hiddenMainFoto[ parseInt( target.dataset.num ) ].src;
            mainFoto.addEventListener( 'error', addClassLoadingMainphoto );
            return;   
        };

    };

    
    previewLeft.onclick = function(  ) {

        var hiddenMainFoto     = document.querySelectorAll('[data-foto="hiddenMainFoto"] img');
        var visiblePreview     = document.querySelectorAll('[data-name="2"]');
        var hiddenPreviewRight = document.querySelectorAll('[data-name="3"]');
        var hiddenPreviewLeft  = document.querySelectorAll('[data-name="1"]');

        hiddenMainFoto.forEach = [].forEach;
        hiddenMainFoto.forEach( function( item, i ) {

            ( countMainFotoLeft < 0 ) ? countMainFotoLeft = linkToPhoto.length -1 : countMainFotoLeft = countMainFotoLeft;
            hiddenMainFoto[ countload ].src = linkToPhoto[ countMainFotoLeft ].orig;   
            countMainFotoLeft--;
            countload--;
        
            });

        countMainFotoRight = countMainFotoLeft + 6;
        countPreviewLeft = countMainFotoLeft;
        countload = 4;
        
        mainFoto.src = hiddenMainFoto[0].src;
        mainFoto.addEventListener( 'error', addClassLoadingMainphoto );
        visiblePreview.forEach = [].forEach;
        visiblePreview.forEach( function( item, i ) {
        
            visiblePreview[i].dataset.name = 3;
        });

        hiddenPreviewLeft.forEach = [].forEach;
        hiddenPreviewLeft.forEach( function( item, i ) {
        
            hiddenPreviewLeft[i].dataset.name = 2;
            hiddenPreviewLeft[i].children[0].addEventListener( 'error', addClassLoadingPreview );
        });


        addborder( hiddenPreviewRight[0].children[0] );

        hiddenPreviewLeft.forEach = [].forEach;
        hiddenPreviewLeft.forEach( function( item, i ) {

            hiddenPreviewRight[i].dataset.name = 1;
            
            ( countPreviewLeft < 0 ) ? countPreviewLeft = linkToPhoto.length -1 : countPreviewLeft = countPreviewLeft;
            hiddenPreviewRight[ countload ].children[0].src = linkToPhoto[ countPreviewLeft ].thumb;
            countPreviewLeft--;
            countload--;
        });

        countBacklight = 0;
        countload = 4;
    };


    previewRight.onclick = function(  ) {

        var hiddenMainFoto     = document.querySelectorAll('[data-foto="hiddenMainFoto"] img');
        var hiddenPreviewRight = document.querySelectorAll('[data-name="3"]');
        var hiddenPreviewLeft  = document.querySelectorAll('[data-name="1"]');
        var visiblePreview     = document.querySelectorAll('[data-name="2"]');

        hiddenMainFoto.forEach = [].forEach;
        hiddenMainFoto.forEach( function( item, i ) {

            ( countMainFotoRight > linkToPhoto.length -1 ) ? countMainFotoRight = 0 : countMainFotoRight = countMainFotoRight;/////////
            hiddenMainFoto[i].src = linkToPhoto[ countMainFotoRight ].orig;
            countMainFotoRight++;
        
        });

        countPreviewRight = countMainFotoRight;
        countMainFotoLeft = countMainFotoRight -6;
        mainFoto.src = hiddenMainFoto[0].src;
        mainFoto.addEventListener( 'error', addClassLoadingMainphoto );

        visiblePreview.forEach = [].forEach;
        visiblePreview.forEach( function( item, i ) {

            visiblePreview[i].dataset.name = 1;

        });

        hiddenPreviewRight.forEach = [].forEach;
        hiddenPreviewRight.forEach( function( item, i ) {

            hiddenPreviewRight[i].dataset.name = 2;
            hiddenPreviewRight[i].children[0].addEventListener( 'error', addClassLoadingPreview );
            
        });

        addborder( hiddenPreviewRight[0].children[0] );

        hiddenPreviewLeft.forEach = [].forEach;
        hiddenPreviewLeft.forEach( function( item, i ) {

            hiddenPreviewLeft[i].dataset.name = 3;
            ( countPreviewRight > linkToPhoto.length -1 ) ? countPreviewRight = 0 : countPreviewRight = countPreviewRight;////////
            item.children[0].src = linkToPhoto[ countPreviewRight ].thumb;
            countPreviewRight++;
        });
       
        countBacklight = 0; 
    };


    function newStyleViewerFoto ( ) { 

        previewRight.style.visibility = 'hidden';
        previewLeft.style.visibility  = 'hidden';

        mainFotoLeft.style.fontSize  = '450%';
        mainFotoLeft.style.zIndex    = '1000';
        mainFotoLeft.style.top       = '85%';
        mainFotoLeft.style.left      = '3%';

        mainFotoRight.style.fontSize = '450%';
        mainFotoRight.style.zIndex   = '1000';
        mainFotoRight.style.top      = '86%';
        mainFotoRight.style.right    = '4%';

        mainFoto.style.transition = '0.3s';
        mainFoto.style.width      = '100%';
        mainFoto.style.height     = '83%';
        mainFoto.style.left       = '0%';
        mainFoto.style.top        = '0%';
        
        if ( countStyle === 2 ) {

            mainFoto.style.height = '100%';
            mainFotoRight.style.zIndex = '0'; 
            mainFotoLeft.style.zIndex = '0';
            return;
        };
        if ( countStyle === 0 ) { return previousStyleViewerFoto ( )  };

        clearInterval( id );

    };

    function previousStyleViewerFoto ( ) { 

        previewRight.style.visibility = 'visible';
        previewLeft.style.visibility  = 'visible';

        mainFotoLeft.style.fontSize = '1200%';
        mainFotoLeft.style.top      = '23%';
        mainFotoLeft.style.left     = '4%';
        
        mainFotoRight.style.fontSize = '1200%';
        mainFotoRight.style.top      = '28%';
        mainFotoRight.style.right    = '5.5%';
        
        mainFoto.style.left   = '12.5em';
        mainFoto.style.height = '76%';
        mainFoto.style.width  = '70%';
        mainFoto.style.top    = '1em';

        id = setInterval( countertime, 5000 );
    };  


    id = setInterval( countertime, 5000 );

    function countertime ( ) {

        counterTime++;

        if ( counterTime === 2 ) {
            counterTime = 0;
            countStyle++
            newStyleViewerFoto();
        };
    };

    
    viewerFoto.onmousemove = function( ) {
        
        counterTime = 0;
    };


    document.onkeydown = function ( event ) {

        var code = event.keyCode;

        if ( code === 40 && countStyle === 2 ) { return null };
        if ( code === 38 && countStyle === 0 ) { return null };
        if ( code === 38 ) { return --countStyle, newStyleViewerFoto( ) };
        if ( code === 40 ) { return ++countStyle, newStyleViewerFoto( ) };
        if ( code === 27 ) { return location.reload( ) };
        if ( code === 37 ) { return viewerFoto.onclick( mainFotoLeft  ) };
        if ( code === 39 ) { return viewerFoto.onclick( mainFotoRight ) };
        if ( (event.ctrlKey) && ( code === 37 ) ) { return previewLeft.onclick( ) };
        if ( (event.ctrlKey) && ( code === 39 ) ) { return previewRight.onclick( )};

    };

    viewerFoto.onwheel = function ( event ) {

        ( event.deltaY > 0 ) ? previewRight.onclick() : previewLeft.onclick();
        
    };

    function error ( ) {

        alert( "минимальное колличество фото 15" );
    };

    
    function InitialLoadingFoto ( linkToPhotoS ) {
        
        if ( linkToPhotoS.length < 15 ) { error() };

        linkToPhoto = linkToPhotoS;
        countPreviewLeft = linkToPhotoS.length -1;

        var mainFoto = document.querySelector('[data-foto="main-foto"]');
        var preview  = document.querySelectorAll('[data-name="predPokaz"] ul li img');
        var bigFoto  = document.querySelectorAll('[data-foto="hiddenMainFoto"] li img');
        var counter  = 5;

        preview.forEach = [].forEach;
        preview.forEach( function( item, i ) {

            preview[i].src = linkToPhoto[i].thumb;

            preview[i].addEventListener( 'error', addClassLoadingPreview );
        });

        bigFoto.forEach = [].forEach;
        bigFoto.forEach( function( item, i ) {

            bigFoto[i].src = linkToPhoto[ counter ].orig;

            bigFoto[i].addEventListener( 'error', addClassLoadingMainphoto );
            counter++;

        });

        mainFoto.src = bigFoto[0].src;

        setTimeout( viewerPhotoVisible, 100 );
    };


    function viewerPhotoVisible( ) {

        viewerFoto.style.visibility = 'visible';    
    };

    function addClassLoadingPreview ( event ) {

        var target = event.target;
       //target.src = "http://regex.info/i/jpgqual/loading.png";
        target.classList.add('loadingPreview');
    };

    function addClassLoadingMainphoto ( event ) {

        var target = event.target;
        //target.src = "http://regex.info/i/jpgqual/loading.png";
        target.classList.add('loadingMainphoto');
    };


    exports.InitialLoadingFoto = InitialLoadingFoto;    

})( window );





