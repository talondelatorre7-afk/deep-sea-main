module.exports = {
    name: "Deep Sea Digital",
    email: "help@deepsea.digital",
    phoneForTel: "909-919-0912",
    phoneFormatted: "(909) 919-0912",
    address: {
        lineOne: "14406 Frostburg Ave",
        lineTwo: "Second Address Line",
        city: "Chino",
        state: "CA",
        zip: "91710",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
