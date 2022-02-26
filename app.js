const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelector("[data-step]")];
let currentStep = parseInt(
  formSteps.findIndex((step) => {
    return step.classList.contains("active");
  })?.dataset.step
);

console.log(currentStep);
