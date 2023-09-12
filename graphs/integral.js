var elt = document.getElementById('calculator-integral');
var calculator_integral = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStateintegral = {
    "version": 10,
    "randomSeed": "14dc1f4bcfedc8fb4130ed4cee98049c",
    "graph": {
        "viewport": {
            "xmin": -0.42413186708014377,
            "ymin": -1.3676897953533609,
            "xmax": 5.216,
            "ymax": 3.7126222328666754
        },
        "showGrid": false
    },
    "expressions": {
        "list": [
            {
                "type": "expression",
                "id": "2",
                "color": "#2d70b3",
                "latex": "f\\left(x\\right)=\\sin\\left(x+1\\right)^{3}+1.2"
            },
            {
                "type": "expression",
                "id": "11",
                "color": "#c74440",
                "latex": "n=55",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 26666.666666666668,
                    "loopMode": "LOOP_FORWARD",
                    "isPlaying": true,
                    "min": "0",
                    "max": "100",
                    "step": "1"
                }
            },
            {
                "type": "expression",
                "id": "3",
                "color": "#388c46",
                "latex": "0\\le y\\le f\\left(a+\\frac{\\left(b-a\\right)\\left(k_{1}\\right)}{n}\\right)\\left\\{\\frac{\\left(b-a\\right)\\left(k_{1}-1\\right)}{n}+a\\ <x<\\frac{\\left(b-a\\right)\\left(k_{1}\\right)}{n}+a\\ \\right\\}"
            },
            {
                "type": "expression",
                "id": "32",
                "color": "#2d70b3",
                "latex": "s=\\operatorname{round}\\left(\\sum_{k=1}^{n}f\\left(a+\\frac{\\left(b-a\\right)\\left(k\\right)}{n}\\right)\\cdot\\frac{\\left(b-a\\right)}{n},2\\right)"
            },
            {
                "type": "expression",
                "id": "36",
                "color": "#c74440",
                "latex": "i=\\operatorname{round}\\left(\\int_{a}^{b}f\\left(x\\right)dx,2\\right)"
            },
            {
                "type": "expression",
                "id": "28",
                "color": "#388c46",
                "latex": "k_{1}=\\left[1...n\\right]",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "27",
                "color": "#2d70b3",
                "latex": "a=0",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "8",
                "color": "#388c46",
                "latex": "b=3"
            },
            {
                "type": "expression",
                "id": "4",
                "color": "#000000",
                "latex": "\\left(1.5,2.5\\right)",
                "showLabel": true,
                "label": "`\\int_0^3f(x)dx\\approx\t${i}`",
                "labelOrientation": "right",
                "pointOpacity": "0.9",
                "pointSize": "0"
            },
            {
                "type": "expression",
                "id": "10",
                "color": "#000000",
                "latex": "\\left(1.5,2\\right)",
                "showLabel": true,
                "label": "Nombre de rectangles : `${n}`",
                "labelOrientation": "above_right",
                "pointSize": "0"
            },
            {
                "type": "expression",
                "id": "130",
                "color": "#388c46",
                "latex": "\\left(1.5,1.9\\right)",
                "showLabel": true,
                "label": "Somme des aires des rectangles `\\approx\t${s}`",
                "labelOrientation": "below_right",
                "pointSize": "0"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '300px';
calculator_integral.resize();

calculator_integral.setState(graphStateintegral);
calculator_integral.setDefaultState(graphStateintegral);
