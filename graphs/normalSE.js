var elt = document.getElementById('calculator-normalSE');
var calculator_normalSE = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStatenormalSE = {
    "version": 10,
    "randomSeed": "0bbb19dc4992bbd08b4b0960103ec2c7",
    "graph": {
        "viewport": {
            "xmin": -3.7183173260876305,
            "ymin": -2.4110911713922603,
            "xmax": 4.337245977170696,
            "ymax": 4.9101961341512
        },
        "showGrid": false
    },
    "expressions": {
        "list": [
            {
                "type": "expression",
                "id": "41",
                "color": "#000000",
                "latex": "a=1.5625",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 80000,
                    "loopMode": "LOOP_FORWARD",
                    "isPlaying": true,
                    "min": "m-2",
                    "max": "m+2"
                }
            },
            {
                "type": "expression",
                "id": "5",
                "color": "#000000",
                "latex": "m\\ =2"
            },
            {
                "type": "expression",
                "id": "6",
                "color": "#c74440",
                "latex": "s=0.3"
            },
            {
                "type": "text",
                "id": "49",
                "text": "Pente de la courbe rouge (la densité) :"
            },
            {
                "type": "expression",
                "id": "47",
                "color": "#c74440",
                "latex": "d=\\operatorname{round}\\left(f'\\left(a\\right),3\\right)"
            },
            {
                "type": "text",
                "id": "8",
                "text": "attention, avec ce logiciel, on note N(moyenne, écart-type), et non N(moyenne, variance)"
            },
            {
                "type": "expression",
                "id": "1",
                "color": "#c74440",
                "latex": "N=\\operatorname{normaldist}\\left(m,s\\right)",
                "hidden": true,
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "9",
                "color": "#c74440",
                "latex": "f\\left(x\\right)=N.\\operatorname{pdf}\\left(x\\right)",
                "lineWidth": "3"
            },
            {
                "type": "expression",
                "id": "4",
                "color": "#000000",
                "latex": "x=m-s",
                "hidden": true,
                "lineStyle": "DOTTED",
                "labelSize": "1",
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "74",
                "color": "#c74440",
                "latex": "\\left(a,f\\left(a\\right)\\right)",
                "dragMode": "X"
            },
            {
                "type": "expression",
                "id": "62",
                "color": "#fa7e19",
                "latex": "\\operatorname{polygon}\\left(G,H\\right)",
                "lineStyle": "DOTTED",
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "63",
                "color": "#2d70b3",
                "latex": "G\\ =\\left(m-s,0\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "64",
                "color": "#388c46",
                "latex": "H\\ =\\left(m-s,1.4\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "65",
                "color": "#fa7e19",
                "latex": "\\operatorname{polygon}\\left(I,J\\right)",
                "lineStyle": "DOTTED",
                "fill": true,
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "71",
                "color": "#000000",
                "latex": "\\left(0.3,2\\right)",
                "showLabel": true,
                "label": "Densité de la loi `N\\ (m, \\ \\sigma^2)`",
                "hidden": true,
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "73",
                "color": "#000000",
                "latex": "\\left(0.3,1.6\\right)",
                "showLabel": true,
                "label": "ici `m=${m}` et `\\sigma=${s}`",
                "hidden": true,
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "66",
                "color": "#000000",
                "latex": "I\\ =\\left(m+s,0\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "67",
                "color": "#c74440",
                "latex": "J\\ =\\left(m+s,1.4\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "70",
                "color": "#2d70b3",
                "latex": "\\operatorname{polygon}\\left(\\left(m,\\ f\\left(m+s\\right)\\right),\\left(m+s,\\ f\\left(m+s\\right)\\right)\\right)",
                "lines": true,
                "lineWidth": "1.8"
            },
            {
                "type": "expression",
                "id": "68",
                "color": "#2d70b3",
                "latex": "K=\\left(\\frac{s}{2}+m,0.9\\right)",
                "showLabel": true,
                "label": "`\\sigma`",
                "hidden": true,
                "labelSize": "1.5",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "2",
                "color": "#2d70b3",
                "latex": "f'\\left(x\\right)",
                "hidden": true,
                "lineStyle": "DASHED"
            },
            {
                "type": "expression",
                "id": "10",
                "color": "#6042a6",
                "latex": "g\\left(x\\right)=f''\\left(a\\right)\\left(x-a\\right)+f'\\left(a\\right)",
                "hidden": true,
                "lineWidth": "4"
            },
            {
                "type": "expression",
                "id": "32",
                "color": "#c74440",
                "latex": "A=\\left(a-\\alpha,\\ g\\left(a-\\alpha\\right)\\right)",
                "hidden": true,
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "35",
                "color": "#c74440",
                "latex": "B=\\left(a+\\alpha,\\ g\\left(a+\\alpha\\right)\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "36",
                "color": "#2d70b3",
                "latex": "\\operatorname{polygon}\\left(A,B\\right)",
                "hidden": true,
                "fill": true,
                "lineWidth": "3"
            },
            {
                "type": "expression",
                "id": "33",
                "color": "#2d70b3",
                "latex": "\\alpha=\\sqrt{\\frac{3}{4+4\\cdot f''\\left(a\\right)^{2}}}"
            },
            {
                "type": "expression",
                "id": "44",
                "color": "#388c46",
                "latex": "g_{2}\\left(x\\right)=f'\\left(a\\right)\\left(x-a\\right)+f\\left(a\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "27",
                "color": "#c74440",
                "latex": "C=\\left(a-\\beta,\\ g_{2}\\left(a-\\beta\\right)\\right)",
                "hidden": true,
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "42",
                "color": "#c74440",
                "latex": "D=\\left(a+\\beta,\\ g_{2}\\left(a+\\beta\\right)\\right)",
                "hidden": true,
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "43",
                "color": "#c74440",
                "latex": "\\operatorname{polygon}\\left(C,D\\right)",
                "lineWidth": "3"
            },
            {
                "type": "expression",
                "id": "40",
                "color": "#6042a6",
                "latex": "\\beta=\\sqrt{\\frac{2}{4+4\\cdot f'\\left(a\\right)^{2}}}"
            },
            {
                "type": "expression",
                "id": "53",
                "color": "#c74440",
                "latex": "b=1+d\\cdot\\left(-o\\right)"
            },
            {
                "type": "expression",
                "id": "56",
                "color": "#6042a6",
                "latex": "o=-1.5\\cdot\\left\\{f'\\left(a\\right)>0:1,0\\right\\}-1.5",
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "45",
                "color": "#000000",
                "latex": "E=\\left(o-\\frac{\\beta}{2},\\ \\left(o-\\frac{\\beta}{2}\\right)\\cdot f'\\left(a\\right)+b\\right)",
                "label": "Tangente à la courbe rouge:",
                "hidden": true,
                "labelSize": "1.5"
            },
            {
                "type": "expression",
                "id": "54",
                "color": "#2d70b3",
                "latex": "F=\\left(o+\\frac{\\beta}{2},\\ \\left(o+\\frac{\\beta}{2}\\right)\\cdot f'\\left(a\\right)+b\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "55",
                "color": "#c74440",
                "latex": "\\operatorname{polygon}\\left(E,F\\right)",
                "lineWidth": "3"
            },
            {
                "type": "expression",
                "id": "60",
                "color": "#000000",
                "latex": "\\left(-3,2\\right)",
                "showLabel": true,
                "label": "f '  positive",
                "hidden": true,
                "labelSize": "1"
            },
            {
                "type": "expression",
                "id": "61",
                "color": "#000000",
                "latex": "\\left(-1.5,2\\right)",
                "showLabel": true,
                "label": "f '  négative",
                "hidden": true
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '200px';
calculator_normalSE.resize();

calculator_normalSE.setState(graphStatenormalSE);
calculator_normalSE.setDefaultState(graphStatenormalSE);
