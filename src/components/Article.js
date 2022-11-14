export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>
          Welcome to We All Scream For Ice Cream!
          
          A Blogpost for all things Ice Cream.
          
          Here, you can indulge in the world of flavours!

          We hope you have a good read.

          Please select an article.
        </p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
      <p>"Poody-di Scoop, Scoop-diddy-whoop" - Kanye West</p>
    
    </article>
  );
}
