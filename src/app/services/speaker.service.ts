import { Injectable } from '@angular/core';
import { Speaker } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private speakers: Speaker[] = [
    {
      id: 1,
      username: '@hoefosho',
      location: 'Philadelphia, PA',
      role: 'Seeker',
      companyId: 1,
      photoUrl: 'https://i.redd.it/q50qtrquewu81.jpg',
      twitter: "https://twitter.com/",
      linkedin: "https://www.linkedin.com/",
      biography: `Short Biography for user.


Max started Ionic to make app development easier for millions of developers around the world. Over the past ten years, Ionic has grown from a purely open source developer project into a fully-featured enterprise platform powering thousands of the biggest companies on earth.`
    },
    { id: 5,
      username: '@Stancicumming',
      location: 'Fort Wayne, IN',
      role: 'Seeker',
      companyId: 5,
      photoUrl: 'https://i.redd.it/2zs3xxvcsvu81.jpg',
      linkedin: "https://www.linkedin.com/in/stanci-soderstrom-77725811a/",
      biography: `Stanci Soderstrom is the manager of learning technology strategy at T-Mobile.

For more than 20 years, Stanci has managed high-profile communication programs, as well as learning technology and strategy across multiple organizations. At T-Mobile, she cares about the employee experience and fostering collaborative relationships between teams to grow opportunity and learning.`
    },
    {
      id: 11,
      username: '@JedidiaJohnson',
      location: 'Sexington, VA',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/5i0amsn72wu81.jpg',
      twitter: "https://twitter.com/jedihacks",
      linkedin: "https://www.linkedin.com/in/jedidiahweller/",
      biography: `OnlyJohns Content Creator.

He speaks and mentors at startup events across the world, including the Thailand Startup Summit, San Francisco’s Developer Week, Austin’s SXSW. Jedi also organizes Startup Junto, Ionic, and Angular meetups in Philadelphia. When not working, Jedi can be found playing strategy games, hiking, and performing Jedi mind-tricks to masses.`
    },
    {
      id: 12,
      username: '@PaulinaPits',
      location: 'Gallo, TX',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/q75271hojvu81.jpg',
      twitter: "https://twitter.com/paulpaultweets",
      biography: `OnlyJohns Content Creator.

Paulina has over five years of experience leading multiple app development projects for many clients. She uses a variety of tools and technologies—including Ionic and Capacitor—to deliver the best experiences for her clients and their customers.`
    },
    {
      id: 15,
      username: '@Ferna',
      location: 'LittleDick, PA',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/thew9gjk9vu81.png',
      twitter: "https://twitter.com/fdom92",
      biography: `OnlyJohns Content Creator.

Based in Madrid, Spain, Fernando studied computer engineering and taught himself Ionic and Angular frameworks. He is interested in everything related to the web, but mostly web components and Progressive Web Apps.`
    },
    {
      id: 16,
      username: '@María',
      location: 'Toronto, CA',
      role: 'Seeker',
      companyId: 9,
      photoUrl: 'https://i.redd.it/6bmnmp9uuru81.jpg',
      twitter: "https://twitter.com/marimendez88",
      linkedin: "https://www.linkedin.com/in/marimendez88/",
      biography: `OnlyJohns Content Creator.

Maria is from Costa Rica and loves to learn, teach, and code in the middle of amazing beaches, living the Pura Vida life!`
    },
    {
      id: 2,
      username: '@Tequila',
      location: 'Ingoglia, WA',
      role: 'Seeker',
      companyId: 2,
      photoUrl: 'https://i.redd.it/5z6vr60olvu81.jpg',
      linkedin: "https://www.linkedin.com/in/thomasingoglia/",
      biography: `OnlyJohns Content Creator.

Thomas has a passion for software development and over 20 years industry experience. At US Foods, he leads a team of engineers who develops B2B mobile applications for customers to order, record, and manage their inventory from any device.`
    },
    {
      id: 3,
      username: '@Tori',
      location: 'Jankowski, FL',
      role: 'Seeker',
      companyId: 3,
      photoUrl: 'https://i.redd.it/eixaf4no9wu81.jpg',
      twitter: "https://twitter.com/ux_wob",
      linkedin: "https://www.linkedin.com/in/thorstenjankowski/",
      biography: `OnlyJohns Content Creator.

For the past 17 years at Volkswagen, Thorsten has grown from IT system analyst to user experience lead. He currently leads UX design management including definition and delivery of assets, methods, and tools for a creative and efficient design organization.`
    },
    {
      id: 27,
      username: 'Jan',
      location: 'Vornkahl',
      role: 'Software Engineer',
      companyId: 3,
      photoUrl: 'https://i.redd.it/kw410x1ufvu81.jpg',
      biography: `Jan Vornkahl is a software engineer at the Volkswagen Group located in Germany, Wolfsburg.
      
From the beginning of his career, Jan has been very interested in frontend development. He also has an interest in micro frontends and all other customer-facing application topics. Since 2020, he has been part of the GroupUI development team. Developing sustainable products is his passion.`
    },
    {
      id: 28,
      username: 'Johannes',
      location: 'Bosch',
      role: 'Software Engineer',
      companyId: 3,
      photoUrl: 'https://i.redd.it/ds48uq998vu81.jpg',
      biography: `Johannes Bosch is a software engineer at the Volkswagen Group located in Germany, Wolfsburg.
      
His focus is on building solution with web technologies. Since Summer 2020, he has been part of the GroupUI development team. There, they are building Web Components with StencilJs.`
    },
    {
      id: 24,
      username: 'Matthias',
      location: 'Fritsch',
      role: 'Design Lead',
      companyId: 13,
      photoUrl: 'https://i.redd.it/r6qrtnrydwu81.jpg',
      linkedin: "https://www.linkedin.com/in/fritschmatthias/",
      biography: `Matthias is currently leading the design system at MAN Truck & Bus SE.

For over 15 years he has been dealing with the visualization and emotionalization of innovative media—what started as a hobby in the past is now a passion in his job. Matthias aims to standardize reusable digital artifacts on cross-technology for web, app, and InTruck.`
    },
    {
      id: 4,
      username: 'Michel',
      location: 'Tobon',
      role: 'Front-End Engineer',
      companyId: 4,
      photoUrl: 'https://i.redd.it/bmr00feetuu81.jpg',
      linkedin: "https://www.linkedin.com/in/michel-tobon/",
      github: "https://github.com/micheltobon",
      biography: `Michel Tobon is a front-end engineer at Amazon.

After working as a back-end developer in his home country of Mexico, Michel moved to Seattle and began working at Amazon, primarily with React and SASS, sometimes with Java and Node. Now almost five years into his tenure, he works with web components built with Ionic’s Stencil JS and micro front-end architecture.`
    },
    {
      id: 6,
      username: 'Eric',
      location: 'Madsen',
      role: 'Learning Solutions Architect',
      companyId: 5,
      photoUrl: 'https://i.redd.it/voisyxpuvvu81.jpg',
      linkedin: "https://www.linkedin.com/in/ericmadsendesign/",
      biography: `Eric Madsen is a learning technology architect at T-Mobile.

Eric is a dedicated and passionate leader. At T-Mobile, he applies his creative and divergent thinking, design, and technical skills to help professionals communicate effectively and improve end user performance.`
    },
    {
      id: 7,
      username: 'Brandon',
      location: 'Bakke',
      role: 'Solution Architect Leader',
      companyId: 6,
      photoUrl: 'https://i.redd.it/rln3s17sovu81.jpg',
      linkedin: "https://www.linkedin.com/in/brandonbakke/",
      biography: `Brandon Bakke is a solution architect at Doosan Bobcat.

At Bobcat, Brandon works on the architectural design and technology selection for Machine IQ which serves as the company’s first digital, subscription-based product leveraging IoT technologies.`
    },
    {
      id: 8,
      username: 'Daniel',
      location: 'Rodriguez',
      role: 'Mobile Developer',
      companyId: 7,
      photoUrl: 'https://i.redd.it/bgbed25lmuu81.jpg',
      linkedin: "https://www.linkedin.com/in/danielrdzm/",
      biography: `Daniel Rodriguez is the lead mobile developer at Norwex.

At Norwex, Daniel leads the production and release of an international B2C app for the Australia and New Zealand market. He also works closely with business partners, project managers, and team members to clearly define scope of work for mobile app builts.`
    },
    {
      id: 9,
      username: 'Rob',
      location: 'Gore',
      role: 'Director of Mobile Architecture',
      companyId: 7,
      photoUrl: 'https://i.redd.it/60e77op2iwu81.jpg',
      linkedin: "https://www.linkedin.com/in/robgore/",
      biography: `Rob Gore is the director of mobile applications at Norwex.

For more than half a decade, Rob has led multiple mobile development projects at Norwex, including the design, development, and international release of Norwex Shopping. He is currently leading the development of the next generation enterprise ecommerce mobile application to be deployed in over eleven countries.`
    },
    {
      id: 13,
      username: 'Robert',
      location: 'Flagg',
      role: 'Director of Engineering',
      companyId: 10,
      photoUrl: 'https://i.redd.it/m50pkjcd6wu81.jpg',
      linkedin: "https://www.linkedin.com/in/robert-flagg-ab62b819/",
      biography: `Robert Flagg is the director of engineering at Modus Create, Inc.

Robert is a passionate software developer with nearly 40 years of experience developing full stack applications. His most recent work specializes in Ionic-based mobile solutions using Angular and web components.`
    },
    {
      id: 14,
      username: 'Ralph',
      location: 'Borges',
      role: 'Product Manager',
      companyId: 11,
      photoUrl: 'https://i.redd.it/wxlp4hva9xu81.jpg',
      linkedin: "https://www.linkedin.com/in/ralph-borges-10a91335/",
      biography: `Ralph Borges is the product manager at AAA National.

For over half a decade, Ralph has provided strategic design and solutions for AAA customers using iOS and Android devices. His focus is on team and client support, and building and managing a strong working organization that enables the highest level of ethics, customer care, and project delivery.`
    },
    {
      id: 26,
      username: 'Sesha',
      location: 'Sai Ram Peteti',
      role: 'Product Manager for ACG Group',
      companyId: 11,
      photoUrl: 'https://i.redd.it/tht6dii1evu81.png',
      linkedin: "https://www.linkedin.com/in/sesha-sai-ram-peteti-a417129/",
      biography: `Sesha Sai Ram Peteti is the product manager for the Auto Club Group at AAA.

Sesha is a multi-skilled technical architect with over 20+ years of experience in the IT industry, ranging from developer to architect, which includes specializations in mobile, web, and J2EE solutions. He is a seasoned professional with strong technical and business skills that enables him to deliver high-impact solutions. Sesha has a track record of establishing credibility with customers and delivering successful projects.`
    },
    {
      id: 19,
      username: 'Dallas',
      location: 'James',
      role: 'Product Manager',
      companyId: 1,
      photoUrl: 'https://i.redd.it/h9tjjv7esvu81.jpg',
      linkedin: "https://www.linkedin.com/in/dallastjames/",
      biography: `Dallas James is Ionic's platform extensions product manager.`
    },
    {
      id: 20,
      username: 'Matt',
      location: 'Netkow',
      role: 'Head of Product Marketing',
      companyId: 1,
      photoUrl: 'https://i.redd.it/x76nafynlzt81.jpg',
      linkedin: "https://www.linkedin.com/in/matthewnetkow/",
      twitter: "https://twitter.com/dotNetkow",
      biography: `Matt leads technical product marketing at Ionic.

Matt is a full stack developer, product marketer, and hobbyist entrepreneur, specializing in .NET enterprise solutions and cross-platform web-based application development. At Ionic, he helps enterprise developers bring their web skills to mobile, desktop, and beyond.`
    },
    {
      id: 21,
      username: 'Matthew',
      location: 'Kremer',
      role: 'Director of Product Management',
      companyId: 1,
      photoUrl: 'https://i.redd.it/l76gmkli4wu81.jpg',
      linkedin: "https://www.linkedin.com/in/matthewkremer/",
      twitter: "https://twitter.com/matthewkremer",
      biography: `Matt is the director of product management at Ionic.

 While he started at Ionic as an engineer, they don't let him write code anymore. He's passionate about the future of the web and its place in web-native. Matt also enjoys helping teams build amazing apps through Ionic's products.`
    },
    {
      id: 22,
      username: 'Eric',
      location: 'Horodyski',
      role: 'Solutions Architect',
      companyId: 1,
      photoUrl: 'https://i.redd.it/qnyfdzcjovu81.jpg',
      linkedin: "https://www.linkedin.com/in/eric-horodyski-74029130/",
      biography: `Eric is a solutions architect at Ionic.

Programming is his passion. He has been developing software since middle school, writing mods for the PC games he played. Eric had his first software gig during college, building websites for a local graphic design firm. Today, he leads development teams and transforms businesses through technology.`
    },
    {
      id: 23,
      username: 'Josh',
      location: 'Thomas',
      role: 'Product Manager',
      companyId: 1,
      photoUrl: 'https://i.redd.it/4pn4myjrewu81.jpg',
      linkedin: "https://www.linkedin.com/in/eric-horodyski-74029130/",
      twitter: "https://twitter.com/jthoms1",
      biography: `Josh is a Product Manager at Ionic, working on Capacitor, Portals, and Ionic Framework. He loves empowering web developers to build awesome cross-platform apps.`
    },
    {
      id: 25,
      username: 'Liam',
      location: 'DeBeasi',
      role: 'Software Engineer',
      companyId: 1,
      photoUrl: 'https://i.redd.it/wf3fn3wk0xu81.jpg',
      linkedin: "https://www.linkedin.com/in/liamdebeasi/",
      twitter: 'https://twitter.com/LiamDeBeasi',
      biography: `Liam is a software engineer at Ionic.

Liam is a software engineer based in Boston, USA. Currently he serves as the team lead for Ionic Framework, helping developers build great app experiences with web technology.`
    },
  ];

  constructor() {}

  getSpeakers(ids?: number[]): Speaker[] {
    if (ids === undefined) { return this.speakers; }

    return this.speakers.filter(speaker => ids.includes(speaker.id));
  }

  getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find(speaker => speaker.id === id);
  }
}
