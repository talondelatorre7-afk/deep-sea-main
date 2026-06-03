module.exports = {
    name: "Deep Sea Digital",
    email: "talondelatorre7@gmail.com",
    phoneForTel: "951-592-8666",
    phoneFormatted: "(951) 592-8666",
    socials: {
        facebook: "https://www.facebook.com/log00001",
        instagram: "https://www.instagram.com/deepseawebdesign",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://deepseadigital.online",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
