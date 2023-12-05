// Retrieve coordinates from the "addresses" collection
// for (const address of addresses) {
const commentsListPostive = [
  "Arrived on time, excellent service!",
  "Polite and friendly driver, made the journey enjoyable.",
  "Clean and well-maintained taxi, a comfortable ride.",
  "Driver was helpful with luggage, great customer service.",
  "Prompt arrival, I appreciate the efficiency.",
  "Smooth ride, the driver navigated traffic well.",
  "Impressed with the cleanliness of the taxi interior.",
  "Safe and secure driving, felt comfortable throughout.",
  "Driver was knowledgeable about the best routes.",
  "Excellent communication from the driver.",
  "Efficient service, got me to my destination quickly.",
  "Comfortable seating and a smooth ride.",
  "Courteous driver, made the journey pleasant.",
  "Vehicle in good condition, no issues during the trip.",
  "Professionalism displayed by the driver was commendable.",
  "Fair pricing, great value for the service provided.",
  "The driver was patient in heavy traffic, appreciated that.",
  "Clean exterior, well-presented taxi.",
  "Quick response time, didn't have to wait long for the taxi.",
  "Driver took a scenic route, enjoyed the view.",
  "Well-maintained taxi, felt safe throughout the journey.",
  "Driver was attentive to my needs, excellent service.",
  "Smooth and hassle-free booking process.",
  "Impressed with the cleanliness and hygiene measures.",
  "The driver was polite and respectful.",
  "Great conversation with the driver, made the ride enjoyable.",
  "Quick and easy payment process.",
  "Safe driving in adverse weather conditions, appreciated the caution.",
  "Arrived ahead of schedule, efficient service.",
  "Clean and comfortable seating, a relaxing journey.",
  "Driver provided useful local tips, appreciated the guidance.",
  "Punctual service, reliable for early morning travel.",
  "Efficient drop-off at the exact destination.",
  "Driver was courteous and accommodating.",
  "The taxi was well-equipped with modern amenities.",
  "Driver was proactive in avoiding traffic, great navigation.",
  "Smooth ride, no sudden stops or jerks.",
  "Excellent service from booking to drop-off.",
  "Driver was friendly and made the ride enjoyable.",
  "Clean and well-ventilated interior, felt fresh.",
  "Fair and transparent pricing, no hidden fees.",
  "Driver was patient and understanding.",
  "Comfortable temperature inside the taxi, adjusted as per request.",
  "Prompt pickup, no delays in reaching the destination.",
  "Efficient route taken, avoided unnecessary detours.",
  "Driver provided a smooth and enjoyable ride.",
  "Clean exterior, well-maintained appearance.",
  "Safety measures followed, felt secure throughout the journey.",
  "Driver was attentive to traffic updates, ensuring a smooth ride.",
  "Timely communication from the driver.",
  "The taxi had ample space for luggage.",
  "Driver was knowledgeable about local attractions.",
  "Seamless and quick drop-off process.",
  "Clean and tidy taxi interior, well-organized.",
  "Driver maintained a comfortable driving speed.",
  "Efficient and friendly customer support.",
  "The driver was well-dressed and presented a professional image.",
  "Smooth pick-up process, no waiting time.",
  "Driver was courteous and respectful throughout the journey.",
  "Clean and well-maintained exterior of the taxi.",
  "Pleasant aroma inside the taxi, a nice touch.",
  "Driver followed the best routes for minimal traffic.",
  "On-time arrival, appreciated the punctuality.",
  "Comfortable seating arrangement, suitable for long rides.",
  "Driver displayed excellent driving skills.",
  "Quick and easy payment options available.",
  "Driver took extra care in ensuring a smooth ride.",
  "Clean and hygienic taxi interior, felt fresh and sanitized.",
  "Driver went the extra mile to assist with luggage.",
  "Efficient and reliable service, met expectations.",
  "Smooth and well-coordinated communication with the driver.",
  "Comfortable temperature maintained inside the taxi.",
  "Driver was polite and greeted me warmly.",
  "Clean and well-maintained exterior, a professional appearance.",
  "Efficient navigation through busy city streets.",
  "Driver was well-versed in providing information about the city.",
  "Prompt response to booking inquiries.",
  "The taxi was equipped with a reliable GPS system.",
  "Driver adhered to all traffic rules, felt safe.",
  "Courteous and friendly interactions with the driver.",
  "Clean and well-groomed appearance of the driver.",
  "Efficient and organized pick-up process.",
  "Driver provided a smooth and enjoyable ride experience.",
  "Well-lit interior, felt safe during night travel.",
  "Punctual arrival, no unnecessary waiting time.",
  "Driver ensured a quiet and peaceful atmosphere in the taxi.",
  "Clean and well-maintained interior, a pleasant journey.",
  "Driver was proactive in handling unexpected road closures.",
  "Efficient and timely drop-off at the desired location.",
  "Smooth ride, no abrupt stops or starts.",
  "Driver displayed excellent knowledge of alternative routes.",
  "Courteous and professional behavior from the driver.",
  "Clean and well-ventilated interior, a comfortable journey.",
  "Driver was patient and accommodating to specific requests.",
  "Prompt and reliable service, met expectations.",
  "Efficient handling of luggage, appreciated the assistance.",
  "Smooth and well-coordinated communication with customer support.",
  "Comfortable seating arrangement, suitable for multiple passengers.",
  "Driver provided helpful recommendations for local attractions.",
  "Clean and well-maintained exterior, a positive first impression.",
  "Efficient navigation through challenging traffic conditions.",
  "Driver displayed a high level of customer service.",
  "Prompt confirmation of booking and arrival details.",
  "The taxi was equipped with comfortable amenities.",
  "Driver adhered to a professional and safe driving style.",
  "Courteous and respectful interactions with the driver.",
  "Clean and well-organized interior, a pleasant travel experience.",
  "Efficient pick-up process, no delays in reaching the location.",
  "Smooth ride, no disturbances throughout the journey.",
  "Driver was attentive to passenger preferences, a personalized experience."
];


const commentsListNegative = [
  "Driver took a longer route, increasing the fare unnecessarily.",
  "Cab had a strange odor; it was extremely unpleasant during the entire ride.",
  "Rude and unfriendly driver, made the journey uncomfortable.",
  "The taxi was dirty, and the seats were stained. Hygiene is a serious concern.",
  "Driver was constantly on the phone, not paying attention to the road.",
  "Waited for the taxi for an extended period; the tardiness was frustrating.",
  "The vehicle had a strange noise, making the ride unsettling and loud.",
  "Driver didn't follow GPS directions and got lost multiple times.",
  "Taxi interior was outdated and in poor condition; it felt unsafe.",
  "The driver was driving recklessly, putting passengers at risk.",
  "Unpleasant experience with the driver's inappropriate conversation.",
  "Cab had a malfunctioning air conditioner; it was stifling inside.",
  "Driver refused to take a credit card, even though it's a listed payment option.",
  "Taxi was not properly cleaned; there were crumbs and trash everywhere.",
  "Unexplained additional charges on the fare; unclear billing practices.",
  "Driver was playing loud music without considering passenger preferences.",
  "The taxi smelled strongly of cigarette smoke, making the ride unbearable.",
  "Driver didn't assist with luggage, despite it being part of the service.",
  "Taxi had a flat tire, causing unnecessary delays and inconvenience.",
  "Driver had poor knowledge of the city and took a longer route.",
  "The vehicle's brakes were squeaking, creating a worrisome atmosphere.",
  "Driver was talking on the phone loudly in a language passengers couldn't understand.",
  "Cab was unclean, and the windows were so dirty it was hard to see outside.",
  "Driver didn't respect traffic rules, making the journey nerve-wracking.",
  "Taxi had a strong, unpleasant odor that lingered throughout the ride.",
  "Driver was speeding excessively, making passengers feel unsafe.",
  "Cab had a malfunctioning meter, leading to disputes over the fare.",
  "The driver was texting while driving, endangering everyone in the vehicle.",
  "Unexplained detours that extended the journey unnecessarily.",
  "Taxi had a broken seatbelt, posing a safety risk to passengers.",
  "Driver was visibly fatigued, compromising the safety of the ride.",
  "Taxi arrived late, causing me to miss an important appointment.",
  "Driver was talking on the phone the entire time, ignoring my requests for silence.",
  "Uncomfortable seating in the cab; felt like riding on a wooden bench.",
  "The taxi had a strange vibration, making the ride nauseating.",
  "Driver didn't use turn signals, making the journey feel unsafe.",
  "Cab had a strange rattling noise that persisted throughout the entire trip.",
  "Driver didn't provide a receipt upon request; unclear fare breakdown.",
  "Taxi was excessively hot; the air conditioning wasn't working properly.",
  "The driver overcharged me, and when questioned, became confrontational.",
  "Unprofessional attire of the driver; it didn't instill confidence.",
  "Taxi was in poor mechanical condition; it stalled multiple times.",
  "Driver took a longer route, claiming it was to avoid traffic, but it felt like a scam.",
  "Cab had a leak during the rain, causing discomfort for passengers.",
  "Driver was speeding and weaving through traffic recklessly.",
  "Taxi had an odd smell of cleaning chemicals, making the ride unpleasant.",
  "The driver was rude and argumentative, creating a hostile atmosphere.",
  "Cab was visibly dirty, and the dashboard was covered in grime.",
  "Driver didn't assist with luggage and seemed annoyed when asked.",
  "Taxi had a malfunctioning radio that emitted a loud, irritating noise.",
  "The driver was constantly checking their phone for messages while driving.",
  "Cab had a broken side mirror, posing a safety hazard.",
  "Driver didn't apologize for getting lost and blamed it on the GPS.",
  "Taxi had a malfunctioning meter, and the fare was significantly higher than expected.",
  "The driver didn't follow traffic rules, making the ride chaotic.",
  "Cab was missing a headrest, making it uncomfortable for passengers.",
  "Driver was driving aggressively, honking excessively at other vehicles.",
  "Taxi had a strange vibration that made it difficult to hold a conversation.",
  "The driver was talking loudly on a personal call, ignoring passenger discomfort.",
  "Cab had a lingering unpleasant smell from a previous passenger.",
  "Driver took a circuitous route, unnecessarily extending the journey."
];


function generateRandomComment(rating) {
  const randomIndex0 = Math.floor(Math.random() * commentsListPostive.length);
  const randomIndex1 = Math.floor(Math.random() * commentsListNegative.length);
  if (Math.random() > 0.6) {
    if (rating >= 3) {
        return commentsListPostive[randomIndex0];
    } else {
        return commentsListNegative[randomIndex1];
    }
    }
  else {
    return " ";
  }
}


const addresses = db.addresses.find({}, { _id: 0, Latitude: 1, Longitude: 1 }).toArray();
for (let i = 0; i < 300; i++) {
  var randon_address = addresses[Math.random()*addresses.length>>0]
  var random_shift = (Math.random() < 0.5 ? -1 : 1) * Math.random() * (0.02 - (0.002)) + (0.002)
  var random_shift1 = (Math.random() < 0.5 ? -1 : 1) * Math.random() * (0.02 - (0.002)) + (0.002)
  var random_rating = Math.random() * (5 - (1)) + (1)

const driver = {
    current_location: {
      type: "Point",
      coordinates: [randon_address.Longitude + random_shift, randon_address.Latitude + random_shift1]  // Use random coordinates for dropoff
    },
    completed: Math.random() > 0.5,
    rating: random_rating,
    comments: generateRandomComment(random_rating)
  };
  db.taxis.insertOne(driver);
}