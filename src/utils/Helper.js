import { subDomainList } from "./constant";

export const getApps= () => {
    const subdomain=getSubDomain(window.location.hostname);
    const mainApp=subDomainList.find((app)=>app.main);
    if(subdomain===""){
        return mainApp.app;
    }
    const apps=subDomainList.find((app)=>app.subdomain===subdomain);

    return apps?apps.app:mainApp.app;
}

//https://localhost:5173
//https://www.urlshortener.com

export const getSubDomain = (hostname) => {
    const parts = hostname.split('.');
    const isLocahost=parts.slice(-1)[0]==="localhost";
    const sliceTill= isLocahost? -1:-2;
    return parts.slice(0, sliceTill).join('.');
}
