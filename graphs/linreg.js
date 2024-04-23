var initialState = {"version":1,"graph":{"showGrid":true,"showXAxis":true,"showYAxis":true,"xAxisStep":0,"yAxisStep":0,"xAxisMinorSubdivisions":0,"yAxisMinorSubdivisions":0,"xAxisArrowMode":"NONE","yAxisArrowMode":"NONE","xAxisLabel":"","yAxisLabel":"","xAxisNumbers":true,"yAxisNumbers":true,"polarMode":false,"polarNumbers":true,"degreeMode":false,"projectorMode":false,"squareAxes":true,"viewport":{"xmin":-10,"ymin":-13.54387107276575,"xmax":10,"ymax":13.54387107276575}},"expressions":
	{"list":[{"id":"2","type":"folder","title":"Hidden","memberIds":{"3":true},"hidden":false,"collapsed":false,"secret":true},
	{"id":"3","type":"table",
    columns: [
      {
        latex: 'x_1',
        values: ['0', '1', '2', '3', '4', '5'],
      },
      {
        latex: 'y_1',
        values: ['0', '90.79755', '278.90191', '233.25577', '536.06115', '650.76882'],
		color: Desmos.Colors.RED
      }
	 ]
	},
	{"id":"5","type":"text","text":"Trouvez la valeur de p qui minimise les erreurs, c'est-à-dire la somme des carrés des distances oranges"},
    {"id":"4","type":"folder","title":"Solution","memberIds":{"6":true},"hidden":false,"collapsed":true,"secret":false},
	{"id":"6","type":"text","text":"Lorsque p vaut entre 122 et 123, la somme des erreurs est de 23 800 environ. C'est la plus petite valeur que l'on puisse obtenir pour la somme des erreurs au carré"}
	]}}

var elt = document.getElementById('calculator-linreg');

var calculator_linreg = Desmos.GraphingCalculator(elt, {
  keypad: false,
  fontSize: desmosfontSize,
  restrictedFunctions: true,
  expressions: true,
  expressionsTopbar: false,
  showGrid: false,
  showXAxis: true,
  showYAxis: true,
  authorFeatures: false
});

calculator_linreg.setState(initialState);
calculator_linreg.setExpressions([
  {
    id: 's',
    latex: 's\\ =\\ \\operatorname{round}\\left(\\sum_{n=1}^{6}\\left(y_{1}\\left[n\\right]-f\\left(x_{1}\\left[n\\right]\\right)\\right)^{2}\\right)',
    secret: true,
    color: Desmos.Colors.BLACK,
  },
  {
    id: 'b',
    latex: 'b = \\operatorname{floor}\\left(\\frac{s}{1000}\\right)',
    hidden: true,
    secret: true,
    color: Desmos.Colors.RED,
  },
  {
    id: 'c',
    latex: 'c\\ =\\ \\operatorname{round}\\left(\\frac{s-b\\cdot1000}{100}\\right)',
    hidden: true,
    secret: true,
    color: Desmos.Colors.RED,
  },
  {
    id: 'd',
    latex: 'd\\ = b\\cdot1000 + c\\cdot100',
    hidden: true,
    secret: true,
    color: Desmos.Colors.RED,
  },
  {
    id: 'm',
    latex: 'm\\ = \\floor(\\frac{d}{1000})',
    hidden: true,
    secret: true,
    color: Desmos.Colors.RED,
  },
  {
    id: 'l',
    latex: 'l\\ = \\frac{d - m\\cdot1000}{100}',
    hidden: true,
    secret: true,
    color: Desmos.Colors.RED,
  },

  {
    id: 'x',
    latex: '\\left(4,-50\\right)',
    label: 'Erreurs au carré : ~ ${m} ${l}00',
    showLabel: true,
    hidden: false,
    secret: true,
	color: Desmos.Colors.BLACK,
    pointStyle: Desmos.Styles.OPEN,
	pointSize: 0
  },
  {
    id: 'p',
    latex: 'p=-1',
    playing: false,
    sliderBounds: { min: -1, max: 250, step: 1 },
    color: Desmos.Colors.BLACK,
  },
]);

var p = calculator_linreg.HelperExpression({ latex: 'p' });

calculator_linreg.setMathBounds({
  left: -1,
  right: 10,
  bottom: -150,
  top: 771,
});

elt.style.width = '100%';
elt.style.height = '500px';
calculator_linreg.resize();

p.observe('numericValue', function () {
  calculator_linreg.setExpressions([
    {
      id: 'f',
      latex: 'f\\left(x\\right) = p\\cdot x',
      hidden: false,
      secret: true,
      color: Desmos.Colors.BLUE,
	  lineStyle: Desmos.Styles.DASHED
    },
    {
      id: 'poly',
      latex: '\\operatorname{polygon}\\left(\\left(x_{1},\\ f\\left(x_{1}\\right)\\right),\\left(x_{1},\\ y_{1}\\right)\\right)',
      hidden: false,
      secret: true,
      color: Desmos.Colors.ORANGE,
    },
  ]);
});


// Save the current state of a calculator instance
var newDefaultState = calculator_linreg.getState();

// Set a new default state to match the current state
calculator_linreg.setDefaultState(newDefaultState);
