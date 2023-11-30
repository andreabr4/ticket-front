import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "concerts": "Upcoming concerts",
      "concerts_not_selected": "There are no selected concerts",
      "go_back_concerts": "Find your concert!",
      "details_details": "Details ",
      "details_place": "Place: ",
      "details_date": "Date and time: ",
      "details_price": "Ticket price: ",
      "details_pay":"Purchase",
      "details_select_n_tickets": "Choose number of tickets",
      "leaflet_location": "Enjoy your concert here",
      "introduce_name_login":"Introduce your name",
      "introduce_email_login": "Introduce your email",
      "introduce_password_login": "Introduce your password",
      "btn_login": "Login",
      "register": "New to RowONE? Sign up!",
      "payment_failed": "Payment failed",
      "payment_failed_message": "Sorry, there was an issue processing your payment. Please try again.",
      "concerts_failure": "Go back to Upcoming Concerts",
      "payment_success": "Successful payment!",
      "payment_success_message": " Your payment has been processed successfully.",
      "welcome_message": "Welcome",
      "log_out": "Log out",
      "log_in": "Log in",
      "login_title": "Log in", 
      "signup_title":"Sign up",
      "sign_up": "Sign up",
      "introduce_name_signup": "Introduce your name",
      "introduce_surname_signup": "Introduce your surname",
      "introduce_email_signup": "Introduce your email",
      "introduce_password_signup": "Introduce your password", 
      "signup":"Sign up", 
      "signup_to_login": "Already have a RowONE account?", 
      "contact_footer":"Contact with us:", 
      "docu_footer":"Are you a developer? Find here our documentation"
    }
  },
  es: {
    translation: {
      "concerts": "Próximos conciertos",
      "concerts_not_selected": "No has seleccionado ningún concierto",
      "go_back_concerts": "¡Encuentra el concierto de tu vida!",
      "details_details": "Detalles ",
      "details_place": "Lugar: ",
      "details_date": "Fecha y hora:",
      "details_price": "Precio: ",
      "details_pay":"Comprar",
      "details_select_n_tickets": "Selecciona número de entradas",
      "leaflet_location": "Disfruta de tu concierto aquí",
      "introduce_name_login": "Introduce tu nombre",
      "introduce_email_login": "Introduce tu email",
      "introduce_password_login": "Introduce tu contraseña",
      "btn_login": "Acceder",
      "register": "¿Eres nuevo en RowONE? ¡Regístrate!",
      "payment_failed": "El pago no se ha completado",
      "payment_failed_message": "Disculpa, hay surgido un error durante el proceso de pago. Por favor, inténtalo de nuevo",
      "concerts_failure": "Volver a próximos conciertos",
      "payment_success": "¡Pago completado!",
      "payment_success_message": "Tu pago ha sido procesado correctamente",
      "welcome_message": "Bienvenido/a ",
      "log_out": "Cerrar sesión",
      "log_in": "Inicia sesión",
      "login_title": "Inicia sesión",
      "sign_up": "Registrate",
      "signup_title": "Registro",
      "introduce_name_signup": "Introduce tu nombre",
      "introduce_surname_signup": "Introduce tu apellido",
      "introduce_email_signup": "Introduce tu email",
      "introduce_password_signup": "Introduce tu contraseña", 
      "signup":"Regístrate", 
      "signup_to_login": "¿Ya tienes una cuenta en RowONE? Inicia sesión", 
      "contact_footer":"Contacta con nosotros/as:", 
      "docu_footer":"¿Eres desarrollador/a? Encuentra aquí nuestra documentación"
    }
  },
  eu: {
    translation: {
      "welcome_message": "Ongi etorri"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
