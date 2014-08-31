/**
 *  Display
 *  Manage the canvas display
 **/
(function(window)
{
  function Display( options )
  {
  	this.options = options;
    this.init();
  }
  
  // prototype
  var p = Display.prototype;
   
  /**
   *  Init the class
   **/
  p.init = function()
  {
    this.view = jQuery('#playground');
    this.width = app.win.width();
    this.height = app.win.height() - 65;

    this.bars = [];
    
    this.stage = new createjs.Stage( this.view[0] );
    createjs.Ticker.addEventListener("tick", this.stage);
    this.container = new createjs.Container();
    this.stage.addChild( this.container );

    this.updateLayout();
    this.show( this.options );
  };

  /**
   *  Show the bars with the given options
   *
   *  @param options DatGuiOptions
   **/
  p.show = function (options)
  {
    this.clear();
    this.create( options );
    return;

  	// hide unwanted bars
    var i = options.quantity;
    var n = options.max;
    var e;
    while (i++<n)
    {
      e = this.bars[i];
      e.hide();
    }

  	// update the displayed ones
    this.options = options;

    var n = this.options.quantity;
    var o, e;
    while( n-->0 )
    {
      o = this.baroptions[n];
      e = this.bars[n];
      e.show( o );
    }


  };

  /** 
   *  Clear the space from the current bars
   **/
  p.clear = function()
  {
    var n = this.bars.length;

    while( n-->0 )
    {
      this.bars[n].hide( this.container );
    }

    this.bars = [];
  };

  /** 
   *  Create the bars options
   *
   *  @param options DatGuiOptions
   **/
  p.create = function( options )
  {
    var n = -1;
    var x, y, rotation, bar, yn = 0, ynn = 0;

    var colors = this.options.colors[ this.options.colors.theme ];
    var ncolor = colors.length-1;
    var option;
    var opacity;
    
    //
    // left to right
    //
    n = -1;
    x = 0, y = 0;
    while ( n++ < this.options.left.quantity )
    {
      x += this.options.left.offset;
      y = 0;
      opacity = Math.randRange( 1, this.options.opacity, false );

      if ( this.options.left.random )
      {
        x = Math.randRange(0, this.width + (this.width<<1));
      }

      if ( x > this.width )
      {
        y = yn * this.options.left.offset;
        x = this.width-20;
        yn++;
      } 


      color = colors[ Math.randRange(0, ncolor, true) ];
      option = new app.model.BarOptions(x, y, 45, color, this.options.thickness, opacity, this.options.composite, this.width-20, this.height-20);

      // bars
      this.bars.push( bar = new app.view.Bar() );
      bar.show( option );
    }

    //
    // right
    //

    n = -1;
    x = this.width, y = 0;
    while( n++ < this.options.right.quantity )
    {
      x -= this.options.right.offset;
      y = 10;
      opacity = Math.randRange( 1, this.options.opacity, false );

      if ( this.options.right.random )
      {
        x = Math.randRange( -this.width<<1, this.width );
      }

      if ( x < 0 )
      {
        x = 0;
        y = ynn * this.options.right.offset;
        ynn++;
      }


      color = colors[ Math.randRange(0, ncolor, true) ];
      option = new app.model.BarOptions(x, y, -45, color, this.options.thickness, opacity, this.options.composite, this.width-20, this.height-20);

      // bars
      this.bars.push( bar = new app.view.Bar() );
      bar.show(option);
    }

    // 
    this.bars = _.shuffle(this.bars);
    n = this.bars.length;
    while( n-->0 )
    {
      this.container.addChild( this.bars[n].getDisplayObject() );
    }
  };
  
  /** 
   *  Update the layout
   */
  p.updateLayout = function()
  {
    this.view.attr({
        width: this.width,
        height: this.height
    });

    this.container.x = 5;
    this.container.y = 15;
  };
  
  window.app.view.Display = Display;
})(window);
