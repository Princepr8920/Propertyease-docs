export default function Docs({ currentDoc, setDoc }) {
  const handleDocNav = (path) => setDoc(path);

  return (
    <div className="docs">
      <h1 className="doc-heading">{currentDoc.title}</h1>
      <ul className="doc-list">
        {currentDoc.doc &&
          currentDoc.doc.map((e, i) => (
            <li key={i} className="doc-list-item">
              <strong>{e.heading}:</strong>
              {e.paragraph.map((p, pKay) => (
                <>
                  <p key={pKay}>{p.info}</p>
                  {p.related && (
                    <div className="terms-explained">
                      <strong>{p.related[0]}:</strong>
                      <ul>
                        {p.related[1].map((j, jKey) => (
                          <li key={jKey}>
                            <span>{j.heading}:</span> {j.text}
                            <br />
                            {j.heading === "Plot Size" && (
                              <ul className="deeper-list">
                                {j.sizes.map((s, skey) => (
                                  <li key={skey}>
                                    <u>{s.type} </u>: {s.description}
                                    <br />
                                    {s.formula}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ))}
            </li>
          ))}
      </ul>
      <div className="doc-navigation">
        <div>
          {currentDoc.navigation[0] && (
            <button
              className="doc-nav-btn"
              onClick={() => handleDocNav(currentDoc.navigation[0])}
            >
              <span>Previous</span>
              <strong>{`◀ ${currentDoc.navigation[0]}`}</strong>
            </button>
          )}
        </div>

        <div>
          {currentDoc.navigation[1] && (
            <button
              className="doc-nav-btn"
              onClick={() => handleDocNav(currentDoc.navigation[1])}
            >
              <span>Next</span>
              <strong>{`${currentDoc.navigation[1]} ▶`}</strong>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
