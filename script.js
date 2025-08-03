const translations = {
  en: {
    dashboard: "Dashboard",
    upload: "Upload Video",
    wallet: "Wallet",
    settings: "Settings",
    welcome: "Welcome, User",
    description: "Manage your TubeEarn account and features here."
  },
  hi: {
    dashboard: "डैशबोर्ड",
    upload: "वीडियो अपलोड करें",
    wallet: "वॉलेट",
    settings: "सेटिंग्स",
    welcome: "स्वागत है, उपयोगकर्ता",
    description: "अपने TubeEarn खाते और सुविधाओं का प्रबंधन करें।"
  }
};

const langSelector = document.getElementById("language-selector");

langSelector.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
});
