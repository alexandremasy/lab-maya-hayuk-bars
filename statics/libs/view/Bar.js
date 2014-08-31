/**
 *  Bar
 *
 *  One colored bar
 **/
(function(window)
{
  function Bar()
  {
    this.init();
  }
  
  // prototype
  var p = Bar.prototype;
   
  // options
  p.options = null;

  // debug
  p.debug = false;

  /**
   *  Return the display object
   *
   *  @return DisplayObject
   **/  
  p.getDisplayObject = function()
  {
    return this.view;
  };

  /** 
   *   Show the bar
   *
   *   @param options BarOptions
   **/
  p.show = function( options )
  {
  	this.options = options;

  	this.view.rotation = this.options.rotation;
    this.view.x = this.options.x;
    this.view.y = this.options.y;
    this.view.alpha = this.options.opacity;
    this.view.compositeOperation = this.options.composite;

    this.view.addChild( this.mask = new createjs.Shape() );

    this.draw();

  };

  /** 
   *  Hide the bar
   *
   *  @param container Container
   **/
  p.hide = function( container )
  {
    // this.view.visible = false;
    container.removeChild( this.view );
  };
  
  /**
   *  Init the class
   */
  p.init = function()
  {
    this.view = new createjs.Container();
    this.display = this.view.addChild( new createjs.Shape() );
  };
  
  /**
   *  Draw the bar
   **/
  p.draw = function()
  {
    this.display.graphics.clear();
    
    var length = 0, x = 0, y = 0, margin = 10, a, b;

    // 
    //  right to left
    //  
    if ( this.options.rotation == 45 )
    {
      a = Math.min( this.options.x, this.options.stageHeight - this.options.thickness );

      if ( this.options.y > 0 )
      {
        a = this.options.stageHeight - this.options.y - this.options.thickness;
      }

      b = a;
    }

    //
    //  Left to right
    //  
    else if (this.options.rotation == -45 )
    {
      a = Math.min( this.options.stageHeight - this.options.y, this.options.stageWidth - this.options.x ) - 10;

      if ( this.options.y > 30 )
      {
        a -= 10;
      }

      b = a;
    }
    else
    {
      a = 0;
      b = 0;
    }

    var length = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2) ) | 0;

    this.display.graphics.beginFill( this.options.color );
    this.display.graphics.rect( 0, 0, this.options.thickness, length);
    this.display.graphics.endFill();

    if ( this.debug )
    {
      // anchor
      this.display.graphics.beginFill( '#000' );
      this.display.graphics.rect( 0, 0, 10, 10 );
      this.display.graphics.endFill(); 
    }

  };
  
  window.app.view.Bar = Bar;
})(window);
