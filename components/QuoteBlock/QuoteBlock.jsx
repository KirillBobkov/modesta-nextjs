import { VisibilityManager } from "../VisibilityManager.jsx";

export function QuoteBlock({ title, author, quote }) {
  return (
    <section className="mx-auto w-full" id="quote">
      <VisibilityManager
        as="div"
        className="w-full mx-auto rounded-[30px] flex flex-col justify-center pt-[30px] px-[30px] pb-[70px] text-base leading-[25px] md:max-w-[800px] md:pt-[80px] md:px-[40px] md:pb-[120px] md:text-lg md:leading-7"
      >
        {title ? (
          <h2 className="max-w-sm text-left text-2xl leading-8 mb-5 font-bold whitespace-pre-line uppercase md:max-w-none md:text-center md:text-5xl md:leading-[60px] md:mb-7.5">
            {title}
          </h2>
        ) : null}
        {quote ? (
          <p className="text-left mb-[30px] whitespace-pre-line text-font-secondary md:text-center md:text-base md:leading-[25px]">
            {quote}
          </p>
        ) : null}
        {author ? (
          <span className="text-left font-bold whitespace-pre-line text-accent md:text-center md:text-base md:leading-[25px]">
            {author}
          </span>
        ) : null}
      </VisibilityManager>
    </section>
  );
}
