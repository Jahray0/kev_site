import "./Footer.css"

function Footer() {
  return <div className="footer">
    <div className="logo_content">IMAGE</div>

    <div className="middle_content">
      <div className="planSite">
        <div className="footer_title">
          <h3>Navigation</h3>
        </div>
      <div className="plan_list">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        </div>
      </div>
      <div className="partenariat">
        <div className="footer_title">
          <h3>Partenariats</h3>
        </div>
        <div className="ensemble_part">
          <div>logo</div>
          <div>logo</div>
          <div>logo</div>
        </div>

      </div>
    </div>

    <div className="follow_content">
    <div className="footer_title"><h3>Suivez-moi</h3></div>
    <div className="follow_content">
        <div>facebook</div>
        <div>instagram</div>
        <div>twitter</div>
      </div>
    </div>

    </div>;
}

export default Footer;
