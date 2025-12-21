// Data for streams
var streams = {
  science: {
    title: "Science",
    desc: "Focus on Physics, Chemistry, Biology, Maths and choose your career.",
    substreams: {
      "PCM - Engineering": ["Mechanical, Civil, Electrical, Computer Science", "Engineering colleges", "Research opportunities"],
      "PCB - Medical": ["MBBS, BDS, Nursing, Pharmacy", "Medical colleges", "Research & Biotechnology"],
      "Architecture & Design": ["B.Arch, Interior Design", "Design firms", "Urban Planning careers"],
      "Research & Science Careers": ["Physics, Chemistry, Biology Research", "Lab Technician", "Academia & Innovation"]
    }
  },
  commerce: {
    title: "Commerce",
    desc: "Focus on accounts, economics, business studies and finance.",
    substreams: {
      "Accountancy & Economics": ["CA, CMA, Financial Analyst", "Accounting firms", "Tax consultant"],
      "Business & Management": ["BBA, MBA, Entrepreneurship", "Corporate jobs", "Business Development"],
      "Chartered Accountancy (CA)": ["CA Foundation, Articleship", "Accounting & auditing", "Finance consulting"],
      "Finance & Banking": ["Banking exams, B.Com", "Bank jobs", "Financial analyst"]
    }
  },
  arts: {
    title: "Arts / Humanities",
    desc: "Study history, sociology, law, languages, and explore creative careers.",
    substreams: {
      "Law & Legal Studies": ["CLAT, LLB", "Law firms", "Corporate legal advisor"],
      "Journalism & Mass Communication": ["BA Journalism", "Media houses", "Content creation"],
      "Psychology & Sociology": ["BA/BSc Psychology", "Counseling", "Research"],
      "UPSC / Civil Services": ["Civil Services preparation", "Government jobs", "Policy making"]
    }
  },
  diploma: {
    title: "Diploma / Vocational",
    desc: "Focus on practical skills in various trades and technical fields.",
    substreams: {
      "Mechanical, Civil, Electrical": ["Diploma courses", "Technical jobs", "Entrepreneurship"],
      "Automobile Engineering": ["Diploma in Automobile", "Car manufacturing", "Repair & Maintenance"],
      "Fashion Designing": ["Diploma in Fashion Design", "Design studios", "Start own brand"],
      "Hospitality & Tourism": ["Hotel management", "Tourism industry jobs", "Event management"]
    }
  },
  it: {
    title: "IT & Computers",
    desc: "Explore programming, AI, web development, and data science.",
    substreams: {
      "Software Development": ["Java, C++, Python", "IT companies", "Freelancing & Startups"],
      "Web & App Development": ["HTML, CSS, JavaScript", "Web agencies", "App development"],
      "AI & Machine Learning": ["Python, Data Analysis", "AI startups", "Research"],
      "Data Science & Analytics": ["SQL, Python, Excel", "Data analytics firms", "Business intelligence"]
    }
  },
  defense: {
    title: "Defense Services",
    desc: "Serve the nation in Army, Navy, Air Force or Paramilitary.",
    substreams: {
      "Indian Army": ["Soldier, Officer, Technical branches", "Training academies", "Career growth in defense"],
      "Indian Navy": ["Navigation, Engineering, Logistics", "Naval academy", "Maritime careers"],
      "Indian Air Force": ["Pilot, Technical branches", "AFA training", "Aviation careers"],
      "NDA & Training Academies": ["National Defense Academy", "Training & Commission", "Defense service opportunities"]
    }
  }
};

// Show substreams
function showStream(streamKey) {
  document.getElementById("streamPage").style.display = "none";
  document.getElementById("substreamPage").style.display = "block";

  var stream = streams[streamKey];
  document.getElementById("streamTitle").innerText = stream.title;
  document.getElementById("streamDesc").innerText = stream.desc;

  var subDiv = document.getElementById("substreamList");
  subDiv.innerHTML = "";

  for (let sub in stream.substreams) {
    let div = document.createElement("div");
    div.className = "substream-box";
    div.innerText = sub;
    div.onclick = function () {
      showOpportunities(streamKey, sub);
    };
    subDiv.appendChild(div);
  }
}

// Show career opportunities
function showOpportunities(streamKey, substream) {
  document.getElementById("substreamPage").style.display = "none";
  document.getElementById("opportunityPage").style.display = "block";

  document.getElementById("substreamTitle").innerText = substream;

  var list = document.getElementById("opportunityList");
  list.innerHTML = "";

  streams[streamKey].substreams[substream].forEach(function (item) {
    var li = document.createElement("li");
    li.className = "opportunity";
    li.innerText = item;
    list.appendChild(li);
  });
}

// Back buttons
function backToStreams() {
  document.getElementById("substreamPage").style.display = "none";
  document.getElementById("streamPage").style.display = "block";
}

function backToSubstreams() {
  document.getElementById("opportunityPage").style.display = "none";
  document.getElementById("substreamPage").style.display = "block";
}

// ✅ FAQ toggle (NOW WORKS)
document.querySelectorAll(".faq-question").forEach(function (question) {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});
