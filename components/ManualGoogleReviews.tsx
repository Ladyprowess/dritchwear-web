"use client";

type Review = {
  name: string;
  avatarUrl?: string; // optional
  monthsAgo: number;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-[#FDB813]" : "text-black/15"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function GoogleMark() {
  // simple “G” dot mark (not perfect Google logo, but clean)
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-black/10">
      <span className="font-extrabold text-black">G</span>
    </div>
  );
}

export function ManualGoogleReviews() {
  // ✅ EDIT THESE MANUALLY ANYTIME
  const reviews: Review[] = [
    {
      name: "RAJI OLATUNJI",
      monthsAgo: 1,
      rating: 5,
      text:
        "I ordered for Joggers for my family online, also ordered for two sweatshirts. It was delivered the next day. To my surprise the quality was top-notch.",
    },
    {
      name: "Eunice Toluwalope",
      monthsAgo: 3,
      rating: 5,
      text:
        "I give you 5 stars for making and delivering quality wear to me. I love my hoodie and the material is screaming quality. Thanks so much!",
    },
    {
      name: "Okafor Esther",
      monthsAgo: 5,
      rating: 5,
      text:
        "Thank you so much for the branding of Testers connect swags and delivery to all participants. You really made the process seamless and stress-free.",
    },
  ];

  const avg = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  // put your real Google review link here (the “Write a review” link)
const viewReviewsLink = "https://www.google.com/maps/place/Dritchwear/@9.0338725,8.6707713,6z/data=!4m8!3m7!1s0xa807a2f609262b57:0x55ab007526652308!8m2!3d9.0338725!4d8.6707713!9m1!1b1!16s%2Fg%2F11xlz2zb64?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D";
  const writeReviewLink = "https://g.page/r/CQgjZSZ1AKtVEBI/review";

  
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-[var(--brand-purple)]">What Our Customers</span>{" "}
          <span className="text-[#FDB813]">Say</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-black/60">
          See what people are saying about Dritchwear on Google.
        </p>
      </div>

      {/* Top bar (like your screenshot) */}
      <div className="mt-10 rounded-2xl border border-black/10 bg-black/[0.03] p-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <GoogleMark />
          <div>
            <p className="font-bold text-lg text-black">
              Google <span className="font-extrabold">Reviews</span>
            </p>

            <div className="mt-1 flex items-center gap-3">
              <span className="text-2xl font-extrabold text-black">{avg}</span>
              <Stars rating={Math.round(Number(avg))} />
              <span className="text-sm text-black/50">({reviews.length})</span>
            </div>
          </div>
        </div>

        <a
  href={writeReviewLink}
  target="_blank"
  rel="noreferrer"
  className="btn btn-purple rounded-full px-6 py-3"
>
  Review us on Google
</a>


      </div>

      {/* Review cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-[var(--shadow-sm)]"
          >
            {/* header */}
            <div className="flex items-start gap-4">
              {/* avatar */}
              <div className="h-12 w-12 overflow-hidden rounded-full border border-black/10 bg-black/[0.03] grid place-items-center">
                {r.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={r.avatarUrl}
                    alt={r.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-bold text-[var(--brand-purple)]">
                    {r.name.slice(0, 1).toUpperCase()}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-extrabold text-black truncate">{r.name}</p>
                  <span className="text-xs text-black/40">{r.monthsAgo} months ago</span>
                </div>

                <div className="mt-2">
                  <Stars rating={r.rating} />
                </div>
              </div>
            </div>

            {/* text */}
            <p className="mt-4 text-sm leading-6 text-black/75">
              {r.text}
            </p>

            {/* read more */}
            <a
  href={viewReviewsLink}
  target="_blank"
  rel="noreferrer"
  className="mt-4 inline-block text-sm font-semibold text-[#1A73E8] hover:underline"
>
  Read more
</a>

          </div>
        ))}
      </div>
    </section>
  );
}
