var elt = document.getElementById('calculator-student');
var calculator_student = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStatestudent = {
    "version": 10,
    "randomSeed": "358af5e99586d994816f4651df8df552",
    "graph": {
        "viewport": {
            "xmin": -5.0782501794731,
            "ymin": -0.3000890312196982,
            "xmax": 5.187995893696721,
            "ymax": 0.5932045210090184
        },
        "showGrid": false,
        "squareAxes": false
    },
    "expressions": {
        "list": [
            {
                "type": "text",
                "id": "54",
                "text": "Dans une première étape, on trace en violet la distribution de Student avec un degré de liberté = n - k = 10 - 2 = 8"
            },
            {
                "type": "expression",
                "id": "50",
                "color": "#c74440",
                "latex": "d=\\operatorname{tdist}\\left(8\\right)",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "2",
                "color": "#6042a6",
                "latex": "f\\left(x\\right)=d.\\operatorname{pdf}\\left(x\\right)",
                "parametricDomain": {
                    "min": "0",
                    "max": "1"
                },
                "lineWidth": "3",
                "domain": {
                    "min": "0",
                    "max": "1"
                }
            },
            {
                "type": "text",
                "id": "56",
                "text": "En faisant le tirage de nos données, on fait un tirage de t = beta chapeau / standard error (beta chapeau)."
            },
            {
                "type": "expression",
                "id": "5",
                "color": "#fa7e19",
                "latex": "t=-1.896",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "animationPeriod": 8000,
                    "loopMode": "LOOP_FORWARD",
                    "min": "-6",
                    "max": "6"
                },
                "parametricDomain": {
                    "min": "0",
                    "max": "1"
                },
                "domain": {
                    "min": "0",
                    "max": "1"
                }
            },
            {
                "type": "text",
                "id": "57",
                "text": "La zone de rejet pour un test de significativité à 5% correspond à toutes les valeurs en abscisses les plus éloignées de 0 telles que l'aire rouge totale = 5%. On peut également faire apparaître les autres zones de rejet en cliquant sur les disques à gauche."
            },
            {
                "type": "expression",
                "id": "3",
                "color": "#fa7e19",
                "latex": "0\\le y\\le f\\left(x\\right)\\left\\{\\operatorname{abs}\\left(x\\right)>c_{95}\\right\\}",
                "parametricDomain": {
                    "min": "0",
                    "max": "1"
                },
                "lineOpacity": "1",
                "lineWidth": "3.5",
                "domain": {
                    "min": "0",
                    "max": "1"
                }
            },
            {
                "type": "expression",
                "id": "71",
                "color": "#c74440",
                "latex": "0\\le y\\le f\\left(x\\right)\\left\\{\\operatorname{abs}\\left(x\\right)>c_{90}\\right\\}",
                "hidden": true,
                "fillOpacity": "0.2"
            },
            {
                "type": "expression",
                "id": "72",
                "color": "#388c46",
                "latex": "0\\le y\\le f\\left(x\\right)\\left\\{\\operatorname{abs}\\left(x\\right)>c_{99}\\right\\}",
                "hidden": true,
                "fillOpacity": "0.5",
                "lineWidth": "5"
            },
            {
                "type": "text",
                "id": "69",
                "text": "On cherche généralement à savoir quel est le seuil le plus petit auquel on peut rejeter l'hypothèse nulle. C'est la p-value. Il s'agit donc de l'aire la plus petite possible qui contient la valeur de la statistique t. L'aire est représentée en grisé sur le graphique, et la valeur associée est calculée ci-dessous."
            },
            {
                "type": "expression",
                "id": "70",
                "color": "#000000",
                "latex": "0\\le y\\le f\\left(x\\right)\\left(\\left\\{\\operatorname{abs}\\left(x\\right)>\\operatorname{abs}\\left(t\\right)\\right\\}\\right)",
                "fillOpacity": "0.1"
            },
            {
                "type": "expression",
                "id": "32",
                "color": "#c74440",
                "latex": "p_{value}=\\operatorname{round}\\left(\\int_{-\\infty}^{-\\operatorname{abs}\\left(t\\right)}f\\left(x\\right)dx\\ +\\ \\int_{\\operatorname{abs}\\left(t\\right)}^{+\\infty}f\\left(x\\right)dx,5\\right)"
            },
            {
                "type": "text",
                "id": "76",
                "text": " Exercice : retrouver les valeurs critiques pour des tests à seuil 1% / 5% / 10% sur la table de Student."
            },
            {
                "type": "text",
                "id": "77",
                "text": " "
            },
            {
                "type": "text",
                "id": "73",
                "text": "** Quelques éléments supplémentaires sur le graphique **"
            },
            {
                "type": "text",
                "id": "52",
                "text": "Faisons apparaître sur le graphique les valeurs de la statistique t pour beta 0 chapeau et beta 1 chapeau."
            },
            {
                "type": "expression",
                "id": "41",
                "color": "#000000",
                "latex": "x=2.511",
                "hidden": true,
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "51",
                "color": "#000000",
                "latex": "x=1.896"
            },
            {
                "type": "text",
                "id": "53",
                "text": "Faisons apparaître les valeurs critiques pour les seuils 10%, 5% et 1%"
            },
            {
                "type": "expression",
                "id": "62",
                "color": "#000000",
                "latex": "c_{90}=1.860",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "1.860",
                    "max": "1.860"
                }
            },
            {
                "type": "expression",
                "id": "63",
                "color": "#c74440",
                "latex": "c_{95}\\ =\\ 2.306",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "2.306",
                    "max": "2.306"
                }
            },
            {
                "type": "expression",
                "id": "64",
                "color": "#2d70b3",
                "latex": "c_{99}\\ =3.355",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "3.355",
                    "max": "3.355"
                }
            },
            {
                "type": "expression",
                "id": "49",
                "color": "#c74440",
                "latex": "x=c_{90}",
                "lineStyle": "DOTTED",
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "66",
                "color": "#c74440",
                "latex": "\\left(c_{90},0\\right)",
                "showLabel": true,
                "label": "c90",
                "labelSize": "1.5",
                "labelOrientation": "below",
                "pointOpacity": "2",
                "labelOrientation": "below_left"
            },
            {
                "type": "expression",
                "id": "45",
                "color": "#fa7e19",
                "latex": "x=c_{95}",
                "lineStyle": "DOTTED"
            },
            {
                "type": "expression",
                "id": "67",
                "color": "#fa7e19",
                "latex": "\\left(c_{95},\\ 0\\right)",
                "showLabel": true,
                "label": "c95",
                "labelSize": "1.5",
                "labelOrientation": "below",
                "pointOpacity": "1.5"
            },
            {
                "type": "expression",
                "id": "65",
                "color": "#388c46",
                "latex": "x=c_{99}",
                "lineStyle": "DOTTED"
            },
            {
                "type": "expression",
                "id": "68",
                "color": "#388c46",
                "latex": "\\left(c_{99},\\ 0\\right)",
                "showLabel": true,
                "label": "c99",
                "labelSize": "1.5",
                "labelOrientation": "below",
                "pointOpacity": "1.5"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '200px';
calculator_student.resize();

calculator_student.setState(graphStatestudent);
calculator_student.setDefaultState(graphStatestudent);
