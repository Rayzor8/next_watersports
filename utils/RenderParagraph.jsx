function RenderParagraph({ parags }) {
    return (
      <>
        {parags.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </>
    );
  }

  export default RenderParagraph