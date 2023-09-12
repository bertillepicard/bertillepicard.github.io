var elt = document.getElementById('calculator-normal');
var calculator_normal = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStatenormal = {
    "version": 10,
    "randomSeed": "7a28880e5ca40ce1ed78c79bc6b85e1c",
    "graph": {
        "viewport": {
            "xmin": -11.230197633443309,
            "ymin": -1.3452945126569935,
            "xmax": 23.28341688448438,
            "ymax": 1.9030456772656084
        },
        "showGrid": false,
        "showXAxis": false,
        "showYAxis": false,
        "xAxisNumbers": false,
        "yAxisNumbers": false,
        "polarNumbers": false,
        "squareAxes": false
    },
    "expressions": {
        "list": [
            {
                "type": "expression",
                "id": "1",
                "color": "#c74440",
                "latex": "N=\\operatorname{normaldist}\\left(m,s\\right)",
                "hidden": true,
                "lines": false
            },
            {
                "type": "expression",
                "id": "78",
                "color": "#388c46",
                "latex": "f\\left(x\\right)=N.\\operatorname{pdf}\\left(x\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "66",
                "color": "#c74440",
                "latex": "N.\\operatorname{pdf}\\left(x\\right)\\cdot\\left\\{-5<x<5\\right\\}",
                "lineWidth": "5"
            },
            {
                "type": "expression",
                "id": "64",
                "color": "#6042a6",
                "latex": "s=1",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "63",
                "color": "#388c46",
                "latex": "m=0",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "62",
                "color": "#000000",
                "latex": "x=0\\cdot\\left\\{-1<y<1.5\\right\\}"
            },
            {
                "type": "expression",
                "id": "65",
                "color": "#000000",
                "latex": "y=0\\cdot\\left\\{-5<x<5\\right\\}"
            },
            {
                "type": "expression",
                "id": "69",
                "color": "#000000",
                "latex": "x=14\\cdot\\left\\{-1<y<1.5\\right\\}"
            },
            {
                "type": "expression",
                "id": "70",
                "color": "#000000",
                "latex": "y=0\\cdot\\left\\{8<x<20\\right\\}"
            },
            {
                "type": "expression",
                "id": "68",
                "color": "#388c46",
                "latex": "N.\\operatorname{cdf}\\left(x-14\\right)\\cdot\\left\\{8<x<20\\right\\}",
                "lineWidth": "5"
            },
            {
                "type": "expression",
                "id": "71",
                "color": "#000000",
                "latex": "\\left(14,1\\right)",
                "showLabel": true,
                "label": "1",
                "dragMode": "NONE",
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "72",
                "color": "#000000",
                "latex": "\\left(14,0\\right)",
                "showLabel": true,
                "label": "0",
                "labelOrientation": "below_left"
            },
            {
                "type": "expression",
                "id": "73",
                "color": "#000000",
                "latex": "y=1\\cdot\\left\\{14<x<20\\right\\}",
                "lineStyle": "DASHED",
                "lineWidth": "1"
            },
            {
                "type": "expression",
                "id": "74",
                "color": "#000000",
                "latex": "\\left(0,0\\right)",
                "showLabel": true,
                "label": "0"
            },
            {
                "type": "expression",
                "id": "75",
                "color": "#000000",
                "latex": "\\left(0,0.5\\right)",
                "showLabel": true,
                "label": "0.5",
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "76",
                "color": "#c74440",
                "latex": "F=\\int_{-\\infty}^{t}f\\left(x\\right)dx"
            },
            {
                "type": "expression",
                "id": "77",
                "color": "#2d70b3",
                "latex": "t=4.29",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 20000,
                    "loopMode": "LOOP_FORWARD",
                    "isPlaying": true,
                    "min": "-6",
                    "max": "6"
                }
            },
            {
                "type": "expression",
                "id": "79",
                "color": "#c74440",
                "latex": "0\\le y\\le f\\left(x\\right)\\cdot\\left\\{-5<x<\\min\\left(t,5\\right)\\right\\}"
            },
            {
                "type": "expression",
                "id": "113",
                "color": "#c74440",
                "latex": "\\left(t+14,F\\right)",
                "showLabel": true,
                "label": "Aire sous la densité"
            },
            {
                "type": "expression",
                "id": "115",
                "color": "#c74440",
                "latex": "C_{3}=\\left(-4.2,1.2\\right)",
                "showLabel": true,
                "label": "Densité :",
                "hidden": true,
                "labelSize": "1",
                "labelOrientation": "above"
            },
            {
                "type": "expression",
                "id": "122",
                "color": "#000000",
                "latex": "\\left(-4.2,1.2\\right)",
                "showLabel": true,
                "label": "`f(x)=\\frac{1}{\\sqrt{2\\pi}} exp(-\\frac{x^2}{2})`",
                "hidden": true,
                "labelSize": "1",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "119",
                "color": "#388c46",
                "latex": "C_{2}=\\left(9,1.2\\right)",
                "showLabel": true,
                "label": "Fonction de répartition :",
                "hidden": true,
                "labelSize": "1",
                "labelOrientation": "above"
            },
            {
                "type": "expression",
                "id": "123",
                "color": "#000000",
                "latex": "\\left(9,1.2\\right)",
                "showLabel": true,
                "label": "`F(x)=\\int_{-\\infty}^x f(t) dt`",
                "hidden": true,
                "labelSize": "1",
                "labelOrientation": "below"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '200px';
calculator_normal.resize();

calculator_normal.setState(graphStatenormal);
calculator_normal.setDefaultState(graphStatenormal);


elt.style.width = '100%';
elt.style.height = '200px';
calculator_normal.resize();

calculator_normal.setMathBounds({
left: -1,
right: 6.5,
bottom: -2,
top: 6.2});

calculator_normal.setState(graphStatenormal);
calculator_normal.setDefaultState(graphStatenormal);
