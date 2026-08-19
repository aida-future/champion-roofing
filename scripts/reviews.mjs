// Single source of truth for Google review data.
//
// ITEMS is the full set of written reviews from the Champion Roofing Google
// Business Profile, exported from HowlIQ on 2026-08-19. Text is reproduced
// exactly as written, including spelling. Nothing is edited, paraphrased or
// keyword stuffed. Tags describe what a review actually mentions, and drive
// which service page it appears on.
//
// Six of the 59 ratings carry no text ("No review text") and are counted in
// AGGREGATE but not listed here. One review is a revised 4 star with a long
// complaint, kept out of the marketing surfaces but noted at the bottom.

export const AGGREGATE = {
  rating: '5.0',
  count: 59,
  written: 53,
  source: 'Google Business Profile',
  exported: '2026-08-19',
};

// Google's own generated review topics, with the number of reviews behind each.
// `tag` maps a topic to the pages that should surface those reviews.
export const TOPICS = [
  { tag: 'gutters', label: 'Gutters', count: 13, pages: ['/gutters'] },
  { tag: 'timely', label: 'Timely manner', count: 7, pages: [] },
  { tag: 'gutter-replacement', label: 'Gutter replacement', count: 6, pages: ['/gutters'] },
  { tag: 'smooth', label: 'Smooth process', count: 6, pages: [] },
  { tag: 'colour-options', label: 'Colour options', count: 5, pages: ['/roof-replacement'] },
  { tag: 'responsive', label: 'Responsive staff', count: 5, pages: [] },
  { tag: 'inspection', label: 'Thorough inspection', count: 4, pages: ['/roof-inspection'] },
  { tag: 'shingles', label: 'Shingle selection', count: 3, pages: ['/roof-replacement'] },
  { tag: 'local', label: 'Local roofers', count: 3, pages: [] },
];

// Extra page mappings for tags that Google does not generate as topics but
// that the review text clearly supports.
export const PAGE_TAGS = {
  '/gutters': ['gutters', 'gutter-replacement'],
  '/roof-replacement': ['replacement', 'colour-options', 'shingles'],
  '/roof-repair': ['repair'],
  '/roof-inspection': ['inspection'],
  '/storm-damage-roof-repair': ['storm', 'insurance'],
  '/window-replacement': ['windows'],
  '/residential-roofing': ['replacement', 'repair'],
  '/commercial': ['commercial'],
  '/about': ['owner', 'local'],
};

export const THEMES = [
  { label: 'Roof or roofing', count: 38 },
  { label: 'Would recommend', count: 15 },
  { label: 'Professional', count: 12 },
  { label: 'Gutters', count: 9 },
  { label: 'Roof replacement', count: 9 },
  { label: 'Quick, fast, efficient', count: 9 },
  { label: 'Prompt or timely', count: 9 },
  { label: 'Insurance', count: 7 },
  { label: 'Communication and updates', count: 6 },
  { label: 'Smooth or seamless', count: 5 },
  { label: 'Repair', count: 4 },
  { label: 'Inspection', count: 3 },
  { label: 'Shingles', count: 3 },
  { label: 'Quality', count: 3 },
  { label: 'Hail or storm', count: 2 },
];

const R = (name, date, text, tags, service) => ({ name, date, rating: 5, text, tags, service });

export const ITEMS = [
  R('Heather Scammahorn', '2026-08-03',
    'Champion Roofing did our entire fence. They were easy to work with and will go above and beyond your expectations. Looks great. The crew was great as well! I definitely recommend them!',
    ['recommend', 'crew'], 'Fence'),
  R('Jesse Taylor', '2026-07-22',
    'Great work by a great company!! Thank you for taking care of us and all the help along the way to make sure we get all we deserve from our coverage!!! Will spread the word for future projects.',
    ['insurance', 'recommend'], 'Insurance claim'),
  R('Janet Burke', '2026-07-17', 'Blaine was great!', ['staff'], 'Roofing'),
  R('Thomas Casso', '2026-07-02',
    'Champion Roofing - great service and competent roofing specialists!',
    ['quality'], 'Roofing'),
  R('Hayley Woodall', '2026-07-01',
    'Blaine Coffee at Champion Roofing is such a good person. He helped in so many ways while working in the dead heat!',
    ['staff'], 'Roofing'),
  R('Jennifer Butler', '2026-06-26',
    'Blaine Coffee and his team were very professional. He was interested in my concerns and very patient with me and made sure I understood everything. He also kept me updated on what was happening. I will definitely recommend him to my family and friends.',
    ['professional', 'communication', 'recommend', 'staff'], 'Roofing'),
  R('Adam Ensz-Rael', '2026-06-25',
    'I should be able to give more than 5 stats here. It was really easy to get a quote and all of my questions were answered without a hint on annoyance. The price was very fair and they even broke it down for me so I could understand everything that I was charged for. Absolutely would recommend and would use them again in the future!',
    ['price', 'communication', 'recommend'], 'Roofing quote'),
  R('Chris and Linda Mitra', '2026-06-17',
    'Great service! Helped us dealing with insurance. Kept us updated every step of the way. Roof work was quick and efficient. Started promptly first thing in the morning and the work was done before noon! Roof looks great and the process was pretty seamless. Definitely recommend giving them a call',
    ['insurance', 'communication', 'timely', 'smooth', 'replacement', 'recommend'], 'Roof replacement'),
  R('Megan L', '2026-06-16',
    'We had a fantastic experience with Champion roofing. They worked hard with our insurance company to get the maximum amount for us. Joel was the point man for our project and he walked us through the entire process from beginning to end. He was there the day the roof was installed and ensured that everything went smoothly. I cannot say enough good things about this company!',
    ['insurance', 'communication', 'smooth', 'replacement', 'staff'], 'Roof replacement'),
  R('Ashley H', '2026-06-04',
    'We had our roof replaced by Champion Roofing after a recent hailstorm, and the entire process was quick, smooth, and efficient. Their team responded promptly, communicated clearly throughout the project, and completed the installation faster than we expected without sacrificing quality. The crew was professional, hardworking, and did an excellent job with both the roof installation and cleanup. We appreciate how they helped us get our home protected again so quickly after the storm. Highly recommend Champion Roofing to anyone needing reliable roofing services after hail damage.',
    ['storm', 'replacement', 'timely', 'smooth', 'communication', 'professional', 'cleanup', 'recommend'], 'Storm damage replacement'),
  R('Avilla Williams', '2026-05-20', 'Outstanding Team! Very neat! Highly recommend Blaine!', ['cleanup', 'recommend', 'staff'], 'Roofing'),
  R('Jason Warfe', '2026-05-15',
    "It's hard to find legit, local roofers these days. Champion Roofing is local, legit, and they will advocate on your behalf with your insurance agent. Braiden's inspection was thorough and concise. Don't settle for out-of-state vultures; use a reputable local roofer who will get the job done with precision!",
    ['local', 'insurance', 'inspection', 'staff'], 'Inspection and insurance'),
  R('Kelly Horne', '2026-03-09',
    "Excellent Roofing Service – Highly Recommend! I couldn't be happier with the work done by this roofing company. From the first phone call to the final cleanup, the entire process was professional, smooth, and stress-free. The crew showed up on time, worked efficiently, and clearly took pride in their work. They explained everything in detail before starting, including the materials they were using and the timeline for the project. The quality of the workmanship is outstanding, and my new roof looks fantastic. They also made sure the property was spotless when they finished, which I really appreciated. If you're looking for a roofing company that is reliable, honest, and does top-quality work, I highly recommend them. It's not easy to find contractors you can truly trust, but these guys absolutely delivered. Great experience all around!",
    ['replacement', 'professional', 'smooth', 'timely', 'communication', 'quality', 'cleanup', 'recommend'], 'Roof replacement'),
  R('Kenetha Jakubiak', '2025-10-30',
    'From the beginning to the end, Preston was great!! Insurance tried to low ball us and he was thorough enough to see what was missing and got more money for our roof replacement! We also had new gutters installed and the hardest part was picking the color. This is by far the best experience I have ever had with anything related to my home!! Not one nail was left to get stuck in my car tires, lol. I would recommend Champion Roofing a million times!!!',
    ['insurance', 'replacement', 'gutters', 'gutter-replacement', 'colour-options', 'cleanup', 'recommend', 'staff'], 'Roof and gutter replacement'),
  R('Stan Street', '2025-05-06',
    "These guys were fantastic. Customer follow up was outstanding. Would definitely use these people again. We had a leak and they came out to do a repair and the repair didn't look right so they came back and replaced the entire facet. Thank you Braden for taking care of everything!",
    ['repair', 'communication', 'staff'], 'Roof repair'),
  R('Jessica Navarrete', '2025-04-17',
    'Champion Roofing took care of our roof issues efficiently and very professional, would definitely recommend them.Will use them again for future work! Thank you again, for such a great experience!!! No stress involved',
    ['repair', 'professional', 'smooth', 'recommend'], 'Roof repair'),
  R('Hol', '2025-03-28',
    "I can't say enough good things about this company. I had a small roof repair and had contacted multiple companies with no results either the job was too small or they were booked or I never heard back from them. I contacted this company and not Only were they OK with doing a small repair they were able to get out to my home on the same day. They came and looked at the repair that needed to be done and scheduled somebody to come out the following day to get the work completed. Everyone was super nice and professional and absolute pleasure to work with. There is no other roofing company I will use except this one. You will not be disappointing using this company and with the service you will receive.",
    ['repair', 'timely', 'professional', 'responsive'], 'Small roof repair'),
  R('Damon Lee', '2025-03-26',
    "We worked with Jon from start to finish. Him and Champion Roofing were excellent and we're happy with our new roof.",
    ['replacement', 'staff'], 'Roof replacement'),
  R('Katie Z. Hartman', '2025-03-14',
    'We had a great experience with Champion. John helped us every step of the way, was great with communication, and has provided great customer service, even years after the install. Highly recommend!',
    ['communication', 'recommend', 'staff'], 'Roofing'),
  R('Rodney Spearman', '2025-02-28',
    'Champion roofing provided exceptional and timely service. I was in a desperate time crunch to get my roof replaced. Blaine and Mike worked to ensure everything I needed was taken care of. They went above and beyond. The quality of the work was superb and they charge reasonable and fair prices. I highly recommend Champion roofing for all your roofing needs!',
    ['replacement', 'timely', 'quality', 'price', 'owner', 'recommend', 'staff'], 'Roof replacement'),
  R('Stephen Marco', '2025-01-21',
    'Jason at Champion Roofing was great to work with. He replaced two roofs for me at the same time and saved me a lot of money. I received 4 quotes and his was not only the lowest, but also for the best work. Very professional.',
    ['replacement', 'price', 'professional', 'staff'], 'Two roof replacements'),
  R('Wilma Bezdicek', '2025-01-12',
    'Exceptional company! They were helpful and patient helping me select the right shingle. They took care of finding the extra items I needed--guttering, fencing and windows. The roof looks great and they cleaned up exceptionally good. I highly recommend Champion.',
    ['shingles', 'colour-options', 'gutters', 'windows', 'cleanup', 'recommend'], 'Roof, gutters and windows'),
  R('Todd Goings', '2025-01-09',
    "They did a great job on my roof! they worked with my insurance company and made sure I got taken care of through the entire process. When the job was over they cleaned up to the point I couldn't find even a nail on the ground.Highly recommend these guys.",
    ['insurance', 'cleanup', 'recommend'], 'Roofing and insurance'),
  R('Joseph Magana', '2024-11-19',
    'Quick responses to questions and needs, very easy to work with and very knowledgeable. I was super happy with the work.',
    ['responsive', 'communication'], 'Roofing'),
  R('Randy', '2024-11-18', 'Quality work done professionally.', ['quality', 'professional'], 'Roofing'),
  R('Angie Crawford', '2024-11-12',
    'We love our new roof and gutters. Everyone at Champion was professional and courteous. Roof was done on time and clean up was amazing. I would highly recommend.',
    ['replacement', 'gutters', 'gutter-replacement', 'professional', 'timely', 'cleanup', 'recommend'], 'Roof and gutters'),
  R('Lenny Juliano', '2024-11-08',
    'Absolutely thrilled with the work from Champion. They paid incredible attention to detail. From the initial consultation to the final clean-up, every step was seamless. The crew was respectful of the properties, and they completed the jobs on time with zero issues. New roofs look fantastic. Highly recommend this team for any roofing needs – they exceeded all our expectations. 5/5 stars',
    ['replacement', 'quality', 'smooth', 'timely', 'cleanup', 'recommend'], 'Roof replacement'),
  R('Joseph Yarbrough', '2024-11-08',
    'Awesome experience, very easy communication and flexibility. I had some minor roof repairs done as well as a full gutter install and they both turned out awesome. Also they have about 20+ colors to choose from which is very nice.',
    ['repair', 'gutters', 'gutter-replacement', 'colour-options', 'communication'], 'Repair and gutter install'),
  R('Cathy Burdine', '2024-11-08',
    'Roof & gutter damage from hail storm. Champion was highly recommend by a neighbor. Preston was my project manager, he answered all my questions and was great to work with. The process was very smooth & efficient. Great work & customer service.',
    ['storm', 'gutters', 'smooth', 'communication', 'recommend', 'staff'], 'Hail damage, roof and gutters'),
  R('Jill Krase', '2024-11-08',
    'Champion Roofing did a fabulous job! I would highly recommend them! They were fast efficient got my roof put on in one day with a great clean up. They even informed me of how to save money on my insurance. I have known Mike the owner for 25+ years and I can safely say he is very trustworthy! Jason was easy to get a hold of to ask any questions I had.',
    ['replacement', 'timely', 'cleanup', 'insurance', 'owner', 'recommend', 'staff'], 'Roof replacement'),
  R('Michelle Osborne', '2024-11-07',
    "I recently had my gutters replaced and went through champion roofing. My salesman Jon Luecke was extremely helpful in helping me pick out the best color for my house and I couldn't be happier with the round downspouts that he suggested!",
    ['gutters', 'gutter-replacement', 'colour-options', 'staff'], 'Gutter replacement'),
  R('Katie Cantrell', '2024-11-07',
    'Awesome job Roof and gutters look great and the process was smooth!',
    ['replacement', 'gutters', 'smooth'], 'Roof and gutters'),
  R('Shain Dash', '2024-09-29',
    'I just had the inspection done by Zicorrie. Very professional and polite. Thank you zicorrie The 5 stars is for him',
    ['inspection', 'professional', 'staff'], 'Roof inspection'),
  R('Nick Whisenhunt', '2024-08-08',
    "Came and fixed an issue on my roof. Pointed out other issues I didn't see and got those covered as well. Preston was awesome. Def recommend",
    ['repair', 'inspection', 'recommend', 'staff'], 'Roof repair'),
  R('LaDonna Woods', '2024-08-03',
    "My husband and I had a real dilemma on our hands. We had significant roof damage and a local roofing company assessed the damage and submitted it to our insurance company. Our insurance paid half of the claim upfront, with the other half to be paid upon completion of the work. At that point, the local roofing company said the insurance payoff was not enough, and was no longer interested in doing the work, and cut off contact with us. We had half of the money, none of the work, and we really didn't even know who to blame. The roofing company or our own insurance company? A trusted friend told me to contact Braden Cowan at Champion Roofing. That was the LIFESAVER!! After reviewing all our documents, Braden assured us there was plenty of money in the insurance settlement to do everything needed and do it right. Champion Roofing repaired and painted all the soffit and fascia, put on a beautiful new roof, installed a brand new gutter system, and even replaced the screen in a window that was not included on the insurance settlement. The work is fantastic! It was completed in a timely and professional manner. Two days later I went to our insurance company to submit proof of repairs so we could claim the second half of the settlement. They responded “Champion Roofing has already submitted that for you.” We had a check in the mail 4 days later. I was so impressed with Champion Roofing (and Braden Cowan) that I immediately hired them to do a roof renovation/siding/ and gutters at our daughter's house. It is beautiful! I would recommend Champion Roofing to anyone and everyone!",
    ['insurance', 'replacement', 'gutters', 'gutter-replacement', 'windows', 'timely', 'professional', 'recommend', 'staff'], 'Roof, gutters and screen'),
  R('Vicki Cantrell', '2024-06-18',
    'Champion Roofing recently completed installation of new roof, gutters and siding. Preston kept me up to date and informed though out the process. He was very professional and patient through my asks and indecisions. Thanks!!',
    ['replacement', 'gutters', 'gutter-replacement', 'communication', 'professional', 'staff'], 'Roof and gutters'),
  R('Jennifer Boyle', '2024-04-03',
    'Champion roofing was fast efficient and did a great job from start to finish!',
    ['timely'], 'Roofing'),
  R('Janet Reece', '2024-03-26',
    'My roof looks great. Workers were pleasant. Supervisor, Blaine, was a great communicator and worked well with me. Thanks Champion Roofing!',
    ['replacement', 'communication', 'staff'], 'Roofing'),
  R('Donna Johnston', '2024-03-15',
    'Blaine pursued the roof issues and discovered the problem was faulty shingles. He followed up with the manufacturer rep to get claim filed. I now have a new roof and gutters. I appreciate Blaine so very much.',
    ['shingles', 'replacement', 'gutters', 'staff'], 'Roof and gutters'),
  R('Joan Zubik', '2024-03-07',
    'Blaine Coffee and his Champion crew did a fabulous job on my personal roof. I have had many compliments from people walking by and asking who did it. I highly recommend you call Blaine Coffee to discuss your new roof.',
    ['replacement', 'recommend', 'staff'], 'Roof replacement'),
  R('Ian Gordon', '2024-02-20',
    'They did a great job assessing my roof before a sale on very short notice. The drone inspection is very thorough and detailed I greatly appreciated that. It helped me make an informed decision.',
    ['inspection', 'timely'], 'Pre-sale drone inspection'),
  R('Denise Davick', '2024-02-13',
    'We had a wonderful experience with Champion Roofing. Professional, timely, excellent work and excellent customer service. Honestly, cannot say enough good things about this company. 5 stars!',
    ['professional', 'timely', 'quality'], 'Roofing'),
  R('Marilyn Capps', '2024-02-10',
    "I recently had my roof and gutters replaced by Champion Roofing. I am extremely happy with the quality of work that was done. I was especially blessed to have Blaine Coffee managing the project. Blaine's integrity and great work ethic is amazing. He made good on his promises and kept me informed every step of the way. He went above and beyond with the installation of my new gutter covers. I will be forever grateful to him for that. Blaine is genuine, hard working, professional and personable. So glad I chose Champion!",
    ['replacement', 'gutters', 'gutter-replacement', 'quality', 'communication', 'professional', 'staff'], 'Roof and gutters'),
  R('Lisa Rhodes', '2023-07-23',
    'I was impressed with the service I was provided. They have great color options and materials to choose from. The company is very professional and quickly responded to all questions I had. It was done in timely response. When I came home from work and My home had beautiful gutters that put a smile! I highly recommend this company and plan to call them in the future!',
    ['gutters', 'gutter-replacement', 'colour-options', 'professional', 'responsive', 'timely', 'recommend'], 'Gutters'),
  R('Kay Dukeman', '2023-03-21',
    "We are so happy we contacted Champion Roofing's Mike Cowan to replace our storm damaged roof and guttering. Not only did the company do an outstanding job, but they were also very fast and extremely neat. No debris was left behind. The crew worked with flashlights in the dark to make sure the site was pristine before they left. Further, the company knew the color and pattern of roofing that complied with our HOA guidelines. We could not have asked for better service. Mike was very informative, due to his good advice on what type of roofing material to use we have realized a considerable saving on our insurance. Again, we are very happy with Champion Roofing's 5 star service.",
    ['storm', 'replacement', 'gutters', 'gutter-replacement', 'cleanup', 'colour-options', 'insurance', 'owner', 'timely'], 'Storm damage, roof and gutters'),
  R('Krista Hearon, LPC', '2023-03-04', 'Professional service and great prices in a timely manner.', ['professional', 'price', 'timely'], 'Roofing'),
  R('Sydney Sundbye', '2023-02-22',
    "Honestly I can't say enough good things about champion roofing. We had an issue with bad shingles and they did all the foot work to get us a reimbursement on the shingles. They put our new roof on in one day. Did a great job. Will definitely use them again.",
    ['shingles', 'replacement', 'timely'], 'Roof replacement'),
  R('KC Hind', '2023-01-03', 'Great job !', ['quality'], 'Roofing'),
  R('James McNemar', '2022-07-22',
    'Champion was the 4th roofing company I called for a quote. They were the 1st time ne to provide a quote . Blaine with Champion Roofing , is honest , hard working and very professional . He never tried to mislead me he was straight to the point . Any time I changed my mind or wanted something added he smiled and assisted me. You cannot find a better company or sales team in my opinion.',
    ['responsive', 'professional', 'staff'], 'Roofing quote'),
  R('Ron Maxwell', '2022-03-30',
    'After seven years of repairs to stop the leak from our roof/deck into the condo below us, Mike Cowan and his team fixed the problem. Several others tried, but Champion Roofing got it done!! We absolutely love our deck and the owners below us are so happy they finally get to remove the bucket from their dining room.',
    ['repair', 'owner', 'commercial'], 'Leak repair, condo'),
  R('Dennis Eastwood', '2021-05-16',
    'They did an amazing job on my roof. On time, no surprises. John was very knowledgeable and professional. I highly recommend this company.',
    ['timely', 'professional', 'recommend', 'staff'], 'Roofing'),
  R('mse usaok', '2021-01-26',
    'My 30 years old roof was replaced by this company last month, the crew has done excellent work in timely manner. They showed up as expected on time, got the work done as promised. They cleaned up afterwards, removed metal parts including nails as much as possible. I am happy with the looks of new roof, I am more happy with no more leaks. Many thanks.',
    ['replacement', 'timely', 'cleanup', 'quality'], 'Roof replacement'),
];

// Kept out of ITEMS deliberately. A customer revised a 1 star to 4 stars after
// management resolved paperwork delays. It is real, it is on Google, and it is
// not something to dress a marketing page with. It is noted here so nobody
// wonders why the count on /reviews is 52 rather than 53.
export const EXCLUDED_NOTE =
  'One 4 star review (revised up from 1 star after management resolved a certificate of completion delay) is not reproduced on the site. It remains visible on Google.';

/** Reviews carrying any of the given tags. */
export function byTag(tags) {
  const want = Array.isArray(tags) ? tags : [tags];
  return ITEMS.filter((r) => r.tags && r.tags.some((t) => want.includes(t)));
}

/** Reviews for a page path, using PAGE_TAGS first, then TOPICS. */
export function forPage(path) {
  const tags = PAGE_TAGS[path] || TOPICS.filter((t) => t.pages.includes(path)).map((t) => t.tag);
  return byTag(tags);
}

/** Topics relevant to a page path, for the evidence strip. */
export function topicsForPage(path) {
  return TOPICS.filter((t) => t.pages.includes(path));
}
