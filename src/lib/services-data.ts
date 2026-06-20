export interface ServiceReview {
  name: string;
  location: string;
  rating: 4 | 5;
  date: string;
  review: string;
  avatar: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  basePrice: number;
  minimumPrice: number;
  emergencyFee: number;
  depositAmount: number;
  depositType: "fixed" | "percentage";
  durationEstimate: string;
  imageUrl: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  reviews: ServiceReview[];
  reviewCount: number;
  avgRating: number;
}

export const SERVICES: ServiceData[] = [
  {
    name: "HVAC Service",
    slug: "hvac",
    shortDescription: "Heating, ventilation & air conditioning repair and maintenance.",
    description:
      "Our certified HVAC technicians handle everything from routine maintenance and filter replacements to full system installations and emergency repairs. We service all major brands and models, ensuring your home stays comfortable year-round.",
    basePrice: 149,
    minimumPrice: 149,
    emergencyFee: 75,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "1–3 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    metaTitle: "HVAC Repair & Installation Services | N-Nodes Home Services",
    metaDescription:
      "Professional HVAC repair, maintenance, and installation starting at $149. Certified technicians available same-day. Book online and pay a small deposit.",
    features: [
      "AC & furnace repair",
      "System installation",
      "Preventive maintenance",
      "Duct cleaning",
      "Thermostat installation",
      "Emergency service available",
    ],
    faqs: [
      {
        question: "How quickly can you respond to HVAC emergencies?",
        answer:
          "For emergency HVAC situations, we target arrival within 30 minutes where service is available.",
      },
      {
        question: "What brands do you service?",
        answer:
          "Our technicians are certified to service all major HVAC brands including Carrier, Trane, Lennox, Rheem, and more.",
      },
    ],
    reviewCount: 1847,
    avgRating: 4.9,
    reviews: [
      {
        name: "Marcus D.",
        location: "Atlanta, GA",
        rating: 5,
        date: "June 12, 2026",
        review: "AC went out on a Saturday night with temps in the 90s. Called N-Nodes around 9pm and the technician was at my door by 10:15. Turned out to be a capacitor — he had the part on his truck, fixed it in 45 minutes. Charged me exactly what they quoted. I was floored by how smooth the whole thing was.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Tamara W.",
        location: "Phoenix, AZ",
        rating: 5,
        date: "May 28, 2026",
        review: "Scheduled a tune-up for my Trane unit before summer. Tech showed up in the two-hour window they gave me, actually a little early. Did a full inspection, cleaned the coils, checked refrigerant. Took about 90 minutes. Very thorough. Will be booking for the heating season too.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Greg P.",
        location: "Houston, TX",
        rating: 4,
        date: "May 14, 2026",
        review: "Good service overall. The technician was knowledgeable and diagnosed the refrigerant leak quickly. Only reason for 4 stars is the booking confirmation email took a while to arrive — probably just a glitch. The actual work was great and the deposit system is genuinely convenient.",
        avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Renee B.",
        location: "Dallas, TX",
        rating: 5,
        date: "April 30, 2026",
        review: "I've used three different HVAC companies over the years. N-Nodes is in another league. The tech actually explained what he was doing while he worked — I learned more about my Lennox system in two hours than I have in 8 years of owning it. Plus the $49 deposit to lock in a same-day appointment is brilliant.",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Kevin O.",
        location: "Las Vegas, NV",
        rating: 4,
        date: "April 18, 2026",
        review: "Used them for a full system replacement — old unit was 14 years old. Quoted me a fair price and had the new Rheem installed in about 5 hours. The crew was clean, wore boot covers inside, and hauled everything away. Small communication hiccup at the start but they sorted it fast. Happy with the result.",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    shortDescription: "Expert plumbing repairs, installations, and drain cleaning.",
    description:
      "From leaky faucets to full pipe replacements, our licensed plumbers handle all residential plumbing needs. We arrive fully equipped to diagnose and fix issues on the first visit whenever possible.",
    basePrice: 149,
    minimumPrice: 149,
    emergencyFee: 75,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "1–4 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Professional Plumbing Services | N-Nodes Home Services",
    metaDescription:
      "Licensed plumbers for repairs, installations, and drain cleaning starting at $149. Same-day service available. Book online today.",
    features: [
      "Leak detection & repair",
      "Drain cleaning",
      "Water heater service",
      "Pipe installation",
      "Toilet & faucet repair",
      "24/7 emergency available",
    ],
    faqs: [
      {
        question: "Do you handle emergency plumbing situations?",
        answer:
          "Yes, we offer emergency plumbing service. An additional emergency fee applies for after-hours and same-day urgent calls.",
      },
      {
        question: "Are your plumbers licensed?",
        answer:
          "All of our plumbers are fully licensed, insured, and background-checked professionals.",
      },
    ],
    reviewCount: 2104,
    avgRating: 4.8,
    reviews: [
      {
        name: "Sandra M.",
        location: "Chicago, IL",
        rating: 5,
        date: "June 8, 2026",
        review: "Pipe burst under my kitchen sink on a Sunday morning, water everywhere. I booked on the site in about 3 minutes, paid the deposit, and had a plumber here within the hour. He replaced the section, checked the whole line under the sink while he was at it. Unbelievably fast for a Sunday. Worth every penny.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Darnell H.",
        location: "Detroit, MI",
        rating: 4,
        date: "May 22, 2026",
        review: "Called for a slow drain in the master bath. Tech came out same day, ran the snake and cleared a pretty nasty clog. Whole thing took maybe 40 minutes. Pricing was fair — I was expecting it to be higher honestly. Docking one star because they didn't call ahead when they were 10 minutes out like the email said they would.",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Carolyn T.",
        location: "Seattle, WA",
        rating: 5,
        date: "May 9, 2026",
        review: "Water heater started leaking at the base — I knew it was done. Called N-Nodes, they had someone out the next morning. He confirmed it needed replacing, gave me three options at different price points, no pressure at all. We went with the mid-range 50-gallon Bradford White. In and out in about 3 hours. Very professional.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Rob F.",
        location: "Denver, CO",
        rating: 5,
        date: "April 27, 2026",
        review: "Had a toilet rocking on the floor, turned out the wax ring had failed and there was some subfloor damage. The plumber was upfront about everything, showed me pictures before he did any work. Fixed the subfloor, set the new wax ring, reset the toilet. No upselling, no surprises on the bill. Exactly what you want.",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Yolanda G.",
        location: "Miami, FL",
        rating: 4,
        date: "April 11, 2026",
        review: "Booked a water heater flush and general plumbing check. Tech was thorough — found a small drip at a shutoff valve I had no idea about and fixed it on the spot. The visit was a bit longer than the estimated time but he didn't rush. Good quality work. The online booking with deposit is so much better than calling around.",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Electrical",
    slug: "electrical",
    shortDescription: "Licensed electricians for all residential electrical needs.",
    description:
      "Our licensed electricians handle panel upgrades, outlet installations, lighting, ceiling fans, and troubleshooting. Safety is our priority — every job meets local code requirements.",
    basePrice: 149,
    minimumPrice: 149,
    emergencyFee: 75,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "1–4 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Licensed Electrical Services | N-Nodes Home Services",
    metaDescription:
      "Licensed electricians for panel upgrades, outlets, lighting & more starting at $149. Code-compliant work guaranteed. Book online today.",
    features: [
      "Panel upgrades",
      "Outlet & switch installation",
      "Lighting installation",
      "Ceiling fan installation",
      "EV charger installation",
      "Safety inspections",
    ],
    faqs: [
      {
        question: "Are your electricians licensed?",
        answer:
          "Yes, all electrical work is performed by fully licensed and insured electricians who ensure code compliance.",
      },
      {
        question: "Can you install EV charging stations?",
        answer:
          "Yes, we install Level 2 EV charging stations and handle all necessary panel upgrades.",
      },
    ],
    reviewCount: 1563,
    avgRating: 4.9,
    reviews: [
      {
        name: "James R.",
        location: "Miami, FL",
        rating: 5,
        date: "June 3, 2026",
        review: "200-amp panel upgrade — the electrician pulled the permit, did all the work, and scheduled the inspection. Passed first time. He was at my house for about 6 hours and left the place cleaner than he found it. I got quotes from two other companies beforehand and N-Nodes was both cheaper and faster. Really impressed.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Priya N.",
        location: "San Jose, CA",
        rating: 5,
        date: "May 19, 2026",
        review: "Had a Level 2 EV charger installed for my new car. The tech ran a dedicated 60-amp circuit from the panel to the garage. Clean install, all wiring was properly routed and stapled — not a hack job like I've seen on YouTube videos. Took about 4 hours. Car charges overnight perfectly now.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Bill C.",
        location: "Charlotte, NC",
        rating: 4,
        date: "May 5, 2026",
        review: "Flickering lights in two rooms turned out to be a loose neutral in the panel — something I definitely didn't want to mess with myself. Electrician found it, fixed it, and also replaced three outlets I mentioned while he was there. I would've liked a slightly more detailed invoice but the work was solid.",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Alicia F.",
        location: "Portland, OR",
        rating: 5,
        date: "April 22, 2026",
        review: "Hired them to install recessed lighting in my living room — 8 cans plus a dimmer. The electrician was professional, walked me through the placement options before cutting anything. Finished in about 3 hours. The room looks completely different. Already have them booked for the dining room.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Tom B.",
        location: "Columbus, OH",
        rating: 4,
        date: "April 8, 2026",
        review: "Outdoor GFCI outlets installed for the back patio. Electrician was friendly and knowledgeable. Took a bit longer than expected because of how the walls were framed, which I understand. He communicated throughout and didn't charge extra for the extra time. That's integrity. Would use again.",
        avatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Roofing",
    slug: "roofing",
    shortDescription: "Roof inspections, repairs, and installations by certified roofers.",
    description:
      "Protect your home with our certified roofing services. From detailed inspection reports and minor repairs to full replacements, our team handles all roofing materials including shingle, metal, tile, and flat roofs.",
    basePrice: 199,
    minimumPrice: 199,
    emergencyFee: 100,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "2–8 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Roofing Inspection & Repair Services | N-Nodes Home Services",
    metaDescription:
      "Certified roofing inspections, repairs, and replacements starting at $199. All roofing materials covered. Book your inspection today.",
    features: [
      "Roof inspections",
      "Shingle replacement",
      "Leak repair",
      "Flat roof services",
      "Storm damage repair",
      "Gutter installation",
    ],
    faqs: [
      {
        question: "Do you work with insurance companies?",
        answer:
          "Yes, we provide detailed inspection reports and can work directly with your insurance company for storm damage claims.",
      },
      {
        question: "How long does a roof replacement take?",
        answer:
          "Most residential roof replacements are completed in 1–2 days depending on the size and complexity.",
      },
    ],
    reviewCount: 934,
    avgRating: 4.8,
    reviews: [
      {
        name: "Howard S.",
        location: "Nashville, TN",
        rating: 5,
        date: "June 5, 2026",
        review: "Had hail damage after a bad storm. The roofer from N-Nodes came out, documented everything with photos, and walked me through the damage section by section. His report was detailed enough that my insurance adjuster approved the claim without any pushback. Replacement was done in one long day. Clean crew, no nails in the driveway.",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Denise K.",
        location: "Indianapolis, IN",
        rating: 5,
        date: "May 17, 2026",
        review: "Bought a house that had a questionable roof. Booked an inspection before closing — best $199 I've ever spent. The inspector found two areas of soft decking and improper flashing around the chimney that the home inspector completely missed. Used the report to negotiate $6k off the sale price. Insanely valuable.",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Craig M.",
        location: "Memphis, TN",
        rating: 4,
        date: "April 29, 2026",
        review: "Got a repair on some curling shingles and a valley flashing issue. The crew showed up on time, got to work immediately. Took about 2 hours for the repair. My only gripe is they left some old nails on the side yard — I found them mowing. But the repair itself looks solid and we've had heavy rain since with no leaks.",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Lisa V.",
        location: "Kansas City, MO",
        rating: 5,
        date: "April 14, 2026",
        review: "Full roof replacement on a 2,400 sq ft house. The project manager came out first to measure and explain options. We went with architectural shingles in a dark charcoal. Crew of 6 showed up at 7am, done by 4pm, and cleaned everything up including running a magnet through the yard. Beautiful job.",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Paul A.",
        location: "Louisville, KY",
        rating: 4,
        date: "March 30, 2026",
        review: "Had a persistent leak around the skylight. Previous contractor patched it twice and it kept coming back. N-Nodes roofer identified the real issue — the flashing was improperly installed originally. Fixed it properly, sealed everything. Three good rainstorms since, zero leaks. Should've called them first.",
        avatar: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Water Damage Restoration",
    slug: "water-damage-restoration",
    shortDescription: "24/7 emergency water damage restoration and mold remediation.",
    description:
      "Water damage requires immediate attention. Our IICRC-certified restoration technicians respond quickly to extract water, dry affected areas, and restore your property to pre-loss condition. We handle insurance documentation.",
    basePrice: 299,
    minimumPrice: 299,
    emergencyFee: 0,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "3–7 days",
    imageUrl:
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Water Damage Restoration Services | N-Nodes Home Services",
    metaDescription:
      "24/7 emergency water damage restoration starting at $299. IICRC-certified technicians. Fast response, insurance documentation. Book now.",
    features: [
      "24/7 emergency response",
      "Water extraction",
      "Structural drying",
      "Mold remediation",
      "Insurance documentation",
      "Content restoration",
    ],
    faqs: [
      {
        question: "How fast do you respond to water damage emergencies?",
        answer:
          "We operate 24/7 and target response within 30 minutes for active water damage emergencies.",
      },
      {
        question: "Do you work with insurance?",
        answer:
          "Yes, we provide full documentation and can coordinate directly with your insurance adjuster.",
      },
    ],
    reviewCount: 712,
    avgRating: 4.9,
    reviews: [
      {
        name: "Angela R.",
        location: "New Orleans, LA",
        rating: 5,
        date: "June 1, 2026",
        review: "Washing machine supply line blew while we were at work. Came home to 2 inches of water in the laundry room and it had crept into the hallway. Called N-Nodes, crew was there in about 35 minutes with extractors and dehumidifiers. They saved my hardwood floors. The project manager handled everything with my insurance — I barely had to make a single call.",
        avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Frank J.",
        location: "Houston, TX",
        rating: 5,
        date: "May 12, 2026",
        review: "Basement flooded after heavy rain — sump pump failed. N-Nodes had an emergency crew out within 45 minutes. They extracted probably 800 gallons of water, set up drying equipment, and monitored moisture levels for 5 days. Daily check-ins. Everything dried to acceptable levels. Professional operation from start to finish.",
        avatar: "https://images.unsplash.com/photo-1553267751-1c148a7280a1?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Miriam C.",
        location: "Orlando, FL",
        rating: 4,
        date: "April 25, 2026",
        review: "Slow leak inside the wall from a pinhole in a copper pipe. By the time we noticed, there was mold starting on the drywall. N-Nodes handled both the water damage drying and coordinated the mold remediation. Good work all around. The whole process took about 8 days which felt long but the tech explained why it had to dry fully before closing the wall. I get it.",
        avatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Derek W.",
        location: "San Antonio, TX",
        rating: 5,
        date: "April 10, 2026",
        review: "Roof leak during a storm soaked my master bedroom ceiling and the closet below. Crew arrived quickly, got tarps on the roof the same night, then started the drying process the next morning. IICRC certified guys who clearly knew what they were doing. Insurance paid out almost the full claim. Very grateful.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Stephanie H.",
        location: "Charlotte, NC",
        rating: 5,
        date: "March 22, 2026",
        review: "Had a sewage backup — the worst situation imaginable. N-Nodes treated it with complete professionalism. Full containment, cleanup, deodorizing, drying. No trace of what happened. The technician was calm, explained every step, and didn't make me feel embarrassed about the situation. Above and beyond.",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Garage Door Repair",
    slug: "garage-door-repair",
    shortDescription: "Same-day garage door repair, spring replacement, and opener installation.",
    description:
      "A broken garage door is both inconvenient and a security risk. Our technicians repair and replace springs, cables, panels, and openers. Most repairs are completed same-day with parts on hand.",
    basePrice: 149,
    minimumPrice: 149,
    emergencyFee: 50,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "1–3 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Garage Door Repair Services | N-Nodes Home Services",
    metaDescription:
      "Same-day garage door repair, spring replacement & opener installation starting at $149. Most repairs completed in one visit. Book online.",
    features: [
      "Spring replacement",
      "Cable repair",
      "Opener installation",
      "Panel replacement",
      "Track alignment",
      "Smart opener upgrade",
    ],
    faqs: [
      {
        question: "Can you fix my garage door same-day?",
        answer:
          "Yes, most garage door repairs including spring and cable replacement are done same-day with parts we carry on our trucks.",
      },
      {
        question: "Do you install smart garage door openers?",
        answer:
          "Yes, we install all major smart opener brands including Chamberlain, LiftMaster, and Genie.",
      },
    ],
    reviewCount: 1289,
    avgRating: 4.9,
    reviews: [
      {
        name: "Steve T.",
        location: "Phoenix, AZ",
        rating: 5,
        date: "June 10, 2026",
        review: "Spring snapped and my car was trapped in the garage at 7am. Booked online, tech arrived by 9am, replaced both springs (he recommended doing both since the other was original and old), and had everything working by 9:45. He also lubed and adjusted the whole door while he was there. $49 deposit, quick, no fuss.",
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Janet M.",
        location: "Sacramento, CA",
        rating: 4,
        date: "May 25, 2026",
        review: "Door was making a terrible grinding noise and moving slowly. Turned out the rollers were shot and the track had a bend in it. Tech fixed both same visit, adjusted the spring tension, and the door moves like new. Takes about 4 seconds to open now vs. the 12 it was taking before. Good work. Took a bit longer than the hour they estimated but that's minor.",
        avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Brian L.",
        location: "Austin, TX",
        rating: 5,
        date: "May 8, 2026",
        review: "Upgraded from a basic opener to a LiftMaster smart opener. The technician walked me through the app setup, connected it to my HomeKit, and even showed me how to set access schedules for the cleaning service. Whole install was maybe 2 hours. Excellent tech who clearly knew his stuff.",
        avatar: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Dana S.",
        location: "Tucson, AZ",
        rating: 5,
        date: "April 20, 2026",
        review: "Cable snapped — door was stuck half open. Called at 2pm, someone was there by 4pm. He replaced the cable, checked the other side, and adjusted the bottom seal while he had the door down. Straightforward, efficient. The whole service call from arrival to leaving was under an hour.",
        avatar: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Norm P.",
        location: "Albuquerque, NM",
        rating: 4,
        date: "April 5, 2026",
        review: "Had a panel dented by a minor fender bender. Tech came out, assessed it, and was honest that the panel was cheaper to replace than repair at that damage level. Ordered the section, came back two days later and installed it. Matches the existing panels well. Straightforward and transparent — appreciated the honesty.",
        avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Appliance Repair",
    slug: "appliance-repair",
    shortDescription: "Factory-certified appliance repair for all major brands and models.",
    description:
      "Our factory-certified technicians repair washers, dryers, refrigerators, dishwashers, ovens, and more. We carry common parts on our trucks and can often complete repairs in a single visit.",
    basePrice: 129,
    minimumPrice: 129,
    emergencyFee: 50,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "1–2 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Appliance Repair Services | N-Nodes Home Services",
    metaDescription:
      "Factory-certified appliance repair for washers, dryers, refrigerators & more starting at $129. Same-day service available. Book online.",
    features: [
      "Washer & dryer repair",
      "Refrigerator repair",
      "Dishwasher repair",
      "Oven & range repair",
      "Microwave repair",
      "All major brands",
    ],
    faqs: [
      {
        question: "Which appliance brands do you service?",
        answer:
          "We service all major brands including Samsung, LG, Whirlpool, GE, Maytag, Bosch, and more.",
      },
      {
        question: "Is it worth repairing an old appliance?",
        answer:
          "Our technicians will give you an honest assessment. If repair cost exceeds 50% of replacement value, we'll tell you.",
      },
    ],
    reviewCount: 1678,
    avgRating: 4.8,
    reviews: [
      {
        name: "Karen J.",
        location: "Baltimore, MD",
        rating: 5,
        date: "June 7, 2026",
        review: "Samsung front-loader was shaking violently on the spin cycle. Tech diagnosed worn drum bearings in about 10 minutes. Had the bearings on his truck, replaced them same visit. Runs completely smooth now and quiet. He also leveled the machine properly which I guess it never was. Two-year-old machine saved.",
        avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Mike W.",
        location: "Pittsburgh, PA",
        rating: 4,
        date: "May 30, 2026",
        review: "LG refrigerator stopped cooling — freezer was fine but fridge section was at 55 degrees. Tech found a faulty evaporator fan motor, had to order the part. Came back the next day and fixed it in 45 minutes. Fridge works perfectly now. Only 4 stars because I wish the part had been on the truck but that's a minor thing.",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Gina P.",
        location: "Cleveland, OH",
        rating: 5,
        date: "May 16, 2026",
        review: "Bosch dishwasher wasn't draining — nasty standing water every cycle. Technician found a clogged drain pump in minutes, cleared it, ran a test cycle right there. Also noticed the door gasket was starting to crack and replaced it while he was there since he had a Bosch-compatible one on the truck. $149 well spent.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Tony R.",
        location: "Milwaukee, WI",
        rating: 5,
        date: "April 28, 2026",
        review: "Dryer was running but not heating. Tech found the thermal fuse had blown — classic failure on Whirlpool. Replaced it, checked the venting (which was partially blocked, something I didn't know), and cleaned the whole exhaust path while he was at it. He said the blocked vent was probably why the fuse blew in the first place. Good catch.",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Donna C.",
        location: "St. Louis, MO",
        rating: 4,
        date: "April 12, 2026",
        review: "GE range — two burners not igniting. Tech replaced the igniter switches on both in about 30 minutes. Quick and clean. I thought it might need new igniters themselves so I appreciated that he correctly diagnosed it as the switches instead of selling me more expensive parts. Honest guy. Would call again.",
        avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Handyman",
    slug: "handyman",
    shortDescription: "Trusted handyman for repairs, installations, and home improvements.",
    description:
      "Our experienced handymen handle a wide variety of home repairs and improvements — from furniture assembly and TV mounting to drywall repair and door installation. Book by the hour or project.",
    basePrice: 99,
    minimumPrice: 99,
    emergencyFee: 50,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "1–4 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Handyman Services | N-Nodes Home Services",
    metaDescription:
      "Professional handyman services starting at $99/hr. Furniture assembly, TV mounting, drywall, and more. Book a trusted handyman today.",
    features: [
      "Furniture assembly",
      "TV & picture mounting",
      "Drywall repair",
      "Door & window repair",
      "Caulking & weatherizing",
      "General repairs",
    ],
    faqs: [
      {
        question: "Do you charge by the hour or by the job?",
        answer:
          "We offer both hourly rates starting at $99/hr and flat-rate pricing for specific jobs. You'll see the price before booking.",
      },
      {
        question: "Can I book a handyman for multiple tasks?",
        answer:
          "Absolutely. Many customers book our handyman for a list of tasks in a single visit, which is the most cost-effective approach.",
      },
    ],
    reviewCount: 2341,
    avgRating: 4.7,
    reviews: [
      {
        name: "Rachel O.",
        location: "Austin, TX",
        rating: 5,
        date: "June 9, 2026",
        review: "Booked a 3-hour handyman visit and came prepared with a list: two ceiling fans, a TV mount, a towel bar, and some weatherstripping on the back door. He got through everything with 20 minutes to spare and asked if I had anything else. Tightened a few cabinet hinges I'd forgotten to add. This is exactly the service I needed.",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Chris B.",
        location: "Nashville, TN",
        rating: 4,
        date: "May 27, 2026",
        review: "Had some drywall repair needed after removing an old wall cabinet — two holes about the size of a dinner plate. The handyman patched, skimmed, and sanded both. He recommended I wait 24 hours before painting, which was correct. The patches are invisible after painting. One star off because he arrived about 20 minutes late without a heads-up.",
        avatar: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Nancy F.",
        location: "San Diego, CA",
        rating: 5,
        date: "May 13, 2026",
        review: "Just moved in and had a nightmare list — shower head, curtain rods, toilet paper holders, a stuck sliding door, and an IKEA bed frame. He showed up with every tool imaginable. The sliding door repair alone was worth the whole visit — something to do with the track being misaligned. Everything done in 2.5 hours.",
        avatar: "https://images.unsplash.com/photo-1525879000488-bff3b1c5d3b9?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Joel S.",
        location: "Tampa, FL",
        rating: 5,
        date: "April 24, 2026",
        review: "65-inch TV mounted above the fireplace, cables hidden in the wall. He measured, found studs, got the right mount angle. Cables are completely hidden — went into the wall above the TV and came out at the outlet below. Looks like a showroom install. Couldn't have done it better myself, honestly.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Mei L.",
        location: "Seattle, WA",
        rating: 4,
        date: "April 9, 2026",
        review: "Needed some caulking around the tub and shower redone — previous caulk was moldy. He stripped everything out, cleaned it well, and applied fresh silicone. Also did the kitchen sink while he was there since I mentioned it. Looks great. The $99 minimum was reasonable for the work done. Will use again for my ongoing to-do list.",
        avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "House Cleaning",
    slug: "cleaning",
    shortDescription: "Professional residential cleaning services you can trust.",
    description:
      "Our background-checked cleaning professionals deliver thorough, consistent cleaning services. Choose from standard cleaning, deep cleaning, or move-in/move-out cleaning. All supplies and equipment included.",
    basePrice: 149,
    minimumPrice: 149,
    emergencyFee: 50,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "2–5 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
    metaTitle: "House Cleaning Services | N-Nodes Home Services",
    metaDescription:
      "Professional house cleaning starting at $149. Standard, deep clean, or move-in/out cleaning. Background-checked cleaners. Book online.",
    features: [
      "Standard cleaning",
      "Deep cleaning",
      "Move-in/move-out",
      "Kitchen & bathrooms",
      "Supplies included",
      "Recurring service discounts",
    ],
    faqs: [
      {
        question: "Do your cleaners bring their own supplies?",
        answer:
          "Yes, our cleaning professionals bring all necessary supplies and equipment at no additional charge.",
      },
      {
        question: "Are the cleaners background-checked?",
        answer:
          "All cleaning professionals undergo thorough background checks and are fully insured.",
      },
    ],
    reviewCount: 3102,
    avgRating: 4.8,
    reviews: [
      {
        name: "Amanda K.",
        location: "New York, NY",
        rating: 5,
        date: "June 11, 2026",
        review: "Deep clean of my 2-bedroom apartment before a dinner party. The two-person team arrived on time, worked fast, and got into corners I genuinely hadn't thought about — under the couch, on top of the fridge, inside the microwave. Apartment smelled amazing. Guests asked if I'd moved into a new place.",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Maria G.",
        location: "Los Angeles, CA",
        rating: 4,
        date: "May 24, 2026",
        review: "Move-out clean on a 3-bed house. The team did a thorough job — ovens, inside cabinets, baseboards, the works. My landlord said it was the cleanest move-out she'd seen in years and returned my full deposit. One point off only because they ran about 40 minutes over the estimated time, though I understand for a move-out that's a lot of work.",
        avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Tiffany B.",
        location: "Chicago, IL",
        rating: 5,
        date: "May 11, 2026",
        review: "Set up a recurring bi-weekly clean. Three visits in and it's consistently excellent. Same cleaner each time which I appreciate — she knows my place, knows what products I prefer, and always does the extra thing I forget to ask like wiping down the light switches. Worth every dollar.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Patrick H.",
        location: "Boston, MA",
        rating: 5,
        date: "April 26, 2026",
        review: "Post-renovation clean after some kitchen remodeling — drywall dust everywhere, construction residue on every surface. N-Nodes sent a specialized crew. They used the right products for each surface, got the grout lines on the new tile backsplash spotless, and even cleaned the inside of the new cabinets before we stocked them.",
        avatar: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Cynthia R.",
        location: "Washington, DC",
        rating: 4,
        date: "April 13, 2026",
        review: "Standard clean for a 3-bedroom house. Cleaner was polite, efficient, and thorough in all the main areas. I noticed she skipped the guest room which I had mentioned was just storage — I think there was a miscommunication on that. When I mentioned it she went back and did it without any issue. Good attitude, good work overall.",
        avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    name: "Landscaping",
    slug: "landscaping",
    shortDescription: "Professional lawn care, landscaping design, and yard maintenance.",
    description:
      "Transform your outdoor space with our professional landscaping services. From weekly lawn maintenance and seasonal cleanups to full landscape design and installation, our team keeps your property looking its best.",
    basePrice: 199,
    minimumPrice: 199,
    emergencyFee: 50,
    depositAmount: 49,
    depositType: "fixed",
    durationEstimate: "2–6 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80",
    metaTitle: "Landscaping & Lawn Care Services | N-Nodes Home Services",
    metaDescription:
      "Professional landscaping, lawn maintenance, and yard cleanup starting at $199. Fully equipped crews. Book your landscaping service today.",
    features: [
      "Lawn mowing & edging",
      "Mulching & bed care",
      "Seasonal cleanup",
      "Tree & shrub trimming",
      "Landscape design",
      "Irrigation services",
    ],
    faqs: [
      {
        question: "Do you offer recurring lawn maintenance?",
        answer:
          "Yes, we offer weekly, bi-weekly, and monthly lawn maintenance plans at discounted rates.",
      },
      {
        question: "Can you handle both lawn care and landscaping design?",
        answer:
          "Yes, our team handles everything from routine mowing to full landscape design and installation projects.",
      },
    ],
    reviewCount: 987,
    avgRating: 4.8,
    reviews: [
      {
        name: "Robert N.",
        location: "Austin, TX",
        rating: 5,
        date: "June 4, 2026",
        review: "Seasonal cleanup plus a complete mulch refresh on 8 beds. Crew of 4 showed up with a trailer full of equipment. In 4 hours they'd cleaned out all the dead material, edged every bed crisply, and laid 3 inches of fresh hardwood mulch. The yard looked like a magazine photo. Neighbors have asked me three times who I used.",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Paula M.",
        location: "Raleigh, NC",
        rating: 5,
        date: "May 23, 2026",
        review: "Signed up for bi-weekly mowing. Four visits in and I'm very happy. They mow in a different direction each time to avoid rut patterns, blow all clippings off the driveway and sidewalk, and edge the borders cleanly. Consistent quality every time. I set it and forget it — they show up whether I'm home or not.",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "George C.",
        location: "Orlando, FL",
        rating: 4,
        date: "May 7, 2026",
        review: "Had them trim three large Crape Myrtles and two Podocarpus hedges. Good work and clean cuts on the hedges. The Crape Myrtles were done properly — no topping, which is rare and appreciated. My only note is they could have been slightly more aggressive on the hedge height which I specified in the notes. Minor though, good job overall.",
        avatar: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Brenda T.",
        location: "Dallas, TX",
        rating: 5,
        date: "April 21, 2026",
        review: "Complete front yard redesign — tore out the old St. Augustine and replaced it with a drought-tolerant landscape. The designer came out first, showed me three options with different plants and cost levels. We went with the middle option. The install crew was back within a week and knocked it out in a day. Zero water bills change, beautiful yard.",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&auto=format&fit=crop&q=80",
      },
      {
        name: "Isaac W.",
        location: "Phoenix, AZ",
        rating: 4,
        date: "April 7, 2026",
        review: "Desert landscape cleanup — removed dead cacti, raked the gravel, trimmed the mesquite and palo verde trees. Team was efficient and hauled everything away. I've had landscapers leave debris before so this was appreciated. Small nit: one of the palo verde branches was cut at a slightly awkward angle. Overall solid work.",
        avatar: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=80&h=80&auto=format&fit=crop&q=80",
      },
    ],
  },
];

export const US_STATES = [
  { name: "Alabama", abbr: "AL" },
  { name: "Alaska", abbr: "AK" },
  { name: "Arizona", abbr: "AZ" },
  { name: "Arkansas", abbr: "AR" },
  { name: "California", abbr: "CA" },
  { name: "Colorado", abbr: "CO" },
  { name: "Connecticut", abbr: "CT" },
  { name: "Delaware", abbr: "DE" },
  { name: "Florida", abbr: "FL" },
  { name: "Georgia", abbr: "GA" },
  { name: "Hawaii", abbr: "HI" },
  { name: "Idaho", abbr: "ID" },
  { name: "Illinois", abbr: "IL" },
  { name: "Indiana", abbr: "IN" },
  { name: "Iowa", abbr: "IA" },
  { name: "Kansas", abbr: "KS" },
  { name: "Kentucky", abbr: "KY" },
  { name: "Louisiana", abbr: "LA" },
  { name: "Maine", abbr: "ME" },
  { name: "Maryland", abbr: "MD" },
  { name: "Massachusetts", abbr: "MA" },
  { name: "Michigan", abbr: "MI" },
  { name: "Minnesota", abbr: "MN" },
  { name: "Mississippi", abbr: "MS" },
  { name: "Missouri", abbr: "MO" },
  { name: "Montana", abbr: "MT" },
  { name: "Nebraska", abbr: "NE" },
  { name: "Nevada", abbr: "NV" },
  { name: "New Hampshire", abbr: "NH" },
  { name: "New Jersey", abbr: "NJ" },
  { name: "New Mexico", abbr: "NM" },
  { name: "New York", abbr: "NY" },
  { name: "North Carolina", abbr: "NC" },
  { name: "North Dakota", abbr: "ND" },
  { name: "Ohio", abbr: "OH" },
  { name: "Oklahoma", abbr: "OK" },
  { name: "Oregon", abbr: "OR" },
  { name: "Pennsylvania", abbr: "PA" },
  { name: "Rhode Island", abbr: "RI" },
  { name: "South Carolina", abbr: "SC" },
  { name: "South Dakota", abbr: "SD" },
  { name: "Tennessee", abbr: "TN" },
  { name: "Texas", abbr: "TX" },
  { name: "Utah", abbr: "UT" },
  { name: "Vermont", abbr: "VT" },
  { name: "Virginia", abbr: "VA" },
  { name: "Washington", abbr: "WA" },
  { name: "West Virginia", abbr: "WV" },
  { name: "Wisconsin", abbr: "WI" },
  { name: "Wyoming", abbr: "WY" },
];

export const TOP_CITIES = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
  "Indianapolis", "San Francisco", "Seattle", "Denver", "Nashville",
  "Oklahoma City", "El Paso", "Washington", "Las Vegas", "Louisville",
  "Memphis", "Portland", "Baltimore", "Milwaukee", "Albuquerque",
];
