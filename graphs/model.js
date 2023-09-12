var elt = document.getElementById('calculator-graphname');
var calculator_graphname = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStategraphname = {

};

elt.style.width = '100%';
elt.style.height = '200px';
calculator_graphname.resize();

calculator_graphname.setState(graphStategraphname);
calculator_graphname.setDefaultState(graphStategraphname);
