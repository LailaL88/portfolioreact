function PortfolioItem(props) {
  return (
    <div className="portfolio-item">
      <img src={props.img} alt="portfolio item image" />
      <p>HTML, CSS, JS, WordPress</p>
      <a href={props.link} target="_blank" >
        <button className="button">
          <span>Visit site</span>
        </button>
      </a>
    </div>
  );
}

export default PortfolioItem;
