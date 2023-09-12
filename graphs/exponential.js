var elt = document.getElementById('calculator-exponential');
var calculator_exponential = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStateexponential = {
    "version": 10,
    "randomSeed": "7a28880e5ca40ce1ed78c79bc6b85e1c",
    "graph": {
        "viewport": {
            "xmin": -15.623742791509518,
            "ymin": -0.5873316789361051,
            "xmax": 27.023316032019945,
            "ymax": 2.7559209162196048
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
                "id": "78",
                "color": "#388c46",
                "latex": "f\\left(x\\right)=\\left\\{x\\le0:0,le^{-lx}\\right\\}",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "77",
                "color": "#2d70b3",
                "latex": "t=1.325",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 20000,
                    "loopMode": "LOOP_FORWARD",
                    "isPlaying": true,
                    "min": "-2",
                    "max": "5"
                }
            },
            {
                "type": "expression",
                "id": "126",
                "color": "#000000",
                "latex": "l=1.3",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "min": "0"
                }
            },
            {
                "type": "expression",
                "id": "66",
                "color": "#c74440",
                "latex": "f\\left(x\\right)\\cdot\\left\\{-5<x<5\\right\\}",
                "lineWidth": "5"
            },
            {
                "type": "expression",
                "id": "64",
                "color": "#6042a6",
                "latex": "b=1",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "63",
                "color": "#388c46",
                "latex": "a=-2",
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
                "latex": "F_{r}\\left(x-14\\right)\\cdot\\left\\{8<x<20\\right\\}",
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
                "latex": "\\left(0,1\\right)",
                "showLabel": true,
                "label": "1",
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "76",
                "color": "#c74440",
                "latex": "F_{r}\\left(x\\right)=\\int_{-\\infty}^{x}f\\left(u\\right)du",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "128",
                "color": "#2d70b3",
                "latex": "F=F_{r}\\left(t\\right)"
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
                "latex": "C_{2}=\\left(-3.9,1.5\\right)",
                "showLabel": true,
                "label": "Densité :",
                "hidden": true,
                "labelSize": "1.3",
                "labelOrientation": "above"
            },
            {
                "type": "expression",
                "id": "140",
                "color": "#000000",
                "latex": "\\left(1.5,1.3\\right)",
                "showLabel": true,
                "label": "`f(x)=1.3 e^{-1.3 x} 1_{[0,+\\infty[}(x)`",
                "hidden": true,
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "119",
                "color": "#388c46",
                "latex": "C_{2}=\\left(16,1.5\\right)",
                "showLabel": true,
                "label": "Fonction de répartition :",
                "hidden": true,
                "labelSize": "1.3",
                "labelOrientation": "above"
            },
            {
                "type": "expression",
                "id": "139",
                "color": "#000000",
                "latex": "\\left(18,1.3\\right)",
                "showLabel": true,
                "label": "`F(x)=\\int_{-\\infty}^x f(t) dt`",
                "hidden": true,
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "124",
                "color": "#000000",
                "latex": "\\left(14,\\frac{2}{3}\\right)",
                "label": "2/3",
                "hidden": true,
                "labelSize": "1",
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "137",
                "color": "#000000",
                "latex": "\\left(1,0\\right)",
                "showLabel": true,
                "label": "1",
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "138",
                "color": "#000000",
                "latex": "\\left(15,0\\right)",
                "showLabel": true,
                "label": "1",
                "labelOrientation": "below"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '250px';
calculator_exponential.resize();

calculator_exponential.setState(graphStateexponential);
calculator_exponential.setDefaultState(graphStateexponential);
