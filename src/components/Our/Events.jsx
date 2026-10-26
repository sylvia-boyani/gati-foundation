import "./Events.css";
import women from "../../assets/images/women.jpeg";

const activities = [
  {
    number: "01",
    title: "MRF Team",
    text: "The MRF team, alongside Assistant Chief Mr. Gumo John Maroa, a local women leader, and the interim elected women leaders, marking the beginning of a collective journey towards hope, solidarity, and sustainable empowerment in Gwitembe.",
    image: "/images/mrf-team.jpeg",
  },
  {
    number: "02",
    title: "Leadership support",
    text: "Assistant Chief Mr. Gumo John Maroa addresses Gwitembe’s young widows, encouraging collective action through the formation of a registered women’s support group.",
    image: "/images/ass-chief.jpeg",
  },
  {
    number: "03",
    title: "Community Support",
    text: "Having lived through widowhood herself, a local woman leader from Gwitembe now speaks not only from experience, but from concern for the younger widows who still need guidance, emotional support, and someone to walk alongside them.",
    image: "/images/widow.jpeg",
  },
  {
    number: "04",
    title: "Solidarity & Support",
    text: "Standing with a young widowed woman whose world was changed by conflict, listening to her story, and bearing witness to the pain no family should endure.",
    image: "/images/standing.jpeg",
  },
];

const galleryImages = [
  "/images/walking.jpeg",
  "/images/story-wid.jpeg",
  "/images/standing.jpeg",
  "/images/gitwembe-team.jpeg",
  "/images/local-gathering.jpeg",
  "/images/mrf-team.jpeg",
];

const Events = () => {
  return (
    <main className="eventsPage">

      {/* =========================
          HERO
      ========================== */}
      <section className="eventsHero">

        <div className="eventsHeroImage"></div>

        <div className="eventsHeroOverlay"></div>

        <div className="eventsHeroContent">
          <span className="eventsEyebrow">
            FIELD ACTIVITIES
          </span>

          <h1>
            Together,
            <span>We Create Change.</span>
          </h1>

          <p>
            From mentorship and environmental action to community
            engagement, every visit creates an opportunity to listen,
            connect and make a difference.
          </p>

          <div className="eventsHeroMeta">
            <span>GITWEMBE COMMUNITY</span>
            <span className="metaDivider"></span>
            <span>MIGORI COUNTY, KENYA</span>
          </div>
        </div>

      </section>


      {/* =========================
          INTRO
      ========================== */}
      <section className="eventIntro">

        <div className="sectionLabel">
          <span></span>
          OUR RECENT WORK
        </div>

        <div className="introGrid">

          <h2>
            A day in
            <em> Gitwembe.</em>
          </h2>

          <div className="introText">
            <p>
              Our visit to Gitwembe brought together girls, families,
              community leaders and the Margaret Robi Foundation team
              for a day of connection, learning and action.
            </p>

            <p>
              Through mentorship, environmental activities and
              community conversations, we created spaces where
              people could share their experiences, support one
              another and imagine a stronger future together.
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          FEATURED EVENT
      ========================== */}
      <section className="featuredEvent">

        <div className="featuredImage">
          <img
            src={women}
            alt="Margaret Robi Foundation team during the Gitwembe community visit"
          />

          <div className="imageCaption">
            Gitwembe Community Visit
          </div>
        </div>

        <div className="featuredContent">

          <span className="featuredNumber">
            01 / FEATURED VISIT
          </span>

          <h2>
            Showing up for
            <span> community.</span>
          </h2>

          <p>
            Real change begins with presence. During our Gitwembe
            visit, the team spent time with community members,
            listening to their experiences and participating in
            activities designed to strengthen connection,
            resilience and hope.
          </p>

          <p>
            Behind every face is a story, and around this gathering, the young widows of Gwitembe found space to share the losses, challenges, and realities of life shaped by conflict.
          </p>

          <a href="#activities" className="eventsLink">
            Explore the activities
            <span>→</span>
          </a>

        </div>

      </section>


      {/* =========================
          ACTIVITIES
      ========================== */}
      <section className="activitiesSection" id="activities">

        <div className="activitiesHeader">

          <div>
            <div className="sectionLabel">
              <span></span>
              WHAT WE DID
            </div>

            <h2>
              Moments that
              <em> mattered.</em>
            </h2>
          </div>

          <p>
            Every activity was an opportunity to build relationships,
            encourage young people and strengthen the community.
          </p>

        </div>


        <div className="activitiesGrid">

          {activities.map((activity) => (
            <article
              className="activityCard"
              key={activity.number}
            >

              <div className="activityImage">
                <img
                  src={activity.image}
                  alt={activity.title}
                />

                <span>{activity.number}</span>
              </div>

              <div className="activityContent">

                <h3>{activity.title}</h3>

                <p>{activity.text}</p>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =========================
          PHOTO STORY
      ========================== */}
      <section className="photoStory">

        <div className="photoStoryHeader">

          <div className="sectionLabel">
            <span></span>
            FROM THE FIELD
          </div>

          <h2>
            A closer look at
            <em> Gitwembe.</em>
          </h2>

          <p>
            A few moments captured during our time with the
            community.
          </p>

        </div>


        <div className="photoGrid">

          {galleryImages.map((image, index) => (
            <div
              className={`galleryItem galleryItem${index + 1}`}
              key={image}
            >
              <img
                src={image}
                alt={`Gitwembe community activity ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </section>


      {/* =========================
          IMPACT
      ========================== */}
      <section className="eventImpact">

        <div className="impactHeading">
          <span className="sectionLabel light">
            OUR REACH
          </span>

          <h2>
            Change is built
            <em> together.</em>
          </h2>

          <p>
            Every community visit contributes to a larger movement
            towards dignity, opportunity and a better future.
          </p>
        </div>

        <div className="impactStats">

          <div>
            <strong>190+</strong>
            <span>Girls & young women reached</span>
          </div>

          <div>
            <strong>50+</strong>
            <span>Mentorship sessions</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Schools engaged</span>
          </div>

          <div>
            <strong>5+</strong>
            <span>Community forums</span>
          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="eventsCTA">

        <div>
          <span>BE PART OF THE JOURNEY</span>

          <h2>
            Change begins when
            <br />
            <em>we show up.</em>
          </h2>

          <p>
            Together, we can create safer, stronger opportunities
            for girls, women and vulnerable families.
          </p>

          <a href="/contact" className="ctaButton">
            Get Involved
            <span>→</span>
          </a>
        </div>

      </section>

    </main>
  );
};

export default Events;