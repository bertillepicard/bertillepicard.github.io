
// Sélectionnez le bouton "uniform"
const uniformButton = document.querySelector('.ac-trigger[graph="uniform"]');

// Ajoutez un écouteur d'événements au bouton
uniformButton.addEventListener('click', () => {
    const isExpanded = uniformButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('uniform is open.');
        createuniformDistributionGraph();
    } else {
        // console.log('uniform is closed.');
        removeuniformDistributionGraph();
    }
});

// Sélectionnez le bouton "normal"
const normalButton = document.querySelector('.ac-trigger[graph="normal"]');

// Ajoutez un écouteur d'événements au bouton
normalButton.addEventListener('click', () => {
    const isExpanded = normalButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('normal is open.');
        createnormalDistributionGraph();
	createnormalSEDistributionGraph();
    } else {
        // console.log('normal is closed.');
        removenormalDistributionGraph();
	removenormalSEDistributionGraph();
    }
});

// Sélectionnez le bouton "exponential"
const exponentialButton = document.querySelector('.ac-trigger[graph="exponential"]');

// Ajoutez un écouteur d'événements au bouton
exponentialButton.addEventListener('click', () => {
    const isExpanded = exponentialButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('exponential is open.');
        createexponentialDistributionGraph();
    } else {
        // console.log('exponential is closed.');
        removeexponentialDistributionGraph();
    }
});

// Sélectionnez le bouton "linear"
const linearButton = document.querySelector('.ac-trigger[graph="linear"]');

// Ajoutez un écouteur d'événements au bouton
linearButton.addEventListener('click', () => {
    const isExpanded = linearButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('linear is open.');
        createlinearDistributionGraph();
	createlinearsimpleDistributionGraph();
    } else {
        // console.log('linear is closed.');
        removelinearDistributionGraph();
	removelinearsimpleDistributionGraph();
    }
});

// Sélectionnez le bouton "student"
const studentButton = document.querySelector('.ac-trigger[graph="student"]');

// Ajoutez un écouteur d'événements au bouton
studentButton.addEventListener('click', () => {
    const isExpanded = studentButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('student is open.');
        createstudentDistributionGraph();
    } else {
        // console.log('student is closed.');
        removestudentDistributionGraph();
    }
});

// Sélectionnez le bouton "fisher"
const fisherButton = document.querySelector('.ac-trigger[graph="fisher"]');

// Ajoutez un écouteur d'événements au bouton
fisherButton.addEventListener('click', () => {
    const isExpanded = fisherButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('fisher is open.');
        createfisherDistributionGraph();
    } else {
        // console.log('fisher is closed.');
        removefisherDistributionGraph();
    }
});

// Sélectionnez le bouton "square"
const squareButton = document.querySelector('.ac-trigger[graph="square"]');

// Ajoutez un écouteur d'événements au bouton
squareButton.addEventListener('click', () => {
    const isExpanded = squareButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('square is open.');
        createsquareDistributionGraph();
    } else {
        // console.log('square is closed.');
        removesquareDistributionGraph();
    }
});

// Sélectionnez le bouton "convexity"
const convexityButton = document.querySelector('.ac-trigger[graph="convexity"]');

// Ajoutez un écouteur d'événements au bouton
convexityButton.addEventListener('click', () => {
    const isExpanded = convexityButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('convexity is open.');
        createconvexityDistributionGraph();
    } else {
        // console.log('convexity is closed.');
        removeconvexityDistributionGraph();
    }
});

// Sélectionnez le bouton "integrals"
const integralsButton = document.querySelector('.ac-trigger[graph="integrals"]');

// Ajoutez un écouteur d'événements au bouton
integralsButton.addEventListener('click', () => {
    const isExpanded = integralsButton.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        // console.log('integrals is open.');
        createintegralsDistributionGraph();
    } else {
        // console.log('integrals is closed.');
        removeintegralsDistributionGraph();
    }
});


function createuniformDistributionGraph() {
// Créez une balise script
const scriptElement = document.createElement('script');

// Spécifiez l'URL du fichier JavaScript externe
scriptElement.src = 'uniform.js';

// Ajoutez la balise script au document
document.head.appendChild(scriptElement);
}

function removeuniformDistributionGraph() {
    const container = document.getElementById('calculator-unif');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createnormalDistributionGraph() {
    <script type="text/javascript" src="normal.js"></script>
}

function removenormalDistributionGraph() {
    const container = document.getElementById('calculator-normal');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createnormalSEDistributionGraph() {
    <script type="text/javascript" src="normalSE.js"></script>
}

function removenormalSEDistributionGraph() {
    const container = document.getElementById('calculator-normalSE');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createexponentialDistributionGraph() {
    <script type="text/javascript" src="exponential.js"></script>
}

function removeexponentialDistributionGraph() {
    const container = document.getElementById('calculator-exponential');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createlinearDistributionGraph() {
    <script type="text/javascript" src="linear.js"></script>
}

function removelinearDistributionGraph() {
    const container = document.getElementById('calculator-lin');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createlinearsimpleDistributionGraph() {
    <script type="text/javascript" src="linregsimple.js"></script>
}

function removelinearsimpleDistributionGraph() {
    const container = document.getElementById('calculator-linreg');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createstudentDistributionGraph() {
    <script type="text/javascript" src="student.js"></script>
}

function removestudentDistributionGraph() {
    const container = document.getElementById('calculator-student');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createfisherDistributionGraph() {
    <script type="text/javascript" src="fisher.js"></script>
}

function removefisherDistributionGraph() {
    const container = document.getElementById('calculator-fisher');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createsquareDistributionGraph() {
    <script type="text/javascript" src="squarefunction.js"></script>
}

function removesquareDistributionGraph() {
    const container = document.getElementById('calculator-square');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createconvexityDistributionGraph() {
    <script type="text/javascript" src="convexity.js"></script>
}

function removeconvexityDistributionGraph() {
    const container = document.getElementById('calculator-convexity');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}

function createintegralsDistributionGraph() {
    <script type="text/javascript" src="integral.js"></script>
}

function removeintegralsDistributionGraph() {
    const container = document.getElementById('calculator-integral');
    if (container) {
        // Code to remove the graph here
        container.innerHTML = ''; // Clear the container
    }
}
