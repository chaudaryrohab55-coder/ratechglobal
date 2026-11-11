const REVIEWS = [
  {
    name: "Kashif Latif",
    role: "Client",
    text: "Such a great experience with Ratech Global services 10000% recommended 🔥",
  },
  {
    name: "Ragoods",
    role: "E-commerce brand owned by our founder",
    text: "I am very thankful to ratech GLOBAL team because in past I face very issue in my e-commerce buisness and ratech global solve this in very short time I am very satisfied ❤️😊",
  },
  {
    name: "Shahzad Saleem",
    role: "Client",
    text: "I am fully satisfied",
  },
];

export default function ClientReviews() {
  return (
    <section className="section-pad bg-[#020205]" id="reviews">
      <div className="container">
        <div className="text-center mb-12">
          <div className="label mb-4">Client Reviews</div>
          <h2 className="font-display font-black text-white mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Reviews from our Google Business Profile, shown as written.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
            >
              <div className="text-yellow-400 mb-3" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="text-slate-300 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold text-white">{r.name}</div>
                <div className="text-slate-400">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
