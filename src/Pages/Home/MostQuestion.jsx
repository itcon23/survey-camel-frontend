export default function MostQuestion() {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="max-w-xxl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 opacity-90">
            Opinion Outpost most commonly asked questions
          </h2>
        </div>

        {/* Accordian Start */}
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            How do Opinion Outpost paid surveys work?
          </div>
          <div className="collapse-content text-sm">
            Once you've set up your account, you’ll receive an email welcoming
            you to Opinion Outpost. From then on, we'll send you regular emails
            inviting you to take surveys. (These emails will contain all the
            information you need to take part.)
            <br />
            <br />
            Earn points every time you complete a survey, and after you have
            enough points in your balance, you can redeem them for the rewards
            of your choice.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Why do you conduct surveys?
          </div>
          <div className="collapse-content text-sm">
            Surveys are conducted because businesses, governments, public
            bodies, and similar organisations are interested in the views and
            attitudes of the people who use their products and services. The
            more they know about what customers and citizens think, the easier
            it is for them to improve and adapt what they supply.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What type of paid online surveys can I take?
          </div>
          <div className="collapse-content text-sm">
            We have various surveys available, including:
            <ul>
              <li>
                • Product tests (review prototypes before they hit the shelf)
              </li>
              <li>
                • Advert reviews (give feedback on ads before they launch)
              </li>
              <li>
                • Diary studies (keep track of and share your lifestyle habits)
              </li>
              <li>
                • Focus groups (take part in group discussions on a variety of
                topics)
              </li>
              <li>
                • Location-based services (participate in targeted surveys based
                on your location)
              </li>
              <li>
                • Ad survey studies (share your thoughts on ads you see on
                Google)
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title font-semibold">
            What survey rewards can I earn?
          </div>
          <div className="collapse-content text-sm">
            Every time you complete a survey, you'll earn rewards points.
            <br />
            <br />
            You can see the reward offered for each survey in your email or on
            the 'Surveys' tab. Once you begin, you'll be asked a series of short
            questions to confirm your identity and to check if you are a match
            for the survey. Simply answer each question in full to progress and
            complete the study.
            <br />
            <br />
            Your reward will be automatically credited to your account when you
            finish the survey. Certain rewards (such as for diary studies and
            focus groups) may take up to 6 weeks to arrive.
            <br />
            <br />
            After you have enough points in your balance, you can redeem them
            for the rewards of your choice. Visit the{" "}
            <span className="text-sky-800">Rewards section</span> to check out
            the rewards we have available!
          </div>
        </div>
      </div>
    </section>
  );
}
