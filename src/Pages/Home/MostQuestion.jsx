export default function MostQuestion() {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="max-w-xxl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 opacity-90">
            Survey Camel most commonly asked questions
          </h2>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {[
            {
              question: "How do Survey Camel paid surveys work?",
              answer: `Once you've set up your account, you’ll receive an email welcoming you to Survey Camel. From then on, we'll send you regular emails inviting you to take surveys. (These emails will contain all the information you need to take part.)

Earn points every time you complete a survey, and after you have enough points in your balance, you can redeem them for the rewards of your choice.`,
            },
            {
              question: "Why do you conduct surveys?",
              answer: `Surveys are conducted because businesses, governments, public bodies, and similar organisations are interested in the views and attitudes of the people who use their products and services. The more they know about what customers and citizens think, the easier it is for them to improve and adapt what they supply.`,
            },
            {
              question: "What type of paid online surveys can I take?",
              answer: `We have various surveys available, including:
• Product tests (review prototypes before they hit the shelf)
• Advert reviews (give feedback on ads before they launch)
• Diary studies (keep track of and share your lifestyle habits)
• Focus groups (take part in group discussions on a variety of topics)
• Location-based services (participate in targeted surveys based on your location)
• Ad survey studies (share your thoughts on ads you see on Google)`,
            },
            {
              question: "What survey rewards can I earn?",
              answer: `Every time you complete a survey, you'll earn rewards points.

You can see the reward offered for each survey in your email or on the 'Surveys' tab. Once you begin, you'll be asked a series of short questions to confirm your identity and to check if you are a match for the survey. Simply answer each question in full to progress and complete the study.

Your reward will be automatically credited to your account when you finish the survey. Certain rewards (such as for diary studies and focus groups) may take up to 6 weeks to arrive.

After you have enough points in your balance, you can redeem them for the rewards of your choice. Visit the Rewards section to check out the rewards we have available!`,
            },
            {
              question: "Is Survey Camel free to join?",
              answer: `Yes, joining Survey Camel is completely free. You’ll never be asked to pay to participate in surveys or to claim your rewards.`,
            },
            {
              question: "How often will I receive surveys?",
              answer: `The number of surveys you receive depends on your profile and the needs of the companies conducting research. Completing your profile helps us match you with more surveys.`,
            },
            {
              question: "How long does it take to complete a survey?",
              answer: `Survey length varies, but most surveys take between 5 to 25 minutes. You’ll see the estimated time and reward before starting each survey.`,
            },
            {
              question: "What kind of rewards can I redeem?",
              answer: `You can redeem points for a wide range of rewards including PayPal cash, Amazon gift cards, Visa prepaid cards, and other popular vouchers.`,
            },
            {
              question: "Can I access Survey Camel on mobile?",
              answer: `Yes! Survey Camel is mobile-friendly. You can take surveys on your phone, tablet, or computer at your convenience.`,
            },
            {
              question: "How do I know if a survey is legitimate?",
              answer: `Every survey sent through Survey Camel is verified and from trusted research partners. Always access surveys directly through your Survey Camel account or verified emails.`,
            },
            {
              question: "What happens if I get disqualified from a survey?",
              answer: `Sometimes, after a few initial questions, you may be disqualified from a survey if your profile doesn’t match the target audience. You’ll still often receive an entry into a prize draw or other small reward for your time.`,
            },
            {
              question: "Can I refer friends to Survey Camel?",
              answer: `Yes! You can refer friends and earn bonus rewards when they sign up and complete their first surveys. Check your account for your unique referral link.`,
            },
            {
              question: "Are my responses kept confidential?",
              answer: `Yes, all your responses are kept confidential and used only for research purposes. Your data is protected in accordance with our Privacy Policy.`,
            },
            {
              question: "Can I change my account details later?",
              answer: `Absolutely. You can update your profile, payment method, and other details by logging into your account and visiting the account settings page.`,
            },
          ].map((item, idx) => (
            <div key={idx} className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="accordion-group" />
              <div className="collapse-title font-semibold">{item.question}</div>
              <div className="collapse-content text-sm whitespace-pre-line">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
