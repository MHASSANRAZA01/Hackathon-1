var ResumeForm = document.getElementById("resumeForm");
var ResumeOutput = document.getElementById("resumeOutput");
var ProfilePic = document.getElementById("profilePic");
var ToggleSkillsButton = document.getElementById("toggleSkills");
var SkillsSection = document.getElementById("skill");
ResumeForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin")
        .value;
    var education = document.getElementById("education")
        .value;
    var skills = document.getElementById("skills").value.split(",");
    var workExperience = document.getElementById("workExperience").value;
    var profileImage = (_a = document.getElementById("profileImage").files) === null || _a === void 0 ? void 0 : _a[0];
    if (profileImage) {
        ProfilePic.src = URL.createObjectURL(profileImage);
    }
    document.getElementById("personalInfo").innerHTML = "\n        <b>Name:</b> ".concat(name, "<br><br>\n        <b>Phone:</b> ").concat(phone, "<br><br>\n        <b>Email:</b> <a href=\"mailto:").concat(email, "\">").concat(email, "</a><br><br>\n        <b>LinkedIn:</b> <a href=\"").concat(linkedin, "\" target=\"_blank\">LinkedIn Profile</a>\n    ");
    document.getElementById("educationInfo").innerText = education;
    var skillsHTML = skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join("");
    document.getElementById("workExperienceInfo").innerText = workExperience;
    document.getElementById("skillsInfo").innerHTML = "<ul>".concat(skillsHTML, "</ul>");
    ResumeOutput.style.display = "block";
});
ToggleSkillsButton.addEventListener("click", function () {
    if (SkillsSection.style.display === "none") {
        SkillsSection.style.display = "block";
    }
    else {
        SkillsSection.style.display = "none";
    }
});
