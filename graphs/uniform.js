var elt = document.getElementById('calculator-unif');
var calculator_unif = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStateuniform = {
    "version": 10,
    "randomSeed": "7a28880e5ca40ce1ed78c79bc6b85e1c",
    "graph": {
        "viewport": {
            "xmin": -15.623742791509518,
            "ymin": -0.5873316789361051,
            "xmax": 27.023316032019945,
            "ymax": 1.7559209162196048
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
                "latex": "D=\\operatorname{uniformdist}\\left(a,b\\right)",
                "hidden": true,
                "lines": false
            },
            {
                "type": "expression",
                "id": "78",
                "color": "#388c46",
                "latex": "f\\left(x\\right)=D.\\operatorname{pdf}\\left(x\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "66",
                "color": "#c74440",
                "latex": "D.\\operatorname{pdf}\\left(x\\right)\\cdot\\left\\{-5<x<5\\right\\}",
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
                "latex": "D.\\operatorname{cdf}\\left(x-14\\right)\\cdot\\left\\{8<x<20\\right\\}",
                "lineWidth": "5"
            },
            {
                "type": "expression",
                "id": "127",
                "color": "#388c46",
                "latex": "h=\\operatorname{round}\\left(D.\\operatorname{cdf}\\left(0\\right),2\\right)"
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
                "latex": "\\left(0,\\frac{1}{b-a}\\right)",
                "showLabel": true,
                "label": "`\\frac{1}{${g_{1}}}`",
                "labelOrientation": "above_left"
            },
            {
                "type": "expression",
                "id": "126",
                "color": "#2d70b3",
                "latex": "g_{1}=\\operatorname{round}\\left(b-a,2\\right)"
            },
            {
                "type": "expression",
                "id": "130",
                "color": "#c74440",
                "latex": "g_{2}=\\operatorname{round}\\left(\\frac{1}{b-a},2\\right)"
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
                "latex": "t=1.122",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 26666.666666666668,
                    "loopMode": "LOOP_FORWARD",
                    "isPlaying": true,
                    "min": "-3",
                    "max": "2"
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
                "label": "Aire sous la densité",
                "labelOrientation": "below_right"
            },
            {
                "type": "expression",
                "id": "125",
                "color": "#000000",
                "latex": "\\left(-3.9,1.3\\right)",
                "showLabel": true,
                "label": "`f(x)=\\frac{1}{(${b})-(${a})} {1}_{[${a},${b}]}(x)`",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "115",
                "color": "#c74440",
                "latex": "\\left(-3.9,1.5\\right)",
                "showLabel": true,
                "label": "Densité :",
                "hidden": true,
                "labelSize": "1.3",
                "labelOrientation": "above"
            },
            {
                "type": "expression",
                "id": "119",
                "color": "#388c46",
                "latex": "\\left(10,1.5\\right)",
                "showLabel": true,
                "label": "Fonction de répartition :",
                "hidden": true,
                "labelSize": "1.3",
                "labelOrientation": "above"
            },
            {
                "type": "expression",
                "id": "131",
                "color": "#000000",
                "latex": "\\left(18,1.3\\right)",
                "showLabel": true,
                "label": "`F(x)=\\int_{-\\infty}^x f(t) dt`",
                "hidden": true,
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "122",
                "color": "#c74440",
                "latex": "\\left(a,0\\right)",
                "showLabel": true,
                "label": "${a}",
                "pointStyle": "OPEN",
                "dragMode": "NONE",
                "labelSize": "1",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "123",
                "color": "#c74440",
                "latex": "\\left(b,0\\right)",
                "showLabel": true,
                "label": "${b}",
                "pointStyle": "OPEN",
                "dragMode": "NONE",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "124",
                "color": "#000000",
                "latex": "\\left(14,\\frac{h_{1}}{h_{2}}\\right)",
                "showLabel": true,
                "label": "`\\frac{${h_{1}}}{${h_{2}}}`",
                "labelSize": "1",
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "128",
                "color": "#6042a6",
                "latex": "h_{1}=\\operatorname{round}\\left(0-a,2\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "129",
                "color": "#000000",
                "latex": "h_{2}=\\operatorname{round}\\left(b-a,2\\right)"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '200px';
calculator_unif.resize();

calculator_unif.setMathBounds({
left: -1,
right: 6.5,
bottom: -2,
top: 6.2});

calculator_unif.setState(graphStateuniform);
calculator_unif.setDefaultState(graphStateuniform);
