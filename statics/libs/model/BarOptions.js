/**
 *  Bar Options
 **/
(function(window)
{
  
  function BarOptions( x, y, rotation, color, thickness, opacity, composite, stageWidth, stageHeight )
  {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.color = color;
    this.thickness = thickness;
    this.opacity = opacity;
    this.composite = composite;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }
  
  // prototype
  var p = BarOptions.prototype;
   
  // x position
  p.x = 0;
  
  // y position
  p.y = 0;
  
  // angle
  p.angle = 0;
  
  // color
  p.color = 0;
  
  // thickness
  p.thickness = 0;
  
  // stage width
  p.stageWidth = 0;
  
  // stage height
  p.stageHeight = 0;
  
  window.app.model.BarOptions = BarOptions;
})(window);
