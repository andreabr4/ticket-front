import { useTranslation } from "react-i18next";
import logoGray from "../../images/logoGray.png"


function Footer() {
  const { t } = useTranslation();

  return (
    <div className="" style={{ borderTop: "1px solid #e5e5e5", backgroundColor: "#e5e5e5" }}>
      <div className="flex justify-between items-center mt-20 mx-10">
        <div className="mb-10">
          <h2 className="font-bold mb-5">{t("contact_footer")}</h2>
          <a href="mailto:contacto@rowONE.com">contacto@rowONE.com</a>
        </div>
        <div className="mb-10 underline">
          <a href={"https://p01--ticket-back--5y4264lh9kc4.code.run/docu"}>{t("docu_footer")}</a>
        </div>
        <div className="mb-10">
          <img
            src={logoGray}
            className="h-20 w-auto"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

