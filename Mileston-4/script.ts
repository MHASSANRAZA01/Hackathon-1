const ResumeForm = document.getElementById("resumeForm") as HTMLFormElement;
const ResumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
const ProfilePic = document.getElementById("profilePic") as HTMLImageElement;
const ToggleSkillsButton = document.getElementById(
  "toggleSkills"
) as HTMLButtonElement;
const SkillsSection = document.getElementById("skill") as HTMLElement;

ResumeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement)
    .value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");
  const workExperience = (
    document.getElementById("workExperience") as HTMLTextAreaElement
  ).value;

  const profileImage = (
    document.getElementById("profileImage") as HTMLInputElement
  ).files?.[0];
  if (profileImage) {
    ProfilePic.src = URL.createObjectURL(profileImage);
  }

  document.getElementById("personalInfo")!.innerHTML = `
        <b>Name:</b> ${name}<br><br>
        <b>Phone:</b> ${phone}<br><br>
        <b>Email:</b> <a href="mailto:${email}">${email}</a><br><br>
        <b>LinkedIn:</b> <a href="${linkedin}" target="_blank">LinkedIn Profile</a>
    `;

  document.getElementById("educationInfo")!.innerText = education;

  const skillsHTML = skills.map((skill) => `<li>${skill.trim()}</li>`).join("");

  document.getElementById("workExperienceInfo")!.innerText = workExperience;

  document.getElementById("skillsInfo")!.innerHTML = `<ul>${skillsHTML}</ul>`;
  
  ResumeOutput.style.display = "block";
});

ToggleSkillsButton.addEventListener("click", () => {
  if (SkillsSection.style.display === "none") {
    SkillsSection.style.display = "block";
  } else {
    SkillsSection.style.display = "none";
  }
});
