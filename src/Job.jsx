function Job({ companyData, tagName, setTagName, setSearchBarVisible }) {
  function handleClick(clickedTag) {
    setSearchBarVisible(true);

    if (tagName.includes(clickedTag)) return;

    setTagName((prevTagName) => [...prevTagName, clickedTag]);
  }

  const filteredCompanies =
    tagName.length > 0
      ? companyData.filter((company) => {
          const companyTags = [
            company.role,
            company.level,
            ...company.languages,
            ...company.tools,
          ];
          return tagName.every((tag) => companyTags.includes(tag));
        })
      : companyData;

  return (
    <div className="jobs-container">
      {filteredCompanies.map((company) => (
        <div className="job-container" key={company.id}>
          <div className="logo-and-details">
            <div className="company-logo">
              <img
                className="company-logo-image"
                src={company.logo}
                alt={company.id}
              />
            </div>

            <div className="job-position-details">
              <div className="company-new-featured-container">
                <p className="company-name">{company.company}</p>
                {company.new && <p className="new">NEW!</p>}
                {company.featured && <p className="featured">FEATURED</p>}
              </div>
              <p className="job-position">{company.position}</p>
              <ul className="bottom-details">
                <li>{company.postedAt}</li>
                <li>{company.contract}</li>
                <li>{company.location}</li>
              </ul>
            </div>
          </div>

          <div className="tags">
            <p
              className="tag"
              onClick={() => {
                handleClick(company.role);
              }}
            >
              {company.role}
            </p>
            <p
              className="tag"
              onClick={() => {
                handleClick(company.level);
              }}
            >
              {company.level}
            </p>
            {company.languages.map((language, index) => (
              <p
                className="tag"
                key={index}
                onClick={() => {
                  handleClick(language);
                }}
              >
                {language}
              </p>
            ))}
            {company.tools.length > 0 &&
              company.tools.map((tool) => (
                <div
                  className="tag"
                  onClick={() => {
                    handleClick(tool);
                  }}
                >
                  <p>{tool}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Job;
