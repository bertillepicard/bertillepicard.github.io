var elt = document.getElementById('calculator-fisher');
var calculator_fisher = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
var graphStatefisher = {
    "version": 10,
    "randomSeed": "358af5e99586d994816f4651df8df552",
    "graph": {
        "viewport": {
            "xmin": -1.4088649447941344,
            "ymin": -3.0193919173732384,
            "xmax": 8.970080324775449,
            "ymax": 6.397797944683055
        },
        "showGrid": false
    },
    "expressions": {
        "list": [
            {
                "type": "text",
                "id": "54",
                "text": "Dans une première étape, on trace en violet la distribution de Fisher de degrés de liberté (p, n-k). Slide 29 du cours du 28 septembre : p représente le nombre de lignes de la matrice R, ici on a une restriction alpha + beta =1. n-k c'est le nombre d'observations - le nombre de paramètres à estimer (ou encore nombre de variable + 1 en comptant la constante)."
            },
            {
                "type": "expression",
                "id": "82",
                "color": "#388c46",
                "latex": "d_{1}=p",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "83",
                "color": "#6042a6",
                "latex": "d_{2}=n-k"
            },
            {
                "type": "expression",
                "id": "104",
                "color": "#000000",
                "latex": "p=1"
            },
            {
                "type": "expression",
                "id": "86",
                "color": "#2d70b3",
                "latex": "n=80",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "91",
                "color": "#2d70b3",
                "latex": "k=3"
            },
            {
                "type": "text",
                "id": "100",
                "text": "Pour ces degrés de libertés, on trace la densité de la loi de Fisher. Elle a une forme compliquée qui n'est pas à connaître."
            },
            {
                "type": "expression",
                "id": "2",
                "color": "#6042a6",
                "latex": "f\\left(x\\right)=\\frac{\\left(\\frac{d_{1}\\cdot x}{d_{1}\\cdot x+d_{2}}\\right)^{\\frac{d_{1}}{2}}\\cdot\\left(1-\\frac{d_{1}\\cdot x}{d_{1}\\cdot x+d_{2}}\\right)^{\\frac{d_{2}}{2}}}{x\\cdot B\\left(\\frac{d_{1}}{2},\\frac{d_{2}}{2}\\right)}\\left\\{x>0\\right\\}",
                "parametricDomain": {
                    "min": "0",
                    "max": "1"
                },
                "lineWidth": "4",
                "domain": {
                    "min": "0",
                    "max": "1"
                }
            },
            {
                "type": "expression",
                "id": "84",
                "color": "#000000",
                "latex": "B\\left(x,y\\right)=\\int_{0}^{1}t^{\\left(x-1\\right)}\\cdot\\left(1-t\\right)^{\\left(y-1\\right)}dt"
            },
            {
                "type": "text",
                "id": "56",
                "text": "En faisant le tirage de nos données, on fait un tirage de F *. F* est calculé selon la formule (sur le graphe) à l'aide des somme des carrés des résidus dans les modèles contraint et non contraint, de n-k et de p. Pour cet exercice, on trouve F = 6.976"
            },
            {
                "type": "expression",
                "id": "101",
                "color": "#2d70b3",
                "latex": "S_{C}=1.147"
            },
            {
                "type": "expression",
                "id": "102",
                "color": "#388c46",
                "latex": "S_{S}=1.138"
            },
            {
                "type": "expression",
                "id": "5",
                "color": "#fa7e19",
                "latex": "F=\\frac{S_{C}-S_{S}}{S_{S}}\\cdot\\frac{n-k}{p}",
                "hidden": true,
                "slider": {
                    "hardMin": true,
                    "animationPeriod": 8000,
                    "loopMode": "LOOP_FORWARD",
                    "min": "-6"
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
                "id": "107",
                "text": "Les aires ci-dessous correspondent aux aires sous la courbe à partir des seuils critiques (5%, 10%, 1%). On a fait apparaître l'aire à partir du seuil 5% en orange."
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
                "lineWidth": "5",
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
                "fillOpacity": "0.2",
                "lineWidth": "5"
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
                "type": "expression",
                "id": "70",
                "color": "#000000",
                "latex": "0\\le y\\le f\\left(x\\right)\\left(\\left\\{\\operatorname{abs}\\left(x\\right)>\\operatorname{abs}\\left(F\\right)\\right\\}\\right)",
                "fillOpacity": "0.1"
            },
            {
                "type": "text",
                "id": "76",
                "text": " Exercice : retrouver les valeurs critiques pour des tests à seuil 1% / 5% / 10% sur la table de Fisher."
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
                "id": "112",
                "text": "On fait apparaître sur le graphique la statistique F"
            },
            {
                "type": "expression",
                "id": "51",
                "color": "#000000",
                "latex": "x=F"
            },
            {
                "type": "expression",
                "id": "113",
                "color": "#000000",
                "latex": "\\left(F,0\\right)",
                "showLabel": true,
                "label": "f*",
                "labelSize": "1.5",
                "labelOrientation": "below_right"
            },
            {
                "type": "text",
                "id": "53",
                "text": "Faisons apparaître les valeurs critiques pour les seuils 10%, 5% et 1%. On peut les lire dans une table de Fisher (ou au moins les encadrer) ou les calculer sur internet, par exemple : https://www.socscistatistics.com/tests/criticalvalues/default.aspx"
            },
            {
                "type": "expression",
                "id": "117",
                "color": "#2d70b3",
                "latex": "g\\left(y\\right)=1-\\int_{0}^{y}f\\left(x\\right)dx",
                "hidden": true
            },
            {
                "type": "expression",
                "id": "120",
                "color": "#000000",
                "latex": "\\operatorname{round}\\left(g\\left(c_{99}\\right),2\\right)"
            },
            {
                "type": "expression",
                "id": "121",
                "color": "#c74440",
                "latex": "\\operatorname{round}\\left(g\\left(c_{95}\\right),2\\right)"
            },
            {
                "type": "expression",
                "id": "122",
                "color": "#2d70b3",
                "latex": "\\operatorname{round}\\left(g\\left(c_{90}\\right),2\\right)"
            },
            {
                "type": "expression",
                "id": "62",
                "color": "#000000",
                "latex": "c_{90}=2.772",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "2.772",
                    "max": "2.772"
                }
            },
            {
                "type": "expression",
                "id": "63",
                "color": "#c74440",
                "latex": "c_{95}\\ =\\ 3.965",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "3.965",
                    "max": "3.965"
                }
            },
            {
                "type": "expression",
                "id": "64",
                "color": "#2d70b3",
                "latex": "c_{99}\\ =6.976",
                "slider": {
                    "hardMin": true,
                    "hardMax": true,
                    "min": "6.976",
                    "max": "6.976"
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
                "pointOpacity": "2"
            },
            {
                "type": "expression",
                "id": "45",
                "color": "#fa7e19",
                "latex": "x=c_{95}",
                "lineStyle": "DOTTED",
                "lineWidth": "1.5"
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
                "lineStyle": "DOTTED",
                "lineWidth": "1.5"
            },
            {
                "type": "expression",
                "id": "97",
                "color": "#388c46",
                "latex": "\\left(c_{99},\\ 0\\right)",
                "showLabel": true,
                "label": "c99",
                "labelSize": "1.5",
                "labelOrientation": "below",
                "pointOpacity": "1.5"
            },
            {
                "type": "expression",
                "id": "114",
                "color": "#000000",
                "latex": "\\left(1,3.3\\right)",
                "showLabel": true,
                "label": "`F^* = \\frac{(R \\hat{\\beta}-r)^{\\prime}\\left[R\\left(X^{\\prime} X\\right)^{-1} R^{\\prime}\\right]^{-1}(R \\hat{\\beta}-r) / p}{\\hat{u}^{\\prime} \\hat{u} /(n-k)} \\sim F(p, n-k)` ",
                "hidden": true,
                "dragMode": "XY",
                "labelSize": "1",
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "115",
                "color": "#000000",
                "latex": "\\left(1,2\\right)",
                "showLabel": true,
                "label": "`F^* = \\frac{\\left(S C R_C-S C R_S\\right) / p}{S C R_S /(n-k)}`",
                "hidden": true,
                "dragMode": "XY",
                "labelSize": "1",
                "labelOrientation": "right"
            },
            {
                "type": "expression",
                "id": "116",
                "color": "#000000",
                "latex": "\\left(1,1\\right)",
                "showLabel": true,
                "label": "with `p=`${p}, `n=`${n} and `k=`${k}",
                "hidden": true,
                "labelOrientation": "right"
            }
        ]
    }
};

elt.style.width = '100%';
elt.style.height = '340px';
calculator_fisher.resize();

calculator_fisher.setState(graphStatefisher);
calculator_fisher.setDefaultState(graphStatefisher);
