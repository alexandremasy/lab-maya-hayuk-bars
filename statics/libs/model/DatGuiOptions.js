/**
 *  Dat.Gui Options
 **/
(function(window)
{
  function DatGuiOptions()
  {
    this.quantity = 100;
    this.max = 300;
    this.thickness = 30;
    this.opacity = .8;
    this.composite = 'color-dodge';

    // threshold
    this.maxQuantity = 80;
    this.maxOffset = 100;
    this.maxThickness = 100;
    this.maxOpacity = 1;

    // left
    this.left = {};
    this.left.quantity = 25;
    this.left.offset = 50;
    this.left.random = false;

    // right
    this.right = {};
    this.right.quantity = 25;
    this.right.offset = 50;
    this.right.random = false;
    
    // colors
    this.colors = {};
    this.colors.themes = ['brussels', 'beachsunset', 'miamisunset', 'littlemermaid', 'summergrass', 'cc02', 'dutchnavy'];
    this.colors.theme = 'beachsunset';
    this.colors.brussels = ['#dab9ce', '#dd5c87', '#995047', '#ebb933', '#8d837a', '#866a4e', '#5a4b46', '#c32333', '#54d7d1', '#1572a4', '#053678'];
    this.colors.beachsunset = ['#047C8C', '#018B8D', '#F3BF81', '#F49B78', '#F1706D'];
    this.colors.miamisunset = ['#FFBC67', '#DA727E', '#AC6C82', '#685C79', '#455C7B'];
    this.colors.littlemermaid = ['#012239', '#095953', '#5FC0A7', '#DA2C18', '#8D1F18'];
    this.colors.summergrass = ['#436E2A', '#5C8B1C', '#94BA13', '#C0C420', '#E1D726'];
    this.colors.cc02 = ['#65A683', '#218777', '#3F585F', '#47384D', '#47384D'];
    this.colors.dutchnavy = ['#E9E1D4', '#0080E8', '#F7F8FC', '#FD7430', '#006DD4'];
  }
   
  window.app.model.DatGuiOptions = DatGuiOptions;
})(window);