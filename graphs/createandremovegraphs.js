
// S�lectionnez le bouton "uniform"
const uniformButton = document.querySelector('.ac-trigger[graph="uniform"]');

// Ajoutez un �couteur d'�v�nements au bouton
uniformButton.addEventListener('click', () => {
    const isExpanded = uniformButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        console.log('uniform is open.');
        removeexponentialDistributionGraph();
        removenormalDistributionGraph();
	    removenormalSEDistributionGraph();
        createuniformDistributionGraph();
    } else {
        console.log('uniform is closed.');
        removeuniformDistributionGraph();
    }
});

// S�lectionnez le bouton "normal"
const normalButton = document.querySelector('.ac-trigger[graph="normal"]');

// Ajoutez un �couteur d'�v�nements au bouton
normalButton.addEventListener('click', () => {
    const isExpanded = normalButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('normal is open.');
        removeexponentialDistributionGraph();
        removeuniformDistributionGraph();
        createnormalDistributionGraph();
	    createnormalSEDistributionGraph();
    } else {
        // console.log('normal is closed.');
        removenormalDistributionGraph();
	    removenormalSEDistributionGraph();
    }
});

// S�lectionnez le bouton "exponential"
const exponentialButton = document.querySelector('.ac-trigger[graph="exponential"]');

// Ajoutez un �couteur d'�v�nements au bouton
exponentialButton.addEventListener('click', () => {
    const isExpanded = exponentialButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('exponential is open.');
        removeuniformDistributionGraph();
        removeuniformDistributionGraph();
        createexponentialDistributionGraph();
    } else {
        // console.log('exponential is closed.');
        removeexponentialDistributionGraph();
    }
});

// S�lectionnez le bouton "linear"
const linearButton = document.querySelector('.ac-trigger[graph="linear"]');

// Ajoutez un �couteur d'�v�nements au bouton
linearButton.addEventListener('click', () => {
    const isExpanded = linearButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('linear is open.');
        removestudentDistributionGraph();
        removefisherDistributionGraph();
        createlinearDistributionGraph();
	    createlinearsimpleDistributionGraph();
    } else {
        // console.log('linear is closed.');
        removelinearDistributionGraph();
	    removelinearsimpleDistributionGraph();
    }
});

// S�lectionnez le bouton "student"
const studentButton = document.querySelector('.ac-trigger[graph="student"]');

// Ajoutez un �couteur d'�v�nements au bouton
studentButton.addEventListener('click', () => {
    const isExpanded = studentButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('student is open.');
        removefisherDistributionGraph();
        removelinearDistributionGraph();
    	removelinearsimpleDistributionGraph();
        createstudentDistributionGraph();
    } else {
        // console.log('student is closed.');
        removestudentDistributionGraph();
    }
});

// S�lectionnez le bouton "fisher"
const fisherButton = document.querySelector('.ac-trigger[graph="fisher"]');

// Ajoutez un �couteur d'�v�nements au bouton
fisherButton.addEventListener('click', () => {
    const isExpanded = fisherButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('fisher is open.');
        removestudentDistributionGraph();
        removelinearDistributionGraph();
    	removelinearsimpleDistributionGraph();
        createfisherDistributionGraph();
    } else {
        // console.log('fisher is closed.');
        removefisherDistributionGraph();
    }
});

// S�lectionnez le bouton "square"
const squareButton = document.querySelector('.ac-trigger[graph="square"]');

// Ajoutez un �couteur d'�v�nements au bouton
squareButton.addEventListener('click', () => {
    const isExpanded = squareButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('square is open.');
        removeintegralsDistributionGraph();
        removeconvexityDistributionGraph();
        createsquareDistributionGraph();
    } else {
        // console.log('square is closed.');
        removesquareDistributionGraph();
    }
});

// S�lectionnez le bouton "convexity"
const convexityButton = document.querySelector('.ac-trigger[graph="convexity"]');

// Ajoutez un �couteur d'�v�nements au bouton
convexityButton.addEventListener('click', () => {
    const isExpanded = convexityButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('convexity is open.');
        removesquareDistributionGraph();
        removeintegralsDistributionGraph();
        createconvexityDistributionGraph();
    } else {
        // console.log('convexity is closed.');
        removeconvexityDistributionGraph();
    }
});

// S�lectionnez le bouton "integrals"
const integralsButton = document.querySelector('.ac-trigger[graph="integrals"]');

// Ajoutez un �couteur d'�v�nements au bouton
integralsButton.addEventListener('click', () => {
    const isExpanded = integralsButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('integrals is open.');
        removesquareDistributionGraph();
        removeconvexityDistributionGraph();
        createintegralsDistributionGraph();
    } else {
        // console.log('integrals is closed.');
        removeintegralsDistributionGraph();
    }
});


function createuniformDistributionGraph() {
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
}

function removeuniformDistributionGraph() {
    const container = document.getElementById('calculator-unif');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createnormalDistributionGraph() {
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
}

function removenormalDistributionGraph() {
    const container = document.getElementById('calculator-normal');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createnormalSEDistributionGraph() {
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
    }

function removenormalSEDistributionGraph() {
    const container = document.getElementById('calculator-normalSE');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createexponentialDistributionGraph() {
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
    }

function removeexponentialDistributionGraph() {
    const container = document.getElementById('calculator-exponential');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createlinearDistributionGraph() {
    var elt = document.getElementById('calculator-lin');
    var calculator_lin = Desmos.GraphingCalculator(elt, {expressionsCollapsed: true, keypad: false, fontSize: desmosfontSize, restrictedFunctions:true, expressions: true, showGrid: false, invertedColors: darkMode, showXAxis:false, showYAxis:false});
    var graphStatelinear = {
        "version": 10,
        "randomSeed": "0fb4ac7738f4925697d98d4abef50a6f",
        "graph": {
            "viewport": {
                "xmin": -1.0219691627527314,
                "ymin": -2.0451731320877498,
                "xmax": 6.694006267765716,
                "ymax": 6.868543810844802
            },
            "showGrid": false,
            "xAxisLabel": "X",
            "yAxisLabel": "Y"
        },
        "expressions": {
            "list": [
                {
                    "type": "expression",
                    "id": "82",
                    "color": "#2d70b3",
                    "latex": "t=-8.644",
                    "slider": {
                        "hardMin": true,
                        "animationPeriod": 80000,
                        "loopMode": "LOOP_FORWARD",
                        "isPlaying": true,
                        "min": "-9"
                    }
                },
                {
                    "type": "text",
                    "id": "76",
                    "text": "Your Data : generated by a linear model + a noise with mean 0.",
                    "secret": "true"
                },
                {
                    "id": "28",
                    "secret": "true",
                    "type": "table",
                    "columns": [
                        {
                            "values": [
                                "0.5",
                                "1",
                                "1.2",
                                "2",
                                "2.3",
                                "2.8",
                                "3.1",
                                "3.5",
                                "1",
                                "2",
                                "1.1",
                                "1.2",
                                "1.7",
                                "1.5",
                                "1.1",
                                "1.2",
                                "1.9",
                                "2.1",
                                "2",
                                "0.4",
                                "0.6",
                                "0.8",
                                "0.9",
                                "0.3",
                                "0.1",
                                "0.6",
                                "0.9",
                                "0.82",
                                "0.9",
                                "3.2",
                                "3",
                                "2.8"
                            ],
                            "hidden": true,
                            "id": "26",
                            "color": "#2d70b3",
                            "latex": "x_{1}"
                        },
                        {
                            "values": [
                                "1.75",
                                "1.4",
                                "1.7",
                                "1.8",
                                "2.45",
                                "2.6",
                                "2.05",
                                "2.45",
                                "0.9",
                                "2.6",
                                "2.15",
                                "1",
                                "2.15",
                                "1.45",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "id": "27",
                            "color": "#388c46",
                            "latex": "f\\left(x_{1}\\right)\\left\\{-8<t<-7\\right\\}",
                            "pointSize": "6",
                            "pointOpacity": "1"
                        },
                        {
                            "values": [
                                "0.1",
                                "0",
                                "0.1",
                                "0",
                                "-0.1",
                                "-0.1",
                                "-0.5",
                                "0.5",
                                "0.2",
                                "0.2",
                                "-0.2",
                                "-0.2",
                                "0.01",
                                "-0.01",
                                "-0.01",
                                "0.01",
                                "0.2",
                                "-0.2",
                                "-0.33",
                                "0.33",
                                "0.06",
                                "-0.06",
                                "0.4",
                                "-0.4",
                                "-0.2",
                                "0.2",
                                "0.5",
                                "-0.5",
                                "+0.2",
                                "-0.2",
                                "+0.45",
                                "-0.45"
                            ],
                            "hidden": true,
                            "id": "50",
                            "color": "#c74440",
                            "latex": "u"
                        },
                        {
                            "values": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "id": "71",
                            "color": "#2d70b3",
                            "latex": "\\left(f\\left(x_{1}\\right)+u\\right)\\left\\{t\\ge-4\\right\\}",
                            "pointSize": "6"
                        },
                        {
                            "values": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "id": "81",
                            "color": "#388c46",
                            "pointStyle": "OPEN",
                            "latex": "\\left\\{-7<t<-6.5:\\frac{f\\left(x_{1}\\right)\\left(-6.5-t\\right)}{0.5}+\\frac{\\left(f\\left(x_{1}\\right)+u\\right)\\left(t+7\\right)}{0.5}\\right\\}",
                            "pointSize": "6"
                        },
                        {
                            "values": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "id": "92",
                            "color": "#388c46",
                            "pointStyle": "OPEN",
                            "latex": "\\left\\{-6.5<t<-4:\\left(f\\left(x_{1}\\right)+u\\right)\\right\\}",
                            "pointSize": "6"
                        }
                    ]
                },
                {
                    "id": "100",
                    "secret": "true",
                    "type": "table",
                    "columns": [
                        {
                            "values": [
                                "0.5",
                                "1",
                                "1.2",
                                "2",
                                "2.3",
                                "2.8",
                                "3.1",
                                "3.5",
                                "1",
                                "2",
                                "1.1",
                                "1.2",
                                "1.7",
                                "1.5",
                                "1.1",
                                "1.2",
                                "1.9",
                                "2.1",
                                "2",
                                "0.4",
                                "0.6",
                                "0.8",
                                "0.9",
                                "0.3",
                                "0.1",
                                "0.6",
                                "0.9",
                                "0.82",
                                "0.9",
                                "3.2",
                                "3",
                                "2.8"
                            ],
                            "hidden": true,
                            "id": "98",
                            "color": "#388c46",
                            "latex": "x_{2}"
                        },
                        {
                            "values": [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                "",
                                ""
                            ],
                            "id": "99",
                            "color": "#fa7e19",
                            "latex": "\\left\\{2<t<5:a_{h}\\ x_{1}+b_{h}\\right\\}",
                            "pointSize": "6"
                        }
                    ]
                },
                {
                    "type": "text",
                    "secret": "true",
                    "id": "78",
                    "text": "The unknown parameters of the generative model"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "53",
                    "color": "#6042a6",
                    "latex": "a=0.4"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "69",
                    "color": "#000000",
                    "latex": "b=1.1"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "30",
                    "color": "#000000",
                    "latex": "f\\left(x\\right)=a\\cdot x\\ +b\\ ",
                    "hidden": true,
                    "lineStyle": "DASHED",
                    "lineOpacity": "0.7"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "91",
                    "color": "#388c46",
                    "latex": "\\left(3,0.75\\left\\{-8<t<-7\\right\\}\\right)",
                    "showLabel": true,
                    "label": "${a} X + ${b}",
                    "dragMode": "NONE",
                    "labelSize": "1.2",
                    "pointSize": "6"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "93",
                    "color": "#388c46",
                    "latex": "\\left(3,0.75\\left\\{-7<t<-4\\right\\}\\right)",
                    "showLabel": true,
                    "label": "${a} X + ${b} + error",
                    "pointStyle": "OPEN",
                    "dragMode": "NONE",
                    "labelSize": "1.2",
                    "labelOrientation": "right",
                    "pointSize": "6"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "107",
                    "color": "#388c46",
                    "latex": "\\left(3,1\\left\\{-5<t<-4\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Data generated",
                    "hidden": true,
                    "labelSize": "1.5",
                    "labelOrientation": "above"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "94",
                    "color": "#2d70b3",
                    "latex": "\\left(3,0.75\\left\\{-4<t<-2\\right\\}\\right)",
                    "showLabel": true,
                    "label": "observed data",
                    "labelSize": "1.2",
                    "labelOrientation": "right",
                    "pointSize": "6"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "96",
                    "color": "#fa7e19",
                    "latex": "\\left(2.5,0.75\\left\\{2<t<5\\right\\}\\right)",
                    "showLabel": true,
                    "label": "`\\ \\ \\hat{y}=`${a_h} X + ${b_h}",
                    "dragMode": "NONE",
                    "labelSize": "1.2",
                    "pointSize": "6"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "95",
                    "color": "#000000",
                    "latex": "\\left(3,0.75\\left\\{5<t\\right\\}\\right)",
                    "showLabel": true,
                    "label": "The dotted line is an approximation ",
                    "hidden": true
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "105",
                    "color": "#000000",
                    "latex": "\\left(3,0.5\\left\\{5<t\\right\\}\\right)",
                    "showLabel": true,
                    "label": "of the true model: the estimated",
                    "hidden": true
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "106",
                    "color": "#000000",
                    "latex": "\\left(3,0.25\\left\\{5<t\\right\\}\\right)",
                    "showLabel": true,
                    "label": " model is different from the true model",
                    "hidden": true
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "90",
                    "color": "#fa7e19",
                    "latex": "\\left\\{t>0:f_{h}\\left(x\\right)\\right\\}",
                    "lineStyle": "DASHED",
                    "lineWidth": "3"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "110",
                    "color": "#fa7e19",
                    "latex": "g\\left(x\\right)=\\left(a+0.1\\right)\\frac{t}{-2}x\\ +\\left(a-0.5\\right)\\cdot\\left(1-\\frac{t}{-2}\\right)x+\\left(\\left(b-0.5\\right)\\cdot\\frac{t}{-2}+\\left(b+0.5\\right)\\cdot\\left(1-\\frac{t}{-2}\\right)\\right)",
                    "hidden": true,
                    "lineStyle": "DASHED"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "113",
                    "color": "#fa7e19",
                    "latex": "h\\left(x\\right)=\\frac{t}{-2}g\\left(x\\right)+\\left(1-\\frac{t}{-2}\\right)f_{h}\\left(x\\right)",
                    "hidden": true,
                    "lineStyle": "DASHED"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "114",
                    "color": "#fa7e19",
                    "latex": "h_{0}\\left(x\\right)=h\\left(x\\right)\\left\\{-2<t\\le0\\right\\}",
                    "lineStyle": "DASHED",
                    "lineWidth": "2.5"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "111",
                    "color": "#fa7e19",
                    "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left\\{-2<t\\le0\\right\\},h\\left(x_{1}\\right)\\right),\\left(x_{1}\\left\\{-2<t\\le0\\right\\},\\ f\\left(x_{1}\\right)+u\\right)\\right)",
                    "lineWidth": "1.5"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "116",
                    "color": "#fa7e19",
                    "latex": "\\operatorname{polygon}\\left(\\left(x_{1}\\left\\{0<t\\le1\\right\\},f_{h}\\left(x_{1}\\right)\\right),\\left(x_{1}\\left\\{0<t\\le1\\right\\},\\ f\\left(x_{1}\\right)+u\\right)\\right)",
                    "lineWidth": "1.5"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "84",
                    "color": "#000000",
                    "latex": "\\left\\{t\\le-5:f\\left(x\\right),\\ t>5:f\\left(x\\right)\\right\\}",
                    "lineOpacity": "0.5",
                    "lineWidth": "3"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "85",
                    "color": "#000000",
                    "latex": "\\left(3,1\\left\\{t\\le-5\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Unknown true model",
                    "hidden": true,
                    "labelSize": "1.5",
                    "labelOrientation": "above",
                    "pointOpacity": "1"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "103",
                    "color": "#2d70b3",
                    "latex": "\\left(3,1\\left\\{-4<t<-3\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Real world",
                    "hidden": true,
                    "labelSize": "1.5",
                    "labelOrientation": "above"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "104",
                    "color": "#000000",
                    "latex": "\\left(3,1\\left\\{-3<t<-2\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Goal: find the line that generated the data",
                    "hidden": true,
                    "labelSize": "1.2",
                    "labelOrientation": "above"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "86",
                    "color": "#fa7e19",
                    "latex": "\\left(3,1.2\\left\\{0<t<2\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Model estimated by OLS",
                    "hidden": true,
                    "labelSize": "1.5",
                    "labelOrientation": "above"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "102",
                    "color": "#fa7e19",
                    "latex": "\\left(3,1\\left\\{2\\le t<5\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Predicted Y",
                    "hidden": true,
                    "labelSize": "1.5",
                    "labelOrientation": "above"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "87",
                    "color": "#6042a6",
                    "latex": "\\left\\{t\\le0:A,B\\ \\right\\}",
                    "hidden": true
                },
                {
                    "type": "text",
                    "secret": "true",
                    "id": "80",
                    "text": "OLS estimation of the parameters"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "45",
                    "color": "#c74440",
                    "latex": "b_{h}=\\operatorname{round}\\left(\\operatorname{mean}\\left(f\\left(x_{1}\\right)+u\\right)\\ -\\ a_{h}\\cdot\\operatorname{mean}\\left(x_{1}\\right),3\\right)"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "48",
                    "color": "#6042a6",
                    "latex": "a_{h}=\\operatorname{round}\\left(\\frac{\\operatorname{total}\\left(\\left(\\left(x_{1}-\\operatorname{mean}\\left(x_{1}\\right)\\right)\\cdot\\left(f\\left(x_{1}\\right)+u-\\operatorname{mean}\\left(f\\left(x_{1}\\right)+u\\right)\\right)\\right)\\right)}{\\operatorname{total}\\left(\\left(x_{1}-\\operatorname{mean}\\left(x_{1}\\right)\\right)^{2}\\right)},3\\right)",
                    "labelSize": "1"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "66",
                    "color": "#c74440",
                    "latex": "f_{h}\\left(x\\right)\\ =\\ a_{h}\\cdot x\\ +\\ b_{h}",
                    "hidden": true,
                    "lineOpacity": "1",
                    "lineWidth": "3"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "117",
                    "color": "#000000",
                    "latex": "a_{t}=\\left\\{t<0:\\operatorname{round}\\left(\\frac{h\\left(2\\right)-h\\left(1\\right)}{2-1},2\\right),a_{h}\\right\\}"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "118",
                    "color": "#c74440",
                    "latex": "b_{t}\\ =\\ \\left\\{t<0:\\operatorname{round}\\left(h\\left(0\\right),2\\right),\\ b_{h}\\right\\}"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "65",
                    "color": "#000000",
                    "latex": "\\left(3,1\\left\\{-2<t<2\\right\\}\\right)",
                    "showLabel": true,
                    "label": "`\\hat{a}=${a_{t}}`, `\\hat{b}=${b_{t}}`",
                    "hidden": true,
                    "labelOrientation": "right"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "64",
                    "color": "#000000",
                    "latex": "\\left(0.5,5\\left\\{-2<t<2\\right\\}\\right)",
                    "showLabel": true,
                    "label": "Sum of squared residuals:",
                    "hidden": true,
                    "labelOrientation": "right"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "120",
                    "color": "#000000",
                    "latex": "\\left(0.5,4\\left\\{-2<t<2\\right\\}\\right)",
                    "showLabel": true,
                    "label": "`\\sum_{k=1}^{32} \\left(y_k - (\\hat{a}x_k + \\hat{b})\\right)^2 = ${s}` ",
                    "hidden": true,
                    "labelOrientation": "right"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "61",
                    "color": "#2d70b3",
                    "latex": "s\\ =\\ \\operatorname{round}\\left(\\operatorname{total}\\left(\\left(\\left(f\\left(x_{1}\\right)+u\\right)-a_{t}\\cdot x_{1}-b_{t}\\right)^{2}\\right),2\\right)"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "59",
                    "color": "#000000"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "57",
                    "color": "#388c46"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "55",
                    "color": "#c74440"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "54",
                    "color": "#000000"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "37",
                    "color": "#2d70b3",
                    "labelSize": "1"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "38",
                    "color": "#388c46"
                },
                {
                    "type": "expression",
                    "secret": "true",
                    "id": "39",
                    "color": "#6042a6"
                }
            ]
        }
    };
    
    elt.style.width = '100%';
    elt.style.height = '400px';
    calculator_lin.resize();
    
    calculator_lin.setMathBounds({
    left: -1,
    right: 6.5,
    bottom: -2,
    top: 6.2});
    
    calculator_lin.setState(graphStatelinear);
    calculator_lin.setDefaultState(graphStatelinear);
    }

function removelinearDistributionGraph() {
    const container = document.getElementById('calculator-lin');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createlinearsimpleDistributionGraph() {
    var initialState = {"version":1,"graph":{"showGrid":false,"showXAxis":true,"showYAxis":true,"xAxisStep":0,"yAxisStep":0,"xAxisMinorSubdivisions":0,"yAxisMinorSubdivisions":0,"xAxisArrowMode":"NONE","yAxisArrowMode":"NONE","xAxisLabel":"","yAxisLabel":"","xAxisNumbers":true,"yAxisNumbers":true,"polarMode":false,"polarNumbers":true,"degreeMode":false,"projectorMode":false,"squareAxes":true,"viewport":{"xmin":-10,"ymin":-13.54387107276575,"xmax":10,"ymax":13.54387107276575}},"expressions":
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
    latex: '\\left(4.5,-50\\right)',
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
}

function removelinearsimpleDistributionGraph() {
    const container = document.getElementById('calculator-linreg');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createstudentDistributionGraph() {
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
    }

function removestudentDistributionGraph() {
    const container = document.getElementById('calculator-student');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createfisherDistributionGraph() {
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
    }

function removefisherDistributionGraph() {
    const container = document.getElementById('calculator-fisher');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createsquareDistributionGraph() {
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
    }

function removesquareDistributionGraph() {
    const container = document.getElementById('calculator-square');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createconvexityDistributionGraph() {
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
    }

function removeconvexityDistributionGraph() {
    const container = document.getElementById('calculator-convexity');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createintegralsDistributionGraph() {
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
    }

function removeintegralsDistributionGraph() {
    const container = document.getElementById('calculator-integral');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}
