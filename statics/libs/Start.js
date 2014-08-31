/// http://mayahayuk.com/?page=murals&id=brussels-belgium-2013

/**
 * Start the application
 **/
(function(window)
{
  jQuery(document).ready( start );
  
  var display;
  var options;
  
  function start()
  {
    // console.clear();
   
    options = new app.model.DatGuiOptions();
    var gui = new dat.GUI({autoplace:false});

    var l = gui.addFolder('Right to Left');
    l.add(options.left, 'quantity', 1, options.maxQuantity).onChange( onFinishChangeHandler.bind(this) );
    l.add(options.left, 'offset', 1, options.maxOffset).onChange( onFinishChangeHandler.bind(this) );
    l.add(options.left, 'random').onChange( onFinishChangeHandler.bind(this) );
    l.open();

    var r = gui.addFolder('Left to Right');
    r.add(options.right, 'quantity', 1, options.maxQuantity).onChange( onFinishChangeHandler.bind(this) );
    r.add(options.right, 'offset', 1, options.maxOffset).onChange( onFinishChangeHandler.bind(this) );
    r.add(options.right, 'random').onChange( onFinishChangeHandler.bind(this) );
    r.open();
    
    var g = gui.addFolder('Global');
    g.add(options, 'opacity').min(0).max(options.maxOpacity).step(.1).onChange( onFinishChangeHandler.bind(this) );
    g.add(options, 'thickness', 0, options.maxThickness).min(1).onChange( onFinishChangeHandler.bind(this) );
    g.add(options.colors, 'theme', options.colors.themes ).onChange( onFinishChangeHandler.bind(this) );
    g.add(options, 'composite', ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'] ).onChange( onFinishChangeHandler.bind(this) );
    g.open();

    var customContainer = document.getElementById('controls');
    customContainer.appendChild(gui.domElement);
    
    display = new app.view.Display( options );
  };
  
  function onFinishChangeHandler(value)
  {
    display.show( options ); 
  }
   
  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  Math.randRange = function(min, max, floored) 
  {
    if ( floored )
      return Math.floor(Math.random()*(max-min)+min);
    else
      return Math.random()*(max-min)+min;
  }

})(window);