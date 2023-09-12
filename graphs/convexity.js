var elt = document.getElementById('calculator-convexity');
var calculator_convexity = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStateconvexity = {
    "version": 10,
    "randomSeed": "963f5a0a94a1fb886a9ea8cec167fed2",
    "graph": {
        "viewport": {
            "xmin": -4.859380242744083,
            "ymin": -3.729727949613534,
            "xmax": 6.048506209998851,
            "ymax": 6.183889212885149
        },
        "showGrid": false
    },
    "expressions": {
        "list": [
            {
                "type": "text",
                "id": "51",
                "text": "Si f(x) est convexe, on peut choisir α comme on veut entre ]0, 1[, la ligne violette qui représente f(α a + (1-α) b) sera toujours sous la ligne rouge qui représente α f(a) + (1-α) f(b). On peut également choisir n'importe quel couple (a,b) de réels tels que a < b, la ligne rouge restera supérieure à la ligne violette."
            },
            {
                "type": "expression",
                "id": "43",
                "color": "#c74440",
                "latex": "a=-1.05",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "-3",
                    "max": "1",
                    "step": "0.001"
                }
            },
            {
                "type": "expression",
                "id": "46",
                "color": "#6042a6",
                "latex": "b=1.89",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "1.1",
                    "max": "3",
                    "step": "0.001"
                }
            },
            {
                "type": "expression",
                "id": "25",
                "color": "#388c46",
                "latex": "\\alpha\\ =0.721",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "playDirection": -1,
                    "isPlaying": true,
                    "min": "0.001",
                    "max": "0.999",
                    "step": "0.01"
                }
            },
            {
                "type": "text",
                "id": "52",
                "text": "On peut essayer d'autres fonctions que la fonction carrée en remplaçant f(x) ci-dessous. La fonction exponentielle est convexe par exemple. Et la fonction sinus ne l'est pas. Constatez le graphiquement en changeant f(x)."
            },
            {
                "type": "expression",
                "id": "1",
                "color": "#000000",
                "latex": "f\\left(x\\right)=x^{2}"
            },
            {
                "type": "text",
                "id": "53",
                "text": "Enfin, la fonction - x^2 est concave. dans ce cas, c'est la ligne violette qui est toujours au-dessus de la ligne rouge. On peut le constater graphiquement en changeant la fonction f(x) et en mettant un signe \"moins\" devant le x^2."
            },
            {
                "type": "text",
                "id": "54",
                "text": " "
            },
            {
                "type": "expression",
                "id": "20",
                "color": "#c74440",
                "latex": "\\left(0,\\ \\alpha f\\left(a\\right)+\\left(1-\\alpha\\right)f\\left(b\\right)\\right)",
                "showLabel": true,
                "label": "α f(a) + (1-α) f(b)",
                "dragMode": "NONE",
                "labelOrientation": "above_right",
                "pointOpacity": "2"
            },
            {
                "type": "expression",
                "id": "19",
                "color": "#6042a6",
                "latex": "\\left(0,f\\left(\\alpha\\cdot a\\ +\\ \\left(1-\\alpha\\right)b\\right)\\right)",
                "showLabel": true,
                "label": "f(α a + (1-α) b)",
                "dragMode": "NONE",
                "labelOrientation": "above_right",
                "pointOpacity": "2"
            },
            {
                "type": "expression",
                "id": "26",
                "color": "#6042a6",
                "latex": "\\left(\\alpha\\cdot a\\ +\\ \\left(1-\\alpha\\right)b,\\ f\\left(\\alpha\\cdot a\\ +\\ \\left(1-\\alpha\\right)b\\right)\\right)",
                "hidden": true,
                "dragMode": "NONE"
            },
            {
                "type": "expression",
                "id": "49",
                "color": "#6042a6",
                "latex": "x\\ =\\ \\alpha\\ a\\ +\\ \\left(1-\\alpha\\right)b",
                "lines": true,
                "lineStyle": "DASHED",
                "lineWidth": "1"
            },
            {
                "type": "expression",
                "id": "18",
                "color": "#6042a6",
                "latex": "y\\ =\\ f\\left(\\alpha\\ a\\ +\\ \\left(1-\\alpha\\right)b\\right)",
                "lineStyle": "DASHED",
                "lineWidth": "1"
            },
            {
                "type": "expression",
                "id": "28",
                "color": "#c74440",
                "latex": "y\\ =\\ \\alpha f\\left(a\\right)+\\left(1-\\alpha\\right)f\\left(b\\right)",
                "lineStyle": "DOTTED",
                "lineWidth": "1"
            },
            {
                "type": "expression",
                "id": "29",
                "color": "#6042a6",
                "latex": "x=\\alpha a+\\left(1-\\alpha\\right)b",
                "hidden": true,
                "lineStyle": "DASHED",
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "30",
                "color": "#c74440",
                "latex": "\\left(0,\\ f\\left(a\\right)\\right)",
                "showLabel": true,
                "label": "f(a)",
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "31",
                "color": "#c74440",
                "latex": "\\left(0,f\\left(b\\right)\\right)",
                "showLabel": true,
                "label": "f(b)",
                "labelOrientation": "left"
            },
            {
                "type": "expression",
                "id": "32",
                "color": "#000000",
                "latex": "f\\left(a\\right)"
            },
            {
                "type": "expression",
                "id": "33",
                "color": "#c74440",
                "latex": "f\\left(b\\right)"
            },
            {
                "type": "expression",
                "id": "34",
                "color": "#2d70b3",
                "latex": "\\alpha f\\left(a\\right)\\ +\\ \\left(1-\\alpha\\right)f\\left(b\\right)"
            },
            {
                "type": "expression",
                "id": "41",
                "color": "#c74440",
                "latex": "\\left(b,0\\right)",
                "showLabel": true,
                "label": "b",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "35",
                "color": "#c74440",
                "latex": "\\left(a,0\\right)",
                "showLabel": true,
                "label": "a",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "45",
                "color": "#6042a6",
                "latex": "\\left(\\alpha\\ a\\ +\\ \\left(1-\\alpha\\right)b,\\ 0\\right)",
                "showLabel": true,
                "label": "α a + (1-α) b",
                "dragMode": "NONE",
                "labelSize": "1",
                "labelOrientation": "below"
            },
            {
                "type": "expression",
                "id": "48",
                "color": "#000000",
                "latex": "\\left(-3,3\\right)",
                "showLabel": true,
                "label": "`\\alpha=${\\alpha}`",
                "hidden": true,
                "labelSize": "1.5"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '200px';
calculator_convexity.resize();

calculator_convexity.setState(graphStateconvexity);
calculator_convexity.setDefaultState(graphStateconvexity);
