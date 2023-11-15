import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Bosta: "Bosta",
      navItem: {
        Home: "Home",
        Pricing: "Pricing",
        "Contact Sales": "Contact Sales",
      },
      "Track Shipment": "Track Shipment",
      "Sign In": "Sign In",
      "Track your shipment": "Track your shipment",
      "Tracking number": "Tracking number",
      "Shipment number": "Shipment number",
      "Last Update": "Last Update",
      "Seller Name": "Seller Name",
      "Promised Date": "Promised Date",
      "Out For Delivery":"Out For Delivery",

      Address: "Address",
      "Package Details": "Package Details",
      "Rebort a problem": "Rebort a problem",
      Question: "Is there a problem with your package?!",
      "Static Address":
        "Zahraa el Maadi, el Zahraa main ST, building 3A, Cairo",
      Branch: "Branch",
      Date: "Date",
      Time: "Time",
      Details: "details",
    },
  },
  ar: {
    translation: {
      Bosta: "بوسطة",
      "Track Shipment": "تتبع شحنتك",
      "Sign In": "تسجبل الدخول",
      "Track your shipment": "تتبع شحنتك",
      "Tracking number": "رقم التتبع",
      "Shipment number": "رقم الشحنة",
      "Last Update": "أخر تحديث",
      "Seller Name": "اسم التاجر",
      "Promised Date": "موعد التسليم خلال",
      "Out For Delivery": "الشحنة خرجت للتسليم",
      Address: "عنوان التسليم",
      "Package Details": "تفاصيل الشحنة",
      "Rebort a problem": "ابلاغ عن مشكلة",
      Question: "!هل يوجد مشكلة في شحنتك؟",
      "Static Address":
        "زهراء المعادي, شارع الزهراء الرئيسي عمارة 3أ , القاهرة",
      Branch: "الفرع",
      Date: "التاريخ",
      Time: "الوقت",
      Details: "التفاصيل",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    resources,
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "querystring",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
      // react already safes from xss
    },
  });

export default i18n;
