export const countryAPI = "http://api.first.org/data/v1/countries";
export const BACKGROUND_URL = "https://transitive-bullshit.github.io/react-starfield-animation/static/media/stars.492b41ed.jpg";
export const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adrian-americo-paiva`;

// ROTAS CLIENT
export const goToHomePage = (history) => {
    history.replace("/");
}
export const goToLastPage = (history) => {
    history.goBack();
}
export const goToListTrips = (history) => {
    history.push("/trips/list");
}
export const goToFormPage = (history) => {
    history.push("/trips/application");
}

//ROTAS ADMIN

export const goToAdminPage = (history) => {
    history.push("/admin/trips/list");
}
export const goToLoginPage = (history) => {
    history.push("/login");
}
export const goToCreateTripPage = (history) => {
    history.push("/admin/trip/list/create")
}



