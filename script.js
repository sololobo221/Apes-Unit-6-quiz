const questionsData = [
    // 6.1 & 6.2 Basics & Consumption (1-6)
    {
        question: "1. Which of the following best describes a renewable energy resource?",
        options: [
            "A resource that can be replenished naturally at or near the rate of consumption.",
            "A resource that exists in a fixed amount in the Earth's crust.",
            "A resource that guarantees zero environmental impact.",
            "A resource exclusively formed from fossilized plant material."
        ],
        correctAnswer: 0,
        explanation: "Renewable resources regenerate fast enough to replace what is used."
    },
    {
        question: "2. Which of the following best defines a nonrenewable energy source?",
        options: [
            "Energy sources that do not release carbon dioxide.",
            "Energy sources that are replenished faster than they are used.",
            "Energy sources that exist in a fixed amount and take millions of years to form.",
            "Energy sources utilized strictly by developing nations."
        ],
        correctAnswer: 2,
        explanation: "Nonrenewable sources exist in finite quantities and cannot be replaced in a human timeframe."
    },
    {
        question: "3. What is the primary difference between subsistence fuels and commercial fuels?",
        options: [
            "Subsistence fuels are bought and sold, while commercial fuels are gathered for personal use.",
            "Subsistence fuels are gathered for immediate needs, while commercial fuels are traded.",
            "Subsistence fuels are only nonrenewable.",
            "Subsistence fuels are exclusively liquids."
        ],
        correctAnswer: 1,
        explanation: "Subsistence fuels are manually gathered for survival, whereas commercial fuels are bought and sold."
    },
    {
        question: "4. Which of the following is the most common subsistence fuel used in developing countries?",
        options: [
            "Uranium-235",
            "Natural gas",
            "Wood and charcoal",
            "Anthracite coal"
        ],
        correctAnswer: 2,
        explanation: "Wood and charcoal are typical subsistence fuels relied upon in developing nations for heating and cooking."
    },
    {
        question: "5. How do energy consumption patterns typically differ between developed and developing nations?",
        options: [
            "Developing nations consume much more per capita energy.",
            "Developed nations rely predominantly on subsistence fuels.",
            "Developed nations use more commercial energy per capita.",
            "Both consume identical amounts of energy per capita."
        ],
        correctAnswer: 2,
        explanation: "Developed countries have industrialized economies increasing per capita commercial energy demand."
    },
    {
        question: "6. As a country undergoes industrialization, how does its energy use typically shift?",
        options: [
            "From commercial fossil fuels to subsistence biomass.",
            "From subsistence biomass to commercial fossil fuels.",
            "Energy use per capita plummets drastically.",
            "It strictly utilizes only renewable energy."
        ],
        correctAnswer: 1,
        explanation: "Industrialization causes a shift away from gathered biomass toward energy-dense commercial fuels."
    },

    // 6.3 & 6.4 Fossil Fuels & Distribution (7-14)
    {
        question: "7. Which of the following best describes peat?",
        options: [
            "The hardest, cleanest-burning form of coal.",
            "Partially decomposed organic matter found in bogs that is a precursor to coal.",
            "A liquid fossil fuel extracted via distillation.",
            "Wood heated in the absence of oxygen."
        ],
        correctAnswer: 1,
        explanation: "Peat is partially decayed vegetation that eventually compresses into coal."
    },
    {
        question: "8. Which sequence correctly orders the stages of coal formation from lowest to highest heat content?",
        options: [
            "Lignite, Peat, Bituminous, Anthracite",
            "Peat, Lignite, Bituminous, Anthracite",
            "Anthracite, Bituminous, Lignite, Peat",
            "Peat, Bituminous, Lignite, Anthracite"
        ],
        correctAnswer: 1,
        explanation: "Coal forms from Peat to Lignite, then Bituminous, and finally Anthracite."
    },
    {
        question: "9. Which type of coal has the highest heat content and the lowest sulfur content?",
        options: [
            "Peat",
            "Lignite",
            "Bituminous",
            "Anthracite"
        ],
        correctAnswer: 3,
        explanation: "Anthracite is highly compressed, making it energy-dense with fewer impurities."
    },
    {
        question: "10. In refining crude oil, how does fractional distillation separate components?",
        options: [
            "By magnetic properties.",
            "By varying boiling points.",
            "By biological filtering.",
            "By freezing them."
        ],
        correctAnswer: 1,
        explanation: "Fractional distillation separates hydrocarbons based on boiling points."
    },
    {
        question: "11. Which product is NOT typically separated during fractional distillation of petroleum?",
        options: [
            "Gasoline",
            "Diesel",
            "Asphalt",
            "Uranium"
        ],
        correctAnswer: 3,
        explanation: "Uranium is a heavy metal used for nuclear fission, not a petroleum derivative."
    },
    {
        question: "12. Which region contains the largest known reserves of petroleum?",
        options: [
            "North America",
            "The Middle East",
            "Sub-Saharan Africa",
            "Western Europe"
        ],
        correctAnswer: 1,
        explanation: "The Middle East holds roughly half of the world's proven petroleum reserves."
    },
    {
        question: "13. Which three countries hold the vast majority of the world's coal reserves?",
        options: [
            "Brazil, Argentina, Chile",
            "France, Germany, UK",
            "United States, Russia, China",
            "Saudi Arabia, Iraq, Iran"
        ],
        correctAnswer: 2,
        explanation: "The US, Russia, and China have the world's largest coal reserves."
    },
    {
        question: "14. Canada possesses large reserves of an unconventional fossil fuel that is highly water-intensive to extract. What is it?",
        options: [
            "Anthracite",
            "Tar sands (Bitumen)",
            "Geothermal vapor",
            "Methane hydrates"
        ],
        correctAnswer: 1,
        explanation: "Tar sands in Alberta contain heavy bitumen, requiring massive amounts of water and energy to extract."
    },

    // 6.5 Generating Electricity & Fracking (15-21)
    {
        question: "15. What is the basic balanced chemical equation for the combustion of methane?",
        options: [
            "CH4 + 2O2 -> CO2 + 2H2O",
            "CO2 + H2O -> CH4 + O2",
            "2CH4 + O2 -> 2CO2 + H2O",
            "CH4 + CO2 -> H2O + O2"
        ],
        correctAnswer: 0,
        explanation: "Methane reacting with oxygen yields carbon dioxide and water."
    },
    {
        question: "16. Which sequence correctly lists steps to produce electricity in a coal-fired plant?",
        options: [
            "Heat water, turn turbine, combust coal, generator",
            "Generator, turn turbine, combust coal, heat water",
            "Combust coal, heat water to steam, steam turns turbine, turbine turns generator",
            "Combust coal, steam turns generator, generator heats water"
        ],
        correctAnswer: 2,
        explanation: "Fuel boils water into steam, spinning a turbine and generator."
    },
    {
        question: "17. What is a primary economic advantage of using coal to generate electricity?",
        options: [
            "It releases no air pollutants.",
            "It is relatively inexpensive and abundant.",
            "It leaves behind no solid waste.",
            "It requires minimal land disruption."
        ],
        correctAnswer: 1,
        explanation: "Coal has historically been cheap, abundant, and easy to extract and transport."
    },
    {
        question: "18. Which fossil fuel produces the highest amount of CO2, SOx, and airborne particulates?",
        options: [
            "Natural gas",
            "Petroleum",
            "Coal",
            "Uranium"
        ],
        correctAnswer: 2,
        explanation: "Coal is the dirtiest fossil fuel, releasing massive amounts of greenhouse gases and sulfur dioxide."
    },
    {
        question: "19. Which fossil fuel is considered 'cleanest' because it emits the least CO2 and particulates?",
        options: [
            "Anthracite coal",
            "Crude oil",
            "Natural gas (methane)",
            "Peat"
        ],
        correctAnswer: 2,
        explanation: "Natural gas combustion releases about half the CO2 of coal and drastically fewer particulates."
    },
    {
        question: "20. Hydraulic fracturing (fracking) is used to extract natural gas. What is a major water-related environmental consequence?",
        options: [
            "Decreases sea levels globally.",
            "Groundwater contamination with fracking fluids.",
            "Massive algae blooms in the ocean.",
            "Removes heavy metals from local aquifers."
        ],
        correctAnswer: 1,
        explanation: "Fracking injects fluid underground, which can leak into groundwater aquifers."
    },
    {
        question: "21. Aside from water issues, what is another documented consequence of the fracking process?",
        options: [
            "Ozone layer depletion",
            "An increase in localized seismic activity (earthquakes)",
            "A decrease in atmospheric methane",
            "The formation of new coal deposits"
        ],
        correctAnswer: 1,
        explanation: "The injection of high-pressure wastewater into disposal wells can trigger induced earthquakes."
    },

    // 6.6 Nuclear Energy (22-28)
    {
        question: "22. In a nuclear reactor, what specific isotope is most commonly used to undergo fission?",
        options: [
            "Carbon-14",
            "Uranium-235",
            "Plutonium-239 only",
            "Hydrogen-3"
        ],
        correctAnswer: 1,
        explanation: "Uranium-235 is the standard fuel isotope."
    },
    {
        question: "23. How is the rate of the fission chain reaction managed inside a nuclear reactor core?",
        options: [
            "Adjusting oxygen in the chamber.",
            "Using control rods to absorb excess neutrons.",
            "Freezing the uranium pellets.",
            "Altering wind flow."
        ],
        correctAnswer: 1,
        explanation: "Control rods absorb neutrons to manage the fission rate."
    },
    {
        question: "24. Which is a major environmental ADVANTAGE of nuclear power over fossil fuels?",
        options: [
            "It produces no radioactive waste.",
            "Mining for uranium has no environmental impact.",
            "It produces zero carbon emissions during routine operation.",
            "Nuclear plants cost almost nothing to build."
        ],
        correctAnswer: 2,
        explanation: "Reactors only emit water vapor, not greenhouse gases."
    },
    {
        question: "25. What is the most significant long-term environmental DISADVANTAGE of nuclear energy?",
        options: [
            "High levels of greenhouse gas emissions.",
            "The creation of highly radioactive spent fuel requiring secure storage.",
            "Rapid destruction of the ozone layer.",
            "Heavy production of airborne particulate matter."
        ],
        correctAnswer: 1,
        explanation: "Spent fuel remains dangerously radioactive for tens of thousands of years."
    },
    {
        question: "26. Nuclear power plants frequently intake water for cooling and return it much warmer. What is this called?",
        options: [
            "Acid deposition",
            "Eutrophication",
            "Thermal pollution",
            "Biomagnification"
        ],
        correctAnswer: 2,
        explanation: "Thermal pollution lowers dissolved oxygen content in water and harms aquatic life."
    },
    {
        question: "27. Which nuclear accident resulted from an earthquake and subsequent tsunami causing a loss of cooling water?",
        options: [
            "Three Mile Island",
            "Chernobyl",
            "Fukushima Daiichi",
            "Love Canal"
        ],
        correctAnswer: 2,
        explanation: "In 2011, a tsunami disabled the cooling pumps at Fukushima, leading to meltdowns."
    },
    {
        question: "28. Why was the 1986 Chernobyl disaster particularly devastating compared to other meltdowns?",
        options: [
            "It occurred in the ocean.",
            "An explosion blew the roof off the reactor, spreading radioactive fallout extensively.",
            "The facility was utilizing weapons-grade plutonium.",
            "It released massive amounts of sulfur dioxide."
        ],
        correctAnswer: 1,
        explanation: "A massive steam explosion and no containment building allowed massive radiation to vent."
    },

    // 6.7 Biomass (29-33)
    {
        question: "29. What is a primary human health consequence of indoor reliance on burning wood and biomass?",
        options: [
            "Increased risk of skin cancer.",
            "Respiratory illnesses due to particulate matter and CO.",
            "Heavy metal poisoning in drinking water.",
            "Exposure to excessive UV radiation."
        ],
        correctAnswer: 1,
        explanation: "Burning biomass indoors exposes inhabitants to toxic soot and carbon monoxide."
    },
    {
        question: "30. How is ethanol, a common liquid biofuel, primarily produced?",
        options: [
            "By fractional distillation of crude oil.",
            "By the fermentation of starches and sugars found in crops.",
            "By splitting water molecules using solar power.",
            "By combusting methane gas."
        ],
        correctAnswer: 1,
        explanation: "Ethanol is an alcohol made by allowing yeast to ferment sugars from crops like corn."
    },
    {
        question: "31. Why is modern biomass sometimes considered 'carbon neutral'?",
        options: [
            "It emits oxygen rather than carbon when burned.",
            "The burning process destroys carbon atoms.",
            "The CO2 released was recently absorbed by the plants from the atmosphere.",
            "It permanently seals carbon underground."
        ],
        correctAnswer: 2,
        explanation: "It returns carbon that was recently removed from the atmosphere, theoretical net-zero change."
    },
    {
        question: "32. What is a major socioeconomic drawback of utilizing corn to produce ethanol fuel?",
        options: [
            "It forces countries to import more oil.",
            "It diverts a staple food crop to fuel production, driving up food prices.",
            "Corn cannot be grown easily.",
            "Ethanol completely destroys car engines instantly."
        ],
        correctAnswer: 1,
        explanation: "Using food crops for fuel creates a food vs. fuel dynamic, increasing agricultural costs."
    },
    {
        question: "33. What poses a significant environmental drawback to corn-based ethanol?",
        options: [
            "Growing corn requires fossil fuel-intensive fertilizers and tractor usage.",
            "Burning ethanol releases radioactive isotopes.",
            "Corn fields absorb zero carbon dioxide.",
            "Ethanol releases chlorofluorocarbons."
        ],
        correctAnswer: 0,
        explanation: "The industrial farming of corn requires immense fossil-fuel energy, lowering net benefits."
    },

    // 6.8 Solar Energy (34-38)
    {
        question: "34. What is the difference between active and passive solar heating?",
        options: [
            "Active solar generates electricity; passive uses it for plant growth.",
            "Active solar utilizes mechanical devices (pumps/fans); passive relies on building design.",
            "Active solar only works in summer; passive only works in winter.",
            "Passive requires PV cells; active requires fossil fuels."
        ],
        correctAnswer: 1,
        explanation: "Passive solar uses architectural features, while active solar uses physical pumps."
    },
    {
        question: "35. Which of the following is an example of passive solar design?",
        options: [
            "A water pump moving solar-heated fluid.",
            "South-facing windows and stone floors that absorb winter sunlight.",
            "A photovoltaic array on a roof.",
            "A parabolic mirror heating a tower."
        ],
        correctAnswer: 1,
        explanation: "South-facing windows and thermal mass passively hold heat without machinery."
    },
    {
        question: "36. How do Photovoltaic (PV) cells generate electricity?",
        options: [
            "They boil water to turn a turbine.",
            "They reflect light into a central generator.",
            "Light strikes a semiconductor, causing electrons to flow as a current.",
            "They capture heat transferred to a generator."
        ],
        correctAnswer: 2,
        explanation: "PV cells use photons to knock electrons loose in silicon, directly creating electrical current."
    },
    {
        question: "37. How does Concentrated Solar Thermal (CST) generate power?",
        options: [
            "By capturing photons directly into silicon wafers.",
            "By using mirrors to focus sunlight to heat fluid, make steam, and spin a turbine.",
            "By passively warming an insulated house.",
            "By running direct current through a saltwater solution."
        ],
        correctAnswer: 1,
        explanation: "CST focuses solar thermal energy to perform traditional mechanical electricity generation."
    },
    {
        question: "38. What is an environmental drawback associated with manufacturing PV solar panels?",
        options: [
            "They constantly emit CO2 over their lifespan.",
            "Manufacturing involves toxic heavy metals that can contaminate water.",
            "They cause extreme noise pollution.",
            "They severely disrupt bird migration paths by blinding birds."
        ],
        correctAnswer: 1,
        explanation: "The creation and disposal of PV panels involve hazardous materials like cadmium and lead."
    },

    // 6.9 Hydroelectric Power (39-43)
    {
        question: "39. How does a run-of-river hydroelectric setup differ from a water impoundment (dam) setup?",
        options: [
            "Run-of-river halts water flow completely.",
            "Run-of-river diverts a portion of river flow through a turbine without a massive reservoir.",
            "Run-of-river only operates via ocean tides.",
            "Run-of-river requires natural gas backup."
        ],
        correctAnswer: 1,
        explanation: "Run-of-river relies on natural river flow rather than creating a massive reservoir disrupting habitats."
    },
    {
        question: "40. Tidal energy relies on which of the following forces to generate electricity?",
        options: [
            "Wind currents on the ocean surface.",
            "The gravitational pull of the moon and sun causing water to rise and fall.",
            "Geothermal heat vents.",
            "Ocean thermal energy conversion."
        ],
        correctAnswer: 1,
        explanation: "Tidal power harnesses the kinetic energy of water surging in and out during tides."
    },
    {
        question: "41. Which of the following traces the flow of energy in a hydroelectric dam?",
        options: [
            "Kinetic -> Mechanical -> Electrical",
            "Chemical -> Thermal -> Electrical",
            "Solar -> Chemical -> Mechanical",
            "Nuclear -> Thermal -> Kinetic"
        ],
        correctAnswer: 0,
        explanation: "Falling water (kinetic) spins a turbine (mechanical) which powers a generator (electrical)."
    },
    {
        question: "42. What is a major ecological advantage of hydroelectric dams compared to fossil fuels?",
        options: [
            "Dams actually increase biodiversity downstream.",
            "They have no initial construction costs.",
            "They generate electricity without emitting carbon dioxide or particulate pollutants.",
            "Dams restore natural flooding cycles."
        ],
        correctAnswer: 2,
        explanation: "While they alter habitats, hydroelectric dams produce massive power without greenhouse emissions."
    },
    {
        question: "43. What is siltation, a common negative environmental consequence of dams?",
        options: [
            "The release of toxic metals from the turbine.",
            "The buildup of sediments behind the dam, depriving downstream areas of nutrients.",
            "The rapid evaporation of water from the reservoir.",
            "The overfishing of species within the reservoir."
        ],
        correctAnswer: 1,
        explanation: "Dams block natural sediment flow, causing buildup behind the dam and nutrient loss downstream."
    },

    // 6.10 Geothermal Energy (44-46)
    {
        question: "44. How does a utility-scale geothermal power plant generate electricity?",
        options: [
            "By capturing heat from deep earth to produce steam that turns a turbine.",
            "By pumping magma directly into a turbine.",
            "By utilizing Earth's magnetic core.",
            "By using ground-source heat pumps to cool air."
        ],
        correctAnswer: 0,
        explanation: "Geothermal uses naturally heated groundwater to produce steam and spin turbines."
    },
    {
        question: "45. Which of the following is a potential environmental drawback of geothermal energy?",
        options: [
            "Massive carbon dioxide emissions comparable to coal.",
            "The release of hydrogen sulfide gas during extraction.",
            "High levels of radioactive waste.",
            "Extreme risk of global cooling."
        ],
        correctAnswer: 1,
        explanation: "Geothermal fluid can release toxic hydrogen sulfide gas if not properly managed."
    },
    {
        question: "46. Why is utility-scale geothermal electricity generation geographically limited?",
        options: [
            "It only works in freezing climates.",
            "It requires accessible tectonic plate boundaries where hot rock is near the surface.",
            "It is restricted by international law.",
            "It only works near large oceans."
        ],
        correctAnswer: 1,
        explanation: "You need easily accessible, naturally heated groundwater, usually found near tectonic boundaries."
    },

    // 6.11 Hydrogen Fuel Cells (47-49)
    {
        question: "47. What are the direct inputs and outputs of a hydrogen fuel cell?",
        options: [
            "Inputs: Hydrogen and carbon. Outputs: Methane and water.",
            "Inputs: Hydrogen and oxygen. Outputs: Water and electricity.",
            "Inputs: Water and electricity. Outputs: Hydrogen and oxygen.",
            "Inputs: Methane and water. Outputs: Electricity and CO2."
        ],
        correctAnswer: 1,
        explanation: "Hydrogen reacts with oxygen in the cell to produce electricity, emitting only water."
    },
    {
        question: "48. Why do some critics argue that hydrogen fuel cells are not entirely zero-emission?",
        options: [
            "The fuel cell itself emits nitrogen oxides.",
            "The production of pure hydrogen gas often relies on fossil fuels like natural gas.",
            "The water output is heavily polluted with radiation.",
            "Fuel cells require burning coal inside moving vehicles."
        ],
        correctAnswer: 1,
        explanation: "Most hydrogen is currently produced via steam reforming of natural gas, which releases CO2."
    },
    {
        question: "49. Which of the following is a major obstacle to the widespread adoption of hydrogen fuel cell vehicles?",
        options: [
            "Hydrogen gas is extremely dense and heavy.",
            "Lack of hydrogen fueling infrastructure and the high cost of fuel cells.",
            "Fuel cells are completely ineffective at generating voltage.",
            "Water vapor from exhausts is highly toxic."
        ],
        correctAnswer: 1,
        explanation: "Building hydrogen stations is expensive, and fuel cells require precious metals."
    },

    // 6.12 Wind Energy (50-52)
    {
        question: "50. How does a wind turbine generate electricity?",
        options: [
            "Wind cools solar panels to improve efficiency.",
            "Wind turns blades attached to a gearbox and generator.",
            "Wind pushes water uphill into a reservoir.",
            "Wind directly excites electrons in carbon nanotubes."
        ],
        correctAnswer: 1,
        explanation: "Kinetic energy of wind spins the rotor, which turns a generator inside the nacelle."
    },
    {
        question: "51. Which of the following is an advantage of offshore wind farms compared to onshore ones?",
        options: [
            "Offshore winds are generally stronger and more consistent.",
            "Offshore turbines are drastically cheaper to build and maintain.",
            "Offshore turbines have zero impact on marine life.",
            "Offshore turbines require no transmission cables."
        ],
        correctAnswer: 0,
        explanation: "Lack of physical obstacles at sea allows for stronger, uninterrupted wind speeds."
    },
    {
        question: "52. What is a widely cited biological disadvantage of wind turbines?",
        options: [
            "Turbines release sulfur dioxide.",
            "The rotating blades can strike and kill birds and bats.",
            "The noise forces earthworms deeper underground.",
            "Turbine vibrations cause forest fires."
        ],
        correctAnswer: 1,
        explanation: "Bird and bat mortality from blade strikes and barotrauma is a major ecological concern."
    },

    // 6.13 Energy Conservation (53-60)
    {
        question: "53. What is phantom load (or vampire power) in the context of energy conservation?",
        options: [
            "Energy wasted by inefficient lightbulbs.",
            "Electricity consumed by electronic devices while they are turned off or in standby mode.",
            "Energy lost during transmission through power lines.",
            "The extra gas consumed while a car is idling."
        ],
        correctAnswer: 1,
        explanation: "Many electronics continue drawing power as long as they are plugged in, even when 'off'."
    },
    {
        question: "54. Which of the following home modifications best improves energy conservation?",
        options: [
            "Installing single-pane windows.",
            "Upgrading attic insulation and sealing air leaks.",
            "Painting the roof a dark black color in a hot climate.",
            "Running the HVAC system continuously."
        ],
        correctAnswer: 1,
        explanation: "Proper insulation prevents heat transfer, drastically reducing heating and cooling demands."
    },
    {
        question: "55. How do green roofs contribute to energy conservation?",
        options: [
            "By generating wind power.",
            "By providing extra insulation and absorbing sunlight, reducing building cooling costs.",
            "By reflecting 100% of solar radiation back to space.",
            "By substituting for fiberglass."
        ],
        correctAnswer: 1,
        explanation: "Vegetation on roofs insulates buildings and cools the surrounding air via evapotranspiration."
    },
    {
        question: "56. Which of the following represents energy conservation on a government scale?",
        options: [
            "An individual unplugging their television.",
            "Setting stricter CAFE (Corporate Average Fuel Economy) standards for automakers.",
            "A family buying a hybrid car.",
            "Installing LED lightbulbs in a single residence."
        ],
        correctAnswer: 1,
        explanation: "CAFE standards mandate broader fuel efficiency for entire fleets of commercial vehicles."
    },
    {
        question: "57. What is a structural change a city can make to drastically reduce transportation energy use?",
        options: [
            "Adding more lanes to overcrowded highways.",
            "Expanding and subsidizing public mass transit systems and bike lanes.",
            "Banning all electric vehicles.",
            "Increasing the speed limit on local roads."
        ],
        correctAnswer: 1,
        explanation: "Mass transit and bike infrastructure reduce the number of individual cars on the road, cutting fuel use."
    },
    {
        question: "58. Replacing incandescent bulbs with LEDs is an example of what?",
        options: [
            "Energy substitution",
            "Energy efficiency",
            "Energy rationing",
            "Passive solar heating"
        ],
        correctAnswer: 1,
        explanation: "Energy efficiency involves performing the exact same task (lighting) while utilizing less energy."
    },
    {
        question: "59. Utility companies sometimes use tiered rate systems. How does this promote conservation?",
        options: [
            "By charging less per kilowatt-hour the more electricity a customer uses.",
            "By charging a drastically higher rate once a customer's electricity usage exceeds a certain baseline.",
            "By offering free electricity during peak hours.",
            "By replacing customer appliances for free."
        ],
        correctAnswer: 1,
        explanation: "Tiered pricing penalizes excessive use with higher rates, incentivizing conservation."
    },
    {
        question: "60. Which mode of automated personal transport is generally the most energy-efficient per passenger-mile?",
        options: [
            "A single-occupant SUV.",
            "A long-distance commercial airplane.",
            "An urban mass transit train operating at full capacity.",
            "A personal helicopter."
        ],
        correctAnswer: 2,
        explanation: "Mass transit moves many people simultaneously, heavily diluting the fuel cost per person."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');

const questionTracker = document.getElementById('question-tracker');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const scoreDisplay = document.getElementById('score-display');
const scoreMessage = document.getElementById('score-message');
const reviewContainer = document.getElementById('review-container');
const reviewList = document.getElementById('review-list');

// Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initQuiz() {
    shuffleArray(questionsData);
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(questionsData.length).fill(null);
    reviewContainer.classList.add('hidden');
    startScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    const qt = questionsData[currentQuestionIndex];
    questionText.textContent = qt.question;
    questionTracker.textContent = \`Question \${currentQuestionIndex + 1} / \${questionsData.length}\`;
    progressBar.style.width = \`\${((currentQuestionIndex) / questionsData.length) * 100}%\`;
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;

    if (currentQuestionIndex === questionsData.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        submitBtn.disabled = true;
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }

    qt.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = String.fromCharCode(65 + index) + ". " + opt;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, btnSelected) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    btnSelected.classList.add('selected');
    userAnswers[currentQuestionIndex] = index;

    if (currentQuestionIndex === questionsData.length - 1) {
        submitBtn.disabled = false;
    } else {
        nextBtn.disabled = false;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questionsData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function submitQuiz() {
    score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === questionsData[idx].correctAnswer) score++;
    });

    progressBar.style.width = '100%';
    setTimeout(() => {
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        showResults();
    }, 300);
}

function showResults() {
    scoreDisplay.textContent = \`\${score} / \${questionsData.length}\`;
    let percentage = (score / questionsData.length) * 100;

    if (percentage === 100) scoreMessage.textContent = "Perfect! You're completely ready for the APES exam.";
    else if (percentage >= 80) scoreMessage.textContent = "Excellent work! Solid grasp of Energy Resources.";
    else if (percentage >= 60) scoreMessage.textContent = "Good effort, but review the topics you missed.";
    else scoreMessage.textContent = "Keep studying! Use the review below to practice.";

    generateReview();
}

function generateReview() {
    reviewList.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const item = document.createElement('div');
        item.classList.add('review-item');

        const qText = document.createElement('div');
        qText.classList.add('review-question');
        qText.textContent = q.question;
        item.appendChild(qText);

        q.options.forEach((opt, optIdx) => {
            const optDiv = document.createElement('div');
            optDiv.classList.add('review-option');
            optDiv.textContent = String.fromCharCode(65 + optIdx) + ". " + opt;
            
            if (optIdx === q.correctAnswer) {
                optDiv.classList.add('correct');
            } else if (optIdx === userAnswers[idx]) {
                optDiv.classList.add('incorrect');
            }
            item.appendChild(optDiv);
        });

        const expl = document.createElement('div');
        expl.classList.add('review-explanation');
        expl.innerHTML = \`<strong>Explanation:</strong> \${q.explanation}\`;
        item.appendChild(expl);

        reviewList.appendChild(item);
    });
}

// Event Listeners
startBtn.addEventListener('click', initQuiz);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', initQuiz);
reviewBtn.addEventListener('click', () => {
    reviewContainer.classList.toggle('hidden');
    if (!reviewContainer.classList.contains('hidden')) {
        reviewContainer.scrollIntoView({ behavior: 'smooth' });
    }
});
