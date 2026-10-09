export default function manifest() {
  return {
    name: 'BackroomScript',
    short_name: 'BackroomScript',
    description: 'A school that trains and certifies you, then connects you to jobs with the companies that hire through us.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#fef3f8',
    theme_color: '#fef3f8',
    categories: ['education', 'business', 'jobs', 'personal development'],
    
    icons: [
      {
        src: '/assets/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/assets/logo.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/assets/logo.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon'
      }
    ],
    
    prefer_related_applications: false,
    
    lang: 'en',
    dir: 'ltr',
    
    shortcuts: [
      {
        name: 'Starter Glow',
        short_name: 'Starter',
        description: 'View Starter Glow tier',
        url: '/tiers/starter',
        icons: [{ src: '/assets/logo.png', sizes: '96x96' }]
      },
      {
        name: 'Radiant Pro',
        short_name: 'Pro',
        description: 'View Radiant Pro tier',
        url: '/tiers/pro',
        icons: [{ src: '/assets/logo.png', sizes: '96x96' }]
      },
      {
        name: 'Queen Elite',
        short_name: 'Elite',
        description: 'View Queen Elite tier',
        url: '/tiers/elite',
        icons: [{ src: '/assets/logo.png', sizes: '96x96' }]
      },
      {
        name: 'Success Stories',
        short_name: 'Stories',
        description: 'Read success stories',
        url: '/success-stories',
        icons: [{ src: '/assets/logo.png', sizes: '96x96' }]
      }
    ],
    
    screenshots: [
      {
        src: '/assets/banner.png',
        sizes: '1280x720',
        type: 'image/png',
        platform: 'wide',
        label: 'Home Screen'
      }
    ]
  }
}
