var elt = document.getElementById('calculator-square');
var calculator_square = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStatesquare = {
    "version": 10,
    "randomSeed": "1cc47d86c05ecd8a25da86ddae2b6227",
    "graph": {
        "viewport": {
            "xmin": -6.608599687284948,
            "ymin": -3.5986984993031506,
            "xmax": 7.606574229799761,
            "ymax": 9.320742193708229
        },
        "showGrid": false
    },
    "expressions": {
        "list": [
            {
                "type": "expression",
                "id": "26",
                "color": "#000000",
                "latex": "d\\left(x\\right)=f'\\left(a\\right)\\left(x-a\\right)+f\\left(a\\right)",
                "lineStyle": "DOTTED"
            },
            {
                "type": "expression",
                "id": "24",
                "color": "#c74440",
                "latex": "2a\\cdot\\left(x-a\\right)\\ +\\ a^{2}",
                "hidden": true,
                "lineStyle": "DOTTED"
            },
            {
                "type": "expression",
                "id": "129",
                "color": "#6042a6",
                "latex": "p=f'\\left(a\\right)"
            },
            {
                "type": "expression",
                "id": "117",
                "color": "#2d70b3",
                "latex": "t=3.544",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 80000,
                    "loopMode": "LOOP_FORWARD",
                    "isPlaying": true,
                    "min": "-4",
                    "max": "45"
                }
            },
            {
                "type": "expression",
                "id": "25",
                "color": "#2d70b3",
                "latex": "a=\\left\\{t\\le-2:t,\\ -2<t\\le14:-2,t\\le15:\\ t-16,15<t\\le40:\\ -1,\\ t-41\\right\\}",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 11428.57142857143,
                    "loopMode": "LOOP_FORWARD",
                    "min": "-5",
                    "max": "5"
                }
            },
            {
                "type": "expression",
                "id": "124",
                "color": "#6042a6",
                "latex": "\\operatorname{polygon}\\left(\\left(0,\\ 1\\left\\{15<t\\le25\\right\\}\\right),\\ \\left(-1,1\\left\\{15<t\\le25\\right\\}\\right),\\left(-1,\\ 0\\left\\{15<t\\le25\\right\\}\\right),\\left(0,0\\left\\{15<t\\le25\\right\\}\\right)\\right)",
                "fillOpacity": "0.2"
            },
            {
                "type": "expression",
                "id": "127",
                "color": "#6042a6",
                "latex": "\\operatorname{polygon}\\left(\\left(-2,\\ 0\\left\\{25<t\\le40\\right\\}\\right),\\ \\left(-2,d\\left(-2\\right)\\left\\{25<t\\le40\\right\\}\\right),\\ \\left(-0.5,0\\left\\{25<t\\le40\\right\\}\\right)\\right)",
                "fillOpacity": "0.2"
            },
            {
                "type": "expression",
                "id": "128",
                "color": "#6042a6",
                "latex": "\\left(-4,2\\left\\{25<t\\le40\\right\\}\\right)",
                "showLabel": true,
                "label": "pente `=${p}`",
                "hidden": true,
                "labelSize": "1.2"
            },
            {
                "type": "expression",
                "id": "125",
                "color": "#000000",
                "latex": "\\left(-1,0\\left\\{15<t\\le25\\right\\}\\right)",
                "showLabel": true,
                "label": "`x=-1`",
                "labelSize": "1.2",
                "labelOrientation": "below_left"
            },
            {
                "type": "expression",
                "id": "126",
                "color": "#000000",
                "latex": "\\left(0,1\\left\\{15<t\\le25\\right\\}\\right)",
                "showLabel": true,
                "label": "`f(x)=1`",
                "labelSize": "1.2",
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "123",
                "color": "#2d70b3",
                "latex": "\\left(-4,2\\left\\{8<t\\le14\\right\\}\\right)",
                "showLabel": true,
                "label": "pente `= ${p}`",
                "hidden": true,
                "dragMode": "XY",
                "labelSize": "1.2"
            },
            {
                "type": "expression",
                "id": "118",
                "color": "#2d70b3",
                "latex": "\\operatorname{polygon}\\left(\\left(-2,\\ d\\left(-2\\right)\\left\\{8<t\\le14\\right\\}\\right),\\ \\left(-1,d\\left(-1\\right)\\left\\{8<t\\le14\\right\\}\\right),\\ \\left(-2,0\\left\\{8<t\\le14\\right\\}\\right)\\right)",
                "fillOpacity": "0.2"
            },
            {
                "type": "expression",
                "id": "116",
                "color": "#2d70b3",
                "latex": "\\operatorname{polygon}\\left(\\left(-2,\\ 0\\right),\\ \\left(-2,4\\right)\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "119",
                "color": "#2d70b3",
                "latex": "\\operatorname{polygon}\\left(\\left(0,\\ 4\\left\\{-2<t\\le8\\right\\}\\right),\\ \\left(-2,4\\left\\{-2<t\\le8\\right\\}\\right),\\left(-2,\\ 0\\left\\{-2<t\\le8\\right\\}\\right),\\left(0,0\\left\\{-2<t\\le8\\right\\}\\right)\\right)",
                "fillOpacity": "0.1",
                "lineWidth": "3"
            },
            {
                "type": "expression",
                "id": "120",
                "color": "#000000",
                "latex": "\\left(-2,0\\left\\{-2<t\\le8\\right\\}\\right)",
                "showLabel": true,
                "label": "`x=-2`",
                "dragMode": "X",
                "labelSize": "1.4",
                "labelOrientation": "below_left"
            },
            {
                "type": "expression",
                "id": "121",
                "color": "#000000",
                "latex": "\\left(0,4\\left\\{-2<t\\le8\\right\\}\\right)",
                "showLabel": true,
                "label": "`f(x)=4`",
                "dragMode": "XY",
                "labelSize": "1.2",
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "1",
                "color": "#000000",
                "latex": "f\\left(x\\right)=x^{2}"
            },
            {
                "type": "expression",
                "id": "14",
                "color": "#2d70b3",
                "latex": "2\\cdot\\left(-2\\right)\\cdot\\left(x-\\left(-2\\right)\\right)\\ +\\left(-2\\right)^{2}\\left\\{a\\ge-2\\right\\}",
                "lineStyle": "DASHED"
            },
            {
                "type": "expression",
                "id": "12",
                "color": "#6042a6",
                "latex": "2\\cdot\\left(-1\\right)\\cdot\\left(x-\\left(-1\\right)\\right)\\ +\\ \\left(-1\\right)^{2}\\left\\{a\\ge-1\\right\\}",
                "lineStyle": "DASHED"
            },
            {
                "type": "expression",
                "id": "10",
                "color": "#c74440",
                "latex": "2\\cdot\\left(0\\right)\\cdot\\left(x-\\left(0\\right)\\right)\\ +\\ \\left(0\\right)^{2}\\left\\{a\\ge0\\right\\}",
                "lineStyle": "DASHED"
            },
            {
                "type": "expression",
                "id": "2",
                "color": "#fa7e19",
                "latex": "2\\cdot\\left(1\\right)\\cdot\\left(x-\\left(1\\right)\\right)\\ +\\ \\left(1\\right)^{2}\\left\\{a\\ge1\\right\\}",
                "lineStyle": "DASHED"
            },
            {
                "type": "expression",
                "id": "3",
                "color": "#388c46",
                "latex": "2\\cdot\\left(2\\right)\\cdot\\left(x-\\left(2\\right)\\right)\\ +\\ \\left(2\\right)^{2}\\left\\{a\\ge2\\right\\}",
                "lineStyle": "DASHED"
            },
            {
                "type": "expression",
                "id": "4",
                "color": "#6042a6"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '300px';
calculator_square.resize();

calculator_square.setState(graphStatesquare);
calculator_square.setDefaultState(graphStatesquare);
