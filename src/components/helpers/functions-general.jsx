export const imgPath = "http://localhost/viter-zenorobe/public/img";


const urlClothesLocal = "http://localhost/viter-zenorobe"; //from thunder client

// ONLINE DEV and LOCAL hris
export const devApiUrl = `${urlClothesLocal}/rest`;
export const devNavUrl = ""; //removed /v2
export const devBaseImgUrl = `${imgPath}`;
export const devBaseUrl = `${urlClothesLocal}`;

// dev key from thunder client
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};