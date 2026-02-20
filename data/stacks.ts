export type RepoEntry = {
  name: string;
  owner: string;
  repo: string;
  description: string;
};

export type Category = {
  name: string;
  repos: RepoEntry[];
};

export const categories: Category[] = [
  {
    name: 'SaaS',
    repos: [
      { name: 'Open SaaS', owner: 'wasp-lang', repo: 'open-saas', description: 'React/Node.js/Prisma stack with Stripe, OpenAI, AWS S3, admin dashboard & blog.' },
      { name: 'BoxyHQ SaaS Starter Kit', owner: 'boxyhq', repo: 'saas-starter-kit', description: 'Enterprise-ready with SSO, audit logs, and multi-tenant features.' },
      { name: 'Next.js SaaS Starter', owner: 'leerob', repo: 'next-saas-starter', description: 'Next.js with Postgres, Stripe, and shadcn/ui.' },
      { name: 'SaaSgear', owner: 'JSLancerTeam', repo: 'saasgear', description: 'Full-stack with authentication, billing, team management.' },
      { name: 'Nextacular', owner: 'nextacular', repo: 'nextacular', description: 'Next.js with workspaces and subscription management.' },
      { name: 'SaaStr', owner: 'aloysius-tim', repo: 'saas-react-starter-kit-boilerplate', description: 'React starter with authentication and billing.' },
      { name: 'SAAS-Starter-Kit', owner: 'Saas-Starter-Kit', repo: 'Saas-Kit-prisma', description: 'Prisma-based kit with user management.' },
      { name: 'SaaS Boilerplate', owner: 'async-labs', repo: 'saas', description: 'Production-ready with team collaboration.' },
      { name: 'Django SaaS Boilerplate', owner: 'PaulleDemon', repo: 'Django-SAAS-Boilerplate', description: 'Python/Django solution with subscription handling.' },
      { name: 'djangorocket', owner: 'ernestofgonzalez', repo: 'djangorocket', description: 'Django SaaS starter.' },
      { name: 'SupaNuxt SaaS', owner: 'JavascriptMick', repo: 'supanuxt-saas', description: 'Nuxt3 boilerplate with Supabase backend.' },
      { name: 'SaaS Startup Kit', owner: 'go-saas', repo: 'kit', description: 'Golang kit with modern microservices architecture.' },
      { name: 'fireact.dev', owner: 'nickmandylas', repo: 'fireact.dev', description: 'React/TypeScript with Stripe, Firebase and i18n for B2B SaaS.' },
    ],
  },
  {
    name: 'Browser Extensions',
    repos: [
      { name: 'Extro', owner: 'turbostarter', repo: 'extro', description: 'Open source browser extension starter kit.' },
      { name: 'Chrome Extension Svelte TS', owner: 'NekitCorp', repo: 'chrome-extension-svelte-typescript-boilerplate', description: 'Chrome Extension with Svelte and TypeScript.' },
    ],
  },
  {
    name: 'React & Next.js',
    repos: [
      { name: 'Next.js SaaS Starter', owner: 'leerob', repo: 'next-saas-starter', description: 'Next.js with Postgres, Stripe, and shadcn/ui.' },
      { name: 'Next.js Boilerplate', owner: 'ixartz', repo: 'Next-js-Boilerplate', description: 'Free and open source Next.js starter.' },
      { name: 'Next.js Subscription Payments', owner: 'vercel', repo: 'nextjs-subscription-payments', description: "Vercel's subscription payments starter." },
      { name: 'Next Supabase Stripe Starter', owner: 'KolbySisk', repo: 'next-supabase-stripe-starter', description: 'Next.js with Supabase and Stripe.' },
      { name: 'Nextacular', owner: 'nextacular', repo: 'nextacular', description: 'Next.js SaaS boilerplate.' },
      { name: 'SaaStr', owner: 'aloysius-tim', repo: 'saas-react-starter-kit-boilerplate', description: 'React SaaS starter kit.' },
      { name: 'Platforms Starter Kit', owner: 'vercel', repo: 'platforms', description: 'All-in-one starter kit for building multi-tenant applications.' },
    ],
  },
  {
    name: 'SvelteKit',
    repos: [
      { name: 'CMSaasStarter', owner: 'CriticalMoments', repo: 'CMSaasStarter', description: 'SvelteKit SaaS with Tailwind, Supabase, marketing page, blog, subscriptions.' },
    ],
  },
  {
    name: 'Node.js',
    repos: [
      { name: 'SaaSgear', owner: 'JSLancerTeam', repo: 'saasgear', description: 'Full stack SaaS boilerplate.' },
      { name: 'BoxyHQ SaaS Starter Kit', owner: 'boxyhq', repo: 'saas-starter-kit', description: 'Enterprise-ready SaaS starter kit.' },
      { name: 'SAAS-Starter-Kit', owner: 'Saas-Starter-Kit', repo: 'Saas-Kit-prisma', description: 'Prisma based SaaS kit.' },
      { name: 'SaaS Boilerplate', owner: 'async-labs', repo: 'saas', description: 'Production-ready SaaS boilerplate.' },
      { name: 'Graphile Starter', owner: 'graphile', repo: 'starter', description: 'Full-stack application boilerplate.' },
      { name: 'ALPack', owner: 'apptension', repo: 'ALPack', description: 'Boilerplate by Apptension.' },
      { name: 'Node Express Mongoose', owner: 'hagopj13', repo: 'node-express-mongoose-boilerplate', description: 'Production-ready REST API boilerplate.' },
      { name: 'Hackathon Starter', owner: 'sahat', repo: 'hackathon-starter', description: 'Boilerplate for Node.js web applications.' },
    ],
  },
  {
    name: 'Python',
    repos: [
      { name: "Rob's Awesome Python Template", owner: 'tedivm', repo: 'robs_awesome_python_template', description: 'A versatile and modern Python template.' },
    ],
  },
  {
    name: 'Django',
    repos: [
      { name: 'Django SaaS Boilerplate', owner: 'PaulleDemon', repo: 'Django-SAAS-Boilerplate', description: 'Open source Django SaaS boilerplate.' },
      { name: 'djangorocket', owner: 'ernestofgonzalez', repo: 'djangorocket', description: 'Django SaaS starter.' },
    ],
  },
  {
    name: 'Flask',
    repos: [
      { name: 'Flask App Builder', owner: 'dpgaspar', repo: 'Flask-AppBuilder', description: 'Simple and rapid application development framework.' },
      { name: 'Enferno Framework', owner: 'level09', repo: 'enferno', description: 'Flask based framework.' },
      { name: "tedivm's Flask", owner: 'tedivm', repo: 'tedivms-flask', description: 'Starter App with Flask and Celery.' },
    ],
  },
  {
    name: 'Ruby on Rails',
    repos: [
      { name: 'Rails Tabler Starter', owner: 'tarunvelli', repo: 'rails-tabler-starter', description: 'Ruby on Rails starter kit.' },
    ],
  },
  {
    name: '.NET Core',
    repos: [
      { name: 'Clean Architecture DDD Template', owner: 'mikolaj-jankowski', repo: 'Clean-Architecture-And-Domain-Driven-Design-Solution-Template', description: '.NET Core Clean Architecture and DDD template.' },
      { name: 'FullStackHero .NET 8', owner: 'fullstackhero', repo: 'dotnet-starter-kit', description: 'ASP.NET Core Web API & Blazor Client.' },
    ],
  },
  {
    name: 'Go',
    repos: [
      { name: 'SaaS Startup Kit', owner: 'go-saas', repo: 'kit', description: 'Golang open source SaaS kit.' },
    ],
  },
  {
    name: 'Other',
    repos: [
      { name: 'SupaNuxt SaaS', owner: 'JavascriptMick', repo: 'supanuxt-saas', description: 'Nuxt3 SaaS boilerplate.' },
    ],
  },
  {
    name: 'Android',
    repos: [
      { name: 'Android Architecture Blueprints', owner: 'googlesamples', repo: 'android-architecture', description: 'MVP architecture samples by Google.' },
    ],
  },
  {
    name: 'iOS',
    repos: [
      { name: 'Swift 5 Module Template', owner: 'fulldecent', repo: 'swift5-module-template', description: 'Boilerplate for reusable Swift 5 modules.' },
    ],
  },
  {
    name: 'Flutter',
    repos: [
      { name: 'ShipFlutter', owner: 'marcelpinto', repo: 'ship-flutter-template', description: 'Flutter template with state management and DI.' },
    ],
  },
  {
    name: 'React Native',
    repos: [
      { name: 'Ignite', owner: 'infinitered', repo: 'ignite', description: "Infinite Red's battle-tested React Native boilerplate with CLI and generators." },
      { name: 'thecodingmachine', owner: 'thecodingmachine', repo: 'react-native-boilerplate', description: 'React Native template for solid applications.' },
      { name: 'obytes', owner: 'obytes', repo: 'react-native-template-obytes', description: 'Expo, TypeScript, TailwindCSS, expo-router, react-query.' },
      { name: 'wataru-maeda', owner: 'wataru-maeda', repo: 'react-native-boilerplate', description: 'Expo + Redux + React Navigation TypeScript template.' },
    ],
  },
];
