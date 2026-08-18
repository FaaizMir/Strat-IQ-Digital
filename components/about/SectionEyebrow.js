export default function SectionEyebrow({ label, edition }) {
  return (
    <div className="title-small-main">
      <div className="flex-small-title">
        <div className="plus-icon">
          <img src="/images/webflow/69a03137ec5530c51522b5ff_plus.webp" loading="lazy" alt="" />
        </div>
        <div className="top-text">{label}</div>
      </div>
      <div>
        <img
          width="11"
          loading="lazy"
          alt=""
          src="/images/webflow/69a023ed38982c825d59ca03_arrows-2.webp"
          className="arrow-gray hide-mobile"
        />
      </div>
      <div className="flex-small-title">
        <div className="top-text gray">{edition}</div>
      </div>
    </div>
  );
}
