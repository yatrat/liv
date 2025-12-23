

const livingCities = [
  { id: "delhi", name: "Delhi" },
  { id: "mumbai", name: "Mumbai" },
  { id: "bangalore", name: "Bangalore" },
  { id: "chennai", name: "Chennai" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "pune", name: "Pune" },
  { id: "kolkata", name: "Kolkata" },
  { id: "kochi", name: "Kochi" }
];


const livingCostData = {
  
    "delhi": {
      "rent_index": 1.2,
      "avg_room_rent": 2200,
      "food_cost": 4500,
      "transport_cost": 1800,
      "public_transport_score": 8.5,
      "safety_score": 6.5,
      "women_safety_score": 6.2,
      "air_quality": 4.0,
      "climate_comfort": 5.5,
      "job_opportunities": 8.5,
      "avg_salary_index": 1.3,
      "healthcare_score": 7.8,
      "education_score": 7.5,
      "internet_quality": 8.0,
      "power_reliability": 7.2,
      "water_availability": 6.8,
      "traffic_congestion": 4.0,
      "nightlife_score": 7.0
    },

    "mumbai": {
      "rent_index": 1.6,
      "avg_room_rent": 3000,
      "food_cost": 5200,
      "transport_cost": 2200,
      "public_transport_score": 9.0,
      "safety_score": 7.0,
      "women_safety_score": 7.2,
      "air_quality": 5.5,
      "climate_comfort": 6.0,
      "job_opportunities": 9.0,
      "avg_salary_index": 1.5,
      "healthcare_score": 8.2,
      "education_score": 7.8,
      "internet_quality": 8.5,
      "power_reliability": 8.0,
      "water_availability": 6.5,
      "traffic_congestion": 3.5,
      "nightlife_score": 8.5
    },

    "bangalore": {
      "rent_index": 1.3,
      "avg_room_rent": 2500,
      "food_cost": 4800,
      "transport_cost": 2000,
      "public_transport_score": 7.5,
      "safety_score": 7.5,
      "women_safety_score": 7.4,
      "air_quality": 6.5,
      "climate_comfort": 7.5,
      "job_opportunities": 9.5,
      "avg_salary_index": 1.6,
      "healthcare_score": 8.0,
      "education_score": 8.2,
      "internet_quality": 9.2,
      "power_reliability": 7.8,
      "water_availability": 6.0,
      "traffic_congestion": 4.2,
      "nightlife_score": 7.8
    },

    "chennai": {
      "rent_index": 1.1,
      "avg_room_rent": 2100,
      "food_cost": 4200,
      "transport_cost": 1700,
      "public_transport_score": 7.8,
      "safety_score": 7.8,
      "women_safety_score": 8.0,
      "air_quality": 6.0,
      "climate_comfort": 5.8,
      "job_opportunities": 7.5,
      "avg_salary_index": 1.2,
      "healthcare_score": 8.0,
      "education_score": 7.6,
      "internet_quality": 8.0,
      "power_reliability": 8.2,
      "water_availability": 7.5,
      "traffic_congestion": 5.0,
      "nightlife_score": 6.5
    },

    "hyderabad": {
      "rent_index": 1.0,
      "avg_room_rent": 2000,
      "food_cost": 4000,
      "transport_cost": 1600,
      "public_transport_score": 7.0,
      "safety_score": 7.2,
      "women_safety_score": 7.0,
      "air_quality": 6.2,
      "climate_comfort": 6.5,
      "job_opportunities": 8.0,
      "avg_salary_index": 1.3,
      "healthcare_score": 7.5,
      "education_score": 7.2,
      "internet_quality": 8.2,
      "power_reliability": 7.5,
      "water_availability": 7.0,
      "traffic_congestion": 5.5,
      "nightlife_score": 6.8
    },

    "kolkata": {
      "rent_index": 0.9,
      "avg_room_rent": 1800,
      "food_cost": 3800,
      "transport_cost": 1500,
      "public_transport_score": 7.5,
      "safety_score": 7.0,
      "women_safety_score": 6.8,
      "air_quality": 5.8,
      "climate_comfort": 6.0,
      "job_opportunities": 6.5,
      "avg_salary_index": 1.0,
      "healthcare_score": 7.2,
      "education_score": 7.0,
      "internet_quality": 7.5,
      "power_reliability": 7.0,
      "water_availability": 7.2,
      "traffic_congestion": 6.0,
      "nightlife_score": 5.8
    },

    "pune": {
      "rent_index": 1.1,
      "avg_room_rent": 2300,
      "food_cost": 4300,
      "transport_cost": 1700,
      "public_transport_score": 7.0,
      "safety_score": 7.6,
      "women_safety_score": 7.8,
      "air_quality": 6.8,
      "climate_comfort": 7.2,
      "job_opportunities": 8.2,
      "avg_salary_index": 1.3,
      "healthcare_score": 7.6,
      "education_score": 7.8,
      "internet_quality": 8.5,
      "power_reliability": 7.8,
      "water_availability": 6.8,
      "traffic_congestion": 5.5,
      "nightlife_score": 7.2
    },

    "kochi": {
      "rent_index": 0.85,
      "avg_room_rent": 1700,
      "food_cost": 3600,
      "transport_cost": 1400,
      "public_transport_score": 6.8,
      "safety_score": 8.2,
      "women_safety_score": 8.5,
      "air_quality": 7.5,
      "climate_comfort": 7.8,
      "job_opportunities": 6.8,
      "avg_salary_index": 0.95,
      "healthcare_score": 7.8,
      "education_score": 7.2,
      "internet_quality": 7.5,
      "power_reliability": 7.0,
      "water_availability": 8.2,
      "traffic_congestion": 6.8,
      "nightlife_score": 5.5
    }
  
};


/* ===============================
   FIELD CONFIG (FUTURE PROOF)
================================ */

const livingFields = {
  avg_room_rent: {
    label: "Average Room Rent",
    unit: "₹",
    better: "lower"
  },
  food_cost: {
    label: "Food Cost",
    unit: "₹",
    better: "lower"
  },
  transport_cost: {
    label: "Transport Cost",
    unit: "₹",
    better: "lower"
  },
  rent_index: {
    label: "Rent Index",
    unit: "",
    better: "lower"
  },
  avg_salary_index: {
    label: "Salary Index",
    unit: "",
    better: "higher"
  },
  public_transport_score: {
    label: "Public Transport",
    unit: "",
    better: "higher"
  },
  safety_score: {
    label: "Safety Score",
    unit: "",
    better: "higher"
  },
  women_safety_score: {
    label: "Women Safety",
    unit: "",
    better: "higher"
  },
  air_quality: {
    label: "Air Quality",
    unit: "",
    better: "higher"
  },
  climate_comfort: {
    label: "Climate Comfort",
    unit: "",
    better: "higher"
  },
  healthcare_score: {
    label: "Healthcare",
    unit: "",
    better: "higher"
  },
  education_score: {
    label: "Education",
    unit: "",
    better: "higher"
  },
  internet_quality: {
    label: "Internet Quality",
    unit: "",
    better: "higher"
  },
  power_reliability: {
    label: "Power Reliability",
    unit: "",
    better: "higher"
  },
  water_availability: {
    label: "Water Availability",
    unit: "",
    better: "higher"
  },
  traffic_congestion: {
    label: "Traffic Congestion",
    unit: "",
    better: "lower"
  },
  nightlife_score: {
    label: "Nightlife",
    unit: "",
    better: "higher"
  },
  job_opportunities: {
  label: "Job Opportunities",
  unit: "",
  better: "higher"
  }

};


/* ===============================
   INLINE AUTOCOMPLETE
================================ */

function setupLivingAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  if (!input || !list) return;

  input.addEventListener("input", () => {
    const value = input.value.trim().toLowerCase();
    list.innerHTML = "";
    list.style.display = "none";
    input.dataset.cityId = "";

    if (!value) return;

    const matches = livingCities.filter(c =>
      c.name.toLowerCase().includes(value)
    );

    if (!matches.length) return;

    matches.forEach(city => {
      const item = document.createElement("div");
      item.className = "yt-suggestion";
      item.textContent = city.name;

      item.onclick = () => {
        input.value = city.name;
        input.dataset.cityId = city.id;
        list.innerHTML = "";
        list.style.display = "none";
      };

      list.appendChild(item);
    });

    list.style.display = "block";
  });

  document.addEventListener("click", e => {
    if (!list.contains(e.target) && e.target !== input) {
      list.innerHTML = "";
      list.style.display = "none";
    }
  });
}

/* ===============================
   COMPARE LOGIC
================================ */

let visibleFieldCount = 8;
const LOAD_STEP = 6;
let currentKeys = [];
let currentCityA = null;
let currentCityB = null;

function compareLivingCost() {
  const cityAId = document.getElementById("cityA").dataset.cityId;
  const cityBId = document.getElementById("cityB").dataset.cityId;
  const results = document.getElementById("livingResults");

  if (!cityAId || !cityBId || cityAId === cityBId) {
    results.innerHTML = `<div class="message error">
      Please select two different cities from suggestions.
    </div>`;
    return;
  }

  currentCityA = livingCostData[cityAId];
  currentCityB = livingCostData[cityBId];
  currentKeys = Object.keys(livingFields);
  visibleFieldCount = 8;

  renderLivingRows();
}

function renderLivingRows() {
  const results = document.getElementById("livingResults");
  results.innerHTML = "";

  const slice = currentKeys.slice(0, visibleFieldCount);

  slice.forEach(key => {
    if (!(key in currentCityA) || !(key in currentCityB)) return;

    const field = livingFields[key];
    const row = document.createElement("div");
    row.className = "living-row";

    row.innerHTML = `
      <div>${field.label}</div>
      <div>${field.unit}${currentCityA[key]}</div>
      <div>${field.unit}${currentCityB[key]}</div>
    `;

    results.appendChild(row);
  });

  if (visibleFieldCount < currentKeys.length) {
    const btn = document.createElement("button");
    btn.className = "load-more-btn";
    btn.textContent = "Load more";

    btn.onclick = () => {
      visibleFieldCount += LOAD_STEP;
      renderLivingRows();
    };

    results.appendChild(btn);
  }
}

/* ===============================
   INIT
================================ */

document.addEventListener("DOMContentLoaded", () => {
  setupLivingAutocomplete("cityA", "cityAList");
  setupLivingAutocomplete("cityB", "cityBList");

  const btn = document.getElementById("compareBtn");
  if (btn) btn.addEventListener("click", compareLivingCost);
});
